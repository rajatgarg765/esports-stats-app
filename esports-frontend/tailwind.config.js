/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#111618',
        'border': '#293538',
        'text': {
          'primary': '#ffffff',
          'secondary': '#9db2b8'
        }
      }
    },
  },
  plugins: [],
}
