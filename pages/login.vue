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
                    <form method="post" action="" @submit.prevent="handleSubmit">
                      <div class="d-grid gap-3">
                        <div class="form-group floating-label">
                          <input
                            type="text"
                            name="email"
                            value=""
                            v-model="form.email"
                            placeholder=""
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
                            placeholder=""
                            id="input-password"
                            class="form-control"
                          />
                          <label for="input-password">Password</label>
                          <div class="text-end mt-1 small">
                            <a href="reset.php">Lupa password?</a>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="ud-main-btn text-uppercase"
                        >
                          Masuk
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
    layout:"login",
    auth:false,
    data(){
        return{
            submitting:false,
            form:{
                email:"",
                password:""
            },
            error:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        async handleSubmit(e){
          console.log('okok')
            this.submitting = true
            this.$auth.loginWith('laravelJWT', {data:this.form})
            .then((res) =>{
              this.$cookies.set('access_token', res.access_token)
                this.$auth.redirect('login')
                this.submitting = false
            })
            .catch((err) =>{
                console.log("gagal"+err.message())
                this.submitting = false
                if(err.response.hasOwnProperty('status') && err.response.status === 422){
                    this.error = err.response.data
                }

                if(err.response.hasOwnProperty('status') && err.response.status === 401)
                    alert('Please check username & password')
            })
        }
    }
}
</script>