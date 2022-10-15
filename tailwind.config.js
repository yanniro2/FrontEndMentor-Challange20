/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  safelist: [
    "h-[35px]",
    "h-[70px]",
    "h-[105px]",
    "h-[62px]",
    "h-[47px]",
    "h-[87px]",
    "h-[51px]",
  ],
  theme: {
    screens: {
      Mobile: { "min": "375px", "max": "600px" },
      Tab: { "min": "600px", "max": "900px" },
      Desktop: { "min": "1200px", "max": "1440px" },
    },
    colors: {
      // primary
      "Soft-red": "hsl(10, 79%, 65%)",
      "light-red": "hsl(10, 79%, 70%)",
      "Cyan": "hsl(186, 34%, 60%)",
      "light-Cyan": "hsl(186, 34%, 70%)",

      // Neutral
      "Dark-brown": "hsl(25, 47%, 15%)",
      "Medium-brown": "hsl(28, 10%, 53%)",
      "Cream": "hsl(27, 66%, 92%)",
      "Very-pale-orange": "hsl(33, 100%, 98%)",
    },
    fontSize: {
      "ms": "18px",
    },
    fontFamily: {
      "DmSans": ["DM Sans", "sans-serif"],
    },
    fontWeight: {
      "ms": 400,
      "xl": 700,
    },
    extend: {},
  },
  plugins: [],
}
