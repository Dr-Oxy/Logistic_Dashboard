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
      },
    },
  },
  plugins: [],
};
