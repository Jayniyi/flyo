/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'Dark-blue': 'hsl(217, 28%, 15%)',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
    backgroundImage: {
      'custom-image': "url('/src/assets/img/bg-curvy-desktop.svg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
