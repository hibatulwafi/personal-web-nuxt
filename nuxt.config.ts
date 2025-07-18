// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2023-01-01",
  css: ["@/assets/tailwind.css", "@/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  app: {
    baseURL: "/personal-web-nuxt/",
    buildAssetsDir: "assets",
  },
});
