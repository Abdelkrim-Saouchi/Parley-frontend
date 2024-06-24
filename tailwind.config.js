import { addDynamicIconSelectors } from "@iconify/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EEEEEE",
        primary: "#222831",
        secondary: "#393E46",
        accent: "#00ADB5",
        "accent-lighten": "#00E2EC",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
