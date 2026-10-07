// Textos de Servicios (castellà, català, anglès). Els serveis tenen el mateix ordre als tres idiomes:
// almacenamiento, calidad, regulatorio, camaras-climaticas, acondicionamiento, subvenciones.
// Les imatges i les unitats de la capacitat productiva no canvien segons l'idioma.
import servicesEs from '../data/services.json';

const es = {
  title: 'Servicios farmacéuticos | GSN Farma Labs Group',
  description:
    'Servicios farmacéuticos especializados en desarrollo, fabricación y gestión de productos farmacéuticos y soluciones de salud con altos estándares de calidad.',
  header: {
    title: 'Servicios Farmacéuticos',
    sub: 'Tu partner global en soluciones de salud',
    text: '<strong>17.000 m²</strong> dedicados a desarrollo, fabricación, análisis y almacenamiento.',
    navLabel: 'Servicios',
  },
  chips: [
    'Fabricación',
    'I+D',
    'Almacenamiento',
    'Aseguramiento de calidad',
    'Asuntos regulatorios',
    'Cámaras climáticas y estudios de estabilidad',
    'Acondicionamiento secundario y serialización',
    'Subvenciones',
  ],
  planta: {
    title: 'Planta de Producción',
    alt: 'Planta de producción de GSN Farma',
    p1: 'Fabricación de complementos alimenticios en formas sólidas (comprimidos, cápsulas y doypacks) bajo los más altos estándares de calidad, seguridad y trazabilidad, conforme a normativa GMP e IFS Food Supplements.',
    p2: 'Ofrecemos un servicio integral y flexible, con desarrollos a medida y formatos adaptados a tu marca, desde el desarrollo hasta el producto final.',
  },
  capacity: {
    title: 'Capacidad productiva:',
    unit: 'uds./año',
    note: 'Capacidad operando con 1 turno al día. Capacidades estimadas para producción estándar; pueden variar según la composición y los requerimientos del producto.',
    types: ['Comprimidos', 'Cápsulas', 'Botes pildoreros', 'Doypacks', 'Blísteres', 'Estuches de blísteres'],
  },
  lab: {
    title: 'Laboratorio',
    alt: 'Laboratorio de I+D de GSN Farma',
    p1: 'En el área de I+D combinamos los servicios globales de desarrollo de CoetusPharma con los servicios de desarrollo de producto de GSN Farma, cubriendo tanto I+D galénico (medicamentos y formas farmacéuticas nuevas) como I+D nutricional (complementos alimenticios y productos funcionales).',
    p2: 'Acompañamos proyectos propios y de terceros desde la fase conceptual hasta su escalado industrial, con planta piloto, ensayos de estabilidad y soporte técnico específico, ofreciendo un enfoque integral, flexible y orientado a resultados.',
  },
  specialized: 'Servicios especializados:',
  soon: 'Próximamente',
  services: servicesEs.map(({ title, description }) => ({ title, description })),
  contactText: 'Contáctanos para recibir más información sobre nuestros servicios.',
};

const ca: typeof es = {
  title: 'Serveis farmacèutics | GSN Farma Labs Group',
  description:
    'Serveis farmacèutics especialitzats en desenvolupament, fabricació i gestió de productes farmacèutics i solucions de salut amb alts estàndards de qualitat.',
  header: {
    title: 'Serveis Farmacèutics',
    sub: 'El teu partner global en solucions de salut',
    text: '<strong>17.000 m²</strong> dedicats a desenvolupament, fabricació, anàlisi i emmagatzematge.',
    navLabel: 'Serveis',
  },
  chips: [
    'Fabricació',
    'R+D',
    'Emmagatzematge',
    'Assegurament de qualitat',
    'Afers regulatoris',
    "Cambres climàtiques i estudis d'estabilitat",
    'Condicionament secundari i serialització',
    'Subvencions',
  ],
  planta: {
    title: 'Planta de Producció',
    alt: 'Planta de producció de GSN Farma',
    p1: "Fabricació de complements alimentosos en formes sòlides (comprimits, càpsules i doypacks) sota els més alts estàndards de qualitat, seguretat i traçabilitat, d'acord amb la normativa GMP i IFS Food Supplements.",
    p2: 'Oferim un servei integral i flexible, amb desenvolupaments a mida i formats adaptats a la teva marca, des del desenvolupament fins al producte final.',
  },
  capacity: {
    title: 'Capacitat productiva:',
    unit: 'uds./any',
    note: 'Capacitat operant amb 1 torn al dia. Capacitats estimades per a producció estàndard; poden variar segons la composició i els requeriments del producte.',
    types: ['Comprimits', 'Càpsules', 'Pots pastiller', 'Doypacks', 'Blísters', 'Estoigs de blísters'],
  },
  lab: {
    title: 'Laboratori',
    alt: 'Laboratori de R+D de GSN Farma',
    p1: "A l'àrea de R+D combinem els serveis globals de desenvolupament de CoetusPharma amb els serveis de desenvolupament de producte de GSN Farma, cobrint tant la R+D galènica (medicaments i noves formes farmacèutiques) com la R+D nutricional (complements alimentosos i productes funcionals).",
    p2: "Acompanyem projectes propis i de tercers des de la fase conceptual fins a l'escalat industrial, amb planta pilot, assajos d'estabilitat i suport tècnic específic, oferint un enfocament integral, flexible i orientat a resultats.",
  },
  specialized: 'Serveis especialitzats:',
  soon: 'Properament',
  services: [
    {
      title: 'Emmagatzematge farmacèutic',
      description:
        "Operador logístic farmacèutic, amb autorització com a entitat de distribució farmacèutica majorista de productes d'ús humà i veterinari. Així com magatzem per contracte. Monitorització de les condicions ambientals i control de temperatura. Suport en les retirades de producte del mercat.",
    },
    {
      title: 'Assegurament de la qualitat',
      description:
        "Assessorem fabricants en el compliment de la normativa GMP, amb suport en la preparació d'inspeccions GXP i en l'alliberament de lots i la transferència de fabricació.",
    },
    {
      title: 'Afers regulatoris',
      description:
        'Elaboració i gestió de dossiers de registre (eCTD), presentació de sol·licituds (Nacional, DCP, CP, MRP), suport documental i assessorament científic al llarg de tot el procés regulatori.',
    },
    {
      title: "Cambres climàtiques i estudis d'estabilitat",
      description:
        "Estudis d'estabilitat per avaluar el comportament de medicaments i complements alimentosos sota diferents condicions ambientals, garantint-ne la qualitat, la seguretat i l'eficàcia i el compliment dels requisits regulatoris (EMA, FDA).",
    },
    {
      title: 'Condicionament secundari i serialització',
      description:
        "Gestió integral del condicionament secundari i la serialització: etiquetatge, estotjat, codificat, termosegellat i muntatge de packs, d'acord amb la normativa vigent.",
    },
    {
      title: 'Subvencions',
      description:
        "Acompanyem empreses en la identificació, gestió i seguiment de subvencions a nivell europeu, estatal, autonòmic, local i privat, assessorant tant grans indústries com pimes en projectes de R+D+i, desenvolupament de producte i inversions, amb un servei integral que abasta des de les oportunitats actuals fins a la planificació d'ajuts futurs.",
    },
  ],
  contactText: 'Contacta amb nosaltres per rebre més informació sobre els nostres serveis.',
};

const en: typeof es = {
  title: 'Pharmaceutical services | GSN Farma Labs Group',
  description:
    'Specialised pharmaceutical services in the development, manufacturing and management of pharmaceutical products and health solutions, to high quality standards.',
  header: {
    title: 'Pharmaceutical Services',
    sub: 'Your global partner in health solutions',
    text: '<strong>17,000 m²</strong> dedicated to development, manufacturing, analysis and storage.',
    navLabel: 'Services',
  },
  chips: [
    'Manufacturing',
    'R&D',
    'Storage',
    'Quality assurance',
    'Regulatory affairs',
    'Climatic chambers and stability studies',
    'Secondary packaging and serialisation',
    'Grants',
  ],
  planta: {
    title: 'Production Plant',
    alt: 'GSN Farma production plant',
    p1: 'Manufacture of food supplements in solid forms (tablets, capsules and doypacks) under the highest standards of quality, safety and traceability, in compliance with GMP and IFS Food Supplements standards.',
    p2: 'We offer a comprehensive and flexible service, with tailor-made developments and formats adapted to your brand, from development to the final product.',
  },
  capacity: {
    title: 'Production capacity:',
    unit: 'units/year',
    note: "Capacity based on one shift per day. Estimated capacities for standard production; they may vary depending on the product's composition and requirements.",
    types: ['Tablets', 'Capsules', 'Pill bottles', 'Doypacks', 'Blisters', 'Blister cartons'],
  },
  lab: {
    title: 'Laboratory',
    alt: 'GSN Farma R&D laboratory',
    p1: "In R&D we combine CoetusPharma's global development services with GSN Farma's product development services, covering both galenic R&D (new medicines and pharmaceutical forms) and nutritional R&D (food supplements and functional products).",
    p2: 'We support in-house and third-party projects from the conceptual phase to industrial scale-up, with a pilot plant, stability testing and specific technical support, offering a comprehensive, flexible and results-oriented approach.',
  },
  specialized: 'Specialised services:',
  soon: 'Coming soon',
  services: [
    {
      title: 'Pharmaceutical storage',
      description:
        'Pharmaceutical logistics operator, authorised as a wholesale pharmaceutical distribution entity for products for human and veterinary use, as well as a contract warehouse. Monitoring of environmental conditions and temperature control. Support with product recalls from the market.',
    },
    {
      title: 'Quality assurance',
      description:
        'We advise manufacturers on compliance with GMP regulations, with support in preparing for GXP inspections and in batch release and manufacturing transfer.',
    },
    {
      title: 'Regulatory affairs',
      description:
        'Preparation and management of registration dossiers (eCTD), submission of applications (National, DCP, CP, MRP), documentary support and scientific advice throughout the entire regulatory process.',
    },
    {
      title: 'Climatic chambers and stability studies',
      description:
        'Stability studies to assess the behaviour of medicines and food supplements under different environmental conditions, ensuring their quality, safety and efficacy and compliance with regulatory requirements (EMA, FDA).',
    },
    {
      title: 'Secondary packaging and serialisation',
      description:
        'Comprehensive management of secondary packaging and serialisation: labelling, cartoning, coding, heat sealing and pack assembly, in accordance with current regulations.',
    },
    {
      title: 'Grants',
      description:
        'We support companies in identifying, managing and monitoring grants at European, national, regional, local and private level, advising both large industries and SMEs on R&D&I projects, product development and investments, with a comprehensive service that ranges from current opportunities to the planning of future funding.',
    },
  ],
  contactText: 'Contact us to receive more information about our services.',
};

export const servicesCopy = { es, ca, en };
/** Serveis marcats com "Próximamente" (mateix ordre que la llista de serveis). */
export const servicesComingSoon = servicesEs.map((s: { comingSoon?: boolean }) => !!s.comingSoon);
