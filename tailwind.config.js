// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // özel renklerin buraya
      },
      borderRadius: {
        // özel border-radius değerlerin buraya
      },
      spacing: {
        // özel spacing tanımların buraya
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      // base stiller buraya
    }),
    plugin(({ addVariant }) => {
      // özel variantlar buraya
    }),
  ],
};
