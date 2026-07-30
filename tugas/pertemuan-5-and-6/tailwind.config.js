/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zapier-inspired warm palette
        primary: "#ff4f00",
        "on-primary": "#fffefb",
        ink: "#201515",
        "ink-soft": "#2f2a26",
        "ink-mid": "#36342e",
        body: "#605d52",
        "body-mid": "#939084",
        mute: "#c5c0b1",
        canvas: "#fffefb",
        "canvas-soft": "#f8f4f0",
        // Status colors
        "status-available": "#16a34a",
        "status-borrowed": "#dc2626",
        "status-available-bg": "#dcfce7",
        "status-borrowed-bg": "#fee2e2",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "12px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(32, 21, 21, 0.08)",
        "card-hover": "0 8px 24px rgba(32, 21, 21, 0.14)",
      },
    },
  },
  plugins: [],
}
