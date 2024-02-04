/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
				baijam: ['Bai Jamjuree', 'sans-serif'],
			},

			colors: {
				strongcyan: "hsl(171, 66%, 44%)",
				lightblue: "hsl(233, 100%, 69%)",
				darkgrayishblue: "hsl(210, 10%, 33%)",
				grayishblue: "hsl(201, 11%, 66%)",
			},
      fontSize: {
        custom: '18px'
      }
    },
  },
  plugins: [],
}