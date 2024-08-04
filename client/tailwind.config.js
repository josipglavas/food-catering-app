const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      spacing: {
        108: "30rem",
        128: "32rem",
        256: "39rem",
        512: "46rem",
        600: "52rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
