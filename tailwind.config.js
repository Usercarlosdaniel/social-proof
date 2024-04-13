/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        magenta: {
          "very-dark": "hsl(300, 43%, 22%)",
          "dark-grayish": "hsl(303, 10%, 53%)",
          "light-grayish": "hsl(300, 24%, 96%)",
        },
        "pink-soft": "hsl(333, 80%, 67%)",
      },
      screens: {
        md: {
          max: "48em",
        },
      },
    },
  },
  plugins: [],
};
