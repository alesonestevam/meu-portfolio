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
        lime: {
          50: "#faffe5",
          100: "#f8ffc8",
          200: "#edff8c",
          300: "#f2fb5b",
          400: "#ccf229",
          500: "#add08a",
          600: "#88a03d",
          700: "#6e8308",
          800: "#51670d",
          900: "#445710",
          950: "#233102",
        },
        guava: {
          50: "#fdf3f3",
          100: "#fce7e7",
          200: "#f8d3d4",
          300: "#f2afb1",
          400: "#e98388",
          500: "#df616a",
          600: "#c83647",
          700: "#a8283a",
          800: "#8d2437",
          900: "#792234",
          950: "#430e18",
        },
        gray: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#373737",
          950: "#262626",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      mdd: "1024px",
      lg: "1025px",
      xl: "1280px",
      xll: "1900",
      xxl: "2560px"
    },
  },
  plugins: [],
} satisfies Config;
