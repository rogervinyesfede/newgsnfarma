// Textos de Contacto (castellà, català, anglès). Telèfons, correu i adreça no canvien segons l'idioma.

const es = {
  title: 'Contacto | GSN Farma Labs Group',
  description:
    'Contacta con GSN Farma Labs Group para más información sobre nuestro laboratorio farmacéutico, servicios y soluciones de salud.',
  header: {
    title: 'Contacta con nosotros',
    sub: 'Si quieres conocer más o explorar una colaboración, contacta con nosotros.',
    h2: 'Estamos aquí para ayudarte',
  },
};

const ca: typeof es = {
  title: 'Contacte | GSN Farma Labs Group',
  description:
    'Contacta amb GSN Farma Labs Group per a més informació sobre el nostre laboratori farmacèutic, serveis i solucions de salut.',
  header: {
    title: 'Contacta amb nosaltres',
    sub: 'Si vols saber-ne més o explorar una col·laboració, contacta amb nosaltres.',
    h2: 'Som aquí per ajudar-te',
  },
};

const en: typeof es = {
  title: 'Contact | GSN Farma Labs Group',
  description:
    'Contact GSN Farma Labs Group for more information about our pharmaceutical laboratory, services and health solutions.',
  header: {
    title: 'Contact us',
    sub: 'If you would like to find out more or explore a collaboration, get in touch with us.',
    h2: 'We are here to help you',
  },
};

export const contact = { es, ca, en };
