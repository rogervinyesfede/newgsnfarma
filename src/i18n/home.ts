// Textos de la Home (castellà, català, anglès). Les imatges i els logos no canvien segons l'idioma.

const es = {
  title: 'GSN Farma Labs Group | Laboratorio farmacéutico',
  description:
    'Laboratorio farmacéutico con más de 30 años de experiencia desarrollando soluciones de salud con visión global y ADN farmacéutico bajo el enfoque One Health Care.',
  hero: {
    title: 'Un nuevo grupo farmacéutico',
    subtitle: 'Más de 30 años de experiencia y visión global en salud',
    cta: 'Conócenos',
  },
  oh: {
    title: 'One Health:<br />el propósito que nos guía',
    p1: 'Adoptamos el modelo One Health como visión transversal: una salud integrada, sostenible y conectada entre personas, animales y entorno.',
    p2: 'Desarrollamos, fabricamos y comercializamos productos regulados con agilidad y rigor técnico, bajo los más altos estándares de calidad.',
    cta: 'Conoce más sobre el grupo',
    alt: 'Familia con su mascota en casa y manos sosteniendo una planta, símbolo del enfoque One Health',
  },
  areasTitle: 'Así sumamos salud',
  areasIntro:
    'Estructuramos nuestra actividad en dos grandes áreas de negocio: los <strong>servicios farmacéuticos</strong> y las <strong>marcas propias</strong>.',
  areasIntro2:
    'Estructuramos nuestra actividad en dos grandes áreas de negocio:<br />los <strong>servicios farmacéuticos</strong> y las <strong>marcas propias</strong>.',
  areas: [
    {
      title: 'Servicios Farmacéuticos',
      alt: 'Científica trabajando con microscopio en el laboratorio',
      text: 'Unidad industrial con 17.000 m² para ofrecer servicios integrales en desarrollo, fabricación, aseguramiento de calidad, asuntos regulatorios y logística para productos regulados.',
      cta: 'Ver todos los servicios',
    },
    {
      title: 'Marcas Propias',
      alt: 'Mano sosteniendo iconos de productos de salud, representando el portafolio de marcas propias',
      text: 'Desarrollamos y comercializamos un portafolio de salud transversal, con medicamentos y productos de salud humana y animal, impulsados por la innovación y el rigor farmacéutico.',
      cta: 'Ver todas las marcas',
    },
  ],
  fundingCaption: 'Con la colaboración de:',
  funding: [
    {
      intro: 'Subvenciones a proyectos singulares de la economía social y solidaria y el cooperativismo:',
      alts: ['Economía Social', "Generalitat de Catalunya — Departament d'Empresa i Treball", 'Ministerio de Trabajo y Economía Social — SEPE'],
    },
    {
      intro: 'Proyecto Estratégico para la Recuperación y Transformación Económica Agroalimentario:',
      alts: ['Financiado por la Unión Europea — NextGenerationEU', 'Plan de Recuperación, Transformación y Resiliencia', 'Ministerio de Industria y Turismo'],
    },
  ],
  contact: {
    title: '¿Hablamos?',
    text: 'En GSN Farma Labs Group trabajamos como partner estratégico para impulsar soluciones en salud con visión a largo plazo.',
  },
};

const ca: typeof es = {
  title: 'GSN Farma Labs Group | Laboratori farmacèutic',
  description:
    "Laboratori farmacèutic amb més de 30 anys d'experiència desenvolupant solucions de salut amb visió global i ADN farmacèutic sota l'enfocament One Health Care.",
  hero: {
    title: 'Un nou grup farmacèutic',
    subtitle: "Més de 30 anys d'experiència i visió global en salut",
    cta: 'Coneix-nos',
  },
  oh: {
    title: 'One Health:<br />el propòsit que ens guia',
    p1: 'Adoptem el model One Health com a visió transversal: una salut integrada, sostenible i connectada entre persones, animals i entorn.',
    p2: 'Desenvolupem, fabriquem i comercialitzem productes regulats amb agilitat i rigor tècnic, sota els més alts estàndards de qualitat.',
    cta: 'Coneix més sobre el grup',
    alt: "Família amb la seva mascota a casa i mans sostenint una planta, símbol de l'enfocament One Health",
  },
  areasTitle: 'Així sumem salut',
  areasIntro:
    "Estructurem la nostra activitat en dues grans àrees de negoci: els <strong>serveis farmacèutics</strong> i les <strong>marques pròpies</strong>.",
  areasIntro2:
    "Estructurem la nostra activitat en dues grans àrees de negoci:<br />els <strong>serveis farmacèutics</strong> i les <strong>marques pròpies</strong>.",
  areas: [
    {
      title: 'Serveis Farmacèutics',
      alt: 'Científica treballant amb un microscopi al laboratori',
      text: "Unitat industrial amb 17.000 m² per oferir serveis integrals de desenvolupament, fabricació, assegurament de qualitat, afers regulatoris i logística per a productes regulats.",
      cta: 'Veure tots els serveis',
    },
    {
      title: 'Marques Pròpies',
      alt: 'Mà sostenint icones de productes de salut, que representen el portafoli de marques pròpies',
      text: "Desenvolupem i comercialitzem un portafoli de salut transversal, amb medicaments i productes de salut humana i animal, impulsats per la innovació i el rigor farmacèutic.",
      cta: 'Veure totes les marques',
    },
  ],
  fundingCaption: 'Amb la col·laboració de:',
  funding: [
    {
      intro: "Subvencions a projectes singulars de l'economia social i solidària i el cooperativisme:",
      alts: ['Economia Social', "Generalitat de Catalunya — Departament d'Empresa i Treball", 'Ministeri de Treball i Economia Social — SEPE'],
    },
    {
      intro: 'Projecte Estratègic per a la Recuperació i Transformació Econòmica Agroalimentari:',
      alts: ['Finançat per la Unió Europea — NextGenerationEU', 'Pla de Recuperació, Transformació i Resiliència', "Ministeri d'Indústria i Turisme"],
    },
  ],
  contact: {
    title: 'Parlem?',
    text: 'A GSN Farma Labs Group treballem com a partner estratègic per impulsar solucions en salut amb visió a llarg termini.',
  },
};

const en: typeof es = {
  title: 'GSN Farma Labs Group | Pharmaceutical laboratory',
  description:
    'Pharmaceutical laboratory with more than 30 years of experience developing health solutions with a global vision and pharmaceutical DNA, under the One Health Care approach.',
  hero: {
    title: 'A new pharmaceutical group',
    subtitle: 'Over 30 years of experience and a global vision in health',
    cta: 'Get to know us',
  },
  oh: {
    title: 'One Health:<br />the purpose that guides us',
    p1: 'We embrace the One Health model as a cross-cutting vision: integrated, sustainable and connected health across people, animals and the environment.',
    p2: 'We develop, manufacture and market regulated products with agility and technical rigour, under the highest quality standards.',
    cta: 'Learn more about the group',
    alt: 'A family with their pet at home and hands holding a plant, a symbol of the One Health approach',
  },
  areasTitle: 'This is how we add health',
  areasIntro:
    'We structure our activity into two main business areas: <strong>pharmaceutical services</strong> and <strong>own brands</strong>.',
  areasIntro2:
    'We structure our activity into two main business areas:<br /><strong>pharmaceutical services</strong> and <strong>own brands</strong>.',
  areas: [
    {
      title: 'Pharmaceutical Services',
      alt: 'A scientist working with a microscope in the laboratory',
      text: 'Industrial unit of 17,000 m² offering comprehensive services in development, manufacturing, quality assurance, regulatory affairs and logistics for regulated products.',
      cta: 'See all services',
    },
    {
      title: 'Own Brands',
      alt: 'A hand holding health product icons, representing the portfolio of own brands',
      text: 'We develop and market a cross-cutting health portfolio, with medicines and human and animal health products, driven by innovation and pharmaceutical rigour.',
      cta: 'See all brands',
    },
  ],
  fundingCaption: 'In collaboration with:',
  funding: [
    {
      intro: 'Grants for singular projects in the social and solidarity economy and cooperativism:',
      alts: ['Social Economy', "Government of Catalonia — Department of Business and Labour", 'Ministry of Labour and Social Economy — SEPE'],
    },
    {
      intro: 'Strategic Project for the Recovery and Economic Transformation of the Agri-food Sector:',
      alts: ['Funded by the European Union — NextGenerationEU', 'Recovery, Transformation and Resilience Plan', 'Ministry of Industry and Tourism'],
    },
  ],
  contact: {
    title: 'Shall we talk?',
    text: 'At GSN Farma Labs Group we work as a strategic partner to drive health solutions with a long-term vision.',
  },
};

export const home = { es, ca, en };
