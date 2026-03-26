import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        slate: {
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        gray: {
          300: "#d1d5db",
          400: "#9ca3af",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        cyan: {
          400: "#22d3ee",
        },
      },
      transitionDuration: {
        "350": "350ms",
      },
      boxShadow: {
        "gold": "0 0 30px rgba(251, 191, 36, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
