const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
      },
      dropShadow: {
        webhooks: [
          "33px 132px 54px rgba(42, 75, 131, 0.01)",
          "19px 74px 46px rgba(42, 75, 131, 0.05)",
          "8px 33px 34px rgba(42, 75, 131, 0.09)",
          "2px 8px 19px rgba(42, 75, 131, 0.1)",
          "0px 0px 0px rgba(42, 75, 131, 0.1)",
        ],
      },
      boxShadow: {
        imageReel: [
          "0px 189px 76px rgba(0, 0, 0, 0.01)",
          "0px 106px 64px rgba(0, 0, 0, 0.03)",
          "0px 47px 47px rgba(0, 0, 0, 0.04)",
          "0px 12px 26px rgba(0, 0, 0, 0.05)",
          "0px 0px 0px rgba(0, 0, 0, 0.05)",
        ],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        "bg-gradient": (angle) => ({
          "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
        }),
      });
    }),
  ],
};
