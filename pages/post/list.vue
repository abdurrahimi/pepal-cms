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
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
    window.edit = this.edit;
    window.deleteData = this.deleteData
    setTimeout(() => this.loadDatatable(), 500);
  },
  methods: {
    edit(id){
      this.$router.push('/post/edit/'+id)
    },
    deleteData(id){
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
              .delete("/api/post/" + id)
              .then((res) => {
                this.$swal.fire(
                  "Success",
                  "Postingan berhasil dihapus",
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
              return `<img src="${data}" class="img-thumbnail" style='max-width:100px'/>`;
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
            data: null,
            className: "text-center",
            render: function (data) {
              //console.log(data)
              var btn ='<a href="/blog/detail/' +data.slug +'" target="_blank" class="btn btn-info btn-sm" aria-label="View" title="View"><i class="ri-eye-fill"></i></a>' +`&nbsp;`;
              btn += `<button class='btn btn-warning btn-sm' onclick='edit(${data.id})'><i class='ri-edit-line'></i></button>&nbsp;`;
              btn += `<button class='btn btn-danger btn-sm' onclick='deleteData(${data.id})'><i class='ri-delete-bin-2-line'></i></button>`;
              return btn;
            },
          },
        ],
      });
    },
  },
};
</script>
