<template>
  <div>
    <div class="pagetitle mb-2">
      <div class="row align-items-center">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Admin Form</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link to="/dashboard">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">Admin List</li>
              <li class="breadcrumb-item active">Admin Form</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <!-- Horizontal Form -->
      <form
        class="row"
        id="post-form"
        action=""
        @submit.prevent="submitHandler()"
      >
        <div class="col-lg-6 col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Admin Form</h5>
              <div class="form-group mb-2">
                <label class="col-form-label">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  name="namabank"
                  placeholder="email"
                  id="namabank"
                  required
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Nama</label>
                <input
                  type="text"
                  v-model="form.name"
                  name="nama"
                  placeholder="Nama"
                  id="nama"
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Telp/WA</label>
                <input
                  type="text"
                  v-model="form.phone"
                  name="norek"
                  placeholder="Telp/WA"
                  id="norek"
                  class="form-control"
                />
              </div>
              <div class="text-center mt-3 mb-2">
                <button v-if="!submit" type="submit" class="btn btn-primary">
                  Save
                </button>
                <button v-else type="button" class="btn btn-primary disabled">
                  Saving...
                </button>
                <nuxt-link to="/post/list" class="btn btn-secondary"
                  >Cancel</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      submit: false,
      categoryList: [],
      form: {
        id: "",
        email: "",
        name: "",
        phone: "",
      },
    };
  },
  async asyncData({ $axios, $config, route }) {
    $axios.setBaseURL($config.baseURL);
    let { data } = await $axios.get(`/api/v1/users/${route.params.id}`);
    return { data };
  },
  mounted() {
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
    this.form ={
        id: this.data.id,
        email: this.data.email,
        name: this.data.name,
        phone: this.data.phone,
      }
  },
  methods: {
    submitHandler() {
      this.submit = true;

      this.$axios
        .put("/api/users/"+this.form.id, this.form)
        .then((res) => {
          this.$swal.fire("Success", "Data berhasil disimpan", "success");
          this.$router.push("/user/admin");
        })
        .catch((err) => {
          this.submit = false;
          this.$swal.fire("Error", "Terjadi error", "error");
        });
    },
  },
};
</script>
    