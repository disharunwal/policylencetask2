/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb", // Light background color
        foreground: "#1f2937", // Dark foreground color
        card: "#ffffff", // White card background
        border: "#e5e7eb", // Light gray border
        primary: "#ff7d33", // Your theme color
      },
    },
  },
  plugins: [],
}
