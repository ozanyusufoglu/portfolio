/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        brutal: "-4px 4px  0px black",
        brutalHover: "-2px 2px  0px grey",
        brutalActive: "-1px 1px  0px grey",
      },
      animation: {
        float: "1s ease-in-out infinite alternate-reverse",
      },
      keyframes: {
        float: {
          from: "transform: translateY(0px)",
          to: "transform: translateY(20px)",
        },
      },
    },
  },
  plugins: [],
};
