import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Montserrat'", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "#A855F7",
          foreground: "#ffffff"
        },
        background: "#FFF7FA",
        foreground: "#374151",
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280"
        }
      }
    }
  },
  plugins: []
};

export default config;