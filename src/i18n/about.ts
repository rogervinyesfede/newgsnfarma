// Textos de Quiénes somos (castellà, català, anglès). Les imatges i els logos no canvien segons l'idioma.

const es = {
  title: 'Quiénes somos | GSN Farma Labs Group',
  description:
    'Laboratorio farmacéutico con visión global y más de 30 años de experiencia en desarrollo y fabricación de productos y servicios de salud.',
  hero: { l1: 'Sumamos experiencia,', l2: 'sumamos salud' },
  intro: {
    h2: 'Grupo farmacéutico con más de 30 años de experiencia, visión global y ADN farmacéutico',
    p: 'Disponemos de una estructura integral capaz de desarrollar, registrar, fabricar y comercializar productos regulados (medicamentos, complementos alimenticios, productos sanitarios y dermocosmética), todo bajo los más altos estándares de calidad, seguridad y trazabilidad.',
  },
  union: {
    title: 'Una unión que suma experiencia y especialización',
    items: [
      { n: '30+', alt: 'GSN Farma Labs', text: 'Más de 30 años de experiencia en el desarrollo, registro, fabricación y comercialización de productos de salud humana y animal.' },
      { n: '20+', alt: 'CoetusPharma', text: 'Más de 20 años especializado en desarrollo, registro y comercialización de medicamentos con proyección internacional.' },
    ],
    footer: 'Juntos formamos un grupo farmacéutico integral, combinando infraestructura industrial, conocimiento farmacéutico y construcción de marcas con propósito.',
  },
  oh: {
    title: 'One Health:<br />el propósito que nos guía',
    p1: 'Adoptamos el modelo One Health como visión transversal: una salud integrada, sostenible y conectada entre personas, animales y entorno.',
    p2: 'Porque creemos que la salud de las personas, los animales y el medio ambiente está profundamente conectada, ofrecemos soluciones integrales que anticipan, previenen y controlan los grandes retos sanitarios globales, con el objetivo de un planeta más sano, resiliente y seguro para todos.',
    alt: 'Familia con su mascota en casa y manos sosteniendo una planta, símbolo del enfoque One Health',
  },
  areasTitle: 'Así sumamos salud',
  areasIntro:
    'Estructuramos nuestra actividad en dos grandes áreas de negocio: los <strong>servicios farmacéuticos</strong> y las <strong>marcas propias</strong>.',
  areasIntroMix:
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
};

const ca: typeof es = {
  title: 'Qui som | GSN Farma Labs Group',
  description:
    "Laboratori farmacèutic amb visió global i més de 30 anys d'experiència en desenvolupament i fabricació de productes i serveis de salut.",
  hero: { l1: 'Sumem experiència,', l2: 'sumem salut' },
  intro: {
    h2: "Grup farmacèutic amb més de 30 anys d'experiència, visió global i ADN farmacèutic",
    p: "Disposem d'una estructura integral capaç de desenvolupar, registrar, fabricar i comercialitzar productes regulats (medicaments, complements alimentosos, productes sanitaris i dermocosmètica), tot sota els més alts estàndards de qualitat, seguretat i traçabilitat.",
  },
  union: {
    title: 'Una unió que suma experiència i especialització',
    items: [
      { n: '30+', alt: 'GSN Farma Labs', text: "Més de 30 anys d'experiència en el desenvolupament, registre, fabricació i comercialització de productes de salut humana i animal." },
      { n: '20+', alt: 'CoetusPharma', text: 'Més de 20 anys especialitzat en desenvolupament, registre i comercialització de medicaments amb projecció internacional.' },
    ],
    footer: 'Junts formem un grup farmacèutic integral, combinant infraestructura industrial, coneixement farmacèutic i construcció de marques amb propòsit.',
  },
  oh: {
    title: 'One Health:<br />el propòsit que ens guia',
    p1: 'Adoptem el model One Health com a visió transversal: una salut integrada, sostenible i connectada entre persones, animals i entorn.',
    p2: "Perquè creiem que la salut de les persones, els animals i el medi ambient està profundament connectada, oferim solucions integrals que anticipen, preveuen i controlen els grans reptes sanitaris globals, amb l'objectiu d'un planeta més sa, resilient i segur per a tothom.",
    alt: "Família amb la seva mascota a casa i mans sostenint una planta, símbol de l'enfocament One Health",
  },
  areasTitle: 'Així sumem salut',
  areasIntro:
    'Estructurem la nostra activitat en dues grans àrees de negoci: els <strong>serveis farmacèutics</strong> i les <strong>marques pròpies</strong>.',
  areasIntroMix:
    'Estructurem la nostra activitat en dues grans àrees de negoci:<br />els <strong>serveis farmacèutics</strong> i les <strong>marques pròpies</strong>.',
  areas: [
    {
      title: 'Serveis Farmacèutics',
      alt: 'Científica treballant amb un microscopi al laboratori',
      text: 'Unitat industrial amb 17.000 m² per oferir serveis integrals de desenvolupament, fabricació, assegurament de qualitat, afers regulatoris i logística per a productes regulats.',
      cta: 'Veure tots els serveis',
    },
    {
      title: 'Marques Pròpies',
      alt: 'Mà sostenint icones de productes de salut, que representen el portafoli de marques pròpies',
      text: 'Desenvolupem i comercialitzem un portafoli de salut transversal, amb medicaments i productes de salut humana i animal, impulsats per la innovació i el rigor farmacèutic.',
      cta: 'Veure totes les marques',
    },
  ],
};

const en: typeof es = {
  title: 'About us | GSN Farma Labs Group',
  description:
    'Pharmaceutical laboratory with a global vision and more than 30 years of experience in the development and manufacture of health products and services.',
  hero: { l1: 'We add experience,', l2: 'we add health' },
  intro: {
    h2: 'Pharmaceutical group with over 30 years of experience, a global vision and pharmaceutical DNA',
    p: 'We have a comprehensive structure capable of developing, registering, manufacturing and marketing regulated products (medicines, food supplements, medical devices and dermocosmetics), all under the highest standards of quality, safety and traceability.',
  },
  union: {
    title: 'A union that adds experience and specialisation',
    items: [
      { n: '30+', alt: 'GSN Farma Labs', text: 'Over 30 years of experience in the development, registration, manufacture and marketing of human and animal health products.' },
      { n: '20+', alt: 'CoetusPharma', text: 'Over 20 years specialising in the development, registration and marketing of medicines with international reach.' },
    ],
    footer: 'Together we form a comprehensive pharmaceutical group, combining industrial infrastructure, pharmaceutical knowledge and purpose-driven brand building.',
  },
  oh: {
    title: 'One Health:<br />the purpose that guides us',
    p1: 'We embrace the One Health model as a cross-cutting vision: integrated, sustainable and connected health across people, animals and the environment.',
    p2: 'Because we believe that the health of people, animals and the environment is deeply connected, we offer comprehensive solutions that anticipate, prevent and control the major global health challenges, with the aim of a healthier, more resilient and safer planet for everyone.',
    alt: 'A family with their pet at home and hands holding a plant, a symbol of the One Health approach',
  },
  areasTitle: 'This is how we add health',
  areasIntro:
    'We structure our activity into two main business areas: <strong>pharmaceutical services</strong> and <strong>own brands</strong>.',
  areasIntroMix:
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
};

export const about = { es, ca, en };
