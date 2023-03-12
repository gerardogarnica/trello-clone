/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.red,
        primary: colors.blue,
        success: colors.green
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
