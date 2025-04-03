import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';



const accent = { 50: '#E5F7EE', 100: '#B6E7CB', 200: '#80D5A3', 300: '#55C885', 400: '#2BBA67', 500: '#00AC48', 600: '#008F3C', 700: '#007330', 800: '#005126', 900: '#01411C',  950: '#002812' };


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.emerald,

				nizam_green:  {
					50: '#E5F7EE',
					100: '#B6E7CB',
					200: '#80D5A3',
					300: '#55C885',
					400: '#2BBA67',
					500: '#00AC48',
					600: '#008F3C',
					700: '#007330',
					800: '#005126',
					900: '#01411C', 
					950: '#002812', 
				  },

				primary: 'rgb(var(--color-primary))',
				primary_accent: 'rgb(var(--color-primary_accent))',
				secondary: 'rgb(var(--color-secondary))',
				secondary_accent: 'rgb(var(--color-secondary_accent))',
				foreground: 'rgb(var(--color-foreground))',
				background: 'rgb(var(--color-background))',
				surface: 'rgb(var(--color-surface))',
				muted: 'rgb(var(--color-muted))',
				success: 'rgb(var(--color-success))',
				success_accent: 'rgb(var(--color-success_accent))',
				danger: 'rgb(var(--color-danger))',
				danger_accent: 'rgb(var(--color-danger_accent))',
				warning: 'rgb(var(--color-warning))',
				warning_accent: 'rgb(var(--color-warning_accent))',



			},
			fontFamily: {
				// Your preferred text font. Starlight uses a system font stack by default.
				sans: ['"Open Sans"'],
				serif: ['"EB Garamond"'],
				nastaliq: ['"Gulzar"'],
				naskh: ['"Nafees"'],
			
			  },
		},
	},
	plugins: [starlightPlugin()],
};
