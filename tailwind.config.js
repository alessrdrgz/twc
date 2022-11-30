/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#1d1e24',
        bglight: '#25262e',
        primary: '#7E3C70',
        secondary: '#B25371',
        terciary: '#F2C175'
      }
    }
  },
  plugins: []
}
