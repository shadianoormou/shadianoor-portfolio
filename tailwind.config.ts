import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#06040f",
          900: "#0a0818",
          800: "#100c22",
          700: "#181233",
        },
        ink: {
          100: "#f1eefc",
          300: "#c9c3e6",
          500: "#8f88b3",
          700: "#5c5580",
        },
        signal: {
          blue: "#4c7dff",
          indigo: "#6e5bff",
          violet: "#9b5cff",
          cyan: "#3fd0ff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "aurora":
          "radial-gradient(60% 50% at 20% 20%, rgba(76,125,255,0.20) 0%, transparent 60%), radial-gradient(50% 45% at 80% 15%, rgba(155,92,255,0.18) 0%, transparent 60%), radial-gradient(55% 55% at 50% 100%, rgba(110,91,255,0.16) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px -8px rgba(76,125,255,0.35)",
        "glow-violet": "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px -8px rgba(155,92,255,0.35)",
      },
      animation: {
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 13s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
