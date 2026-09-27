import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#101a14",
          900: "#1d2a22",
          800: "#dce7dc",
          700: "#c4d1c4",
        },
        ink: {
          100: "#101a14",
          300: "#2d3b31",
          500: "#66766a",
          700: "#9aa99d",
        },
        signal: {
          blue: "#2f9d82",
          indigo: "#7fbe45",
          violet: "#e96d4c",
          cyan: "#b5e84f",
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
          "radial-gradient(60% 50% at 20% 20%, rgba(47,157,130,0.15) 0%, transparent 60%), radial-gradient(50% 45% at 80% 15%, rgba(181,232,79,0.17) 0%, transparent 60%), radial-gradient(55% 55% at 50% 100%, rgba(233,109,76,0.11) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16,26,20,0.08), 0 8px 40px -8px rgba(47,157,130,0.28)",
        "glow-violet": "0 0 0 1px rgba(16,26,20,0.08), 0 8px 40px -8px rgba(233,109,76,0.24)",
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
