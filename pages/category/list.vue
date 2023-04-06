<template>
  <div>
    <div class="pagetitle">
      <h1 class="fs-5 mb-1">Category List</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item active">Category List</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <section class="section dashboard">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body col-lg-12 row">
              <!-- Line Chart -->
              <div class="d-flex justify-content-between">
                <span class="card-title">Category List</span>
                <button
                  style="margin: 20px; margin-right: 0px"
                  type="button"
                  class="btn btn-primary"
                  @click="addNew()"
                >
                  Add new
                </button>
              </div>
              <div class="col-lg-12">
                <table
                  id="xxx"
                  class="table table-hovered table-stripped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Category Name</th>
                      <th style="width: 15%">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <!-- End Line Chart -->
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="category-modal"
          tabindex="-1"
          style="display: none"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Category
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form id="page-form" action="" @submit.prevent="submitHandler()">
                <div class="modal-body">
                  <div class="form-group d-grid gap-2">
                    <div class="">
                      <label for="nominal_transfer" class="col-form-label"
                        >Nama Category</label
                      >
                      <input
                        type="text"
                        placeholder="Masukkan nama category"
                        v-model="form.category"
                        class="form-control"
                        aria-label=""
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    v-if="!submit.category"
                    type="submit"
                    class="btn btn-primary"
                  >
                    Save
                  </button>
                  <button v-else type="button" class="btn btn-primary disabled">
                    Saving...
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="category-modal-edit"
          tabindex="-1"
          style="display: none"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edit Category
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form
                id="page-form"
                action=""
                @submit.prevent="submitEditHandler()"
              >
                <div class="modal-body">
                  <div class="form-group d-grid gap-2">
                    <div class="">
                      <label for="nominal_transfer" class="col-form-label"
                        >Nama Category</label
                      >
                      <input
                        type="text"
                        placeholder="Masukkan nama category"
                        v-model="edit.category"
                        class="form-control"
                        aria-label=""
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    v-if="!submit.edit"
                    type="submit"
                    class="btn btn-primary"
                  >
                    Save
                  </button>
                  <button v-else type="button" class="btn btn-primary disabled">
                    Saving...
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        category: "",
      },
      edit: {
        id: null,
        category: "",
      },
      submit: {
        category: false,
        edit: false,
      },
      filter: {
        status: "",
      },
    };
  },
  async mounted() {
    if(this.$auth.user.role != 'admin'){
      this.$router.replace('/404')
    }
    window.editCategory = this.editCategory;
    window.deleteCategory = this.deleteCategory;
    setTimeout(() => this.loadDatatable(), 500);
  },
  methods: {
    addNew() {
      $("#category-modal").modal("show");
    },
    submitHandler() {
      this.submit.category = true;
      this.$axios
        .post("/api/category", this.form)
        .then((res) => {
          this.form = {
            category: "",
          };
          $("#category-modal").modal("hide");
          this.submit.category = false;
          this.$swal.fire("Success", "Category berhasil disimpan", "success");
          table.ajax.reload();
        })
        .catch((err) => {
          this.$swal.fire("Failed", "Terjadi error!", "error");
        });
    },
    editCategory(id, category) {
      this.edit = {
        id: id,
        category: category,
      };
      $("#category-modal-edit").modal("show");
    },
    submitEditHandler() {
      this.submit.category = true;
      this.$axios
        .put("/api/category/" + this.edit.id, this.edit)
        .then((res) => {
          this.edit = {
            category: "",
          };
          $("#category-modal-edit").modal("hide");
          this.submit.edit = false;
          this.$swal.fire("Success", "Category berhasil disimpan", "success");
          table.ajax.reload();
        })
        .catch((err) => {
          this.$swal.fire("Failed", "Terjadi error!", "error");
        });
    },
    deleteCategory(id) {
      this.$swal
        .fire({
          title: "Yakin menghapus data ?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Yes",
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$axios
              .delete("/api/category/" + id)
              .then((res) => {
                this.$swal.fire(
                  "Success",
                  "Category berhasil dihapus",
                  "success"
                );
                table.ajax.reload();
              })
              .catch((err) => {
                this.$swal.fire("Failed", "Terjadi error!", "error");
              });
          }
        });
    },
    loadDatatable() {
      var token = this.$auth.strategy.token.get();
      var role = this.$auth.user.role;
      //Should implements serverside table
      window.table = $("#xxx").DataTable({
        serverSide: true,
        processing: true,
        ajax: {
          url: "/api/category",
          type: "get",
          beforeSend: function (request) {
            request.setRequestHeader("Authorization", token);
          },
          dataSrc: function (json) {
            json.recordsTotal = json.total;
            json.recordsFiltered = json.total;
            return json.data;
          },
        },
        columns: [
          { data: "category" },
          {
            data: null,
            className: "text-center",
            render: function (data) {
              var btn = `<button type="button" class="btn btn-secondary btn-sm" title="Edit Category" onclick="editCategory(${data.id},'${data.category}')">
                      <i data-bs-toggle="modal" data-bs-target="#order-id" class="ri-pencil-fill"></i>
                   </button>&nbsp`;
              btn += `<button type="button" class="btn btn-danger btn-sm" onclick="deleteCategory(${data.id})">
                      <i class="ri-delete-bin-line"></i>
                   </button>`;
              return btn;
            },
          },
        ],
      });
    },
  },
};
</script>