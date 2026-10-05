// Textos comuns a totes les pàgines (capçalera, peu, formulari de contacte, banda de contacte, etc.).
import type { Lang } from './config';

export interface Ui {
  nav: { about: string; services: string; brands: string; international: string; contact: string };
  header: {
    goHome: string;
    mainNav: string;
    selectLang: string;
    openMenu: string;
    mobileNav: string;
    closeMenu: string;
    linkedin: string;
  };
  langLabel: Record<Lang, string>;
  footer: { legalNav: string; legal: string; privacy: string; cookies: string; rights: string };
  contactBand: { title: string; label: string };
  form: {
    name: string;
    phone: string;
    email: string;
    interest: string;
    selectOption: string;
    optServices: string;
    optBrands: string;
    message: string;
    consentPre: string;
    consentLink: string;
    trap: string;
    send: string;
    required: string;
    msgSending: string;
    msgOk: string;
    msgInvalid: string;
    msgError: string;
  };
  contactItems: { address: string; general: string; pharmacovigilance: string; email: string };
}

const langLabel: Record<Lang, string> = { es: 'ES', ca: 'CAT', en: 'ENG' };

export const ui: Record<Lang, Ui> = {
  es: {
    nav: { about: 'Quiénes somos', services: 'Servicios', brands: 'Nuestras marcas', international: 'Internacional', contact: 'Contacto' },
    header: {
      goHome: 'Ir a la página de inicio',
      mainNav: 'Navegación principal',
      selectLang: 'Seleccionar idioma',
      openMenu: 'Abrir menú de navegación',
      mobileNav: 'Navegación móvil',
      closeMenu: 'Cerrar menú',
      linkedin: 'LinkedIn de GSN Farma Labs Group',
    },
    langLabel,
    footer: { legalNav: 'Menú legal', legal: 'Aviso legal', privacy: 'Política de privacidad', cookies: 'Política de cookies', rights: 'Todos los derechos reservados ©' },
    contactBand: { title: '¿Quieres saber más?', label: 'Contactar' },
    form: {
      name: 'Nombre y apellidos *',
      phone: 'Teléfono',
      email: 'Email *',
      interest: 'Estoy interesado en',
      selectOption: 'Selecciona una opción',
      optServices: 'Servicios',
      optBrands: 'Marcas propias',
      message: 'Escribe tu mensaje',
      consentPre: 'He leído y acepto la',
      consentLink: 'Política de privacidad',
      trap: 'No rellenes este campo',
      send: 'Enviar',
      required: '* Campos obligatorios',
      msgSending: 'Enviando…',
      msgOk: 'Gracias. Hemos recibido tu mensaje y nos pondremos en contacto contigo.',
      msgInvalid: 'Revisa los campos obligatorios y acepta la Política de privacidad.',
      msgError: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos a info@gsnfarma.com.',
    },
    contactItems: { address: 'Dirección', general: 'Información general', pharmacovigilance: 'Farmacovigilancia', email: 'Correo electrónico' },
  },

  ca: {
    nav: { about: 'Qui som', services: 'Serveis', brands: 'Les nostres marques', international: 'Internacional', contact: 'Contacte' },
    header: {
      goHome: "Anar a la pàgina d'inici",
      mainNav: 'Navegació principal',
      selectLang: 'Seleccionar idioma',
      openMenu: 'Obrir el menú de navegació',
      mobileNav: 'Navegació mòbil',
      closeMenu: 'Tancar el menú',
      linkedin: 'LinkedIn de GSN Farma Labs Group',
    },
    langLabel,
    footer: { legalNav: 'Menú legal', legal: 'Avís legal', privacy: 'Política de privacitat', cookies: 'Política de cookies', rights: 'Tots els drets reservats ©' },
    contactBand: { title: 'Vols saber-ne més?', label: 'Contactar' },
    form: {
      name: 'Nom i cognoms *',
      phone: 'Telèfon',
      email: 'Correu electrònic *',
      interest: 'Estic interessat en',
      selectOption: 'Selecciona una opció',
      optServices: 'Serveis',
      optBrands: 'Marques pròpies',
      message: 'Escriu el teu missatge',
      consentPre: 'He llegit i accepto la',
      consentLink: 'Política de privacitat',
      trap: 'No emplenis aquest camp',
      send: 'Enviar',
      required: '* Camps obligatoris',
      msgSending: 'Enviant…',
      msgOk: 'Gràcies. Hem rebut el teu missatge i ens posarem en contacte amb tu.',
      msgInvalid: 'Revisa els camps obligatoris i accepta la Política de privacitat.',
      msgError: "No hem pogut enviar el teu missatge. Torna-ho a provar o escriu-nos a info@gsnfarma.com.",
    },
    contactItems: { address: 'Adreça', general: 'Informació general', pharmacovigilance: 'Farmacovigilància', email: 'Correu electrònic' },
  },

  en: {
    nav: { about: 'About us', services: 'Services', brands: 'Our brands', international: 'International', contact: 'Contact' },
    header: {
      goHome: 'Go to the home page',
      mainNav: 'Main navigation',
      selectLang: 'Select language',
      openMenu: 'Open navigation menu',
      mobileNav: 'Mobile navigation',
      closeMenu: 'Close menu',
      linkedin: 'GSN Farma Labs Group on LinkedIn',
    },
    langLabel,
    footer: { legalNav: 'Legal menu', legal: 'Legal notice', privacy: 'Privacy policy', cookies: 'Cookie policy', rights: 'All rights reserved ©' },
    contactBand: { title: 'Want to know more?', label: 'Get in touch' },
    form: {
      name: 'Full name *',
      phone: 'Phone',
      email: 'Email *',
      interest: 'I am interested in',
      selectOption: 'Select an option',
      optServices: 'Services',
      optBrands: 'Own brands',
      message: 'Write your message',
      consentPre: 'I have read and accept the',
      consentLink: 'Privacy Policy',
      trap: 'Do not fill in this field',
      send: 'Send',
      required: '* Required fields',
      msgSending: 'Sending…',
      msgOk: 'Thank you. We have received your message and will get back to you.',
      msgInvalid: 'Please check the required fields and accept the Privacy Policy.',
      msgError: 'We could not send your message. Please try again or write to us at info@gsnfarma.com.',
    },
    contactItems: { address: 'Address', general: 'General information', pharmacovigilance: 'Pharmacovigilance', email: 'Email' },
  },
};
