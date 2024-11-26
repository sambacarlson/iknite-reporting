/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#024CAA",
        secondary: "#DBD3D3"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        courier: ['Courier New', "Courier", "monospace"]
      }
    },
  },
  plugins: [],
}

