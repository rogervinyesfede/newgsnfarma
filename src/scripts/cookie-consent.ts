// Gestor de consentiment de cookies. Veure src/components/CookieConsent.astro i src/i18n/cookies.ts.
//
// Principis (adaptats del «cookie consent framework» d'un altre projecte de la casa):
//  - Per defecte, res de tercers: cap script opcional es carrega abans d'una decisió.
//  - Rebutjar és una decisió i es desa (el bàner no torna), i està al mateix nivell que Acceptar.
//  - L'estat és UNA galeta pròpia (gsn-cookie-consent), versionada, d'un any, SameSite=Lax.
//  - Retirar el consentiment recarrega la pàgina: un script ja carregat no es pot descarregar.
//  - El panell treballa amb un esborrany: res no canvia fins a «Desar».
//  - El peu de pàgina reobre el panell en qualsevol moment ([data-cc-open]).
//
// Si s'afegeix o s'amplia una categoria: afegir-la a Consent, a CATEGORIES, al panell (CookieConsent.astro),
// als textos (cookies.ts) i PUJAR CONSENT_VERSION (així ningú no hereta un consentiment que no ha donat).

const COOKIE_NAME = 'gsn-cookie-consent';
const CONSENT_VERSION = 1;
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;
const CHANNEL = 'gsn-cookie-consent';

type Consent = { decided: boolean; analytics: boolean };
const CATEGORIES = ['analytics'] as const;
const DENIED: Consent = { decided: false, analytics: false };

function readConsent(): Consent {
  const row = document.cookie.split('; ').find((r) => r.startsWith(COOKIE_NAME + '='));
  if (!row) return { ...DENIED };
  try {
    const parsed = JSON.parse(decodeURIComponent(row.slice(COOKIE_NAME.length + 1)));
    // Una versió antiga compta com a «sense decisió»: el bàner torna.
    if (parsed && typeof parsed === 'object' && parsed.v === CONSENT_VERSION) {
      return { decided: true, analytics: parsed.analytics === true };
    }
  } catch {
    /* galeta il·legible: es tracta com a sense decisió */
  }
  return { ...DENIED };
}

function writeConsent(analytics: boolean): void {
  const value = encodeURIComponent(JSON.stringify({ v: CONSENT_VERSION, analytics, ts: Date.now() }));
  const secure = location.protocol === 'https:' ? '; secure' : '';
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${MAX_AGE_SECONDS}; samesite=lax${secure}`;
}

const root = document.getElementById('gsn-cc');
if (root) init(root);

function init(root: HTMLElement): void {
  const banner = document.getElementById('gsn-cc-banner') as HTMLElement;
  const overlay = document.getElementById('gsn-cc-overlay') as HTMLElement;
  const panel = document.getElementById('gsn-cc-panel') as HTMLElement;
  const closeBtn = document.getElementById('gsn-cc-close') as HTMLButtonElement;
  const saveBtn = document.getElementById('gsn-cc-save') as HTMLButtonElement;
  const switches = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-cc-switch]'));
  const gtmId = root.dataset.gtm ?? '';

  let state = readConsent();
  let opener: HTMLElement | null = null;
  let previousOverflow = '';
  let analyticsLoaded = false;

  // ---- Càrrega de tercers (només amb consentiment) ----
  // El fragment oficial de GTM es posa «el més amunt possible» al <head> i duu un <noscript>: tots dos
  // s'executen abans de la decisió. Aquí es carrega només després d'acceptar, i sense <noscript>.
  function loadAnalytics(): void {
    if (analyticsLoaded) return;
    // «GTM-XXXXXXX» és el marcador de posició: es veu la interfície però no es carrega res.
    if (!/^GTM-[A-Z0-9]{4,}$/.test(gtmId) || gtmId === 'GTM-XXXXXXX') return;
    analyticsLoaded = true;
    const w = window as unknown as { dataLayer: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(gtmId);
    document.head.appendChild(s);
  }

  function apply(previous: Consent): void {
    if (state.analytics) loadAnalytics();
    // Cap script es pot descarregar: si es retira el consentiment, es recarrega la pàgina.
    else if (previous.analytics) location.reload();
  }

  function render(): void {
    banner.hidden = state.decided || !overlay.hidden;
  }

  // ---- Decisions ----
  function decide(analytics: boolean): void {
    const previous = state;
    writeConsent(analytics);
    state = readConsent();
    closePanel(false);
    render();
    broadcast();
    apply(previous);
  }

  // ---- Panell (esborrany) ----
  function setSwitch(btn: HTMLButtonElement, on: boolean): void {
    btn.setAttribute('aria-checked', String(on));
    btn.classList.toggle('is-on', on);
  }

  function openPanel(from?: HTMLElement | null): void {
    opener = from ?? (document.activeElement as HTMLElement | null);
    state = readConsent();
    for (const sw of switches) setSwitch(sw, state[sw.dataset.ccSwitch as (typeof CATEGORIES)[number]] === true);
    overlay.hidden = false;
    banner.hidden = true;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    document.addEventListener('keydown', onPanelKey);
  }

  function closePanel(restoreFocus = true): void {
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.body.style.overflow = previousOverflow;
    document.removeEventListener('keydown', onPanelKey);
    render();
    if (restoreFocus && opener && document.contains(opener)) opener.focus();
  }

  function onPanelKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      closePanel();
      return;
    }
    if (e.key !== 'Tab') return;
    // El focus es queda dins del panell (és modal).
    const focusable = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // ---- Esdeveniments ----
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const open = target.closest<HTMLElement>('[data-cc-open]');
    if (open) {
      e.preventDefault();
      openPanel(open);
      return;
    }
    const action = target.closest<HTMLElement>('[data-cc-action]')?.dataset.ccAction;
    if (action === 'accept') decide(true);
    else if (action === 'reject') decide(false);
  });

  switches.forEach((sw) => sw.addEventListener('click', () => setSwitch(sw, sw.getAttribute('aria-checked') !== 'true')));
  saveBtn.addEventListener('click', () => {
    const analytics = root.querySelector<HTMLButtonElement>('[data-cc-switch="analytics"]')?.getAttribute('aria-checked') === 'true';
    decide(analytics);
  });
  closeBtn.addEventListener('click', () => closePanel());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePanel();
  });

  // ---- Altres pestanyes: una decisió presa en una es veu a la resta ----
  // (L'esdeveniment «storage» NO s'activa per a galetes: cal un canal propi.)
  const channel = 'BroadcastChannel' in window ? new BroadcastChannel(CHANNEL) : null;
  function broadcast(): void {
    channel?.postMessage('changed');
  }
  function syncFromCookie(): void {
    const previous = state;
    const next = readConsent();
    if (next.decided === previous.decided && next.analytics === previous.analytics) return;
    state = next;
    if (state.decided) closePanel(false);
    render();
    apply(previous);
  }
  channel?.addEventListener('message', syncFromCookie);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) syncFromCookie();
  });

  // ---- Inici ----
  render();
  apply({ decided: false, analytics: false });
}
