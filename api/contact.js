// Funció de Vercel (Node): rep el formulari de Contacto i l'envia per correu a info@gsnfarma.com amb el servidor SMTP de l'empresa.
//
// Variables d'entorn (Vercel > Settings > Environment Variables; MAI al repositori):
//   SMTP_HOST, SMTP_PORT (587 per defecte), SMTP_SECURE ("true" només per al port 465), SMTP_USER, SMTP_PASS
//   MAIL_FROM (opcional: adreça remitent; per defecte SMTP_USER), MAIL_TO (opcional; per defecte info@gsnfarma.com)
//   MAIL_DRY_RUN=1 (només per provar en local: no envia res ni necessita SMTP)
//
// Protecció de dades: no es desa res ni es registren les dades personals als logs; només el codi d'error tècnic.
import nodemailer from 'nodemailer';

const MAX = { nombre: 120, telefono: 40, email: 160, interes: 40, mensaje: 5000 };
const INTERESES = { servicios: 'Servicios', marcas: 'Marcas propias' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (v, max) => (typeof v === 'string' ? v.replace(/\r/g, '').trim().slice(0, max) : '');
const oneLine = (v) => v.replace(/[\n\t]+/g, ' ');

function parseBody(req) {
  const b = req.body;
  if (b && typeof b === 'object') return b;
  if (typeof b === 'string') {
    try {
      return JSON.parse(b);
    } catch {
      return Object.fromEntries(new URLSearchParams(b));
    }
  }
  return {};
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  // Només s'accepten enviaments des del mateix web (evita formularis d'altres dominis)
  const origin = req.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).host !== req.headers.host) return res.status(403).json({ ok: false, error: 'forbidden' });
    } catch {
      return res.status(403).json({ ok: false, error: 'forbidden' });
    }
  }

  const body = parseBody(req);

  // Camp trampa (honeypot): els humans no l'omplen. Es respon "ok" perquè el bot no ho sàpiga.
  if (typeof body.website === 'string' && body.website.trim() !== '') return res.status(200).json({ ok: true });

  const data = {
    nombre: clean(body.nombre, MAX.nombre),
    telefono: clean(body.telefono, MAX.telefono),
    email: clean(body.email, MAX.email),
    interes: clean(body.interes, MAX.interes),
    mensaje: clean(body.mensaje, MAX.mensaje),
  };
  const consent = body.consentimiento === true || body.consentimiento === 'on' || body.consentimiento === 'true';

  if (!data.nombre || !EMAIL_RE.test(data.email) || !consent) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }

  const dryRun = process.env.MAIL_DRY_RUN === '1';
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;
  if (!dryRun && (!SMTP_HOST || !SMTP_USER || !SMTP_PASS)) {
    console.error('contact_not_configured');
    return res.status(503).json({ ok: false, error: 'not_configured' });
  }

  const transport = dryRun
    ? nodemailer.createTransport({ jsonTransport: true })
    : nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT || 587),
        secure: SMTP_SECURE === 'true',
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

  const interes = INTERESES[data.interes] || (data.interes ? oneLine(data.interes) : '—');
  const text = [
    'Nuevo mensaje desde el formulario de contacto de gsnfarma.com',
    '',
    `Nombre y apellidos: ${data.nombre}`,
    `Teléfono: ${data.telefono || '—'}`,
    `Email: ${data.email}`,
    `Interesado en: ${interes}`,
    '',
    'Mensaje:',
    data.mensaje || '—',
    '',
    '— El usuario ha aceptado la Política de privacidad al enviar el formulario.',
  ].join('\n');

  try {
    const info = await transport.sendMail({
      from: `"Web GSN Farma" <${MAIL_FROM || SMTP_USER || 'web@gsnfarma.com'}>`,
      to: MAIL_TO || 'info@gsnfarma.com',
      replyTo: `"${oneLine(data.nombre).replace(/"/g, '')}" <${data.email}>`,
      subject: `Contacto web: ${oneLine(data.nombre)}`.slice(0, 150),
      text,
    });
    return res.status(200).json({ ok: true, ...(dryRun ? { dryRun: JSON.parse(info.message) } : {}) });
  } catch (err) {
    console.error('contact_send_failed', err && err.code ? err.code : 'unknown');
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }
}
