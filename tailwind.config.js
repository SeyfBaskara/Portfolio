/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      screens: {
         sm: '480px',
         md: '768px',
         lg: '976px',
         xl: '1440px',
      },
      fontSize: {
         sm: '0.9rem',
         base: '1rem',
         md: '1.5rem',
         large: '2rem',
         xl: '2.5rem',
      },
      extend: {
         colors: {
            white: '#FFFFFF',
         },
      },
   },
   plugins: [],
}
