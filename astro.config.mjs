// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nizam.codeforpakistan.org',

  integrations: [
    tailwind(),
    starlight({
      title: 'Digital Design Nizam',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
      },
      social: {
        github: 'https://github.com/codeforpakistan/design-system',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/getting-started' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/codeforpakistan/design-system/edit/main', 
      },
      customCss: ['./src/tailwind.css'],
    }),
  ],
});