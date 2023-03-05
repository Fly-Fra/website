/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat" : ['Montserrat', 'sans-serif'],
        "Martel" : ['Martel Sans', 'sans-serif'],
        "Montserrat-alt" : ['Montserrat Alternates', 'sans-serif'],
        "Roboto" :['Roboto' , "sans-serif"]
      },
      colors:{
        "dark-blue":"#16181F",
        "light-blue":"#141B2D",
        "main-red":"#C31C36",
        "secondary-red":"#ED3552",
        "dark-grey" :"#333333",
        "light-grey":"#F5F5F5",
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
