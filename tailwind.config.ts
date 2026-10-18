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
        ink: "#0d1a2a",
        charcoal: "#20242b",
        muted: "#667085",
        stone: "#6b6458",
        line: "#e6e9ef",
        paper: "#f6f1e7",
        "paper-deep": "#ede5d4",
        sand: "#e2d6bd",
        gold: "#b8904d",
        bronze: "#8a6230",
        blue: "#2f6fb3"
      },
      fontFamily: {
        display: ["var(--font-display)", "Songti SC", "STSong", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 32, 51, 0.08)",
        warm: "0 28px 60px -28px rgba(70, 48, 18, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
