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
        'blue-pulse': 'rgba(56, 108, 226, 0.6)',
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
        beat: {
          '0%': {
            transform: 'scale(0.9)',
            boxShadow:
              '0 0 0 0 rgba(56, 108, 226, 0.5), 0 0 0 0 rgba(56, 108, 226, 0.4)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow:
              '0 0 0 50px rgba(56, 108, 226, 0), 0 0 0 100px rgba(56, 108, 226, 0)',
          },
          '100%': {
            transform: 'scale(0.9)',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 1s',
        slideOut: 'slideOut 1s',
        beat: 'beat 2s infinite',
      },
    },
  },
  plugins: [],
};
