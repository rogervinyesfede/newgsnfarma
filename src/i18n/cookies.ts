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
  /** Nom accessible del bàner (no es veu: el bàner no porta títol visible). */
  bannerLabel: string;
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
    bannerLabel: 'Cookies',
    bannerBody:
      'Usamos cookies propias y de terceros para analizar la navegación del usuario y asegurar el correcto funcionamiento de la web. Puedes aceptarlas, rechazarlas o configurarlas. Más información en nuestra',
    policyLinkLabel: 'Política de cookies',
    acceptLabel: 'Aceptar',
    rejectLabel: 'Rechazar',
    configureLabel: 'Configurar',
    saveLabel: 'Guardar preferencias',
    closeLabel: 'Cerrar',
    settingsTitle: 'Configuración de cookies',
    settingsIntro:
      'Elige qué cookies quieres permitir. Puedes cambiar tu decisión en cualquier momento desde “Configuración de cookies”, en el pie de página.',
    necessaryTitle: 'Técnicas y necesarias',
    necessaryDescription:
      'Son imprescindibles para el funcionamiento de la web. Garantizan funcionalidades básicas y características de seguridad. No almacenan ninguna información personal.',
    alwaysOnLabel: 'Siempre activas',
    analyticsTitle: 'Analíticas',
    analyticsDescription:
      'Se utilizan para comprender cómo los visitantes interactúan con la web, para poder mejorarla. Instalan cookies de terceros.',
    settingsLinkLabel: 'Configuración de cookies',
  },
  ca: {
    bannerLabel: 'Galetes',
    bannerBody:
      'Fem servir galetes pròpies i de tercers per analitzar la navegació de l’usuari i assegurar el correcte funcionament del web. Pots acceptar-les, rebutjar-les o configurar-les. Més informació a la nostra',
    policyLinkLabel: 'Política de cookies',
    acceptLabel: 'Acceptar',
    rejectLabel: 'Rebutjar',
    configureLabel: 'Configurar',
    saveLabel: 'Desar preferències',
    closeLabel: 'Tancar',
    settingsTitle: 'Configuració de cookies',
    settingsIntro:
      'Tria quines galetes vols permetre. Pots canviar la teva decisió en qualsevol moment des de “Configuració de cookies”, al peu de pàgina.',
    necessaryTitle: 'Tècniques i necessàries',
    necessaryDescription:
      'Són imprescindibles per al funcionament del web. Garanteixen funcionalitats bàsiques i característiques de seguretat. No emmagatzemen cap informació personal.',
    alwaysOnLabel: 'Sempre actives',
    analyticsTitle: 'Analítiques',
    analyticsDescription:
      'S’utilitzen per comprendre com interactuen els visitants amb el web, per poder-lo millorar. Instal·len galetes de tercers.',
    settingsLinkLabel: 'Configuració de cookies',
  },
  en: {
    bannerLabel: 'Cookies',
    bannerBody:
      'We use our own and third-party cookies to analyse user browsing and ensure the website works properly. You can accept them, reject them or configure them. More information in our',
    policyLinkLabel: 'Cookie policy',
    acceptLabel: 'Accept',
    rejectLabel: 'Reject',
    configureLabel: 'Configure',
    saveLabel: 'Save preferences',
    closeLabel: 'Close',
    settingsTitle: 'Cookie settings',
    settingsIntro:
      'Choose which cookies you want to allow. You can change your decision at any time from “Cookie settings”, in the footer.',
    necessaryTitle: 'Technical and necessary',
    necessaryDescription:
      'They are essential for the website to work. They ensure basic functionality and security features. They do not store any personal information.',
    alwaysOnLabel: 'Always on',
    analyticsTitle: 'Analytics',
    analyticsDescription:
      'They are used to understand how visitors interact with the website so that we can improve it. They set third-party cookies.',
    settingsLinkLabel: 'Cookie settings',
  },
};
