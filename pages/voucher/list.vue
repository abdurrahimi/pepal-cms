<template>
  <div>
    <div class="pagetitle">
      <h1 class="fs-5 mb-1">Voucher List</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item active">Voucher List</li>
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
                <span class="card-title">Voucher List</span>
                <nuxt-link
                  style="margin: 20px; margin-right: 0px"
                  type="button"
                  class="btn btn-primary"
                  to="/voucher/new"
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
                      <th>Tipe Order</th>
                      <th>Kode</th>
                      <th>Potongan</th>
                      <th>Start Date</th>
                      <th>End Date</th>
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
  async mounted() {
    if (this.$auth.user.role != "admin") {
        this.$router.replace("/404");
      }
     /*  window.deleteCategory = this.deleteCategory; */
    setTimeout(() => this.loadDatatable(), 500);
  },
  methods: {
    editCategory(id, category) {
      this.edit = {
        id: id,
        category: category,
      };
      $("#category-modal-edit").modal("show");
    },
    deleteVoucher(id) {
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
              .delete("/api/voucher/" + id)
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
      var role = this.$auth.user.role;
      window.deleteVoucher = this.deleteVoucher;
      //Should implements serverside table
      window.table = $("#xxx").DataTable({
        serverSide: true,
        processing: true,
        ajax: {
          url: "/api/voucher",
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
              data: "tipe_order",
              render: function (data) {
                return data == "paypal" ? "Top Up Paypal" : data == 'all' ? 'Semua Tipe' : "Jasa Bayar";
              },
            },
          { data: "kode" },
          {
            data: null,
            render: function(data){
              if(data.tipe == 'harga')
                return new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(data.jumlah)
              return data.jumlah  + '%'

            }
          },
          { data: "active_start" },
          { data: "active_end" },
          {
            data: null,
            className: "text-center",
            render: function (data) {
              var btn = `<a type="button" class="btn btn-secondary btn-sm" title="Edit Category" href="/voucher/edit/${data.id}">
                          <i class="ri-pencil-fill"></i>
                       </a>&nbsp`;
              btn += `<button type="button" class="btn btn-danger btn-sm" onclick="deleteVoucher(${data.id})">
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
