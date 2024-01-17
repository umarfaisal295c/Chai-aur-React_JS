/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      srceens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      container: {
        padding: "6rem",
        center: true,
      },
      fontFamily: {
        popins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        lemon:" 'Lemon', serif;"
      },
      colors: {
        primary: "#FD3D57",
        secondary: "#324324",
        'flag':"#013F1B"
      },
    },
  },
  plugins: [],
};
