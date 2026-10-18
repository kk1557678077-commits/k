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
        stone: "#46505e",
        line: "#e6e9ef",
        paper: "#eeede9",
        "paper-deep": "#e3e1db",
        sand: "#d6d3cb",
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
