module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_4c: "#ffffff4c",
          A700_7f: "#ffffff7f",
          A700_33: "#ffffff33",
          A700_cc: "#ffffffcc",
          A700: "#ffffff",
        },
        indigo: { "900_4c": "#1f26874c" },
        yellow: { A200: "#ffff00", A200_99: "#ffff0099" },
        black: { "900_33": "#00000033" },
        blue_gray: { 100: "#d9d9d9" },
        gray: { 900: "#0e1f37" },
      },
      fontFamily: { poppins: "Poppins" },
      boxShadow: { bs: "0px 8px  32px 0px #1f26874c" },
      textShadow: { ts: "0px 0px  5px #00000033" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
