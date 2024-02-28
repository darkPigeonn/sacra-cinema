// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app : {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/94c81be855.js',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
})
