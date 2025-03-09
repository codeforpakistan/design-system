import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';



const accent = { 50: '#E5F7EE', 100: '#B6E7CB', 200: '#80D5A3', 300: '#55C885', 400: '#2BBA67', 500: '#00AC48', 600: '#008F3C', 700: '#007330', 800: '#005126', 900: '#01411C',  960: '#002812' };


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.emerald,

			},
			fontFamily: {
				// Your preferred text font. Starlight uses a system font stack by default.
				sans: ['"Open Sans"'],
			
			  },
		},
	},
	plugins: [starlightPlugin()],
};
