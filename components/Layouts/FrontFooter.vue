<template>
  <div>
    <footer class="ud-footer wow fadeInUp" data-wow-delay=".15s">
      <div class="ud-footer-widgets">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="ud-widget">
                <h5 class="ud-widget-title">Tentang Kami</h5>
                <p class="ud-widget-desc">
                  Ini diambil dari field setting['about_us'] di admin menu
                  setting tab general
                </p>
                <ul class="ud-widget-socials">
                  <!-- ini juga di admin menu setting tab sosmed -->
                  <!-- Jika akun fb diisi, echo akun fb 
				  <li>
                    <a href="https://twitter.com/MusharofChy">
                      <i class="ri-facebook-fill"></i>
                    </a>
                  </li>
				  Jika akun twitter diisi, echo akun twitter
                  <li>
                    <a href="https://twitter.com/MusharofChy">
                      <i class="ri-twitter-fill"></i>
                    </a>
                  </li>
				  Jika akun instagram diisi, echo akun instagram 
				  <li>
                    <a href="https://instagram.com/MusharofChy">
                      <i class="ri-instagram-line"></i>
                    </a>
                  </li>
				  Jika akun youtube diisi, echo akun youtube 
                  <li>
                    <a href="https://youtube.com/MusharofChy">
                      <i class="ri-youtube-fill"></i>
                    </a>
                  </li>
				  //-->
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="ud-widget">
                <h5 class="ud-widget-title">Info</h5>
                <ul class="ud-widget-links">
                  <li>
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <!--kalau saya, untuk kebijakan privasi, tos, cara order dan garansi diambil dari CRUD Page
					foreach $pages as $page
					<li><a href="{{ $page['url'] }}">{{ $page['title'] }}</a></li>
					endfor
				  -->
                  <li>
                    <a href="privasi.php">Kebijakan Privasi</a>
                  </li>
                  <li>
                    <a href="term-of-service.php">Syarat dan Ketentuan</a>
                  </li>
                  <li>
                    <a href="#">Cara Order</a>
                  </li>
                  <li>
                    <a href="#">Garansi</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="ud-widget">
                <h5 class="ud-widget-title">Tautan</h5>
                <ul class="ud-widget-links">
                  <li>
                    <nuxt-link to="/layanan/topup">Jasa Top Up PayPal</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/layanan/pembayaran"
                      >Jasa Pembayaran Online</nuxt-link
                    >
                  </li>
                  <li>
                    <!-- <a href="blog.php">Blog</a> -->
                    <nuxt-link to="/blog">Blog</nuxt-link>
                  </li>
                  <li>
                    <a href="contact.php">Hubungi Kami</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="ud-widget">
                <h5 class="ud-widget-title">Kontak Kami</h5>
                <ul class="ud-widget-links">
                  <!-- ini diambil dari menu setting -->
                  <li>
                    <i class="ri-whatsapp-line"></i>
                    <span>Whatsapp:</span>
                    <a
                      href="https://wa.me/6285895598118?text=Hello Saldobit"
                      target="_blank"
                      >+6285895598118</a
                    >
                  </li>
                  <li>
                    <i class="ri-mail-send-line"></i>
                    <span>Email:</span>
                    <a href="mailto:bosbesar@gmail.com">bosbesar@gmail.com</a>
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i>
                    <span>Address:</span>
                    <span>Surabaya, Jawa Timur</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="ud-footer-bottom">
          <div class="row">
            <div class="col-md-8">
              <ul class="ud-footer-bottom-left"></ul>
            </div>
            <div class="col-md-4">
              <p class="ud-footer-bottom-right">
                Designed and Developed by
                <a href="https://uideck.com" rel="nofollow">UIdeck</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- ====== Back To Top Start ====== -->

    <!-- chat wa -->
    <a
      href="https://wa.me/6285895598118?text=Hello Saldobit"
      aria-label="Chat WA"
      target="_blank"
      class="chat-wa"
    >
      <i class="ri-whatsapp-line ri-2x"></i>
    </a>
  </div>
</template>
<script>
// ==== for menu scroll
export default {
  mounted() {
    const pageLink = document.querySelectorAll(".ud-menu-scroll");

    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          offsetTop: 1 - 60,
        });
      });
    });

    window.document.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(event) {
      const sections = document.querySelectorAll(".ud-menu-scroll");
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute("href");
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector(".ud-menu-scroll").classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    },
  },
};
</script>