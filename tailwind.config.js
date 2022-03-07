module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        avatar: "url('/avatar.jpg')",
      },
      colors: {
        'custom-blue': 'rgba(56, 108, 226)',
        'dark-blue': 'rgb(1, 27, 87, 0.75)',
        'overlay-black': 'rgba(0, 0, 0, 0.301)',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-200px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideOut: {
          '0%': {
            left: '-10px',
            opacity: '0.8',
          },
          '50%': {
            left: '-300px',
            opacity: '0.5',
          },
          '100%': {
            left: '-380px',
            opacity: '0',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 1s',
        slideOut: 'slideOut 1s',
      },
    },
  },
  plugins: [],
};
