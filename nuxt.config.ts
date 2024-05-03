// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app : {
    head: {
      title: 'Sacra Cinema',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Sacra Cinema - Festival Film Keuskupan Surabaya 2024' }
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/94c81be855.js',
          crossorigin: 'anonymous',
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/assets/images/logo.png' }]
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

    "public/assets/css/style.css",
    "public/assets/scss/main.scss",

  ],
  modules: ['nuxt-aos', "@nuxt/ui"],
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
})