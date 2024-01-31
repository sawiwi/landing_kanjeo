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
        default:'#fff3f1',
        opacity:'#fff3f1d4',
        light:'#ffeae7'
      },
      secondary:{
        default:'#00667a',
        opacity:'#00667ad4',
        light:'#0087a2'
      }
    }
  },
  plugins: [],
}

