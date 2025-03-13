/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/assets/images/banner.jpg')",
        counterbanner: "url('/assets/images/counter-banner.jpg')",
      },
      boxShadow: {
        md: "0 1px 4px 2px rgb(0 0 0/0.1)",
        xl: "0 2px 8px 4px rgb(0 0 0/0.1)",
      },
      container: {
        center: true,
        screens: {
          xl: "1180px",
        },
      },
    },
  },
  plugins: [],
};

