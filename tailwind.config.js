module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueprint-blue': '#0178E7',
        'blueprint-secondaryBlue': '#E0F0FF',
        'blueprint-sky': '#93C9FE',
        'blueprint-black': '#CCCCCC',
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
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
        anek:["Anek Bangla","sans-serif"],
        sketch:["Just Me Again Down Here", "sans-serif"]
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
};
