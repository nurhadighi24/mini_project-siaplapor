/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-1-navbar": "#0855A5",
        "blue-2-navbar": "#22325D",
        "custom-orange-1": "#F7D38A",
        "custom-blue-1": "#037ACA",
        "custom-blue-2": "#22325E",
        "custom-blue-3": "#182548",
        "custom-lightgreen-1": "#00B798",
        "custom-orange-2": "#FC4F49",
      },
      borderRadius: {
        "radius-20px": "20px",
      },
      fontFamily: {
        "quicksand-font": ["Quicksand", "sans-serif"],
        "jockeyone-font": ["Jockey One", "sans-serif"],
      },
      height: {
        "500-to-rem": "35rem",
      },
    },
  },
  plugins: [],
};
