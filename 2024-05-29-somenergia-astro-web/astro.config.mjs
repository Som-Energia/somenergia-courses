import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  i18n:{
    defaultLocale: 'en',
    locales: ['es','ca','en'],
    routing: {
      prefixDefaultLocale: false
  }
  }
});