/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			dblue: '#14141b',
			lwhite: '#eaeaea',
			lred: '#de3a3a',
			redd: '#de3a3a',
			lredhover: '#FF9191',
			lgrey: '#969696',
			lgreen: '#408546',
		},
		extend: {
			width: {
				76: '19.3rem',
				90: '23rem',
				128: '31rem',
				'2/7': '19.5%',
			},
			height: {
				84: '23rem',
				109: '32rem',
			},
			dropShadow: {
				'3xl': '1px 1px 20px rgba(0, 0, 0, 0.2)',
				'4xl': '1px 1px 20px rgba(0, 0, 0, 0.5)',
				nav: '0px 6px 11px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [],
};
