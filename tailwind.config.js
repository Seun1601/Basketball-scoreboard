/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    
      colors: { 
        primary: { 500: '#FF6363;', 800: '#FF1313;', 
        another: {300: '#1b244a;' },
        } 
      }, 
      fontFamily: { 
        poppins: ['Poppins', 'sans-serif'],     
      CursedTimerUlil: ['CursedTimerUlil', 'cursive'], 
        verdana:['verdana', 'sans-serif']
    }, 
  },
  },
  plugins: [],
}
