/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    
      colors: { 
        primary: { 500: '#FF6363;', 800: '#FF1313;', 
        } 
      }, 
      fontFamily: { 
        poppins: ['Poppins', 'sans-serif'],     
      CursedTimerUlil: ['CursedTimerUlil', 'cursive'], 
    }, 
  },
  },
  plugins: [],
}
