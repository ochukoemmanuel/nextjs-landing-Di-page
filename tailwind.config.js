module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#FAECF8',
        dark: '#323B43',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        18: '4.5rem',
      },
      fontSize: {
        '2xs': '0.88rem',
      },
    },
  },
  plugins: [],
};
