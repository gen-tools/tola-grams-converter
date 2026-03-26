import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf8f3",
          100: "#f5f1e7",
          200: "#ebe3cf",
          300: "#dccca3",
          400: "#c9aa5c",
          500: "#b8942b",
          600: "#a67a1f",
          700: "#8a621b",
          800: "#6e4e17",
          900: "#5a4114",
        },
        dark: {
          50: "#f9fafb",
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
      },
      transitionDuration: {
        "350": "350ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
