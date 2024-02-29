/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  purge: [
    // Paths to your components and pages to tree-shake unused styles in production build
    './src/**/*.{js,jsx,ts,tsx}',
    // Add more file paths if needed
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      // Add custom theme settings here
      colors: {
        // Customize or add new colors
        primary: '#FA4343',
        secondary: '#A84993',
        tertiary: '#1C1C1C',
        quad: '#A84993',
        muted: '#E18485',
        w: '#FFFFFF',
        warning: '#F6E05E',
        success: '#68D391',
        danger: '#F56565',
        muted: '#3A527C',
        // ...
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      // Extend other theme properties
    },
  },
  variants: {
    extend: {
      // Extend variants here
    },
  },
  plugins: [require("daisyui")
    
  ],
  
};




