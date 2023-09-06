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
          greenBlue: "#306BAC",
          payneGray: "#666a86",
        },
        tesla: {
          100: "#EBF2F9",
          200: "#BDD1E5",
          300: "#8EAFD2",
          400: "#5F8DBF",
          500: "#306BAC",
          600: "#275586",
          700: "#1C3D60",
          800: "#11253A",
          900: "#060D14",
        },
      },
      boxShadow: {
        "tesla-sm": "#11253A 0px 8px 24px",
        "tesla-sm2": "#11253A 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
