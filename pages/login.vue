<template>
  <div>
    <!-- ====== Banner Start ====== -->
    <section class="ud-page-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-banner-content">
              <h1>Login Page</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Banner End ====== -->

    <!-- ====== Login Start ====== -->
    <section class="login-register">
      <div class="container">
        <div class="container-fluid d-flex justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="row no-gutter">
              <!-- The content half -->
              <div class="col-md-6 col-lg-6 d-none d-md-flex bg-login"></div>
              <div class="col-md-6 col-lg-6 bg-login-register">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <h3 class="text-center fw-bold mb-4">Login Form</h3>
                    <p class="mb-2">Masukkan email dan password Anda!</p>
                    <form
                      method="post"
                      action=""
                      @submit.prevent="handleSubmit"
                    >
                      <div >
                        <div class="d-grid gap-3" :style="otp ? 'display:none !important':'display:block'">
                          <div class="form-group floating-label">
                            <input
                              type="email"
                              name="email"
                              value=""
                              v-model="form.email"
                              placeholder=""
                              required
                              id="input-email"
                              class="form-control"
                            />
                            <label for="input-email">Email</label>
                          </div>
                          <div class="form-group floating-label">
                            <input
                              type="password"
                              name="password"
                              v-model="form.password"
                              value=""
                              required
                              placeholder=""
                              id="input-password"
                              class="form-control"
                            />
                            <label for="input-password">Password</label>
                            <div class="text-end mt-1 small">
                              <a href="reset.php">Lupa password?</a>
                            </div>
                          </div>
                        </div>
                        <div class="d-grid gap-3 mb-2" :style="otp ? 'display:block':'display:none !important'">
                          <div class="form-group floating-label">
                            <input
                              type="text"
                              name="otp"
                              value=""
                              v-model="form.otp"
                              placeholder=""
                              id="input-email"
                              class="form-control"
                            />
                            <label for="input-email">Kode OTP</label>
                          </div>
                        </div>
                        <button
                          v-if="!submitting"
                          type="submit"
                          class="ud-main-btn text-uppercase"
                        >
                          Masuk
                        </button>
                        <button
                          v-else
                          type="button"
                          class="ud-main-btn text-uppercase disabled"
                        >
                          Loading...
                        </button>
                        <p>
                          Belum punya akun Saldobit?
                          <a href="/register">Daftar</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- /row- no-gutter -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "main",
  auth: false,
  data() {
    return {
      submitting: false,
      otp: false,
      form: {
        email: "",
        password: "",
        otp: "",
      },
      error: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit(e) {
      if(this.otp && this.form.otp !== ""){
        this.login();
        return;
      }

      if(this.otp && this.form.otp == ""){
        alert('kode otp tidak boleh kosong!')
      }

      this.submitting = true;
      this.$axios
        .post("/api/verify", { data: this.form })
        .then((res) => {
          this.submitting = false;
          if (res.data.otp) {
            this.otp = true
          }
          if (!res.data.otp){
            this.login();
          }
        })
        .catch((err) => {
          this.submitting = false;
          if(err.response.status === 431){
            alert('Akun anda belum di aktivasi')
          }
          if (
            err.response.hasOwnProperty("status") &&
            err.response.status === 422
          ) {
            this.error = err.response.data;
          }
          if (
            err.response.hasOwnProperty("status") &&
            err.response.status === 401
          )
            alert("Please check username & password");
        });
    },
    login() {
      this.submitting = true;
      this.$auth
        .loginWith("laravelJWT", { data: this.form })
        .then((res) => {
          this.$cookies.set("access_token", res.access_token);
          window.location.href = "/dashboard";
          this.submitting = false;
        })
        .catch((err) => {
          this.submitting = false;
          if(err.response.status == 400){
            alert('Kode OTP Tidak Valid atau kadaluarsa')
          }
          if (
            err.response.hasOwnProperty("status") &&
            err.response.status === 422
            
          ) {
            this.error = err.response.data;
          }
          if (
            err.response.hasOwnProperty("status") &&
            err.response.status === 401
          ){
            alert("Please check username & password");
          }
        });
    },
  },
};
</script>