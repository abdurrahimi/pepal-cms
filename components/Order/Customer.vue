<template>
  <div>
    <div class="pagetitle mb-3">
      <div class="row">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Order Info</h1>
          <nav>
            <ol class="breadcrumb">
              <nuxt-link to="/dashboard">Home</nuxt-link>
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
            v-if="data.bukti == '' || data.bukti == null"
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
          <div
            v-else
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Lihat bukti pembayaran
            <button
              class="btn btn-sm btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#order-id"
            >
              Lihat
            </button>
            atau
            <button
              class="btn btn-sm btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#order-id"
              @click="ubah = !ubah"
            >
              Ubah
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
                    <td class="text-end">{{
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(
                            ((data.rate.rate * data.nominal) - data.discount) * (4 / 100) > 30000
                              ? ((data.rate.rate * data.nominal) - data.jumlah) * (4 / 100)
                              : 30000
                          )
                        }}</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Discount</td>
                    <td class="text-end">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(data.jumlah ?? 0)
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
                          (data.rate.rate * data.nominal - data.discount) * (4 / 100) > 30000
                              ? ((data?.rate?.rate * data.nominal) - data?.diskon)+(data.rate.rate * data.nominal - data.jumlah) * (4 / 100)
                              : ((data?.rate?.rate * data.nominal) - data?.diskon) + 30000

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
      </div>
      <!-- Modal -->
      <div class="modal fade" id="order-id" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 v-if="data.bukti==null" class="modal-title fs-5" id="exampleModalLabel">
                Konfirmasi Pembayaran
              </h1>
              <h1 v-else class="modal-title fs-5" id="exampleModalLabel">
                Bukti Pembayaran
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form id="page-form" action="" @submit.prevent="submitHandler()">
              <div class="modal-body">
                <div v-if="data.bukti == null || ubah">
                  <p>Pastikan pembayaran Anda ke rekening berikut:</p>
                  <div class="d-grid gap-1">
                    <div class="row">
                      <div class="col-md-3">Nama Bank</div>
                      <div class="col-md-9">Bank {{ data.pembayaran }}</div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">No Rekening</div>
                      <div class="col-md-9">{{ data.norek }}</div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">Atas Nama</div>
                      <div class="col-md-9">{{ data.nama }}</div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">Jumlah</div>
                      <div class="col-md-9">{{
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(data.total)
                        }}</div>
                    </div>
                  </div>
                  <hr />

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
                            v-model="form.nominal"
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
                        <date-picker
                          v-model="form.tanggal"
                          valueType="format"
                          style="width: 100%"
                        ></date-picker>
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
                          type="file"
                          @change="onFileChange"
                          placeholder="Ini pakai javascript atau library macam dropzone"
                          class="form-control"
                          aria-label=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <img :src="data.bukti" class="thumbnail" style="max-width:100%">
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
                <button v-if="data.bukti == null || ubah" type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  props: ["data"],
  components: { DatePicker },
  data() {
    return {
      ubah:false,
      form: {
        tanggal: "",
        bukti: "",
        nominal: "",
      },
    };
  },
  mounted(){
    $('#order-id').on('hidden.bs.modal', function (e) {
      this.ubah = false
    })
  },
  methods: {
    removeImage() {
      this.form.image = "/assets/img/preview.png";
    },
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      Object.values(files).map((file) => {
        this.createImage(file);
      });
      $("#inputImage").val("");
    },
    createImage(file, key) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.form.bukti = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitHandler() {
      this.$axios.setBaseURL('/')
      this.$axios
        .post("/api/upload-bukti/" + this.$route.params.id, this.form)
        .then((res) => {
          window.location.reload();
        });
    },
  },
};
</script>
