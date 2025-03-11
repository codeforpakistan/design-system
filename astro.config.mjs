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
          label: 'Get Started',
    
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Home', slug: '' },

            { label: 'For Designers', slug: 'get-started/designers' },

            { label: 'For Developers', slug: 'get-started/developers' },
            
            
          ],
        },

        {
          label: 'Styles',
    
          items: [


            { label: 'Typography', slug: 'styles/typography' },

            { label: 'Colors', slug: 'styles/colors' },
            
            { label: 'Effects', slug: 'styles/effects' },

            { label: 'Layout', slug: 'styles/layout' },


          ],
        },

        // {
        //   label: 'Auto',
        //   autogenerate: { directory: 'get-started' },
        // },


      ],
      editLink: {
        baseUrl: 'https://github.com/codeforpakistan/design-system/edit/main', 
      },
      customCss: ['./src/tailwind.css'],
    }),
  ],
});