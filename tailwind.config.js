/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e9efe4',
          200: '#d3dec9',
          300: '#b3c7a5',
          400: '#92ab82',
          500: '#748f63',
          600: '#5a724c',
          700: '#475a3d',
          800: '#3a4934',
          900: '#313d2c',
        },
        limestone: '#f4f1ea',
        ink: '#2a2e28',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '1.25rem',
      },
    },
  },
  plugins: [],
}
