/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#BFD732",
      },
      minHeight: {
        "100%": "calc(100vh)",
      },
    },
  },
  plugins: [],
};
