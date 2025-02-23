/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'verdeEscuro': '#181E18',
      'verdeClaro': '#14A472',
      'brancoAreia': '#D9D9D9',
      'cinzaClaro': '#282A28',
      'cinzaEscuro': '#1C1C1C',
      'cinzaBemClaro': '#454745',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}