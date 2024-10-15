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
      animation: {
        'fadeIn-slow': 'fadeIn 1s ease forwards',
        'fadeIn-fast': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        }
      }
    },
    plugins: [],
  },
  variants: {
    extend: {
      // Add rtl variant
      textAlign: ['rtl'],
      float: ['rtl'],
      padding: ['rtl'],
      margin: ['rtl'],
    },
  },
};
export default config;
