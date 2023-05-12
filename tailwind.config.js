/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-white': '#fbfbfd',
      },
      fontSize: {
        'h1': '3rem'
      },
      letterSpacing: {
        'nav-wide': '0.2em'
      }
    },
  },
  plugins: [],
}
