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
      darkseagreen: {
        // aumenta la oscuridad del color
        50: '#8fbc8f',
        100: '#7cc37c',
        200: '#6aaf6a',
        300: '#589b58',
        400: '#467746',
        500: '#336633',
        600: '#214321',
        700: '#102f10',
        800: '#001b00',
        900: '#000700',
      },
    },
  },
  plugins: [],
}
