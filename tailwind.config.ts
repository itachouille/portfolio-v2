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
        'background': 'rgba(5, 10, 24, 0.9)',
        'border': 'rgb(255, 255, 255, 0.1)',
        'highlight': 'rgb(126, 87, 194)',
        'white-smoke': "#f2f2f2"
      },
    },
  },
  plugins: [],
};
export default config;
