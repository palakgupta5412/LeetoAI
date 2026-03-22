/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f', // Deep dark aesthetic
        surface: 'rgba(255, 255, 255, 0.05)', // Glassmorphism base
        primary: '#F28D00', // Dreamy purple
        accent: '#E8C3C3', // Neon blue
      },
      backdropBlur: {
        md: '12px',
      },
      animation: {
        'grid-move': 'grid-move 20s linear infinite',
      },
      keyframes: {
        'grid-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' }, // Adjust for speed
        }
      },      
      fontFamily: {
        // Add "Tourney" to your font families
        montserrat: ['"Montserrat"', 'sans-serif'],
        tourney: ['"Tourney"', 'cursive'],
      },
    },
  },
  plugins: [],
}