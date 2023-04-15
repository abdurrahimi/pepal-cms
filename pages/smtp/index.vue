<template>
    <div>
      <div class="pagetitle">
        <h1 class="fs-5 mb-1">SMTP Config</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="breadcrumb-item active">SMTP Config</li>
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
                  <span class="card-title">SMTP Config</span>
                </div>
                <div class="col-lg-12">
                  <table
                    id="xxx"
                    class="table table-hovered table-stripped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>HOST</th>
                        <th>PORT</th>
                        <th>USERNAME</th>
                        <th>SENDER</th>
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
                          >Host</label
                        >
                        <input
                          type="text"
                          placeholder="Masukkan Host"
                          v-model="edit.host"
                          class="form-control"
                          aria-label=""
                        />
                      </div>
                    </div>
                    <div class="form-group d-grid gap-2">
                      <div class="">
                        <label for="nominal_transfer" class="col-form-label"
                          >PORT</label
                        >
                        <input
                          type="number"
                          placeholder="Masukkan Port"
                          v-model="edit.port"
                          class="form-control"
                          aria-label=""
                        />
                      </div>
                    </div>
                    <div class="form-group d-grid gap-2">
                      <div class="">
                        <label for="nominal_transfer" class="col-form-label"
                          >Username</label
                        >
                        <input
                          type="text"
                          placeholder="Masukkan Username"
                          v-model="edit.username"
                          class="form-control"
                          aria-label=""
                        />
                      </div>
                    </div>
                    <div class="form-group d-grid gap-2">
                      <div class="">
                        <label for="nominal_transfer" class="col-form-label"
                          >Password</label
                        >
                        <input
                          type="text"
                          placeholder="Masukkan Password"
                          v-model="edit.password"
                          class="form-control"
                          aria-label=""
                        />
                      </div>
                    </div>
                    <div class="form-group d-grid gap-2">
                      <div class="">
                        <label for="nominal_transfer" class="col-form-label"
                          >Sender</label
                        >
                        <input
                          type="email"
                          placeholder="Masukkan Sender"
                          v-model="edit.sender"
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
          host: "",
          port: "",
          username: "",
          password: "",
          secure: "",
          sender: ""
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
      editCategory(data) {
        this.edit = data
        $("#category-modal-edit").modal("show");
      },
      submitEditHandler() {
        this.submit.category = true;
  
        this.$axios
          .put("/api/email/" + this.edit.id, this.edit)
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
      loadDatatable() {
        var token = this.$auth.strategy.token.get();
        var role = this.$auth.user.role;
        //Should implements serverside table
        window.table = $("#xxx").DataTable({
          serverSide: false,
          processing: false,
          ajax: {
            url: "/api/email",
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
            { data: "host" },
            { data: "port" },
            { data: "username" },
            { data: "sender" },
            {
              data: null,
              className: "text-center",
              render: function (data) {
                var str = JSON.stringify(data);
                var btn = `<button type="button" class="btn btn-warning btn-sm" title="Edit Category" onclick='editCategory(${str})'>
                        <i data-bs-toggle="modal" data-bs-target="#order-id" class="ri-pencil-fill"></i>
                     </button>&nbsp`;
                return btn;
              },
            },
          ],
        });
      },
    },
  };
  </script>
  