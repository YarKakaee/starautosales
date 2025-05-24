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
			keyframes: {
				gradient: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
				shimmer: {
					'0%': {
						'background-position': '-1000px 0',
					},
					'100%': {
						'background-position': '1000px 0',
					},
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0)',
						opacity: '0.3',
					},
					'25%': {
						transform: 'translateY(-20px) translateX(10px)',
						opacity: '0.5',
					},
					'50%': {
						transform: 'translateY(-40px) translateX(-10px)',
						opacity: '0.3',
					},
					'75%': {
						transform: 'translateY(-20px) translateX(10px)',
						opacity: '0.5',
					},
				},
			},
			animation: {
				gradient: 'gradient 15s ease infinite',
				shimmer: 'shimmer 8s linear infinite',
				float: 'float 10s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
