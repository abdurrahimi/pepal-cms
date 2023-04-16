<template>
  <div>
    <div class="pagetitle mb-3">
      <div class="row">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Order Top Up PayPal</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="">Home</nuxt-link></li>
              <li class="breadcrumb-item active">Order</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <form
        class="row g-3"
        method="post"
        action=""
        @submit.prevent="submitEvent()"
      >
        <div class="row">
          <div class="col-lg-7 col-md-7">
            <div class="card">
              <div class="card-body">
                <div class="card-title">Top Up Paypal Form</div>
                <!-- Horizontal Form -->
                <div
                  v-if="error.message && error?.message != ''"
                  class="alert alert-danger"
                  role="alert"
                >
                  {{ error?.message }}
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-8">
                      <label class="col-form-label"
                        >Nominal (Min: $30, Max:$2000)</label
                      >
                      <span class="badge bg-info">
                        <i
                          data-toggle="tooltip"
                          data-placement="top"
                          data-custom-class="custom-tooltip"
                          title="Pesan akan kami tulis di berita pengiriman saldo. Isi pesan jika ada. Hindari kata bayar/beli."
                          class="ri-question-line"
                        ></i
                      ></span>
                      <input
                       v-if="!voucherResponse.applied"
                        type="number"
                        name="nominal"
                        v-model="form.nominal"
                        placeholder="Nominal"
                        id="nominal"
                        min="30"
                        class="form-control"
                        required
                      />
                      <input
                        v-else
                        type="number"
                        name="nominal"
                        :value="form.nominal"
                        placeholder="Nominal"
                        id="nominal"
                        class="form-control"
                        disabled
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
                </div>
                <div class="form-group">
                  <label class="col-form-label required">Akun Paypal</label>
                  <span class="badge bg-info"
                    ><i
                      class="ri-question-line"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-custom-class="custom-tooltip"
                      title="Boleh diisi link atau email. Prefer email"
                    ></i>
                  </span>
                  <input
                    type="text"
                    name="akun_paypal"
                    v-model="form.akun"
                    placeholder="Akun PayPal"
                    id="akun-paypal"
                    class="form-control"
                    required
                  />
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
                  <div v-if="voucherResponse.message != ''" class="text-danger">&nbsp;{{ voucherResponse.message }}</div>
                  <div v-if="voucherResponse.successMessage != ''" class="text-success">&nbsp;{{ voucherResponse.successMessage }}</div>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Metode Pembayaran</label>
                  <select
                    class="form-select"
                    id="bank"
                    name="bank"
                    v-model="form.metode"
                    required
                  >
                    <option value="" disabled>Silahkan Pilih...</option>
                    <option
                      v-for="(item, key) in pembayaran"
                      :value="item?.id"
                      :key="key"
                    >
                      {{ item?.bank }}
                    </option>
                    <!--                     <option value="mandiri">Mandiri</option>
                    <option value="bni">BNI</option>
                    <option value="bri">BRI</option>
                    <option value="jago">Jago</option>
                    <option value="jenius">Jenius</option> -->
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="col-form-label">Pesan</label>
                  <span class="badge bg-info"
                    ><i
                      class="ri-question-line"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-custom-class="custom-tooltip"
                      title="Pesan akan kami tulis di berita pengiriman saldo. Isi pesan jika ada. Hindari kata bayar/beli."
                    ></i>
                  </span>
                  <textarea
                    name="content"
                    rows="5"
                    placeholder="Pesan"
                    id="pesan"
                    v-model="form.pesan"
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
                        v-model="form.setuju"
                        id="invalidCheck2"
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
                        <td>Jenis Layanan</td>
                        <td class="text-end">TopUp PayPal</td>
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
                        <td>Pambayaran</td>
                        <td class="text-end">BCA</td>
                      </tr>
                      <tr>
                        <td>Rate</td>
                        <td class="text-end">
                          {{
                            new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(rate)
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td>SubTotal</td>
                        <td class="text-end">
                          {{
                            new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(rate * form.nominal)
                          }}
                        </td>
                      </tr>
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
                <button v-if="!submit" type="submit" class="btn btn-primary">
                  Order
                </button>
                <button v-else type="button" class="btn btn-primary" disabled>
                  Processsing...
                </button>
                <a href="order-dashboard.html" class="btn btn-secondary"
                  >Cancel</a
                >
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      submit: false,
      rate: 0,
      discount: 0,
      form: {
        nominal: 0.0,
        akun: "",
        rate: 1,
        kupon: "",
        metode: "",
        pesan: "",
        order: "paypal",
        applied:false,
        setuju: false,
      },
      voucherResponse:{
        message:"",
        successMessage:"",
        applied:false,
      },
      pembayaran: {},
      error: {},
    };
  },
  watch:{
    "form.nominal"(val){
      this.voucherResponse ={
        message:"",
        successMessage:"",
        applied:false,
      }
    }
  },
  async mounted() {
    await this.getRate();
    await this.getPembayaran();
    $('[data-toggle="tooltip"]').tooltip();
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
          if(res.data.valid){
            this.voucherResponse ={
              message:"",
              successMessage:"",
              applied:false,
            }
            this.discount = parseInt(res.data.voucher.jumlah)
            this.voucherResponse.applied = true,
            this.voucherResponse.successMessage = res.data.message
            this.voucherResponse.voucher = res.data.voucher
          }
        }).catch(err => {
          if(err.response.status == 422){
            this.voucherResponse = err.response.data
          }
        })
    },
    async getRate() {
      const { data } = await this.$axios.get("/api/get-rate");
      this.form.rate = data.id;
      this.rate = data.rate;
    },
    submitEvent() {
      if(this.voucherResponse.applied){
        this.form.applied = true
      }
      this.error = {};
      this.submit = true;

      this.$axios
        .$post("/api/order", this.form)
        .then((res) => {
          this.$swal.fire("Success", "Pesananmu telah disimpan", "success");
          this.submit = false;
          window.location.href = "/order/pembayaran/"+res.id;
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
