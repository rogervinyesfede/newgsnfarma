// @ts-check
import { defineConfig } from 'astro/config';
import imageDimensions from './integrations/image-dimensions.mjs';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // En construir, afegeix width/height a les imatges locals (reserva d'espai, sense canviar la mida visible)
  integrations: [imageDimensions()],
});
