// Textos i fotos del bloc «Nuestras instalaciones» de Quiénes somos (desktop: Facilities.astro; mòbil: QuienesMobile.astro). Una sola font de veritat.
// Textos dels espais: de l'usuari (CA/EN, meus, a revisar). Fotos recomanades: 1200×1600 px (3:4, vertical), JPG.
import type { Lang } from './config';

export interface FacilitiesText {
  title: string;
  big: string;
  rest: string;
  items: { name: string; text: string }[];
}

export const facilities: Record<Lang, FacilitiesText> = {
  es: {
    title: 'Nuestras instalaciones',
    big: '17.000 m²',
    rest: 'dedicados a desarrollo, fabricación, análisis y almacenamiento',
    items: [
      { name: 'Planta de Producción', text: 'Fabricación de complementos alimenticios bajo los más altos estándares de calidad, seguridad y trazabilidad.' },
      { name: 'Laboratorio', text: 'Desarrollo de producto en I+D galénico (medicamentos) y nutricional (complementos alimenticios).' },
      { name: 'Centro logístico', text: 'Operador logístico autorizado como entidad de distribución farmacéutica de productos de uso humano y veterinario.' },
      { name: 'Museo de la Farmacia', text: 'Nexos de Ciencia y Salud: orígenes de la industria farmacéutica y patrimonio histórico de la profesión.' },
      { name: 'Showroom', text: 'Espacio expositivo de marca donde presentar las marcas del grupo y acoger eventos con farmacias y colaboradores.' },
    ],
  },
  ca: {
    title: 'Les nostres instal·lacions',
    big: '17.000 m²',
    rest: 'dedicats a desenvolupament, fabricació, anàlisi i emmagatzematge',
    items: [
      { name: 'Planta de Producció', text: 'Fabricació de complements alimentaris sota els més alts estàndards de qualitat, seguretat i traçabilitat.' },
      { name: 'Laboratori', text: 'Desenvolupament de producte en I+D galènic (medicaments) i nutricional (complements alimentaris).' },
      { name: 'Centre logístic', text: 'Operador logístic autoritzat com a entitat de distribució farmacèutica de productes d’ús humà i veterinari.' },
      { name: 'Museu de la Farmàcia', text: 'Nexos de Ciencia y Salud: orígens de la indústria farmacèutica i patrimoni històric de la professió.' },
      { name: 'Showroom', text: 'Espai expositiu de marca on presentar les marques del grup i acollir esdeveniments amb farmàcies i col·laboradors.' },
    ],
  },
  en: {
    title: 'Our facilities',
    big: '17,000 m²',
    rest: 'dedicated to development, manufacturing, analysis and storage',
    items: [
      { name: 'Production Plant', text: 'Manufacture of food supplements to the highest standards of quality, safety and traceability.' },
      { name: 'Laboratory', text: 'Product development in galenic R&D (medicines) and nutritional R&D (food supplements).' },
      { name: 'Logistics Centre', text: 'Logistics operator authorised as a pharmaceutical distribution entity for human and veterinary products.' },
      { name: 'Pharmacy Museum', text: 'Nexos de Ciencia y Salud: origins of the pharmaceutical industry and historical heritage of the profession.' },
      { name: 'Showroom', text: "Brand exhibition space to present the group's brands and host events with pharmacies and partners." },
    ],
  },
};

// Fotos verticals (1200×1600 o 1200×1320) dins d'un marc gairebé quadrat: el punt d'enquadrament vertical de cada una (%) evita tallar el cap del tècnic, les cares o els cartells.
// posM = enquadrament a l'acordió de mòbil (marc apaïsat 12/5 = finestra de 500px de la foto original); si no hi és, s'usa pos.
export const facilitiesPhotos = [
  { src: '/images/gsn_farma_factory3.jpg', pos: 12, posM: 17.5 },
  { src: '/images/gsn_farma_lab3.jpg', pos: 30 },
  { src: '/images/instalaciones_centro_logistico.jpg', pos: 50 },
  { src: '/images/instalaciones_museo2.jpg', pos: 35 },
  { src: '/images/instalaciones_showroom.jpg', pos: 50, posM: 35 },
];
