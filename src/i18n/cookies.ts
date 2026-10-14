// Configurador de cookies: textos (es/ca/en) i configuració. Veure src/components/CookieConsent.astro i src/scripts/cookie-consent.ts.
import type { Lang } from './config';

/**
 * Identificador del contenidor de Google Tag Manager, definit a la variable d'entorn PUBLIC_GTM_ID
 * (a Vercel: Settings → Environment Variables; en local: .env.local). Es fixa en fer el build.
 *  - Sense valor: la web NO té cookies opcionals, i el bàner i l'enllaç del peu no es mostren.
 *  - «GTM-XXXXXXX» (marcador de posició): es veu el bàner i el panell, però no es carrega cap script de tercers.
 *  - Un identificador real: l'analítica es carrega NOMÉS si l'usuari l'accepta.
 */
export const GTM_ID: string = (import.meta.env.PUBLIC_GTM_ID ?? '').trim();
export const CONSENT_ENABLED: boolean = GTM_ID !== '';

export interface CookieCopy {
  bannerTitle: string;
  bannerBody: string;
  policyLinkLabel: string;
  acceptLabel: string;
  rejectLabel: string;
  configureLabel: string;
  saveLabel: string;
  closeLabel: string;
  settingsTitle: string;
  settingsIntro: string;
  necessaryTitle: string;
  necessaryDescription: string;
  alwaysOnLabel: string;
  analyticsTitle: string;
  analyticsDescription: string;
  /** Text de l'enllaç del peu que reobre el panell. */
  settingsLinkLabel: string;
}

export const cookieCopy: Record<Lang, CookieCopy> = {
  es: {
    bannerTitle: 'Utilizamos cookies',
    bannerBody:
      'Usamos cookies técnicas necesarias para el funcionamiento de la web. Solo con tu permiso usaremos cookies analíticas de terceros (Google) para medir el uso de la web y mejorarla. Puedes aceptarlas, rechazarlas o configurarlas.',
    policyLinkLabel: 'Política de cookies',
    acceptLabel: 'Aceptar',
    rejectLabel: 'Rechazar',
    configureLabel: 'Configurar',
    saveLabel: 'Guardar preferencias',
    closeLabel: 'Cerrar',
    settingsTitle: 'Configuración de cookies',
    settingsIntro:
      'Elige qué cookies permites. Puedes cambiar tu decisión en cualquier momento desde el enlace «Configuración de cookies» del pie de página.',
    necessaryTitle: 'Técnicas y necesarias',
    necessaryDescription:
      'Imprescindibles para que la web funcione y para recordar tu decisión sobre las cookies. No se pueden desactivar.',
    alwaysOnLabel: 'Siempre activas',
    analyticsTitle: 'Analíticas (Google)',
    analyticsDescription:
      'Nos permiten medir cómo se usa la web para mejorarla. Instalan cookies de terceros y solo se cargan si las aceptas.',
    settingsLinkLabel: 'Configuración de cookies',
  },
  ca: {
    bannerTitle: 'Utilitzem galetes',
    bannerBody:
      'Fem servir galetes tècniques necessàries per al funcionament del web. Només amb el teu permís farem servir galetes analítiques de tercers (Google) per mesurar l’ús del web i millorar-lo. Pots acceptar-les, rebutjar-les o configurar-les.',
    policyLinkLabel: 'Política de cookies',
    acceptLabel: 'Acceptar',
    rejectLabel: 'Rebutjar',
    configureLabel: 'Configurar',
    saveLabel: 'Desar preferències',
    closeLabel: 'Tancar',
    settingsTitle: 'Configuració de cookies',
    settingsIntro:
      'Tria quines galetes permets. Pots canviar la teva decisió en qualsevol moment des de l’enllaç «Configuració de cookies» del peu de pàgina.',
    necessaryTitle: 'Tècniques i necessàries',
    necessaryDescription:
      'Imprescindibles perquè el web funcioni i per recordar la teva decisió sobre les galetes. No es poden desactivar.',
    alwaysOnLabel: 'Sempre actives',
    analyticsTitle: 'Analítiques (Google)',
    analyticsDescription:
      'Ens permeten mesurar com s’usa el web per millorar-lo. Instal·len galetes de tercers i només es carreguen si les acceptes.',
    settingsLinkLabel: 'Configuració de cookies',
  },
  en: {
    bannerTitle: 'We use cookies',
    bannerBody:
      'We use technical cookies that are necessary for the website to work. Only with your permission will we use third-party analytics cookies (Google) to measure how the website is used and improve it. You can accept, reject or configure them.',
    policyLinkLabel: 'Cookie policy',
    acceptLabel: 'Accept',
    rejectLabel: 'Reject',
    configureLabel: 'Configure',
    saveLabel: 'Save preferences',
    closeLabel: 'Close',
    settingsTitle: 'Cookie settings',
    settingsIntro:
      'Choose which cookies you allow. You can change your decision at any time from the “Cookie settings” link in the footer.',
    necessaryTitle: 'Technical and necessary',
    necessaryDescription:
      'Essential for the website to work and to remember your cookie choice. They cannot be switched off.',
    alwaysOnLabel: 'Always on',
    analyticsTitle: 'Analytics (Google)',
    analyticsDescription:
      'They let us measure how the website is used so we can improve it. They set third-party cookies and are only loaded if you accept them.',
    settingsLinkLabel: 'Cookie settings',
  },
};
