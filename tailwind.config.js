/** @type {import('tailwindcss').Config} */
import tailwindForms from "@tailwindcss/forms";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindForms(),  // ✅ Adds better form styling
    tailwindScrollbar(),  // ✅ Enables custom scrollbar styling
  ],
};