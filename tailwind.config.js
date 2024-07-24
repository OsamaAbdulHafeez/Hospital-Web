/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        grow: 'grow 0.5s ease-out forwards', // Define the custom animation
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        
      },
      colors: {
        customred: '#FF204E',
        customdark: '#A0153E',
        thodadark: '#5D0E41',
        zyadadark: '#00224D',
      },
    },
    
  },
  plugins: [],
}