<template>
  <div>
    <div class="pagetitle mb-2">
      <div class="row align-items-center">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Template Form</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link to="/dashboard">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">Template Email List</li>
              <li class="breadcrumb-item active">Template Form</li>
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
        <div class="col-lg-12 col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Template {{ data.type }}</h5>
              <div class="col-lg-12" style="padding: 30px; background: #f0f0f0">
                <h3>Tag List</h3>
                <i
                  ><span class="text-danger">*</span>Kode ini digunakan
                  menampilkan data dari database</i
                ><br />
                <i
                  ><span class="text-danger">*</span>Gunakan sesuai template
                  masing - masing</i
                >
                <ul>
                  <li>Kode Aktivasi : [kode-aktivasi]</li>
                  <li>Kode OTP : [kode-otp]</li>
                  <li>Order Detail : [order-detail]</li>
                  <li>Order Detail : [forgot-code]</li>
                </ul>
              </div>
              <div></div>
              <div class="form-group mb-2">
                <label class="col-form-label">Content</label>
                <textarea
                  name="content"
                  placeholder="Content"
                  id="content"
                  class="form-control"
                ></textarea>
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
      form: {
        type: "",
        body: "",
      },
    };
  },
  async asyncData({ $axios, $config, route }) {
    $axios.setBaseURL($config.baseURL);
    let { data } = await $axios.get(`/api/v1/template/${route.params.id}`);
    return { data };
  },
  mounted() {
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
    setTimeout(() => {
      if (tinymce.activeEditor != null) tinymce.activeEditor.destroy();
      tinymce.init({
        selector: "#content",
        content: this.data.body,
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
        toolbar:
          "blocks | bold italic underline | alignleft aligncenter alignjustify | numlist bullist | forecolor backcolor removeformat | pagebreak | insertfile image media template link",
      });
    }, 1);
    this.loadContent();
  },
  methods: {
    loadContent() {
      setTimeout(() => {
        tinymce.activeEditor.setContent(this.data.body);
      }, 1000);
    },
    submitHandler() {
      this.submit = true;
      this.form.body = tinymce.get("content").getContent();
      this.$axios
        .put("/api/template/" + this.$route.params.id, this.form)
        .then((res) => {
          this.$swal.fire("Success", "Data berhasil disimpan", "success");
          this.$router.push("/email");
        })
        .catch((err) => {
          this.submit = false;
          console.log(err);
          this.$swal.fire("Error", "Terjadi error", "error");
        });
    },
  },
};
</script>
  