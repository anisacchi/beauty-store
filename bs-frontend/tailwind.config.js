/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        50: '#FFE7E9',
        100: '#FDC3C6',
        200: '#E68B86',
      },
      secondary: {
        50: '#E7FEFD',
        100: '#C3FDFA',
        200: '#9FFCFA',
      },
      neutral: {
        0: '#FFFFFF',
        50: '#FAFAFA',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        1000: '#000000',
      },
    },
    extend: {
      dropShadow: {
        neutral: '0 8px 24px rgba(97, 97, 97, 0.25)',
        primary: '0 8px 24px rgba(230, 139, 134, 0.25)',
        secondary: '0 8px 24px rgba(159, 252, 250, 0.25)',
      },
    },
  },
  plugins: [],
};
