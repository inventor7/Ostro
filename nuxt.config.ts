// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks :{

  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt", "@vueuse/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  css: ["@/assets/css/main.css"],
});
