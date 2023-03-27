<template>
  <div>
    <div class="pagetitle">
      <h1 class="fs-5 mb-1">Order List</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <section class="section dashboard">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Order List</h5>
              <!-- Line Chart -->
              <table
                id="xxx"
                class="table table-hovered table-stripped table-bordered"
              >
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Transaction</th>
                    <th>Nominal</th>
                    <th>Total Bayar</th>
                    <th>Tanggal</th>
                    <th>Pembayaran</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>

              <!-- End Line Chart -->
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="order-id"
          tabindex="-1"
          style="display: none"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Konfirmasi Pembayaran
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Pastikan pembayaran Anda ke rekening berikut:</p>
                <div class="d-grid gap-1">
                  <div class="row">
                    <div class="col-md-3">Nama Bank</div>
                    <div class="col-md-9">Bank BCA</div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">No Rekening</div>
                    <div class="col-md-9">2710893433</div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">Atas Nama</div>
                    <div class="col-md-9">Susanto</div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">Jumlah</div>
                    <div class="col-md-9">Rp14.630.000</div>
                  </div>
                </div>
                <hr />
                <form class="row" id="page-form" action="">
                  <div class="form-group d-grid gap-2">
                    <div class="row">
                      <label
                        for="nominal_transfer"
                        class="col-md-4 col-form-label"
                        >Nominal Transfer</label
                      >
                      <div class="col-md-8">
                        <div class="input-group">
                          <span class="input-group-text">Rp</span>
                          <input
                            type="text"
                            class="form-control"
                            aria-label=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label
                        for="nominal_transfer"
                        class="col-md-4 col-form-label"
                        >Tanggal Transfer</label
                      >
                      <div class="col-md-8">
                        <input
                          type="text"
                          placeholder="Pakai datepicker"
                          class="form-control"
                          aria-label=""
                        />
                      </div>
                    </div>
                    <div class="row">
                      <label
                        for="nominal_transfer"
                        class="col-md-4 col-form-label"
                        >Bukti Transfer</label
                      >
                      <div class="col-md-8">
                        <input
                          type="text"
                          placeholder="Ini pakai javascript atau library macam dropzone"
                          class="form-control"
                          aria-label=""
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">Submit</button>
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
      filter: {
        status: "",
      },
    };
  },
  async mounted() {
    setTimeout(() => this.loadDatatable(), 500);
  },
  methods: {
    loadDatatable() {
      var token = this.$auth.strategy.token.get();
      //Should implements serverside table
      window.table = $("#xxx").DataTable({
        serverSide: true,
        processing: true,
        ajax: {
          url: "/api/order",
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
            data: null,
            render: function (data) {
              console.log(data);
              return data.tipe == "paypal"
                ? "<b>Top Up PayPal</b><br><i>" + data.target + "</i>"
                : "Jasa Bayar<br><i>" + data.target + "</i>";
            },
          },
          {
            data: "nominal",
            render: $.fn.dataTable.render.number(".", ",", 2, "$"),
          },
          {
            data: "total",
            render: $.fn.dataTable.render.number(",", ".", 2, "Rp"),
          },
          {
            data: "created_at",
            render: function (data) {
              return new Date(data).toLocaleString();
            },
          },
          {
            data: "pembayaran",
            className: "text-center",
          },
          {
            data: "status",
            render: function (data) {
              switch (data) {
                case "Waiting":
                  return '<span class="badge bg-primary">Waiting</span>';
                  break;
                case "Canceled":
                  return '<span class="badge bg-danger">Canceled</span>';
                  break;
                case "Sent":
                  return '<span class="badge bg-danger">Canceled</span>';
                  break;
                case "Completed":
                  return '<span class="badge bg-success">Completed</span>';
                  break;
                case "Processing":
                  return '<span class="badge bg-info">Processing</span>';
                  break;
                case "Refunded":
                  return '<span class="badge bg-warning">Refunded</span>';
                  break;
                case "Unconfirmed":
                  return '<span class="badge bg-muted">Unconfirmed</span>';
                  break;
              }
            },
          },
          {
            data: "id",
            className:"text-center",
            render: function (data) {
              return (
                '<a href="/order/detail/' +
                data +
                '" data-bs-toggle="tooltip" data-bs-placement="top" class="btn btn-info btn-sm" aria-label="View" data-bs-original-title="View"><i class="ri-eye-fill"></i></a>' +
                `&nbsp;<button type="button" class="btn btn-danger btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Payment Confirmation" data-bs-original-title="Payment Confirmation" aria-describedby="tooltip143151">
                    <i data-bs-toggle="modal" data-bs-target="#order-id" class="ri-bank-card-fill"></i>
                 </button>`
              );
            },
          },
        ],
      });
    },
  },
};
</script>