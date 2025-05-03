
import { defineConfig } from "tailwindcss";
import animate from "tailwindcss-animate";

export default defineConfig({
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "photo-dark": "#0F0F0F",
        "photo-gray": "#272727",
        "photo-light-gray": "#4A4A4A",
        "photo-purple": "#9b87f5",
        "photo-teal": "#4ECDC4",
      },
      backgroundColor: {
        'photo-dark': '#0F0F0F',
        'photo-gray': '#272727',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        "pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [
    animate,
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    },
  ],
});
