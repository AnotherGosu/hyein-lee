import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        text: ["var(--font-text)"],
      },
      colors: {
        background: "#f6efde",
        primary: {
          50: "#faf6f2",
          100: "#f4eae0",
          200: "#e0c6ae",
          300: "#d8b599",
          400: "#c79270",
          500: "#bb7854",
          600: "#ae6548",
          700: "#91513d",
          800: "#754337",
          900: "#5f382f",
          950: "#331b17",
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
export default config;
