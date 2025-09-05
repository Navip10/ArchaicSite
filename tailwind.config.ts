import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./node_modules/@shadcn/ui/dist/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "var(--gold)",
        obsidian: "var(--obsidian)",
        "obsidian-2": "var(--obsidian-2)",
        white: "var(--white)",
        "gray-1": "var(--gray-1)",
        emerald: "var(--emerald)",
        violet: "var(--violet)",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [animate], // ✅ ESM import
}

export default config
