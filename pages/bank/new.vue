<template>
  <div>
    <div class="pagetitle mb-2">
      <div class="row align-items-center">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Bank Form</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link to="/dashboard">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">Bank List</li>
              <li class="breadcrumb-item active">Bank Form</li>
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
              <h5 class="card-title">Bank Form</h5>
              <div class="form-group mb-2">
                <label class="col-form-label">Title</label>
                <input
                  type="text"
                  v-model="form.bank"
                  name="namabank"
                  placeholder="Nama Bank"
                  id="namabank"
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Nama Pemilik</label>
                <input
                  type="text"
                  v-model="form.nama"
                  name="nama"
                  placeholder="Nama Pemilik"
                  id="nama"
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Nomor Rekening</label>
                <input
                  type="text"
                  v-model="form.norek"
                  name="norek"
                  placeholder="Nomor Rekening"
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
        bank: "",
        nama: "",
        norek: "",
      },
    };
  },
  mounted() {
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
  },
  methods: {
    submitHandler() {
      this.submit = true;
      this.$axios.setBaseURL('/')
      this.$axios
        .post("/api/bank", this.form)
        .then((res) => {
          this.$swal.fire("Success", "Data berhasil disimpan", "success");
          this.$router.push("/bank/list");
        })
        .catch((err) => {
          this.submit = false;
          this.$swal.fire("Error", "Terjadi error", "error");
        });
    },
  },
};
</script>
