/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fbf3f3",
          100: "#f7e4e4",
          200: "#f0caca",
          300: "#e4a3a4",
          400: "#d4706f",
          500: "#c0413f",
          600: "#9d1c20", // primary brand red
          700: "#85181b",
          800: "#6f1719",
          900: "#5f181a",
          950: "#33090a",
        },
        ink: {
          DEFAULT: "#0c1622",
          800: "#13202f",
          700: "#1c2c3d",
          600: "#2b3d50",
        },
        sand: "#f7f5f2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(12, 22, 34, 0.18)",
        card: "0 24px 60px -20px rgba(12, 22, 34, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
      },
    },
  },
  plugins: [],
};
