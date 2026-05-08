// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://dufi1928.github.io',
  base: '/custos-avocats',
  output: 'static',
  adapter: netlify(),
});
