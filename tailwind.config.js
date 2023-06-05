/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      background: {
        bar: "linear-gradient(180deg, #BFD732 0%, #39B54A 100%)",
      },
      backgroundImage: {
        saly: "url(/src/assets/img/Saly.svg)",
      },
      colors: {
        background: "#BFD732",
        navbar: "#444444",
        button: "#444444",
        title: "#444444",
        border: "#444444",
        filter: "rgba(68, 68, 68, 0.5)",
        unverified: "rgba(230, 21, 135, 0.1)",
        verified: "rgba(57, 181, 74, 0.1)",
        "bg-unverified": "rgba(230, 21, 135, 0.1)",
        "bg-verified": "rgba(57, 181, 74, 0.1)",
        "bar-unverified": "#E61587",
        "bar-verified": "#39B54A",
      },
      width: {
        button: "calc(100vw - 60px)",
        "sign-in": "calc(100vw - 60px)",
        line: "calc(100% - 30px)",
        input: "calc(100% - 50px)",
        "input-search": "calc(100vw - 60px)",
        shadow: "calc(100vw - 20px)",
        container: "calc(100vw - 20px)",
        "container-2": "calc(100% - 40px)",
        "container-desktop": "calc(100vw - 554px)",
        hr: "calc(100% - 30px)",
        filter: "calc(100% - 40px)",
        person: "calc(100% - 40px)",
      },
      minWidth: {
        "button-filter": "92px",
      },
      minHeight: {
        "100%": "calc(100vh)",
        container: "calc(100vh - 172px)",
        "container-2": "calc(100vh - 249px)",
        "container-profile": "calc(100vh - 107px)",
        fold: "calc(100vh - 120px)",
        "fold-2": "calc(100vh - 110px)",
      },
      maxHeight: {
        container: "calc(100vh - 172px)",
        "container-2": "calc(100vh - 249px)",
        fold: "calc(100vh - 120px)",
        "fold-2": "calc(100vh - 197px)",
      },
      spacing: {
        "img-spacing-left": "calc(50% - 138.5px/2 + 0px)",
        "img-spacing-top": "calc(50% - 138.5px/2 + 0px)",
      },
      boxShadow: {
        container: "0px 4px 4px rgba(68, 68, 68, 0.3)",
      },
      rotate: {
        doodle: "-82.2deg",
      },
      screens: {
        fold: { raw: "(max-width: 280px)" },
        "fold-horizontal": {
          raw: "(max-width: 1000px) and (max-height: 400px)",
        },
        default: { raw: "(min-width: 281px)" },
        shadow: { raw: "(max-height: 600px)" },
      },
    },
  },
  plugins: [],
};
