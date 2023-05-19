/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'saly': "url(/src/assets/img/Saly.svg)"
      },
      colors: {
        background: "#BFD732",
        button: "#444444"
      },
      width:{
        "button" : "calc(100vw - 60px)"
      },
      minHeight: {
        "100%": "calc(100vh)",
      },
    },
  },
  plugins: [],
};
