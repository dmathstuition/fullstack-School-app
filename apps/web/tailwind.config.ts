import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#1d4ed8",
          600: "#1e40af"
        }
      }
    }
  },
  plugins: []
};

export default config;
