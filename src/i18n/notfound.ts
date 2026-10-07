// Textos de la pàgina 404 en els tres idiomes (de moment només es publica la de castellà; català i anglès, quan es validi el disseny).
import type { Lang } from './config';

export const notFound: Record<Lang, { pageTitle: string; title: string; text: string; cta: string }> = {
  es: {
    pageTitle: '404 Error: Página no encontrada',
    title: 'No hemos encontrado esta página',
    text: 'Es posible que la dirección haya cambiado o que ya no exista.',
    cta: 'Ir a la página de inicio',
  },
  ca: {
    pageTitle: '404 Error: Pàgina no trobada',
    title: 'No hem trobat aquesta pàgina',
    text: "És possible que l'adreça hagi canviat o que ja no existeixi.",
    cta: "Anar a la pàgina d'inici",
  },
  en: {
    pageTitle: '404 Error: Page not found',
    title: 'Page not found',
    text: 'We’re sorry, but the page that you are looking for does not exist.',
    cta: 'Back to homepage',
  },
};
