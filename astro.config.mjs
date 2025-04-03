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
      head: [
        {
          tag: 'link',
          attrs: {
            href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Gulzar&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
            rel: 'stylesheet',
          },
        },

      ],
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

        {
          label: 'Guidelines',
    
          items: [


            { label: 'Common terms in Urdu', slug: 'guidelines/urdu-terms' },



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
      customCss: [
        './src/fonts/font-face.css',
        './src/tailwind.css',

      ],
    }),
  ],
});