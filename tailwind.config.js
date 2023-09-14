/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        darkseagreen: '#8fbc8f',
        darkseagreen100: '#7cc37c',
        darkseagreen200: '#6aaf6a',
        darkseagreen300: '#589b58',
        darkseagreen400: '#467746',
        darkseagreen500: '#336633',
        amber: '#fce0bb',
        white10: '#ffffff',
      },

    },
  },
  plugins: [],
}
