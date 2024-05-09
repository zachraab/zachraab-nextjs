/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
		lineHeight: {
			'12': '3rem',
		}
	},
  },
  plugins: [],
}

