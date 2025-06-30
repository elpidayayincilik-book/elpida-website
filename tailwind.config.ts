const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        testred: "white",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // or 'Roboto', etc.
      },
      keyframes: {
        updown: {
          "0%, 50%": { transform: "translateY(0)" },
        },
        rotate: {
          "0%, 100%": {
            transform: "rotate(0deg) scale(1.2)",
          },
          "50%": {
            transform: "scale(0.9) rotate(180deg)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        rotate: "rotate 4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
};
export default config;
