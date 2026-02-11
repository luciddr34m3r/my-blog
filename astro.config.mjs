// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://luciddr34m3r.github.io',
  base: '/my-blog',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap(), react()]
});