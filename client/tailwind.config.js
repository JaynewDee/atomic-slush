/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("flowbite/plugin")],
};
