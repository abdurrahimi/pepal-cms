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
                      Jika Anda lupa kata sandi Anda, kami akan mengirimkan
                      email untuk mengatur ulang kata sandi Anda.
                    </p>
                    <div v-if="message != ''" class="alert alert-success">
                      {{ message }}
                    </div>
                    <form class="" action="" @submit.prevent="submitHandler">
                      <div class="fs-6 d-grid gap-3">
                        <div class="form-group mt-3">
                          <label for="email" class="form-label fw-bold"
                            >Email</label
                          >
                          <input
                            type="text"
                            name="email"
                            value=""
                            placeholder=""
                            v-model="form.email"
                            id="input-email"
                            class="form-control"
                          />
                        </div>
                        <button
                          v-if="!submit"
                          type="submit"
                          class="ud-main-btn text-uppercase"
                        >
                          Send Reset Link
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
  layout: "main",
  auth: false,
  data() {
    return {
      submit: false,
      message: "",
      form: {
        email: "",
      },
    };
  },
  methods: {
    submitHandler() {
      this.submit = true;
      this.$axios
        .post("/api/forgot", this.form)
        .then((res) => {
          this.form.email = "";
          this.submit = false;
          this.message = "Link ubah password sudah dikirim ke email anda";
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