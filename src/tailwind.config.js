/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
          animation: {
            'gradient-x': 'gradient-x 5s ease infinite',
          },
          keyframes: {
            'gradient-x': {
              '0%, 100%': { backgroundPosition: 'left center' },
              '50%': { backgroundPosition: 'right center' },
            },
          },
        },
      },      
    plugins: [],
  }
  