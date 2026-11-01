import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ivory: "#F3F0EA",
        ink: "#303234",
        sand: "#D8C8B5",
        sage: "#89968A",
        gold: "#B8A17A",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
