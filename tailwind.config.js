/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["Nunito Sans", "var(--font-nunito_sans)"],
      },
      colors: {
        cozy: {
          background: "#0b111e",
          snow: "#fffbfc",
          ghostWhite: "#fbfbff",
          slateGray: "#6e7e85",
          powderBlue: "#9eb3c2",
          airBlue: "#6d98ba",
          celestialBlue: "#449dd1",
          greenBlue: "##306BAC",
          payneGray: "#666a86",
        },
      },
    },
  },
  plugins: [],
};
