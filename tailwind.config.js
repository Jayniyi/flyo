/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'Dark-blue': 'hsl(217, 28%, 15%)',
      white: '#FFFFFF',
      'button-pdf': 'hsl(198, 60%, 50%)',
      'button-hover': 'hsl(176, 68%, 64%)',
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
      'mobile-bg-curvy':"url('/src/assets/img/bg-curvy-mobile.svg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
