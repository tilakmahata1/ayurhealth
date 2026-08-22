/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50:  "#f0faf0",
          100: "#dcf5dc",
          200: "#b8eab9",
          300: "#84d486",
          400: "#4eba50",
          500: "#2a9d2e",
          600: "#1e7d22",
          700: "#196320",
          800: "#174f1c",
          900: "#133f18",
          950: "#0a2410",
        },
        white: "#ffffff",
        offwhite: "#f8fdf8",
        gray: {
          50:  "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        gold: "#c9a84c",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body:    ["var(--font-nunito)", "sans-serif"],
        mono:    ["monospace"],
      },
      boxShadow: {
        card:   "0 4px 24px -4px rgba(26,100,30,0.13)",
        green:  "0 8px 32px -8px rgba(26,100,30,0.35)",
        lifted: "0 20px 60px -15px rgba(26,100,30,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
        xl4: "2.5rem",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "fade-in":    "fadeIn 0.5s ease both",
        "slide-left": "slideLeft 0.6s ease both",
        float:        "float 4s ease-in-out infinite",
        pulse2:       "pulse2 2s ease-in-out infinite",
        spin_slow:    "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        fadeIn:    { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideLeft: { "0%": { opacity: 0, transform: "translateX(24px)" }, "100%": { opacity: 1, transform: "translateX(0)" } },
        float:     { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        pulse2:    { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.6 } },
      },
    },
  },
  plugins: [],
};
