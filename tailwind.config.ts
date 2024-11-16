import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
      },
      colors: {
        background: "#f5f4f4",
        primary: {
          50: "#f9f8f7",
          100: "#f3efed",
          200: "#e9e2df",
          300: "#d8cdc9",
          400: "#c1afa8",
          500: "#a1887f",
          600: "#927970",
          700: "#79645c",
          800: "#65554f",
          900: "#574a45",
          950: "#2d2522",
        },
      },
      screens: { xs: "475px" },
      animation: { fadeIn: "fade 1s ease-in-out" },
      keyframes: { fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } } },
    },
  },
  plugins: [],
};
export default config;
