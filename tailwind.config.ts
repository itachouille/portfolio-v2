import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgba(0, 0, 0, 0.99)',
        'border': 'rgb(255, 255, 255, 0.2)',
        'highlight': 'rgb(126, 87, 194)',
        'white-smoke': "#f2f2f2"
      },
    },
  },
  plugins: [],
};
export default config;
