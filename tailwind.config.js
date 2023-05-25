/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        saly: "url(/src/assets/img/Saly.svg)",
      },
      colors: {
        background: "#BFD732",
        button: "#444444",
        title: "#444444",
        border: "#444444",
      },
      width: {
        button: "calc(100vw - 60px)",
        "sign-in": "calc(100vw - 60px)",
        line: "calc(100% - 30px)",
        input: "calc(100% - 50px)",
      },
      minHeight: {
        "100%": "calc(100vh)",
      },
      rotate: {
        doodle: "-82.2deg",
      },
      screens: {
        tall: { raw: "(max-width: 400px)" },
      },
    },
  },
  plugins: [],
};
