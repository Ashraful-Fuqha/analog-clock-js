/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'unsplash_image': 'url("https://unsplash.it/1500/1000?image=881&blur=5")'
      },
      fontFamily:{
        kalnia: "'Kalnia', serif",
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

