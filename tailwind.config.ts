import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#102033",
        charcoal: "#20242b",
        muted: "#667085",
        line: "#e6e9ef",
        gold: "#b8904d",
        blue: "#2f6fb3"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
