import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8ecf4",
          100: "#c5cfe3",
          200: "#9aaed0",
          300: "#6f8dbc",
          400: "#5175ae",
          500: "#335da0",
          600: "#2d5298",
          700: "#26448e",
          800: "#1f3784",
          900: "#132471",
          950: "#0a1628",
          DEFAULT: "#0f2044",
        },
        gold: {
          50: "#fef9ec",
          100: "#fdf0ca",
          200: "#fae091",
          300: "#f7cb57",
          400: "#f5b82c",
          500: "#d4a017",
          600: "#b8860b",
          700: "#9a6e09",
          800: "#7d590d",
          900: "#694a10",
          DEFAULT: "#c9a84c",
          light: "#e0c06d",
          dark: "#a67c32",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
