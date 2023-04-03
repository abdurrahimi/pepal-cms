<template>
  <div>
    <div class="pagetitle">
      <h1 class="fs-5 mb-1">Post List</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item active">Post List</li>
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
                <span class="card-title">Post List</span>
                <nuxt-link
                  to="/post/new"
                  style="margin: 20px; margin-right: 0px"
                  type="button"
                  class="btn btn-primary"
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
                      <th>Image</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Views</th>
                      <th>Status</th>
                      <th style="width: 15%">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <!-- End Line Chart -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  async mounted() {
    setTimeout(() => this.loadDatatable(), 500);
  },
  methods: {
    loadDatatable() {
      var token = this.$auth.strategy.token.get();
      var role = this.$auth.user.role;
      //Should implements serverside table
      window.table = $("#xxx").DataTable({
        serverSide: true,
        processing: true,
        ajax: {
          url: "/api/post",
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
            data: "image",
            render: function (data) {
              return `<img src="${data}" class="img-thumbnail"/>`;
            },
          },
          {
            data: "title",
          },
          {
            data: "category",
            render: function (data) {
                var cat = ''
                Object.values(data).map(v=> {
                    cat += `<span class="badge bg-primary">${v.category}</span>&nbsp;`
                })
              return cat;
            },
          },
          
          {
            data: "views",
          },
          {
            data: "status",
            render: function (data) {
              switch (data) {
                case 1:
                  return 'Published';
                  break;
                case 0:
                  return 'Draft';
                  break;
                default:
                    return ''
                    break
              }
            },
          },
          {
            data: "id",
            className: "text-center",
            render: function (data) {
              var btn =
                '<a href="/order/detail/' +
                data +
                '" data-bs-toggle="tooltip" data-bs-placement="top" class="btn btn-info btn-sm" aria-label="View" data-bs-original-title="View"><i class="ri-eye-fill"></i></a>' +
                `&nbsp;`;
              role != "admin"
                ? (btn += `<button type="button" class="btn btn-danger btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Payment Confirmation" data-bs-original-title="Payment Confirmation" aria-describedby="tooltip143151">
                    <i data-bs-toggle="modal" data-bs-target="#order-id" class="ri-bank-card-fill"></i>
                 </button>`)
                : "";
              return btn;
            },
          },
        ],
      });
    },
  },
};
</script>