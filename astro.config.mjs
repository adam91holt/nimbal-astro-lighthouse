import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adam91holt.github.io',
  base: '/nimbal-astro-lighthouse',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      assetsInlineLimit: 4096
    }
  }
});
