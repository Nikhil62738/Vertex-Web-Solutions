/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#070b1f",
        ink: "#0d1230",
        electric: "#4f8cff",
        violet: "#8b5cf6",
        cyan: "#46d9ff"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(79, 140, 255, 0.28)",
        card: "0 24px 70px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
