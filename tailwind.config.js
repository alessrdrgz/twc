/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        bglight: '#25262e',
        primary: '#7E3C70',
        secondary: '#B25371',
        terciary: '#F2C175'
      },
      fontFamily: {
        primary: ['var(--font-primary)']
      }
    }
  },
  plugins: []
}
