/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nav:"#15151e"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}