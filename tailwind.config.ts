import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0D0D0D",
        "bg-card": "#1A1A1A",
        coral: "#E8673A",
        orange: "#F5A623",
        txt: "#F5F5F0",
        muted: "#8A8A85",
        success: "#4CAF6E",
        error: "#E05252",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
