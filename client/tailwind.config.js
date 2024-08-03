/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        108: "30rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
