// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidpill47.github.io',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
