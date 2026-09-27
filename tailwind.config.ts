import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#070711",
          900: "#0d0d1b",
          800: "#15152b",
          700: "#232242",
        },
        ink: {
          100: "#f2f1ff",
          300: "#d0cdfd",
          500: "#9893bd",
          700: "#625d83",
        },
        signal: {
          blue: "#65a6ff",
          indigo: "#7e5bff",
          violet: "#b88cff",
          cyan: "#7fe5ff",
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
          "radial-gradient(60% 50% at 20% 20%, rgba(101,166,255,0.18) 0%, transparent 60%), radial-gradient(50% 45% at 80% 15%, rgba(126,91,255,0.18) 0%, transparent 60%), radial-gradient(55% 55% at 50% 100%, rgba(184,140,255,0.13) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.07), 0 8px 40px -8px rgba(101,166,255,0.34)",
        "glow-violet": "0 0 0 1px rgba(255,255,255,0.07), 0 8px 40px -8px rgba(184,140,255,0.32)",
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
