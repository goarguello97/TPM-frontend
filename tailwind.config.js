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
        saly3: "url(/src/assets/img/Saly3.svg)",
        doodle4: "url(/src/assets/img/Doodle4.svg)",
      },
      colors: {
        background: "#BFD732",
        navbar: "#444444",
        button: "#444444",
        title: "#444444",
        border: "#444444",
        "border-button": "rgba(68, 68, 68, 0.15)",
        filter: "rgba(68, 68, 68, 0.5)",
        unverified: "rgba(230, 21, 135, 0.2)",
        verified: "rgba(57, 181, 74, 0.2)",
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
        "input-desktop": "calc(100% - 120px)",
        "input-search": "calc(100vw - 60px)",
        "input-users-desktop": "calc(100% - 206px)",
        shadow: "calc(100vw - 20px)",
        container: "calc(100vw - 20px)",
        "container-2": "calc(100% - 40px)",
        "container-desktop": "calc(100vw - 554px)",
        "container-desktop-2": "calc(100vw - 312px)",
        "container-desktop-3": "calc(100% - 70px)",
        hr: "calc(100% - 30px)",
        hr2: "calc(100% - 120px)",
        filter: "calc(100% - 40px)",
        person: "calc(100% - 40px)",
      },
      minWidth: {
        "button-filter": "92px",
      },
      height: {
        "container-desktop-2": "calc(100vh - 80px)",
        "container-desktop-3": "calc(100% - 177px)",
        "container-desktop-4": "calc(100% - 162px)",
      },
      minHeight: {
        "100%": "calc(100vh)",
        container: "calc(100vh - 172px)",
        "container-2": "calc(100vh - 249px)",
        "container-profile": "calc(100vh - 107px)",
        fold: "calc(100vh - 120px)",
        "fold-2": "calc(100vh - 110px)",
        "container-users-desktop": "calc(100% - 80px)"
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
        "container-desktop-2":
          "0px 38px 15px rgba(0, 19, 51, 0.01), 0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09), 0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1)",
        "container-desktop-3": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "filter-users-desktop": "0px 4px 4px 0px rgba(68, 68, 68, 0.30)",
      },
      dropShadow: {
        "input-users-desktop": "0px 4px 4px rgba(68, 68, 68, 0.30)",
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
        desktop: { raw: "min-width: 1440px" },
      },
    },
  },
  plugins: [],
};
