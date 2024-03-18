/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*html"],
  theme: {
    extend: {
      colors:{
        "custom-purple": "#493995",
      },
    },
    fontFamily: {
      DMSans: ["DM Sans, sans-serif"],
    },
  },
  plugins: [],
}

