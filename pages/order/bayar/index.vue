<template>
  <div>
    <div class="pagetitle mb-3">
      <div class="row">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Order Jasa Bayar</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link to="">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item active">Order</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-lg-7 col-md-7">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Form Jasa Bayar Form</h5>
              <!-- Horizontal Form -->
              <form class="row g-3">
                <div class="row">
                  <div class="col-8">
                    <label class="col-form-label"
                      >Nominal (termasuk ongkir)</label
                    >
                    <span class="badge bg-info"
                      ><i
                        class="ri-question-line"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Gunakan titik (.) untuk menuliskan desimal."
                      ></i>
                    </span>
                    <input
                      type="text"
                      v-model="form.nominal"
                      name="nominal"
                      placeholder="Nominal"
                      id="nominal"
                      class="form-control"
                    />
                  </div>
                  <div class="col-4">
                    <label class="col-form-label fw-bold fs-5"
                      >Rate:
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(rate)
                      }}/$</label
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label"
                    >Jenis Pembayaran
                    <span class="badge bg-info"
                      ><i
                        class="ri-question-line"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Personal, pembayaran yang perlu akun paypal penerima. Marketplace, pembayaran melalui checkout. Invoice, perlu link invoice"
                      ></i>
                    </span>
                  </label>
                  <select
                    class="form-select"
                    id="jenis-pembayaran"
                    v-model="form.jenis"
                    name="jenis_pembayaran"
                  >
                    <option value="" disabled>Silahkan Pilih...</option>
                    <option value="personal">Personal/company</option>
                    <option value="marketplace">Marketplace/ecommerce</option>
                    <option value="invoice">Invoice</option>
                  </select>
                </div>
                <div
                  v-if="form.jenis == 'personal'"
                  class="form-group"
                  id="personal"
                >
                  <label class="col-form-label" for="input-akun-paypal"
                    >Akun PayPal</label
                  >
                  <input
                    type="text"
                    name="akun_paypal"
                    value=""
                    v-model="form.akun"
                    placeholder="Akun Paypal"
                    id="input-akun-paypal"
                    class="form-control"
                  />
                </div>
                <div
                  v-if="form.jenis == 'marketplace'"
                  class="form-group"
                  id="marketplace"
                >
                  <label class="col-form-label" for="input-link-produk"
                    >Link Produk/Web</label
                  >
                  <input
                    type="text"
                    name="link_produk"
                    v-model="form.akun"
                    value=""
                    placeholder="Link produk/web"
                    id="input-link-produk"
                    class="form-control"
                  />
                </div>
                <div
                  v-if="form.jenis == 'invoice'"
                  class="form-group"
                  id="invoice"
                >
                  <label class="col-form-label" for="input-link-invoice"
                    >Link Invoice
                    <span class="badge bg-info"
                      ><i
                        class="ri-question-line"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Gunakan layanan short url, jika link invoicenya panjang"
                      ></i>
                    </span>
                  </label>
                  <textarea
                    v-model="form.akun"
                    name="link_invoice"
                    placeholder="Link invoice"
                    id="link-invoice"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Kupon</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Kupon"
                      v-model="form.kupon"
                      aria-label="Kupon"
                      aria-describedby="basic-addon2"
                    />
                    <button
                      v-if="!voucherResponse.applied"
                      type="button"
                      class="input-group-text btn-primary"
                      id="apply-coupon"
                      @click="applyVoucher"
                    >
                      Apply
                    </button>
                    <button
                      v-else
                      type="button"
                      class="input-group-text btn-success disabled"
                      id="apply-coupon"
                    >
                      Applied
                    </button>
                  </div>
                  <div v-if="voucherResponse.message != ''" class="text-danger">
                    &nbsp;{{ voucherResponse.message }}
                  </div>
                  <div
                    v-if="voucherResponse.successMessage != ''"
                    class="text-success"
                  >
                    &nbsp;{{ voucherResponse.successMessage }}
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Metode Pembayaran</label>
                  <select
                    v-model="form.metode"
                    class="form-select"
                    id="bank"
                    name="bank"
                  >
                    <option value="" disabled>Silahkan Pilih...</option>
                    <option
                      v-for="(item, key) in pembayaran"
                      :value="item?.id"
                      :key="key"
                    >
                      {{ item?.bank }}
                    </option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="col-form-label">Keterangan</label>
                  <span class="badge bg-info"
                    ><i
                      class="ri-question-line"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Untuk informasi tambahan jika ada, isi sejelas-jelasnya. Misal login web, alamat pengiriman, pendaftaran pelatihan an xx, cost journal publication, dll."
                    ></i>
                  </span>
                  <textarea
                    v-model="form.keterangan"
                    name="keterangan"
                    rows="5"
                    placeholder="Keterangan"
                    id="keterangan"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="col-12">
                  <div class="alert alert-info fade show" role="alert">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck2"
                        v-model="form.terms"
                        required
                      />
                      <label class="form-check-label" for="invalidCheck2">
                        Dengan melakukan order, saya setuju terhadap
                        <a href="terms.php ">Syarat dan Ketentuan</a> di
                        Saldobit
                      </label>
                    </div>
                  </div>
                </div>
              </form>
              <!-- End Horizontal Form -->
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5">
          <div class="card">
            <div class="card-header-summary mb-3">Rangkuman Order</div>
            <div class="card-body">
              <div class="row g-3">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>Jenis Pembayaran</td>
                      <td class="text-end">{{ camalize(form.jenis) }}</td>
                    </tr>
                    <tr>
                      <td>Nominal</td>
                      <td class="text-end">
                        {{
                          new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(form.nominal)
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Pembayaran</td>
                      <td class="text-end">
                        {{
                          pembayaran.filter((v) => v.id == form.metode)[0]?.bank
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Rate</td>
                      <td class="text-end">
                        {{
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format( form.nominal > 50 ? rate : rate +500)
                        }}
                      </td>
                    </tr>
                    <!-- Jika ada fee, echo fee -->
                    <tr>
                      <td>Fee</td>
                      <td class="text-end">
                        {{
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(
                            (rate * form.nominal - discount) * (4 / 100) > 30000
                              ? (rate * form.nominal - discount) * (4 / 100)
                              : 30000
                          )
                        }}
                      </td>
                    </tr>
                    <!-- Jika ada discount, echo discount -->
                    <tr>
                      <td>Discount</td>
                      <td class="text-end">
                        {{
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(discount)
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td class="text-end">
                        {{
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(rate * form.nominal - discount)
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="alert alert-warning fade show" role="alert">
                Untuk order &lt;$50, dikenakan rate normal + 500.
              </div>
            </div>
            <div class="text-center mb-4">
              <button
                type="submit"
                @click="submitEvent()"
                class="btn btn-primary"
              >
                Order
              </button>
              <a href="order-dashboard.html" class="btn btn-secondary"
                >Cancel</a
              >
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
      rate: 0,
      form: {
        nominal: 0,
        jenis: "personal",
        akun: "",
        invoice: "",
        kupon: "",
        metode: "",
        keterangan: "",
        applied: false,
        order: "bayar",
      },
      voucherResponse: {
        message: "",
        successMessage: "",
        applied: false,
      },
      pembayaran: [],
      discount: 0,
      validateVoucher: false,
      term: false,
    };
  },
  async mounted() {
    await this.getRate();
    await this.getPembayaran();
  },
  methods: {
    async getPembayaran() {
      const { data } = await this.$axios.get("/api/bank");
      this.pembayaran = data;
    },
    applyVoucher() {
      this.$axios
        .post("/api/voucher/apply", this.form)
        .then((res) => {
          if (res.data.valid) {
            this.voucherResponse = {
              message: "",
              successMessage: "",
              applied: false,
            };
            this.discount = parseInt(res.data.voucher.jumlah);
            (this.voucherResponse.applied = true),
              (this.voucherResponse.successMessage = res.data.message);
            this.voucherResponse.voucher = res.data.voucher;
          }
        })
        .catch((err) => {
          if (err.response.status == 422) {
            this.voucherResponse = err.response.data;
          }
        });
    },
    async getRate() {
      const { data } = await this.$axios.get("/api/get-rate");
      this.form.rate = data.id;
      this.rate = data.rate;
    },
    camalize(str) {
      return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
          return chr.toUpperCase();
        });
    },
    submitEvent() {
      this.error = {};
      this.submit = true;
      this.$axios
        .$post("/api/order", this.form)
        .then((res) => {
          this.$swal.fire("Success", "Pesananmu telah disimpan", "success");
          this.submit = false;
          this.$router.push("/order/list");
        })
        .catch((err) => {
          if (err.response.status == 400) {
            this.error = err.response.data;
            window.scrollTo(0, 0);
          }
          this.$swal.fire("Failed", "Terjadi error", "error");
          this.submit = false;
        });
    },
  },
};
</script>
