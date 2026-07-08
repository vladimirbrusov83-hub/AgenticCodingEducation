import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — the primary action color across the site (matches Applied).
        brand: {
          DEFAULT: "#185FA5",
          light: "#E6F1FB",
          dark: "#12497f",
        },
        // Per-level accents (one distinct color per level).
        // Level 1 - Foundations (green)
        found: {
          DEFAULT: "#0F6E56",
          light: "#E1F5EE",
          dark: "#0b5342",
        },
        // Level 2 - Applied (blue)
        applied: {
          DEFAULT: "#185FA5",
          light: "#E6F1FB",
          dark: "#12497f",
        },
        // Level 3 - Advanced (amber)
        advanced: {
          DEFAULT: "#854F0B",
          light: "#FAEEDA",
          dark: "#653c08",
        },
        // Neutral
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
