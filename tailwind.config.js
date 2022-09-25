/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue:{
          "100": "#162466",
        },
        lightblue:{
          "100": "#F6F6F9"
        },
        lighterblue:{
          "100":"#f6f6f9"
        },
        grey:{
          "100":"#6a6969"
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      screens:{
          'xs':'310px'
      }
    },
  },
 
  plugins: [],
}