/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#50075D',
				secondary: '#D20DF3',
				tertiary: '#B0C9FB',
				accent: '#89169C',
			},
			fontFamily: {
				roboto: ['Roboto Flex', 'sans-serif'],
				karla: ['Karla', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
