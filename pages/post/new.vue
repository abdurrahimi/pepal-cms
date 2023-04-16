<template>
  <div>
    <div class="pagetitle mb-2">
      <div class="row align-items-center">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Post Form</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link to="/dashboard">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">Post List</li>
              <li class="breadcrumb-item active">Post Form</li>
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
        <div class="col-lg-8 col-md-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Post Form</h5>
              <div class="form-group mb-2">
                <label class="col-form-label">Title</label>
                <input
                  type="text"
                  v-model="form.title"
                  name="title"
                  placeholder="Title"
                  id="title"
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Slug</label>
                <input
                  type="text"
                  v-model="form.slug"
                  name="slug"
                  placeholder="Slug"
                  id="slug"
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Content</label>
                <textarea
                  name="content"
                  placeholder="Content"
                  id="content"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">SEO</h5>
              <div class="form-group mb-2">
                <label class="col-form-label">Meta Title</label>
                <input
                  type="text"
                  v-model="form.meta_title"
                  name="meta_title"
                  placeholder="Meta Title"
                  id="meta-title"
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Meta Description</label>
                <textarea
                  name="meta_description"
                  v-model="form.meta_desc"
                  placeholder="Meta Description"
                  rows="4"
                  id="meta-description"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Featured Image</h5>
              <div class="form-group mb-2 col-12 text-center">
                <img
                  :src="form.image"
                  width="200"
                  height="200"
                  alt=""
                  class="img-thumbnail"
                />
                <input
                  id="imageSelect"
                  type="file"
                  @change="onFileChange"
                  style="display: none"
                />
                <div class="pt-2">
                  <a
                    href="#"
                    class="btn btn-primary btn-sm"
                    @click="uploadImage()"
                    title="Upload image"
                    ><i class="ri-upload-2-line"></i
                  ></a>
                  <a
                    href="#"
                    class="btn btn-danger btn-sm"
                    @click="removeImage()"
                    title="Remove image"
                    ><i class="ri-delete-bin-6-line"></i
                  ></a>
                </div>
              </div>
              <div class="form-group mb-2">
                <label for="image-alt" class="col-form-label"
                  >Image Alt Tag</label
                >
                <input
                  type="image-alt"
                  class="form-control"
                  id="image-alt"
                  v-model="form.image_alt"
                  placeholder="Image Alt Tag"
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Categories &amp; Option</h5>
              <div class="form-group mb-2">
                <label for="categories" class="col-form-label"
                  >Categories</label
                >
                <multiselect
                  v-model="form.category"
                  :options="categoryList"
                  :multiple="true"
                  :hide-selected="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="category"
                  label="category"
                  track-by="id"
                >
                </multiselect>
                <!--  <input
                  type=""
                  class="form-control"
                  v-model="form.category"
                  name="categories"
                  id="categories"
                  placeholder="Pakai select2/checkbox"
                /> -->
              </div>
              <div class="form-group mb-2">
                <label for="is-featured" class="form-check-label col-form-label"
                  >Is Featured</label
                >
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="form.is_featured"
                    id="isFeaturedChecked"
                    checked
                  />
                  <label class="form-check-label" for="isFeaturedChecked"
                    >Yes</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Publishing</h5>
              <div class="form-group mb-2">
                <label class="form-check-label col-form-label">Status</label>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    v-model="form.status"
                    type="checkbox"
                    id="statusChecked"
                    checked
                  />
                  <label class="form-check-label" for="statusChecked"
                    >Published</label
                  >
                </div>
              </div>
              <div class="form-group mb-2">
                <label for="date-published" class="col-form-label"
                  >Date Published</label
                >
                <!-- <input
                  type="date-published"
                  class="form-control"
                  v-model="form.date_published"
                  id="date-published"
                  placeholder="Pakai datepicker"
                /> -->
                <date-picker
                  v-model="form.date_published"
                  valueType="format"
                  style="width: 100%"
                ></date-picker>
              </div>
              <div>
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
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { Multiselect, DatePicker },
  data() {
    return {
      submit: false,
      categoryList: [],
      form: {
        title: "",
        slug: "",
        content: "",
        image: "/assets/img/preview.png",
        image_alt: "",
        category: [],
        meta_title: "",
        meta_desc: "",
        status: true,
        is_featured:false,
        date_published: "",
      },
    };
  },
  async mounted() {
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
    await this.getCategory();
    setTimeout(() => {
      if(tinymce.activeEditor != null )
      tinymce.activeEditor.destroy();
      tinymce.init(
        {
          selector: "#content",
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
          toolbar:
            "blocks | bold italic underline | alignleft aligncenter alignjustify | numlist bullist | forecolor backcolor removeformat | pagebreak | insertfile image media template link",
        },
        300
      );
    });
  },
  methods: {
    getCategory() {
      this.$axios.get("/api/category/all").then((res) => {
        this.categoryList = res.data;
      });
    },
    uploadImage() {
      $("#imageSelect").click();
    },
    removeImage() {
      this.form.image = "/assets/img/preview.png";
    },
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      Object.values(files).map((file) => {
        this.createImage(file);
      });
      $("#inputImage").val("");
    },
    createImage(file, key) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitHandler() {
      this.submit = true;
      this.form.content = tinymce.get("content").getContent();

      this.$axios
        .post("/api/post", this.form)
        .then((res) => {
          this.$swal.fire("Success", "Postingan berhasil disimpan", "success");
          this.$router.push("/post/list");
        })
        .catch((err) => {
          this.submit = false;
          this.$swal.fire("Error", "Terjadi error", "error");
        });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
