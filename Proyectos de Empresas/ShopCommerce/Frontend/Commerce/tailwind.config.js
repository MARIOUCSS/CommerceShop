/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f9f9",
        secondary: "#43c2d1",
        tertiary: "#404040",
      },
      backgroundImage: {
        hero: "url(/src/assets/bg.png)",
        // banner: "url(/src/assets/banner.png)",
      },
    },
  },
  plugins: [],
};
