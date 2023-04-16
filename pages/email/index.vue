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
                        <th>Type</th>
                        <th>Updated At</th>
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
      loadDatatable() {
        var token = this.$auth.strategy.token.get();
        window.deleteBank = this.deleteBank
        //Should implements serverside table
        window.table = $("#xxx").DataTable({
          serverSide: false,
          processing: false,
          ajax: {
            url: "/api/template",
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
            { data: "type" },
            { data: "updated_at" },
            {
              data: null,
              className: "text-center",
              render: function (data) {
                var btn = `<a type="button" class="btn btn-warning btn-sm" title="Edit Category" href="/template/edit/${data.id}">
                          <i class="ri-pencil-fill"></i>
                       </a>&nbsp`;
                return btn;
              },
            },
          ],
        });
      },
    },
  };
  </script>
  