import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        vscodebg: "#1e1e1e",
        tabbg: "#2d2d2d",
        tabactive: "#1e1e1e",
        tabtext: "#ccc",
        sidebar: "#252526",
        accent: "#007acc",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
