<template>
  <div>
    <div class="pagetitle">
      <h1 class="fs-5 mb-1">Bank List</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item active">Bank List</li>
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
                <span class="card-title">Bank List</span>
                <nuxt-link
                  style="margin: 20px; margin-right: 0px"
                  type="button"
                  class="btn btn-primary"
                  to="/bank/new"
                >
                  Add new
                </nuxt-link>
              </div>
              <div class="col-lg-12">
                <table
                  id="xxx"
                  class="table table-hovered table-stripped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Bank</th>
                      <th>Nama</th>
                      <th>No Rekening</th>
                      <th style="width: 15%">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
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
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
    setTimeout(() => this.loadDatatable(), 500);
  },
  methods: {
    submitHandler() {
      this.submit.category = true;
      this.$axios.setBaseURL('/')
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
    deleteBank(id) {
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
            this.$axios.setBaseURL('/')
            this.$axios
              .delete("/api/bank/" + id)
              .then((res) => {
                this.$swal.fire(
                  "Success",
                  "Data berhasil dihapus",
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
      window.deleteBank = this.deleteBank
      //Should implements serverside table
      window.table = $("#xxx").DataTable({
        serverSide: false,
        processing: false,
        ajax: {
          url: "/api/bank",
          type: "get",
          beforeSend: function (request) {
            request.setRequestHeader("Authorization", token);
          },
          dataSrc: function (json) {
            /* json.recordsTotal = json.total;
            json.recordsFiltered = json.total; */
            return json;
          },
        },
        columns: [
          { data: "bank" },
          { data: "nama" },
          { data: "norek" },
          {
            data: null,
            className: "text-center",
            render: function (data) {
              var btn = `<a type="button" class="btn btn-secondary btn-sm" title="Edit Category" href="/bank/edit/${data.id}">
                        <i class="ri-pencil-fill"></i>
                     </a>&nbsp`;
              btn += `<button type="button" class="btn btn-danger btn-sm" onclick="deleteBank(${data.id})">
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
