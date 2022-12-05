/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}'
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
