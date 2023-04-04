/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        energy: "#A162F7",
        range: "#FF7E86",
        tire: "#F6CC0D",
      },
      fontFamily: {
        DM: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
