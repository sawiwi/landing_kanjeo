/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      sm:'375px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
      xxl:'1920px',
    },
    colors: {
      primary:{
        default:'#fefdfc',
        opacity:'#fefdfcd4',
        light:'#f9f4ed'
      },
      secondary:{
        default:'#242530',
        opacity:'#242530d4',
        light:'#3a3b4e'
      }
    }
  },
  plugins: [],
}

