/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Dancing-Script':["Dancing Script","cursive"],
        'Yanone-Kaffeesatz':["Yanone Kaffeesatz","sans-serif"]
      }
    },
  },
  plugins: [],
}

