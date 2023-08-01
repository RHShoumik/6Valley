/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx,png}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#337EEA",
        secondary: "#0F1D34",
        darkBg:"#282828",
        darkBgBody:"#18181A",
        fontColor: "#222222",
        heading: "#1455AC",
        white:"#fff",
        lightGray: "#F8F8FA",
        primaryLight: "fafafa"
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    }, 
    screens: {
      "sm": "420px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1320px",
    },
  },
  plugins: [],
}