/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background colors 
        'primary-bg': 'rgb(28,28,28)', // Define your custom color
        'secondary-bg' : 'rgb(35 35 35)',

        // text colors 
        't-secondary' : 'rgb(212 212 212 )', 
        't-accent' : 'rgb(55 153 107)',
        't-secondary-dark' : 'rgb(126 126 126)'
      },
    },
  },
  plugins: [],
}