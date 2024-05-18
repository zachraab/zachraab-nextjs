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
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
				'spin-slow': 'spin 10s linear infinite',
			},
		},
	},
  plugins: [],
}

