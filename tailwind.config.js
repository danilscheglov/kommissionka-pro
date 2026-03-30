/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f4f0ea',
          100: '#e7d8c8',
          200: '#d8bb9c',
          300: '#c79b70',
          400: '#b87e4c',
          500: '#a96735',
          600: '#8c512b',
          700: '#6f3f24',
          800: '#51301d',
          900: '#342015'
        }
      },
      boxShadow: {
        glow: '0 20px 80px rgba(169, 103, 53, 0.35)'
      }
    }
  },
  plugins: []
}
