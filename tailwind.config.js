// tailwind.config.js
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        // vs...
      },
      borderRadius: {
        sm: "var(--radius-s)",
        DEFAULT: "var(--radius)",
        lg: "var(--radius-l)",
        xl: "var(--radius-xl)",
      },
      spacing: {
        element: "var(--spacing-element)",
        "mini-element": "var(--spacing-mini-element)",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        html: {
          color: "var(--foreground)",
          backgroundColor: "var(--background)",
        },
      });
    }),
  ],
};
