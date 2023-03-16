export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'},
      { rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'},
      { rel: 'stylesheet', href:'assets/css/style.css'},
      { rel: 'stylesheet', href:'https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap5.min.css'},
      { rel: 'stylesheet', href:'https://cdn.datatables.net/responsive/2.3.0/css/responsive.bootstrap5.min.css'},
      { rel: 'stylesheet', href:'https://cdn.datatables.net/responsive/2.3.0/css/responsive.dataTables.min.css'},
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js' },
      { src: 'assets/vendor/apexcharts/apexcharts.min.js' },
      { src: 'assets/vendor/datatables/datatables.min.js' },
      { src: 'assets/vendor/datatables/dataTables.bootstrap5.min.js' },
      { src: 'assets/vendor/datatables/responsive.bootstrap5.min.js' },
      { src: 'assets/js/main.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
