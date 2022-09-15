/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#133E61",
        link: "#1142C1",
        shadow: "#E9F1FD",
        bg: "#F5F9FF",
      },
      rotate: {
        7: "7deg",
      },
    },
  },
  plugins: [],
};
