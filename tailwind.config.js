/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        '1140' : '1140px'
      },
      colors:{
        'gray' : '#5A5A5A',
        'black' : '#333333',
        'pupur' : '#F87661',
        'pink' : '#FDD2C7',
        'bluehov' : '#D9E4E2',
        'greenblack' : '#50857B',
        'pinkh' : '#FFFAF5',
        'orange' : '#FE8F7E',
        'cardcolor1' : '#FEE4DF',
        'cardcolor2' : '#FE9280',
        'colorbutton' : '#CF6251',
        
      }
    },
  },
  plugins: [],
}