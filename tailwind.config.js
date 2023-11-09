import DaisyUIPlugin from "daisyui";

/ @type {import("tailwindcss").Config} */;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [DaisyUIPlugin],
  themes: ["light"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        text: "#040506",
        background: "#F9FAFB",
        white: "#FFFFFF",
        primary: "#98A9B3",
        secondary: "#C7D0D6",
        accent: "#596D78",
      },
      fontSize: {
        small: "0.875rem",
        p: "1rem",
        h5: "1rem",
        h4: "1.25rem",
        h3: "1.5rem",
        h2: "1.75rem",
        h1: "2.5rem",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
};
