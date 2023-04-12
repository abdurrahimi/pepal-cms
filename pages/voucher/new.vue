<template>
  <div>
    <div class="pagetitle mb-2">
      <div class="row align-items-center">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Voucher Form</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link to="/dashboard">Home</nuxt-link>
              </li>
              <li class="breadcrumb-item">Voucher List</li>
              <li class="breadcrumb-item active">Voucher Form</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <!-- Horizontal Form -->
      <form
        class="row"
        id="post-form"
        action=""
        @submit.prevent="submitHandler()"
      >
        <div class="col-lg-12 col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Voucher Form</h5>
              <div class="form-group mb-2">
                <label class="col-form-label">Kode</label>
                <input
                  type="text"
                  v-model="form.kode"
                  name="namabank"
                  placeholder="Kode Voucher"
                  id="namabank"
                  class="form-control"
                />
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Tipe Potongan</label>
                <select class="form-control" required v-model="form.tipe">
                  <option value="harga">Harga</option>
                  <option value="persentase">Persentase</option>
                </select>
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Tipe Order</label>
                <select class="form-control" required v-model="form.tipe_order">
                  <option value="paypal">Saldo Paypal</option>
                  <option value="bayar">Jasa Bayar</option>
                  <option value="all">Semua Layanan</option>
                </select>
              </div>
              <div class="form-group mb-2">
                <label class="col-form-label">Nilai</label>
                <div class="input-group mb-3">
                  <span
                    class="input-group-text"
                    id="basic-addon1"
                    v-if="form.tipe == 'harga'"
                    >Rp</span
                  >
                  <input
                    type="number"
                    step="0.01"
                    :max="form.tipe == 'persentase' ? 100 : 999999999999999999n"
                    v-model="form.jumlah"
                    name="norek"
                    placeholder="Nilai"
                    id="norek"
                    class="form-control"
                  />
                  <span
                    class="input-group-text"
                    v-if="form.tipe == 'persentase'"
                    id="basic-addon1"
                    >%</span
                  >
                </div>
              </div>
              <div class="form-group mb-2" v-if="form.tipe == 'persentase'">
                <label class="form-label">Maksimal Potongan</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.max_discount"
                />
              </div>
              <div class="form-group mb-2">
                <label class="form-label">Harga Minimal</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.min_harga"
                />
              </div>
              <div class="row">
                  <div class="form-group mb-2 col-lg-6 col-md-6">
                    <label class="form-label">Tanggal Aktif</label>
                    <date-picker
                      v-model="form.active_start"
                      valueType="format"
                      style="width: 100%"
                    ></date-picker>
                  </div>
                  <div class="form-group mb-2 col-lg-6 col-md-6">
                    <label class="form-label">Tanggal Berakhir</label>
                    <date-picker
                      v-model="form.active_end"
                      valueType="format"
                      style="width: 100%"
                    ></date-picker>
                  </div>
              </div>
              <div class="form-group mb-2">
                <label class="form-label">Maksimal Penggunaan (per user)</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.max_penggunaan"
                />
              </div>

              <div class="text-center mt-3 mb-2">
                <button v-if="!submit" type="submit" class="btn btn-primary">
                  Save
                </button>
                <button v-else type="button" class="btn btn-primary disabled">
                  Saving...
                </button>
                <nuxt-link to="/post/list" class="btn btn-secondary"
                  >Cancel</nuxt-link
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      submit: false,
      categoryList: [],
      form: {
        kode: "",
        tipe: "harga",
        tipe_order: "all",
        jumlah: 0,
        min_harga: 0,
        max_harga: 0,
        max_discount: 0,
        max_penggunaan: 0,
        active_start: new Date().toISOString().slice(0, 10),
        active_end: new Date().toISOString().slice(0, 10),
      },
    };
  },
  mounted(){
    if (this.$auth.user.role != "admin") {
      this.$router.replace("/404");
    }
  },
  methods: {
    submitHandler() {
      this.submit = true;

      this.$axios
        .post("/api/voucher", this.form)
        .then((res) => {
          this.$swal.fire("Success", "Data berhasil disimpan", "success");
          this.$router.push("/voucher/list");
        })
        .catch((err) => {
          this.submit = false;
          if(err.response.status == 400){
            this.$swal.fire("Error", err.response.data.message, "error");
            return
          }
          this.$swal.fire("Error", "Terjadi error", "error");
        });
    },
  },
};
</script>
