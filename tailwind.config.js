/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			lineHeight: {
				'12': '3rem',
			},
			keyframes: {
				animatedgradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
			},
		},
	},
  plugins: [],
}

