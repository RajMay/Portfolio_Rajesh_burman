/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
  extend: {
    zIndex: {
      '-1': '-1',
    }
  }
},
 corePlugins: {
    // Enables scroll behavior
    scrollBehavior: ['responsive'],
  },

}