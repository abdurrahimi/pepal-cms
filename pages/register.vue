<template>
  <div>
    <section class="ud-page-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-banner-content">
              <h1>Registration Page</h1>
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
              <div class="col-md-6 col-lg-6 d-none d-md-flex bg-register"></div>
              <div class="col-md-6 col-lg-6 bg-login-register">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <h3 class="text-center fw-bold mb-4">Form Registrasi</h3>
                    <div v-if="error.message != ''" class="alert alert-danger" role="alert">
                      {{ error.message }}
                    </div>
                    <div v-if="message != ''" class="alert alert-success" role="alert">
                      {{ message }}
                    </div>
                    <p class="mb-2">
                      Sudah punya akun Saldobit?
                      <nuxt-link to="/login">Masuk</nuxt-link>
                    </p>
                    <form action="/xxx" @submit.prevent="register()">
                      <div class="d-grid gap-3">
                        <div class="form-group floating-label">
                          <input
                            type="text"
                            name="nama"
                            value=""
                            v-model="form.name"
                            placeholder=""
                            id="input-nama"
                            class="form-control"
                          />
                          <label for="input-nama">Nama Lengkap</label>
                        </div>
                        <div class="form-group floating-label">
                          <input
                            type="text"
                            name="email"
                            v-model="form.email"
                            value=""
                            placeholder=""
                            id="input-email"
                            class="form-control"
                          />
                          <label for="input-email">Email</label>
                        </div>
                        <div class="form-group floating-label">
                          <input
                            type="number"
                            name="telp"
                            value=""
                            v-model="form.phone"
                            placeholder=""
                            id="input-telp"
                            class="form-control"
                          />
                          <label for="input-telp">Telp/WA</label>
                        </div>
                        <div class="form-group floating-label">
                          <input
                            type="password"
                            name="password"
                            v-model="form.password"
                            value=""
                            placeholder=""
                            id="input-password"
                            class="form-control"
                          />
                          <label for="input-password">Password</label>
                        </div>
                        <div class="form-group floating-label">
                          <input
                            type="password"
                            name="konfirmasi-password"
                            v-model="form.password_confirmation"
                            value=""
                            placeholder=""
                            id="input-konfirmasi-password"
                            class="form-control"
                          />
                          <label for="input-konfirmasi-password"
                            >Konfirmasi Password</label
                          >
                        </div>
                        <button
                          type="submit"
                          class="ud-main-btn text-uppercase"
                        >
                          Daftar
                        </button>
                        <p>
                          Dengan mendaftar, saya menyetujui
                          <nuxt-link to="/term-of-service"
                            >Syarat dan Ketentuan</nuxt-link
                          >
                          serta
                          <nuxt-link to="/privasi">Kebijakan Privasi</nuxt-link>
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
      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirm: "",
      },
      error: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        message: "",
      },
      message:"",
    };
  },
  methods: {
    register() {
      console.log("masuk");
      if (this.form.password_confirmation != this.form.password) {
        this.error.message = "password tidak sama!";
        return;
      }
      this.error.message = "";
      this.$axios.setBaseURL('/')
      this.$axios.post("/api/register", this.form).then((res) => {
        this.message = "Pendaftaran berhasil, mengaharkan ke halaman login"
        setTimeout(()=> {
            this.$router.push('/login')
        },2000)
      }).catch(err => {
        this.error.message = "periksa kembali form anda"
      })
    },
  },
};
</script>
