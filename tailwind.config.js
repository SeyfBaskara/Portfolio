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
         base: '1.125rem',
         md: '1.5rem',
         large: '3rem',
         xl: '5.5rem',
      },
      extend: {
         colors: {
            Black: '#151515',
            Dark_Gray: '#242424',
            White: '#FFFFFF',
            Grey: '#d9d9d9',
            Green: '#4EE1A0',
         },
      },
   },
   plugins: [],
}
