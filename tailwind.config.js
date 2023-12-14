/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        color1: '#22c1c3',
        color2: '#a9169b'
      },
      screens:{
        x_sm: '375px'
      },
      backgroundImage:{
        'desktop': 'url(../../image/desktop.jpg)',
        'mobile': 'url("../../image/mobile.jpg")'
      },
      fontFamily:{
        kalnia: "'Kalnia', serif",
        nova : "'Nova Square', sans-serif"
      },
      boxShadow:{
        b_shadow: "0 0 0 4px rgba(0,0,0,0.1) inset 0 0 0 3px #EFEFEF inset 0 0 10px black 0 0 10px rgba(0,0,0,0.2)"
      },
      transitionTimingFunction:{
        'in_expo': 'cubic-bezier(0.1, 2.7, 0.58, 1)',
      }

    },
  },
  plugins: [],
}

