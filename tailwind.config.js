/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/png/herobg.png')",
        'blue-pattern': "url('/assets/images/png/newslatterbg.png')",
        'footer-pattern': "url('/assets/images/png/footerbg.png')",
        "gradientbtn": "linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)",
      },
      backgroundSize: {
        'full': "100% 100%;"
      },
      fontFamily: {
        'outfit': ["Outfit", "sans - serif"]
      }
    },
  },
  plugins: [],
};
