/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'first' : '#00E0FF',
        'bFirst' : '#00588A',
        'second' : '#FFC7005E',
        'bSecond' : '#665E40',
        'third' : '#FF7A0078',
        'bThird' : '#664D36',
        'fourth' : '#42FF005E',
        'bFourth' : '#4A6640',
      },
      textColor:{
        'firstPrimary' : '#00588A',
        'firstSecondary' : '#233E60',
        'secondPrimary' : '#00000099',
        'secondSecondary' : '#742D06',
        'thirdPrimary' : '#00000099',
        'thirdSecondary' : '#742D06',
        'fourthPrimary' : '#00000099',
        'fourthSecondary' : '#742D06',
      },
      fontFamily:{
        'inter' : ['Inter']
      },
    },
  },
  plugins: [],
}

