module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anek: ["Anek Bangla", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        blueprint: {
          blue: {
            DEFAULT: "#0177E8",
            light: "#95CCFF"
          },
          black: "#31293C",
          gray: {
            DEFAULT: "#6C6B7A",
            light: "#D6D4D8"
          },
          white: "#F9F9F9",
          red: "#ED5837",
          pink: "#F6AB9B"
        }
      }
    }
  },
  plugins: [],
};
