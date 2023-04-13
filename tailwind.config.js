/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'swipe-left': {
          '0%': {transform: 'rotate(-3deg)'},
          '50%':{transform: 'rotate(3deg)'},
          '100%':{transform: 'rotate(-3deg)'}
        }
      },
      animation: {
        'swipe-left': 'swipe-left 2s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
