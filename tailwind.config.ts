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
        headline: ["var(--font-headline)"],
        paragraph: ["var(--font-paragraph)"],
      },
      colors: {
        background: "#f9f4ef",
        headline: "#020826",
        paragraph: "#2d334a",
        primary: {
          50: "#f6f5f0",
          100: "#e9e7d8",
          200: "#d4cfb4",
          300: "#bbb289",
          400: "#a79a68",
          500: "#98885a",
          600: "#8c7851",
          700: "#69573f",
          800: "#5a4939",
          900: "#4f4134",
          950: "#2c231c",
        },
      },
      screens: { xs: "475px" },
      animation: { fadeIn: "fade 0.7s ease-in-out" },
      keyframes: { fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } } },
    },
  },
  plugins: [],
};
export default config;
