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

            { label: 'For designers', slug: 'get-started/designers' },

            { label: 'For developers', slug: 'get-started/developers' },
            
            
          ],
        },

        {
          label: 'Typography',
    
          items: [


            { label: 'Sizing', slug: 'typography/sizing' },

            { label: 'Font families', slug: 'typography/font-families' },



          ],
        },


        {
          label: 'Colors',
    
          items: [

            { label: 'Theme tokens', slug: 'colors/tokens' },

            { label: 'Nizam Green', slug: 'colors/nizam-green' },

            { label: 'Usage instructions', slug: 'colors/usage' },


          ],
        },

        {
          label: 'Layout',
    
          items: [


            { label: 'Breakpoints', slug: 'layout/breakpoints' },

            { label: 'Containers', slug: 'layout/containers' },

            { label: 'Responsive content layout', slug: 'layout/content-layout' },

            { label: 'Right-to-left direction', slug: 'layout/rtl' },
        

          ],
        },

        {
          label: 'Content',
    
          items: [


            { label: 'Common terms in Urdu', slug: 'content/urdu-terms' },


          ],
        },
        

        {
          label: 'Components',
    
          items: [


            { label: 'All components', slug: 'components/all-components' },


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
      head: [
        {
          tag: 'meta',
          attrs: {
            'property': 'og:image',            
            content: 'https://nizam.codeforpakistan.org/thumbnail.png',
          },
        },
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-4KH9L9JV6J',
          },
        },
        {
          tag: 'script',
          attrs: {            
            src: 'gtag.js',
          },
        },
        
      ],
    }),
  ],
});