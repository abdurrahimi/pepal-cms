<template>
  <div>
    <div class="pagetitle">
      <h1 class="fs-5 mb-1">Rate List</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item active">Rate List</li>
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
                <span class="card-title">Rate List</span>
              </div>
              <div class="col-lg-12">
                <table
                  id="xxx"
                  class="table table-hovered table-stripped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>RATE</th>
                      <th>E-RATE BCA</th>
                      <th>STATUS</th>
                      <th>CREATED AT</th>
                      <th>UPDATED AT</th>
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
                        >Rate Website</label
                      >
                      <input
                        type="text"
                        placeholder="Masukkan nama category"
                        v-model="edit.rate"
                        class="form-control"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="form-group d-grid gap-2">
                    <div class="">
                      <label for="nominal_transfer" class="col-form-label"
                        >E-Rate BCA</label
                      >
                      <input
                        type="text"
                        placeholder="Masukkan nama category"
                        v-model="edit.original"
                        class="form-control"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="form-group d-grid gap-2">
                    <div class="">
                      <label for="nominal_transfer" class="col-form-label"
                        >Status</label
                      >
                      <select class="form-control" v-model="edit.status">
                        <option value="1">Active</option>
                        <option value="0">Non-Active</option>
                      </select>
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
      edit: {
        id: null,
        original: 0,
        rate: 0,
        status:0,
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
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
    window.editCategory = this.editCategory;
    window.deleteCategory = this.deleteCategory;
    setTimeout(() => this.loadDatatable(), 500);
  },
  methods: {
    editCategory(id, original, rate, status) {
      this.edit = {
        id: id,
        original: original,
        rate: rate,
        status: status
      };
      $("#category-modal-edit").modal("show");
    },
    submitEditHandler() {
      this.submit.category = true;

      this.$axios
        .put("/api/rate/update/" + this.edit.id, this.edit)
        .then((res) => {
          this.edit = {
            category: "",
          };
          $("#category-modal-edit").modal("hide");
          this.submit.edit = false;
          this.$swal.fire("Success", "Rate berhasil disimpan", "success");
          table.ajax.reload();
        })
        .catch((err) => {
          this.$swal.fire("Failed", "Terjadi error!", "error");
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
          url: "/api/rate/list",
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
          {
            data: "rate",
            render: $.fn.dataTable.render.number(",", ".", 2, "Rp"),
          },
          {
            data: "original",
            render: $.fn.dataTable.render.number(",", ".", 2, "Rp"),
          },
          {
            data: "is_active",
            render: function (data) {
              if (data == 1) {
                return `<span class="badge bg-success">Active</span>&nbsp;`;
              } else {
                return `<span class="badge bg-secondary">Non-Active</span>&nbsp;`;
              }
            },
          },
          {
            data: "created_at",
            render: function (data) {
              return new Date(data).toLocaleString();
            },
          },
          {
            data: "updated_at",
            render: function (data) {
              return new Date(data).toLocaleString();
            },
          },
          {
            data: null,
            orderable: false,
            className: "text-center",
            render: function (data) {
              var btn = `<button type="button" class="btn btn-warning btn-sm" onclick="editCategory(${data.id},${data.original},${data.rate},${data.is_active})">
                        <i class="ri-pencil-fill"></i>
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
  