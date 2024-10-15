import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "text-color": "var(--text-color)",
        "text-color-lighter": "var(--text-color-lighter)",
        "image-filter": "var(--image-filter)",

      },
      extend: {
        // Add rtl variant
        textAlign: ['rtl'],
        float: ['rtl'],
        padding: ['rtl'],
        margin: ['rtl'],
      }
    },
  },
  plugins: [],
};
export default config;
