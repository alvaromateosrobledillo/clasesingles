/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        azulOscuro: "#1E3A8A",
        verdeBosque: "#10B981",
        grisClaro: "#F3F4F6",
        blancoPuro: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "Open Sans", "sans-serif"],
        title: ["Poppins", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        customLight: "0 4px 6px rgba(0, 0, 0, 0.1)",
        customDark: "0 4px 6px rgba(0, 0, 0, 0.4)",
      },
      fontSize: {
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "30px"],
        "2xl": ["24px", "36px"],
        "3xl": ["30px", "45px"],
        "4xl": ["36px", "54px"],
      },
    },
  },
  plugins: [],
};
