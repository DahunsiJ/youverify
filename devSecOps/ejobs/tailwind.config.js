/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #1e90ff, 0 0 15px #1e90ff, 0 0 30px #1e90ff' },
          '50%': { boxShadow: '0 0 20px #1e90ff, 0 0 40px #1e90ff, 0 0 60px #1e90ff' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}