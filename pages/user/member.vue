<template>
    <div>
      <div class="pagetitle">
        <h1 class="fs-5 mb-1">Member List</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="breadcrumb-item active">Member List</li>
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
                  <span class="card-title">Member List</span>
                </div>
                <div class="col-lg-12">
                  <table
                    id="xxx"
                    class="table table-hovered table-stripped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>User Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
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
      deleteUser(id) {
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
                .delete("/api/user/" + id)
                .then((res) => {
                  this.$swal.fire("Success", "Data berhasil dihapus", "success");
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
        window.deleteUser = this.deleteUser;
        //Should implements serverside table
        window.table = $("#xxx").DataTable({
          serverSide: false,
          processing: false,
          ajax: {
            url: "/api/users?roles=member",
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
            { data: "id" },
            {
              data: "profile_pict",
              render: function (data) {
                return `<img src="${data}" class="img-thumbnail" style='max-width:100px'/>`;
              },
            },
            { data: "name" },
            { data: "phone" },
            { data: "email" }
          ],
        });
      },
    },
  };
  </script>
    