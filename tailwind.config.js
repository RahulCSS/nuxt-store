/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",],
  theme: {
    extend: {
      fontFamily:{
        Roboto: "Roboto,sans-serif",
      },
      container: {
        center: true,
        padding: "2rem",
      }
    },
  },
  plugins: [],
}

