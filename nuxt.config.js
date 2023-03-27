export default {
  head: {
    title: 'Jual Saldo Paypal dan Jasa Pembayaran Online - Saldobit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'title', content: 'Jual Saldo Paypal dan Jasa Pembayaran Online - Saldobit' },
      { name:'description', content: 'Situs jual saldo PayPal dan jasa pembayaran online. Nikmati beli saldo PayPal, top up PayPal, isi saldo PayPal dengan murah, cepat dan aman di Saldobit.'}
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
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    Headers:{
      'Content-Type': 'application/json'

    },
    common: {
      'Accept': 'application/json'
    },
  },

  proxy: {
    '/api/': { target: process.env.API_URL, pathRewrite: {'^/api/': ''} }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  ssr: false,
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false
  },
  target: 'client',
  auth: {
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/panel'
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: false,
      home: '/panel'
    },
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: "/api",
        endpoints: {
          login: {
            url: '/login'
          },
          refresh: {
            url:'/refresh'
          },
          logout: {
            url: '/logout'
          },
          user: {
            url: '/user'
          }
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    }
  },
  //midleware
  router: {
    middleware: ['auth']
  }
}
