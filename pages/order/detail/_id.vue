<template>
  <div>
    <div class="pagetitle mb-3">
      <div class="row">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Order Info</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active">Order List</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-12">
          <!--Jika status order pending atau waiting, maksudnya belum dibayar-->
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Menunggu pembayaran dari Anda.
            <button
              class="btn btn-sm btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#order-id"
            >
              Confirm
            </button>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Customer Detail (ini diambil dari data customer)
              </h5>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>Susanto</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>nagakan@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Telp/Wa</td>
                    <td>08298483001</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Order Info</h5>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Invoice</td>
                    <td>No INV</td>
                  </tr>
                  <tr>
                    <td>Tanggal</td>
                    <td>23 January 2023, 10:1:25</td>
                  </tr>
                  <tr>
                    <td>Pembayaran</td>
                    <td>
                      Bank BCA <span class="badge bg-danger">Unpaid</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
      </div>
      <!-- Order Detail -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Order Detail</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <td class="text-start fw-bold">Produk</td>
                    <td class="text-end fw-bold">Jumlah</td>
                    <td class="text-end fw-bold">Rate</td>
                    <td class="text-end fw-bold">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-start">
                      Top Up Paypal
                      <!--Mungkin diisi akun Paypalnya -->
                      <br />
                      <small> - akunpp1@gmail.com</small>
                    </td>
                    <td class="text-end">$50.00</td>
                    <td class="text-end">Rp 15.900</td>
                    <td class="text-end">Rp 795.000</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Sub Total</td>
                    <td class="text-end">xxxxxx</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Fee</td>
                    <td class="text-end">xxxxxx</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Discount</td>
                    <td class="text-end">xxxxxx</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Total</td>
                    <td class="text-end fw-bold">xxxx</td>
                  </tr>
                </tbody>
              </table>
              <!-- Jika ada pesan/link echo -->
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <td><strong>Info tambahan</strong></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Akun PayPal:</strong> (jika topup, echo "Akun
                      Paypal", sebaliknya jika jasa bayar echo "Link/Akun
                      Pembayaran"<br />
                      <p>akunpp1@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Pesan:</strong><br />
                      <p>Misal info login, alamat pengiriman, dll</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
      </div>
      <!-- Order Histrory -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-8">
                  <h5 class="card-title">Order History</h5>
                </div>
              </div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <td class="text-start">Date Added</td>
                    <td class="text-start">Comment</td>
                    <td class="text-start">Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-start">23 January 2023, 10:1:25</td>
                    <td class="text-start">
                      Pembayaran Sudah Kami Terima dan segera proses orderan
                      anda
                    </td>
                    <td class="text-start">
                      <span class="badge bg-info">Processing</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-start">23 January 2023, 10:21:16</td>
                    <td class="text-start">
                      Sudah saya kirim berikut link screenshotnya:
                    </td>
                    <td class="text-start">
                      <span class="badge bg-success">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="order-id" tabindex="-1">
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
                        <input type="text" class="form-control" aria-label="" />
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
    </section>
  </div>
</template>
<script>
export default {
}
</script>