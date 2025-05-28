import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
  n: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './public/index.html',
    ],
    options: {
      safelist: [
        /^daisy-/,  // Safelist daisyUI classes
      ],
    },
  },
};

export default config;