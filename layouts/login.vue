<template>
  <div v-if="mounted">
    <LayoutsFrontHeader />
    <Nuxt />
    <LayoutsFrontFooter />
  </div>
  <div v-else>
    <Loader/>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Jual Saldo Paypal dan Jasa Pembayaran Online - Saldobit",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "title",
          content: "Jual Saldo Paypal dan Jasa Pembayaran Online - Saldobit",
        },
        {
          name: "description",
          content:
            "Situs jual saldo PayPal dan jasa pembayaran online. Nikmati beli saldo PayPal, top up PayPal, isi saldo PayPal dengan murah, cepat dan aman di Saldobit.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: process.env.icon || "/favicon.ico",
        },
        {
          rel: "preload",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          as: "style",
        },
        { rel: "preload", href: "/css/ud-styles.css", as: "style" },
        { rel: "preload", href: "/css/animate.css", as: "style" },
        {
          rel: "preload",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
          as: "script",
        },
        { rel: "preload", href: "/js/wow.min.js", as: "script" },
        { rel: "preload", href: "/js/main.js", as: "script" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crosorigin: true,
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
          as: "style",
        },
        { rel: "stylesheet", href: "/css/ud-styles.css", as: "style" },
        { rel: "stylesheet", href: "/css/animate.css", as: "style" },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
        },
        { src: "/js/wow.min.js", defer: true },
        { src: "/js/main.js", defer: true },
      ],
    };
  },
  data(){
    return{
      mounted:false,
    }
  },
  mounted(){
    if(this.$auth.loggedIn){
      this.$router.push('/')
    }
    this.$nextTick(()=> {
      this.mounted = true
    })
  },
};
</script>