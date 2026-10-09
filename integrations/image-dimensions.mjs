// Afegeix width i height (mida natural del fitxer) a les <img> i <source> locals que no en tenen, un cop construïda la web.
// Serveix perquè el navegador reservi l'espai de cada imatge abans de descarregar-la (menys salts de pàgina, CLS). La mida visible
// la continua decidint el CSS (base.css té img { height: auto }), així que no afecta el disseny responsive.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function pngSize(b) {
  if (b.length < 24 || b.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function jpegSize(b) {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  let i = 2;
  let orientation = 1;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    if (marker === 0xff) { i++; continue; }
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd7) || marker === 0x01) { i += 2; continue; }
    const len = b.readUInt16BE(i + 2);
    if (marker === 0xe1 && b.toString('ascii', i + 4, i + 8) === 'Exif') {
      const t = i + 10; // inici del TIFF
      const le = b.toString('ascii', t, t + 2) === 'II';
      const u16 = (o) => (le ? b.readUInt16LE(o) : b.readUInt16BE(o));
      const u32 = (o) => (le ? b.readUInt32LE(o) : b.readUInt32BE(o));
      const ifd = t + u32(t + 4);
      const n = u16(ifd);
      for (let k = 0; k < n; k++) {
        const e = ifd + 2 + k * 12;
        if (u16(e) === 0x0112) orientation = u16(e + 8);
      }
    }
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      let height = b.readUInt16BE(i + 5);
      let width = b.readUInt16BE(i + 7);
      if (orientation >= 5 && orientation <= 8) [width, height] = [height, width];
      return { width, height };
    }
    i += 2 + len;
  }
  return null;
}

function webpSize(b) {
  if (b.length < 30 || b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null;
  const kind = b.toString('ascii', 12, 16);
  if (kind === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  if (kind === 'VP8L') {
    const v = b.readUInt32LE(21);
    return { width: (v & 0x3fff) + 1, height: ((v >> 14) & 0x3fff) + 1 };
  }
  if (kind === 'VP8X') return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
  return null;
}

function svgSize(b) {
  const head = b.toString('utf8', 0, 4096);
  const tag = head.match(/<svg\b[^>]*>/i);
  if (!tag) return null;
  const num = (name) => {
    const m = tag[0].match(new RegExp(`\\s${name}\\s*=\\s*["']\\s*([0-9.]+)\\s*(px)?\\s*["']`, 'i'));
    return m ? parseFloat(m[1]) : null;
  };
  const vb = tag[0].match(/viewBox\s*=\s*["']\s*[-0-9.]+[\s,]+[-0-9.]+[\s,]+([0-9.]+)[\s,]+([0-9.]+)\s*["']/i);
  const width = num('width');
  const height = num('height');
  if (width && height) return { width, height };
  if (vb) return { width: parseFloat(vb[1]), height: parseFloat(vb[2]) };
  return null;
}

function sizeOf(file) {
  const b = fs.readFileSync(file);
  const ext = path.extname(file).toLowerCase();
  let s = null;
  if (ext === '.png') s = pngSize(b);
  else if (ext === '.jpg' || ext === '.jpeg') s = jpegSize(b);
  else if (ext === '.webp') s = webpSize(b);
  else if (ext === '.svg') s = svgSize(b);
  if (!s || !s.width || !s.height) return null;
  return { width: Math.round(s.width), height: Math.round(s.height) };
}

const TAG = /<(img|source)\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi;

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (e.name.endsWith('.html')) files.push(p);
  }
  return files;
}

export default function imageDimensions() {
  return {
    name: 'image-dimensions',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const cache = new Map();
        const lookup = (url) => {
          const clean = url.split('#')[0].split('?')[0];
          if (!clean.startsWith('/') || clean.startsWith('//')) return null;
          if (!cache.has(clean)) {
            const f = path.join(root, decodeURIComponent(clean));
            cache.set(clean, f.startsWith(root) && fs.existsSync(f) ? sizeOf(f) : null);
          }
          return cache.get(clean);
        };

        let added = 0;
        let skippedMixed = 0;
        const missing = new Set();

        // URL de la imatge d'una etiqueta <img> o <source> (null si no se'n pot treure una de sola)
        const urlOf = (tag, name) => {
          if (name.toLowerCase() === 'img') return tag.match(/\ssrc\s*=\s*"([^"]*)"/i)?.[1];
          const srcset = tag.match(/\ssrcset\s*=\s*"([^"]*)"/i)?.[1];
          if (!srcset || srcset.includes(',')) return null; // <source> només amb una sola URL
          return srcset.trim().split(/\s+/)[0];
        };
        // Mida natural de l'etiqueta, o null si ja en té o no es pot determinar
        const sizeOfTag = (tag, name) => {
          if (/\swidth\s*=/i.test(tag) || /\sheight\s*=/i.test(tag)) return null;
          const url = urlOf(tag, name);
          if (!url || url.startsWith('data:')) return null;
          const size = lookup(url);
          if (!size && url.startsWith('/')) missing.add(url);
          return size;
        };
        const withSize = (tag, size) => {
          added++;
          return tag.replace(/^<(img|source)/i, `<$1 width="${size.width}" height="${size.height}"`);
        };

        // Dins d'un <picture>, si alguna <source> té una proporció diferent de la de l'<img> (p. ex. la versió de mòbil retallada),
        // l'<img> NO rep mides: el navegador i Lighthouse les llegirien com si fossin les de la imatge que realment es mostra
        // («proporció d'imatge incorrecta»). Les <source> sí que en porten, i són les correctes per a cada versió.
        const processPicture = (block) => {
          const tags = [...block.matchAll(TAG)].map((m) => ({ tag: m[0], name: m[1] }));
          const img = tags.find((t) => t.name.toLowerCase() === 'img');
          const imgSize = img && sizeOfTag(img.tag, 'img');
          const ratio = (s) => s.width / s.height;
          const mixed =
            !!imgSize &&
            tags.some((t) => {
              if (t.name.toLowerCase() !== 'source') return false;
              const s = sizeOfTag(t.tag, 'source');
              return !!s && Math.abs(ratio(s) / ratio(imgSize) - 1) > 0.02;
            });
          if (mixed) skippedMixed++;
          return block.replace(TAG, (tag, name) => {
            if (name.toLowerCase() === 'img' && mixed) return tag;
            const size = sizeOfTag(tag, name);
            return size ? withSize(tag, size) : tag;
          });
        };

        const BLOCK = new RegExp(`<picture\\b[\\s\\S]*?<\\/picture>|${TAG.source}`, 'gi');
        for (const file of walk(root)) {
          const html = fs.readFileSync(file, 'utf8');
          const out = html.replace(BLOCK, (m, name) => {
            if (/^<picture/i.test(m)) return processPicture(m);
            const size = sizeOfTag(m, name);
            return size ? withSize(m, size) : m;
          });
          if (out !== html) fs.writeFileSync(file, out);
        }
        logger.info(`mides afegides a ${added} etiquetes d'imatge (${skippedMixed} <picture> amb versions de proporció diferent: sense mides a l'<img>)`);
        if (missing.size) logger.warn(`sense mida (no trobades o format desconegut): ${[...missing].join(', ')}`);
      },
    },
  };
}
