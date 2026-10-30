/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../public/otp.jpeg')",
      },

      fontFamily: {
        arial: ["Arial"],
        rale: ["Raleway"],
        // UI/dashboard face — Inter (loaded in _app), Segoe UI on Windows
        ui: [
          "var(--font-inter)",
          "Inter",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        stripes: "stripes 2s linear infinite",
      },
      keyframes: {
        stripes: {
          "0%, 100%": { backgroundPosition: "1rem 0" },
          "50%": { backgroundPosition: "0 0" },
        },
      },
    },
  },
  plugins: [],
};
