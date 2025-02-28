/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        background: {
          light: "#FFFFFF",
          dark: "#121212",
        },
        text: {
          light: "#1F2937",
          dark: "#F9FAFB",
        },
      },
      animation: {
        "fade-sequence": "fadeSequence 8s infinite", // Controls how fast titles change
      },
      keyframes: {
        fadeSequence: {
          "0%, 25%": { opacity: "1" }, // First title visible
          "30%, 50%": { opacity: "0" }, // First fades out, Second fades in
          "55%, 75%": { opacity: "1" }, // Second visible
          "80%, 100%": { opacity: "0" }, // Second fades out, repeat
        },
      },
    },
  },
  plugins: [],
};
