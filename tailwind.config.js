/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./tailwind.config.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        big: "48rem",
      },
      colors: {
        primary: { ...colors.slate, DEFAULT: colors.slate[500] },
        secondary: { ...colors.yellow, DEFAULT: colors.yellow[500] },
        accent: { ...colors.blue, DEFAULT: colors.red[500] },
      },
    },
    fontFamily: {
      nunito: ["sans-serif", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: "#ffffff",
            secondary: "#2c2c2c",
            success: "#000000",
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: "#000000",
            secondary: "#ffffff",
            success: "rgb(0, 190, 0)",
          }, // dark theme colors
        },
      },
    }),
  ],
};
