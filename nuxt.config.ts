// https://nuxt.com/docs/api/configuration/nuxt-config
interface Article {
  slug: string;
}
interface News {
  slug: string;
}
export default defineNuxtConfig({
  devtools: { enabled: true },

  app : {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          "http-equiv": "X-UA-Compatible",
          "content" : "IE=edge",
        },
        {
          name: "viewport",
          content : "width=device-width, initial-scale=1, user-scalable=yes"
        },
        {
          name: "author",
          content : "Sacra Cinema Keuskupan Surabaya"
        },
        {
          property: "og:title",
          content : 'Sacra Cinema Keuskupan Surabaya'
        },
        {
          property: "og:description",
          content : 'Sacra Cinema - Festival Film Keuskupan Surabaya 2024 , Kolaborasi Komisi Komsos dan Komisi Bidang Formatio Keuskupan Surabaya, "Mendorong semangat merasul di media sosial dan membangun jejaring dengan insan pastoral komunikasi sosial paroki"'
        },
        {
          property: "og:image",
          content : 'https://sacracinema.keuskupansurabaya.org/assets/images/logo.png'
        },
        {
          property: "og:url",
          content : 'https://sacracinema.keuskupansurabaya.org/'
        },
        {
          property: "og:type",
          content : 'website'
        },
        {
          property: "og:locale",
          content : 'id_ID'
        },

      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/94c81be855.js',
          crossorigin: 'anonymous',
        },
        {
          src : "https://static.elfsight.com/platform/platform.js",
          'data-use-service-core': true,
          defer: true,
        }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/assets/images/logo.png' }]

    },
  },

  site: {
    url: 'https://sacracinema.keuskupansurabaya.org/',
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    "~/assets/css/style.css",
    
  ],


  modules: ['nuxt-aos', "@nuxt/ui", '@nuxtjs/sitemap'],

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
  },
  runtimeConfig: {
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
    PARTNER: process.env.PARTNER,

  },


})