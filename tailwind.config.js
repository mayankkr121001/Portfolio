/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      
      'sm': '640px',
      'md': '850px',
      'mbTb': '930px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    extend: {
      keyframes:{
        bounceTbLp:{
          '0%, 100%': {transform: 'translateY(-0.8rem)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'},
          '50%':{transform: 'translateY(0px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
        },
        bounceInMobile:{
          '0%, 100%': {transform: 'translateY(-0.4rem)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'},
          '50%':{transform: 'translateY(0px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
        },
      }
    },
    animation:{
      bounceInMobile: 'bounceInMobile 1s infinite',
      bounceTbLp: 'bounceTbLp 1s infinite',
    },
    fontFamily:{
      rubikDirt: ["Rubik Dirt", "system-ui"],
      nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements',  nocompatible: true }),
  ],
}