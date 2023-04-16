<template>
  <div>
    <div class="pagetitle mb-3">
      <div class="row">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Order Info</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/dashboard">Home</nuxt-link></li>
              <li class="breadcrumb-item active">Order List</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Customer Detail</h5>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>{{ data?.user?.name }}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{ data?.user?.email }}</td>
                  </tr>
                  <tr>
                    <td>Telp/Wa</td>
                    <td>{{ data?.user?.phone }}</td>
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
                    <td>{{ data?.invoice_no }}</td>
                  </tr>
                  <tr>
                    <td>Tanggal</td>
                    <td>{{ new Date(data?.created_at).toLocaleString() }}</td>
                  </tr>
                  <tr>
                    <td>Pembayaran</td>
                    <td>
                      {{ data?.pembayaran }} <Status :status="data?.status" />
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
                      <span v-if="data.tipe == 'paypal'">Top Up Paypal</span>
                      <span v-if="data.tipe == 'bayar'">Jasa Bayar</span>
                      <!--Mungkin diisi akun Paypalnya -->
                      <br />
                      <small> - {{ data?.target }}</small>
                    </td>
                    <td class="text-end">
                      {{
                        new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(data.nominal)
                      }}
                    </td>
                    <td class="text-end">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(data?.rate?.rate)
                      }}
                    </td>
                    <td class="text-end">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(data?.rate?.rate * data.nominal)
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Sub Total</td>
                    <td class="text-end">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(data?.rate?.rate * data.nominal)
                      }}
                    </td>
                  </tr>
                  <tr v-if="data?.tipe == 'bayar'">
                    <td colspan="3" class="text-end fw-bold">Fee</td>
                    <td class="text-end">Masih dalam pengerjaan</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Discount</td>
                    <td class="text-end">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(data?.diskon)
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Total</td>
                    <td class="text-end fw-bold">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(
                          data?.rate?.rate * data.nominal - data?.diskon
                        )
                      }}
                    </td>
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
                      <strong v-if="data.tipe == 'paypal'">Akun PayPal:</strong>
                      <strong v-else>Link Pembayaran:</strong><br />
                      <p>{{ data?.target }}</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Pesan:</strong><br />
                      <p>{{ data?.pesan }}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
      </div>
      <!-- Payment Confirmation & Order Histrory -->
      <div class="row">
        <div class="col-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Payment Confirmation</h5>
              <div class="form-group mb-2 col-12 text-center">
                <div v-if="data.bukti != '' && data.bukti != null">
                  <img
                    src="/assets/img/preview.png"
                    width="200"
                    height="200"
                    alt=""
                    class="img-thumbnail"
                  />
                  <div class="pt-2">
                    <button type="submit" class="btn btn-success">
                      Confirm
                    </button>
                  </div>
                </div>
                <i class="text-muted" v-else>Bukti pembayaran belum diupload</i>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-8"><h5 class="card-title">Noted</h5></div>
                <div class="col-4">
                  <div class="pt-3 text-end">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#noted"
                    >
                      Add/Edit
                    </button>
                  </div>
                </div>
              </div>
              <span v-if="data?.pesan != null">{{ data?.pesan }}</span>
              <i v-else class="text-muted">Belum ada catatan</i>
            </div>
          </div>
        </div>
        <div class="col-7">
          <div class="row">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">Order History</h5>
                  </div>
                </div>
                <table
                  class="table table-bordered"
                  v-if="data?.history?.length > 0"
                >
                  <thead>
                    <tr>
                      <td class="text-start">Date Added</td>
                      <td class="text-start">Comment</td>
                      <td class="text-start">Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in data.history" :key="key">
                      <td class="text-start">
                        {{ new Date(item.created_at).toLocaleString() }}
                      </td>
                      <td class="text-start">
                        <div v-html="item.pesan"></div>
                      </td>
                      <td class="text-start">
                        <Status :status="item.status" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div v-else class="text-muted"><i>Belum ada history</i></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">Add History</h5>
                  </div>
                </div>
                <form class="row" id="page-form" action="">
                  <div class="form-group d-grid gap-3">
                    <div class="row">
                      <label
                        for="order_status"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Status</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <select
                          v-model="history.status"
                          class="form-select"
                          id="status"
                          name="status"
                        >
                          <option value="" disabled>Silahkan Pilih...</option>
                          <option value="Pending">Pending</option>
                          <option value="Sent">Sent</option>
                          <option value="Processing">Processing</option>
                          <option value="Canceled">Canceled</option>
                          <option value="Completed">Completed</option>
                          <option value="Refunded">Refunded</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <label
                        for="comment"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Comment</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <textarea
                          name="comment"
                          placeholder=""
                          v-model="history.pesan"
                          id="comment"
                          row="5"
                          class="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-md-4 col-lg-3"></label>
                      <div class="col-md-8 col-lg-9">
                        <button
                        v-if="!submit.history"
                          type="button"
                          class="btn btn-primary"
                          @click="addHistory()"
                        >
                          Save
                        </button>
                        <button v-else type="button" class="btn btn-primary" disabled>
                            Saving...
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal Admin Noted-->
    <div
      class="modal fade"
      id="noted"
      tabindex="-1"
      aria-hidden="true"
      style="display: none"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Catatan Admin
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form action="" @submit.prevent="addCatatan()">
            <div class="modal-body">
              <div class="form-group">
                <textarea
                  v-model="catatan.pesan"
                  name="catatan"
                  rows="5"
                  placeholder="Catatan"
                  class="form-control"
                ></textarea>
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
                v-if="!submit.catatan"
                type="submit"
                class="btn btn-primary"
              >
                Save
              </button>
              <button v-else type="button" class="btn btn-primary" disabled>
                Saving...
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "getDetail"],
  data() {
    return {
      submit: {
        history: false,
        catatan: false,
      },
      catatan: {
        pesan: this.data.pesan,
      },
      history: {
        status: "",
        pesan: "",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      tinymce.init({
        selector: "textarea#comment",
        plugins: "image lists link anchor code",
        height: "200",
        menubar: false,
        toolbar: "blocks | bold italic alignleft aligncenter | link image",
      });
    }, 100);
  },
  methods: {
    addHistory() {
      this.history.pesan = tinymce.get("comment").getContent();
      this.submit.history = true;
      this.$axios
        .post(`/api/history-order/${this.$route.params.id}`, this.history)
        .then((res) => {
          this.history = {
            status: "",
            pesan: "",
          };
          this.$swal.fire("Success", res.message, "success");
          this.submit.history = false;
          window.location.reload()
          $("#noted").modal("hide");
        })
        .catch((err) => {
          this.$swal.fire("Failed", "Terjadi error", "error");
          this.submit.history = false;
        });
    },
    addCatatan() {
      this.submit.catatan = true;

      this.$axios
        .post(`/api/catatan-order/${this.$route.params.id}`, this.catatan)
        .then((res) => {
          this.catatan = { pesan: "" };
          this.$swal.fire("Success", res.message, "success");
          this.submit.catatan = false;
          this.$emit("getDetail");
          $("#noted").modal("hide");
        })
        .catch((err) => {
          this.$swal.fire("Failed", "Terjadi error", "error");
          this.submit.catatan = false;
        });
    },
  },
};
</script>
