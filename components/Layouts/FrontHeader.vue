<template>
  <header class="ud-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <nuxt-link class="navbar-brand" to="/">
              
              <!--<img src="low-res.jpg" srcset="high-res.jpg 2x">-->
              <img
                src="/images/logo/saldobit.png"
                alt="Logo Saldobit"
                width="139"
                height="46"
              />
            </nuxt-link>
            <button class="navbar-toggler" aria-label="Menu Navigation">
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
              <span class="toggler-icon"> </span>
            </button>

            <div class="navbar-collapse">
              <ul id="nav" class="navbar-nav mx-auto">
                <li class="nav-item">
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="nav-item nav-item-has-children">
                  <a href="#"> Layanan Kami </a>
                  <ul class="ud-submenu">
                    <li class="ud-submenu-item">
                        <nuxt-link to="/layanan/topup" class="ud-submenu-link">Jasa Top Up PayPal</nuxt-link>
                    </li>
                    <li class="ud-submenu-item">
                      <nuxt-link
                        to="/layanan/jasa-pembayaran-online"
                        class="ud-submenu-link"
                      >
                        Jasa Pembayaran Online
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/blog">Blog</nuxt-link>
                </li>

                <!-- mainkan hiding visible elements start -->
                <li class="nav-item d-block d-sm-block d-md-none">
                  <nuxt-link to="/login">Masuk</nuxt-link>
                </li>
                <!-- mainkan hiding visible elements end -->
              </ul>
            </div>
            <div class="navbar-btn" v-if="!$auth.loggedIn">
              <!-- mainkan hiding visible elements start -->
              <nuxt-link
                to="/login"
                class="ud-main-btn ud-login-btn d-none d-md-inline-block"
                aria-label="Masuk"
              >
                Masuk
            </nuxt-link>
              <nuxt-link
                to="/register"
                class="ud-main-btn ud-white-btn d-none d-md-inline-block"
                aria-label="Daftar"
              >
                Daftar
              </nuxt-link>
              <!-- mainkan hiding visible elements end -->
            </div>
            <div v-else>
              <nuxt-link
                to="/dashboard"
                class="ud-main-btn ud-white-btn d-none d-md-inline-block"
                aria-label="Dashboard"
              >
                Dashboard
              </nuxt-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>