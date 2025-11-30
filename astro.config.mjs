// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Cambios para la url base del sitio
  site: 'https://davidpill47.github.io',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
