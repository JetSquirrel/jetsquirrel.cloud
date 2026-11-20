import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jetsquirrel.cloud',
  integrations: [react(), sitemap({
    filter: (page) => ['/', '/work/', '/community/', '/zh/', '/zh/work/', '/zh/community/'].includes(new URL(page).pathname),
    i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-CN' } },
  })],
  vite: { plugins: [tailwindcss()] },
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
