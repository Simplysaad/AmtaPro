/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '60%': { transform: 'translateY(20px)', opacity: '1' },
          '80%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounceDown: 'bounceDown 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
