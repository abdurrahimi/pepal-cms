<template>
  <div v-if="mounted">
    <Loader/>
  </div>
  <div v-else>
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex align-items-center justify-content-between">
        <nuxt-link to="/dashboard" class="logo d-flex align-items-center">
          <img
            src="/assets/img/logo.png"
            width="29"
            height="26"
            alt="Logo Saldobit"
          />
          <span class="d-none d-lg-block">Saldobit</span>
        </nuxt-link>
        <i class="ri-menu-fold-fill toggle-sidebar-btn"></i>
      </div>
      <!-- End Logo -->
      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="ri-notification-3-line"></i>
              <span class="badge bg-primary badge-number">4</span> </a
            ><!-- End Notification Icon -->
            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications"
            >
              <li class="dropdown-header">
                You have 4 new notifications
                <a href="#"
                  ><span class="badge rounded-pill bg-primary p-2 ms-2"
                    >View all</span
                  ></a
                >
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="notification-item">
                <i class="ri-error-warning-line text-warning"></i>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="notification-item">
                <i class="ri-indeterminate-circle-line text-danger"></i>
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="notification-item">
                <i class="ri-checkbox-circle-line text-success"></i>
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="notification-item">
                <i class="ri-add-circle-line text-primary"></i>
                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>
            </ul>
            <!-- End Notification Dropdown Items -->
          </li>
          <!-- End Notification Nav -->
          
          <!-- End Messages Nav -->
          <li class="nav-item dropdown pe-3">
            <a
              class="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="/assets/img/profile-img.webp"
                alt="Profile"
                width="36"
                height="36"
                class="rounded-circle"
              />
              <span class="d-none d-md-block dropdown-toggle ps-2"
                >{{ $auth.user.name }}</span
              > </a
            ><!-- End Profile Iamge Icon -->
            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
            >
              <li class="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i class="ri-user-line"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i class="ri-settings-2-line"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="pages-faq.html"
                >
                  <i class="ri-question-line"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                  @click="logout"
                >
                  <i class="ri-logout-box-r-line"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
            <!-- End Profile Dropdown Items -->
          </li>
          <!-- End Profile Nav -->
        </ul>
      </nav>
      <!-- End Icons Navigation -->
    </header>
    <!-- End Header -->
    <!-- ======= Sidebar ======= -->
    <LayoutsSidebar />
    <!-- End Sidebar-->
    <div id="main" class="main">
      <Nuxt />
    </div>
    <!-- End #main -->
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <div class="copyright">
        &copy; Copyright <strong><span>NiceAdmin</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </footer>
    <!-- End Footer -->
    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="ri-arrow-up-line"></i
    ></a>
    <!-- Vendor JS Files -->
  </div>
</template>
  <script>
export default {
  middleware: "auth",
  auth: true,
  head() {
    return {
      title: "cms",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
        },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        {
          rel: "stylesheet",
          href: "https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap5.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.datatables.net/responsive/2.3.0/css/responsive.bootstrap5.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.datatables.net/responsive/2.3.0/css/responsive.dataTables.min.css",
        },
      ],
      script: [
        {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js",
          defer: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
        { src: "/assets/vendor/apexcharts/apexcharts.min.js", defer: true },
        { src: "/assets/vendor/datatables/datatables.min.js", defer: true },
        {
          src: "/assets/vendor/datatables/dataTables.bootstrap5.min.js",
          defer: true,
        },
        {
          src: "/assets/vendor/datatables/responsive.bootstrap5.min.js",
          defer: true,
        },
        { src: "/assets/js/main.js", defer: true },
        { src : "/assets/vendor/tinymce/tinymce.min.js" }
      ],
    };
  },
  data() {
    return {
      mounted: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.mounted = false;
    }, 700);
  },
  methods: {
    async logout() {
      this.$cookies.removeAll()
      await this.$auth.logout(/* .... */);
    },
  },
};
</script>
<style scoped>
  .main{
    min-height: 84vh;
  }
</style>