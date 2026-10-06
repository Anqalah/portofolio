import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FBF8F1",
          100: "#F4EFE3",
          200: "#E8DFC9",
          300: "#D9CDAF",
        },
        ink: {
          900: "#111111",
          700: "#2B2B2B",
          500: "#4A4A4A",
          300: "#8A8A8A",
          100: "#C9C9C9",
        },
        seal: { 500: "#B23A2A", 600: "#8F2C1F" },
        gold: { 500: "#C9A227" },
        jade: { 500: "#4F7C6A" },
        mist: { 500: "#7A8B99" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        brush: "12px 2px 12px 2px",
        brushAlt: "2px 12px 2px 12px",
      },
      boxShadow: {
        paper: "0 2px 8px rgba(17, 17, 17, 0.06)",
        ink: "0 4px 16px rgba(17, 17, 17, 0.10)",
        seal: "0 6px 24px rgba(178, 58, 42, 0.18)",
      },
      keyframes: {
        inkSpread: {
          "0%": { opacity: "0", filter: "blur(12px)", transform: "scale(0.96)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "scale(1)" },
        },
        brushReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        mistDrift: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(12px)" },
        },
      },
      animation: {
        "ink-spread": "inkSpread 800ms cubic-bezier(0.22,1,0.36,1) forwards",
        "brush-reveal": "brushReveal 900ms cubic-bezier(0.22,1,0.36,1) forwards",
        "mist-drift": "mistDrift 12s ease-in-out infinite",
      },
      transitionTimingFunction: {
        ink: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;