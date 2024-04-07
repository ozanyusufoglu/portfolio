/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        brutal: '-6px 6px 0px lightgray',
        brutalHover: '-4px 4px  0px',
        brutalActive: '-2px 2px  0px',
      },
      animation: {
        float:
          '1s ease-in-out infinite alternate-reverse',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        float: {
          from: 'transform: translateY(0px)',
          to: 'transform: translateY(20px)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
