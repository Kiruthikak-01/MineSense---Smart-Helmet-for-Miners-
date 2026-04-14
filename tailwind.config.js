/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      colors: {
        amber: { DEFAULT: "#f59e0b", glow: "#fbbf24" },
        molten: "#ff6b00",
        teal: { DEFAULT: "#00d4aa", dim: "#00a882" },
        coal: "#0a0a0a",
        forge: "#111111",
        steel: "#1a1a1a",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        flicker: "flicker 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
