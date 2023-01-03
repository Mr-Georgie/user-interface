/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: "tw-",
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
