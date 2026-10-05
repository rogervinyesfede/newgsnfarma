// Textos de Nuestras marcas (castellà, català, anglès). Les marques (nom, logo, imatge, URL) són a src/data/brands.json;
// aquí només hi ha el text de cada marca, en el mateix ordre: Orissens, GSN, Nakama, Herbaldi, Medicamentos.
// Els noms de marca no es tradueixen (excepte l'alt del logo de "Medicamentos").

const es = {
  title: 'Nuestras marcas | GSN Farma Labs Group',
  description:
    'Marcas de salud desarrolladas bajo el modelo One Health Care, especializadas en medicamentos, salud natural, salud de la mujer y salud animal.',
  header: {
    title: 'Marcas con compromiso farmacéutico',
    sub: 'Siempre al servicio de la salud y el bienestar',
    text: 'Desarrollamos y comercializamos un portafolio de marcas propias en los ámbitos de <strong>salud natural</strong>, <strong>salud animal</strong> y <strong>medicamentos</strong>, integrando conocimiento farmacéutico, innovación y visión <strong>One Health</strong>.',
  },
  goTo: 'Ir a',
  brands: [
    { alt: 'Orissens', category: 'Salud de la mujer', description: 'Salud de la mujer en cada etapa de su vida.\nCompromiso con la salud de la mujer, la farmacia y la ciencia.', cta: 'Visitar la web de Orissens Woman' },
    { alt: 'GSN', category: 'Salud natural', description: 'Empieza a cuidarte, nosotros te acompañamos\nGSN te ofrece un cuidado fácil y esencial de la salud.', cta: 'Visitar la web de GSN' },
    { alt: 'Nakama', category: 'Salud animal', description: 'La marca de salud natural para mascotas, exclusiva de farmacias.\nCuidarlos es un compromiso compartido.', cta: 'Visitar la web de Nakama' },
    { alt: 'Herbaldi', category: 'Salud natural', description: 'Soluciones y complementos a base de plantas para el bienestar diario.', cta: 'Ver listado de productos' },
    { alt: 'Medicamentos', category: 'Medicamentos', description: 'Desarrollamos y registramos medicamentos no sujetos a prescripción médica.\nUn portafolio en expansión.', cta: 'Ver listado de medicamentos' },
  ],
  contactText: 'Contáctanos para recibir más información sobre nuestras marcas.',
  gate: {
    title: 'Acceso profesional',
    text: 'La información que has solicitado visualizar está dirigida exclusivamente al profesional sanitario facultado para prescribir o dispensar, por lo que se requiere una formación especializada para su correcta interpretación.',
    yes: 'Soy profesional sanitario',
    no: 'No soy profesional sanitario',
  },
};

const ca: typeof es = {
  title: 'Les nostres marques | GSN Farma Labs Group',
  description:
    'Marques de salut desenvolupades sota el model One Health Care, especialitzades en medicaments, salut natural, salut de la dona i salut animal.',
  header: {
    title: 'Marques amb compromís farmacèutic',
    sub: 'Sempre al servei de la salut i el benestar',
    text: 'Desenvolupem i comercialitzem un portafoli de marques pròpies en els àmbits de <strong>salut natural</strong>, <strong>salut animal</strong> i <strong>medicaments</strong>, integrant coneixement farmacèutic, innovació i visió <strong>One Health</strong>.',
  },
  goTo: 'Anar a',
  brands: [
    { alt: 'Orissens', category: 'Salut de la dona', description: 'Salut de la dona en cada etapa de la seva vida.\nCompromís amb la salut de la dona, la farmàcia i la ciència.', cta: "Visitar el web d'Orissens Woman" },
    { alt: 'GSN', category: 'Salut natural', description: "Comença a cuidar-te, nosaltres t'acompanyem\nGSN t'ofereix una cura fàcil i essencial de la salut.", cta: 'Visitar el web de GSN' },
    { alt: 'Nakama', category: 'Salut animal', description: 'La marca de salut natural per a mascotes, exclusiva de farmàcies.\nCuidar-les és un compromís compartit.', cta: 'Visitar el web de Nakama' },
    { alt: 'Herbaldi', category: 'Salut natural', description: 'Solucions i complements a base de plantes per al benestar diari.', cta: 'Veure llistat de productes' },
    { alt: 'Medicaments', category: 'Medicaments', description: 'Desenvolupem i registrem medicaments no subjectes a prescripció mèdica.\nUn portafoli en expansió.', cta: 'Veure llistat de medicaments' },
  ],
  contactText: 'Contacta amb nosaltres per rebre més informació sobre les nostres marques.',
  gate: {
    title: 'Accés professional',
    text: 'La informació que has sol·licitat visualitzar està adreçada exclusivament al professional sanitari facultat per prescriure o dispensar, per la qual cosa es requereix una formació especialitzada per a la seva correcta interpretació.',
    yes: 'Sóc professional sanitari',
    no: 'No sóc professional sanitari',
  },
};

const en: typeof es = {
  title: 'Our brands | GSN Farma Labs Group',
  description:
    "Health brands developed under the One Health Care model, specialising in medicines, natural health, women's health and animal health.",
  header: {
    title: 'Brands with a pharmaceutical commitment',
    sub: 'Always at the service of health and well-being',
    text: 'We develop and market a portfolio of own brands in the fields of <strong>natural health</strong>, <strong>animal health</strong> and <strong>medicines</strong>, integrating pharmaceutical knowledge, innovation and a <strong>One Health</strong> vision.',
  },
  goTo: 'Go to',
  brands: [
    { alt: 'Orissens', category: "Women's health", description: "Women's health at every stage of life.\nCommitted to women's health, pharmacy and science.", cta: 'Visit the Orissens Woman website' },
    { alt: 'GSN', category: 'Natural health', description: 'Start taking care of yourself, we are with you\nGSN offers you easy, essential health care.', cta: 'Visit the GSN website' },
    { alt: 'Nakama', category: 'Animal health', description: 'The natural health brand for pets, exclusive to pharmacies.\nCaring for them is a shared commitment.', cta: 'Visit the Nakama website' },
    { alt: 'Herbaldi', category: 'Natural health', description: 'Plant-based solutions and supplements for everyday well-being.', cta: 'View product list' },
    { alt: 'Medicines', category: 'Medicines', description: 'We develop and register non-prescription medicines.\nAn expanding portfolio.', cta: 'View medicines list' },
  ],
  contactText: 'Contact us to receive more information about our brands.',
  gate: {
    title: 'Professional access',
    text: 'The information you have requested to view is intended exclusively for healthcare professionals authorised to prescribe or dispense medicines, as specialised training is required for its correct interpretation.',
    yes: 'I am a healthcare professional',
    no: 'I am not a healthcare professional',
  },
};

export const brandsCopy = { es, ca, en };
