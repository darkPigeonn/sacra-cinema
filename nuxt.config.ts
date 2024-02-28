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
    'bootstrap/dist/css/bootstrap.min.css',
    // "assets/vendor/aos/aos.css",
    // // "assets/vendor/bootstrap/css/bootstrap.min.css",
    // "assets/vendor/bootstrap-icons/bootstrap-icons.css",
    // "assets/vendor/glightbox/css/glightbox.min.css",
    // "assets/vendor/remixicon/remixicon.css",
    // "assets/vendor/swiper/swiper-bundle.min.css",
    "public/assets/css/style.css"
  ],
})
