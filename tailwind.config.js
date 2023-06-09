/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {
        'custom-white': '#fbfbfd',
        'custom-gray': '#dbdbdb',
        'custom-blue': '#23292f',
        'copywriting-green': '#4f7b70',
        'custom-gold': '#d4AF37',
      },
      fontSize: {
        'h1': '10rem',
        'h1-mobile': '3rem',
        'h1-tablet': '6rem',
        'h2-mobile': '1.5rem',
        'h2-tablet': '2rem',
        'h2-desktop': '3rem',
        'h3-mobile': '1rem',
        'h3-tablet': '1.5rem',
        'h3-desktop': '2.5rem',
      },
      colors: {
        'copywriting-green': '#4f7b70',
        'custom-gold': '#d4AF37',
      },
    },
  },
  plugins: [],
}
