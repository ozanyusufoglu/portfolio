/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        brutal: '-6px 6px 0px lightgray',
        brutalHover: '-0px 4px  0px',
        brutalActive: '-0px 2px  0px',
      },
      animation: {
        float: '1s ease-in-out infinite alternate-reverse',
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
