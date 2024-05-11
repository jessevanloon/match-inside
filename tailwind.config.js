/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-background": "#111111",
        "light-dark-background": "#252525",
        "accent-orange": "#F97300",
        white: "#F0F0F0",
        "accent-green": "#19362D",
        grey: "#515151",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
