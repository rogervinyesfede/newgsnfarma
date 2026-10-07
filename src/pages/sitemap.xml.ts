// Sitemap de les pàgines indexables (totes, legals incloses; només la 404 és noindex), amb les versions en cada idioma (hreflang).
import { ROUTES, LANGS, SITE, isReady, type PageKey } from '../i18n/config';

const KEYS: PageKey[] = ['home', 'about', 'services', 'brands', 'international', 'contact', 'legal', 'privacy', 'cookies'];
const url = (key: PageKey, lang: (typeof LANGS)[number]) => SITE + (ROUTES[key][lang] === '/' ? '/' : ROUTES[key][lang]);

export function GET() {
  const entries = KEYS.flatMap((key) =>
    LANGS.filter((l) => isReady(key, l)).map((lang) => {
      const alts = LANGS.filter((l) => isReady(key, l))
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(key, l)}" />`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(key, 'es')}" />`)
        .join('\n');
      return `  <url>\n    <loc>${url(key, lang)}</loc>\n${alts}\n  </url>`;
    })
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
