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
                      >Rate: 16.030</label
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
                    v-model="form.link"
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
                    v-model="form.invoice"
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
                      v-model="form.kupon"
                      type="text"
                      class="form-control"
                      placeholder="Kupon"
                      aria-label="Kupon"
                      aria-describedby="basic-addon2"
                    />
                    <span class="input-group-text btn-success" id="apply-coupon"
                      >Apply</span
                    >
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
                    <option value="bca">BCA</option>
                    <option value="mandiri">Mandiri</option>
                    <option value="bni">BNI</option>
                    <option value="bri">BRI</option>
                    <option value="jago">Jago</option>
                    <option value="jenius">Jenius</option>
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
                        v-model="terms"
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
                      <td class="text-end">{{ form.metode.toUpperCase() }}</td>
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
                    <!-- Jika ada fee, echo fee -->
                    <tr>
                      <td>Fee</td>
                      <td class="text-end">Rp 30.000</td>
                    </tr>
                    <!-- Jika ada discount, echo discount -->
                    <tr>
                      <td>Discount (jika ada)</td>
                      <td class="text-end">Rp 0</td>
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
              <a href="order-payment-method.html" class="btn btn-primary"
                >Order</a
              >
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
      rate: 16030,
      form: {
        nominal: 0,
        jenis: "personal",
        paypal: "",
        link: "",
        invoice: "",
        kupon: "",
        metode: "bca",
        keterangan: "",
        order:"bayar",
      },
      discount: 0,
      validateVoucher: false,
      term: false,
    };
  },
  mounter() {},
  methods: {
    camalize(str) {
      return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
          return chr.toUpperCase();
        });
    },
  },
};
</script>