import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#07090c",
          900: "#0b1012",
          800: "#10181a",
          700: "#182326",
        },
        ink: {
          100: "#f3f5f0",
          300: "#d3dbd1",
          500: "#9ca8a0",
          700: "#647169",
        },
        signal: {
          blue: "#69e6ff",
          indigo: "#a8ef72",
          violet: "#ff8661",
          cyan: "#c9ff5a",
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
          "radial-gradient(60% 50% at 20% 20%, rgba(105,230,255,0.14) 0%, transparent 60%), radial-gradient(50% 45% at 80% 15%, rgba(201,255,90,0.12) 0%, transparent 60%), radial-gradient(55% 55% at 50% 100%, rgba(255,134,97,0.10) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px -8px rgba(201,255,90,0.28)",
        "glow-violet": "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px -8px rgba(255,134,97,0.25)",
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
