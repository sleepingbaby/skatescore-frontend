import DaisyUIPlugin from "daisyui";

/ @type {import("tailwindcss").Config} */;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [DaisyUIPlugin],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      text: "#040506",
      background: "#F9FAFB",
      primary: "#98A9B3",
      secondary: "#C7D0D6",
      accent: "#596D78",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
};
