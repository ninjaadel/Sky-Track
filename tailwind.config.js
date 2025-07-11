const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // özelleştirme alanların
    },
    screens: {
      
      xs: "360px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1399px",
      "2xl": "1650px",
    },
  },
  plugins: [plugin(...), plugin(...)],
};