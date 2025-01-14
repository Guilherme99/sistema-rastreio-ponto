import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#242526",
        // default: "#ff5688",
        main: "#ffcd00",
        error: "#f35759",
        success: "#366912",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        primary: "#242526",
        contrast: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
