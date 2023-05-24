/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#34B9B9",
        navColor: "#1F1F1F",
        categoriesColor: "#B8B8B8",
        cardDetails: "#878787",
        showMore: "#D4D4D4",
        bannerText: "#F3F3F3",
        footerText: "#8F8F8F",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        VAGRounded: ["VAGRounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
