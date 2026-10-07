// Idiomes del web (castellà per defecte a l'arrel, català a /ca i anglès a /en) i URL de cada pàgina.
// Les URL de català i anglès són les del web anterior (gsnfarma.com/ca/... i gsnfarma.com/en/...).

export type Lang = 'es' | 'ca' | 'en';
export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'brands'
  | 'international'
  | 'contact'
  | 'legal'
  | 'privacy'
  | 'cookies';

export const LANGS: Lang[] = ['es', 'ca', 'en'];
export const DEFAULT_LANG: Lang = 'es';
export const SITE = 'https://gsnfarma.com';

export const HTML_LANG: Record<Lang, string> = { es: 'es', ca: 'ca', en: 'en' };
export const LOCALE: Record<Lang, string> = { es: 'es-ES', ca: 'ca-ES', en: 'en-GB' };

export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { es: '/', ca: '/ca', en: '/en' },
  about: { es: '/quienes-somos', ca: '/ca/qui-som', en: '/en/about-us' },
  services: { es: '/servicios', ca: '/ca/serveis', en: '/en/services' },
  brands: { es: '/nuestras-marcas', ca: '/ca/nostres-marques', en: '/en/our-brands' },
  international: { es: '/internacional', ca: '/ca/internacional', en: '/en/international' },
  contact: { es: '/contacto', ca: '/ca/contacte', en: '/en/contact' },
  legal: { es: '/aviso-legal', ca: '/ca/avis-legal', en: '/en/legal-notice' },
  privacy: { es: '/politica-de-privacidad', ca: '/ca/politica-de-privacitat', en: '/en/privacy-policy' },
  cookies: { es: '/politica-de-cookies', ca: '/ca/politica-de-cookies', en: '/en/cookie-policy' },
};

// Idiomes en què cada pàgina existeix de veritat (si una pàgina no existís en algun idioma, el peu enllaça a la versió en castellà i el selector
// d'idioma porta a la Home de l'altre idioma). Ara existeixen totes les pàgines als tres idiomes.
const READY: Record<PageKey, Lang[]> = {
  home: LANGS,
  about: LANGS,
  services: LANGS,
  brands: LANGS,
  international: LANGS,
  contact: LANGS,
  legal: LANGS,
  privacy: LANGS,
  cookies: LANGS,
};

const normalize = (pathname: string) => {
  const p = pathname.replace(/\/+$/, '');
  return p === '' ? '/' : p;
};

/** Idioma i pàgina d'una ruta (key és null si la ruta no és cap de les conegudes). */
export function detectPage(pathname: string): { lang: Lang; key: PageKey | null } {
  const p = normalize(pathname);
  for (const key of Object.keys(ROUTES) as PageKey[]) {
    for (const lang of LANGS) {
      if (ROUTES[key][lang] === p) return { lang, key };
    }
  }
  const lang: Lang = p === '/ca' || p.startsWith('/ca/') ? 'ca' : p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
  return { lang, key: null };
}

export const isReady = (key: PageKey, lang: Lang) => READY[key].includes(lang);

/** Ruta d'una pàgina en un idioma (si encara no existeix en aquest idioma, la versió en castellà). */
export const pathFor = (key: PageKey, lang: Lang) => (isReady(key, lang) ? ROUTES[key][lang] : ROUTES[key].es);

/** Destí del selector d'idioma: la mateixa pàgina en l'altre idioma o, si no existeix, la seva Home. */
export const switchPath = (key: PageKey | null, lang: Lang) =>
  key && isReady(key, lang) ? ROUTES[key][lang] : ROUTES.home[lang];

/** Versions alternatives (hreflang) d'una pàgina: només si existeix en tots els idiomes. */
export function alternates(key: PageKey | null) {
  if (!key || !LANGS.every((l) => isReady(key, l))) return [];
  return LANGS.map((l) => ({ lang: l, href: SITE + (ROUTES[key][l] === '/' ? '/' : ROUTES[key][l]) }));
}
