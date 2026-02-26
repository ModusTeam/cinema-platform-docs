// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://modusteam.github.io',
  base: '/cinema-platform-docs',

  integrations: [
    starlight({
      title: 'Cinema Platform',
      customCss: ['./src/styles/global.css'],
      components: {
        ThemeSelect: './src/components/CustomThemeSelect.astro',
        Footer: './src/components/CustomFooter.astro',
      },
      plugins: [
        starlightOpenAPI([
          {
            base: 'api',
            schema: 'https://cinematestapi.runasp.net/swagger/v1/swagger.json',
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Architecture',
          autogenerate: { directory: 'architecture' },
        },
        {
          label: 'Developer Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'REST API Reference',
          items: openAPISidebarGroups,
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
