/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#181829',
				secondary: '#222232',
				ternary: '#9A9B9B',
				'base-100': '#FFFCFC',
				warning: '#CB2C2C',
				accent: '#51A331',
				success: '#2648D1',
				neutral: '#C4C4C4',
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				SourceSansPro: ['Source Sans Pro', 'sans-serif'],
			},
		},
	},
	plugins: [require("daisyui")],
};
