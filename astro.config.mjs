// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://dufi1928.github.io',
  base: '/custos-avocats',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
});
