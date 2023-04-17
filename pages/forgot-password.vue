<template>
  <div>
    <section class="ud-page-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-banner-content">
              <h1>Reset Password Page</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="login-register">
      <div class="container">
        <div class="container-fluid d-flex justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="row no-gutter">
              <!-- The content half -->
              <div class="col-md-6 col-lg-6 d-none d-md-flex bg-reset-pw"></div>
              <div class="col-md-6 col-lg-6 bg-login-register">
                <div class="d-flex align-items-center py-5">
                  <div class="container">
                    <h3 class="text-center fw-bold mb-4">Reset password</h3>
                    <p class="fs-6 mb-2">
                      Silahkan massukkan password baru anda.
                    </p>
                    <div v-if="message != ''" class="alert alert-success">
                      {{ message }}
                    </div>
                    <form class="" action="" @submit.prevent="submitHandler">
                      <div class="fs-6 d-grid gap-3">
                        <div class="form-group mt-3">
                          <label for="email" class="form-label fw-bold"
                            >New Password</label
                          >
                          <input
                            type="password"
                            name="password"
                            value=""
                            placeholder=""
                            v-model="form.password"
                            id="input-email"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="email" class="form-label fw-bold"
                            >New Password Conirmation</label
                          >
                          <input
                            type="password"
                            name="password"
                            value=""
                            v-model="form.password_confirmation"
                            placeholder=""
                            id="input-password"
                            class="form-control"
                          />
                        </div>
                        <button
                          v-if="!submit"
                          type="submit"
                          class="ud-main-btn text-uppercase"
                        >
                          Simpan Perubahan
                        </button>
                        <button
                          v-else
                          type="button"
                          disabled
                          class="ud-main-btn text-uppercase"
                        >
                          Processing...
                        </button>
                        <p><nuxt-link to="/login">Kembali Login</nuxt-link></p>
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
  auth: false,
  layout: "main",
  data() {
    return {
      submit: false,
      message: "",
      form: {
        email: this.$route.query.email,
        token: this.$route.query.token,
      },
    };
  },
  mounted() {
    if (
      this.$route.query.email == "" ||
      this.$route.query.email == undefined ||
      this.$route.query.token == "" ||
      this.$route.query.token == undefined
    ) {
      this.$router.replace("404");
    }
  },
  methods: {
    submitHandler() {
      this.submit = true;
      this.$axios
        .post("/api/forgot-password", this.form)
        .then((res) => {
          this.message = "Password berhasil diubah, mengarahkan kehalaman login";
          setTimeout(() => {
            this.$router.push("/login");
          },3000)
        })
        .catch((err) => {
          this.submit = false;
          alert("terjadi error");
          console.log(err);
        });
    },
  },
};
</script>