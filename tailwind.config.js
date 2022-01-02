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
        high_dark: '#0A0309',
        primary: '#912483',
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
      width: {
        102: '32rem',
      },
    },
  },
  plugins: [],
};
