<template>
  <div>
    <section class="ud-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
              <p class="ud-hero-lead">
                Ingin beli saldo PayPal atau butuh jasa pembayaran online?
              </p>
              <h1 class="ud-hero-title">
                Jasa Top Up PayPal dan Bayar Online PayPal Terbaik di Indonesia
              </h1>
              <p class="ud-hero-desc">
                Saldobit melayani jual beli saldo PayPal dan jasa pembayaran
                online dengan rate murah, aman, cepat dan terpercaya.
              </p>
              <ul class="ud-hero-buttons">
                <li>
                  <nuxt-link
                    to="/layanan/topup"
                    class="ud-main-btn ud-white-btn"
                    >Jasa Top Up PayPal</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/layanan/jasa-pembayaran-online"
                    class="ud-main-btn ud-white-btn"
                    >Jasa Pembayaran Online</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="rate">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="box-head">
              <div class="box-content">
                <div class="box">
                  <div class="kurs">
                    Rate:
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(rate)
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ====== Hero End ====== -->
    <!-- ====== Service Start ====== -->
    <section class="service-index pb-80">
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <span class="pt-50">What We Do</span>
              <h2>Layanan Yang Kami Tawarkan</h2>
              <p>
                Pilih layanan yang anda butuhkan dan dapatkan servis terbaik
                dari kami
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-lg-6" style="display: flex">
            <div class="service-item" style="display: flex">
              <div class="service-item-inner bg-white" style="flex: 1">
                <div class="service-item-thumb">
                  <i class="ri-exchange-dollar-line"></i>
                </div>
                <div class="service-item-content">
                  <div class="layanan">
                    <nuxt-link to="/layanan/topup"
                      >Jasa Top Up PayPal</nuxt-link
                    >
                  </div>
                  <p>
                    Kami menyediakan jasa top up saldo PayPal. Saldo PayPal yang
                    kami kirim 100% halal, legal dan aman, sehingga Anda tidak
                    perlu khawatir menggunakan saldo PayPal tersebut.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6" style="display: flex">
            <div class="service-item" style="display: flex">
              <div class="service-item-inner bg-white" style="flex: 1">
                <div class="service-item-thumb">
                  <i class="ri-secure-payment-line"></i>
                </div>
                <div class="service-item-content">
                  <div class="layanan">
                    <nuxt-link
                    to="/layanan/jasa-pembayaran-online"
                    >Jasa Pembayaran Online</nuxt-link
                  >
                  </div>
                  <p>
                    Kami juga menyediakan jasa pembayaran online menggunakan
                    PayPal. Rate yang kami tawarkan paling rendah, biaya
                    transaksi yang transparan dan tidak ada biaya tambahan
                    lainnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Service End ====== -->
    <!-- ====== Why Choose Start ====== -->
    <section class="why-area pb-80">
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <span class="pt-60">Mengapa Menggunakan Layanan Kami</span>
              <h2>Kami adalah yang terbaik</h2>
              <p>
                Berikut adalah alasan mengapa Anda harus memilih Saldobit untuk
                top up saldo PayPal dan jasa pembayaran online Anda.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="why-card">
              <i class="ri-scales-3-line"></i>
              <div class="feature">Aman dan Legal</div>
              <p>
                Saldo PayPal yang kami jual berasal dari hasil kerja yang halal
                dan legal sebagai freelancer seperti di fiverr, 99designs atapun
                publisher di MGID, propellerads, adsterra, dll sehingga aman
                digunakan.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="why-card">
              <i class="ri-drop-line"></i>
              <div class="feature">Rate Rendah</div>
              <p>
                Tidak seperti jasa lainnya yang menetapkan rate diatas kartu
                kredit, kami menggunakan kurs sesuai dengan kartu kredit
                sehingga real memberikan rate rendah dan harga terbaik untuk
                Anda.​
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="why-card">
              <i class="ri-timer-line"></i>
              <div class="feature">Proses Cepat</div>
              <p>
                Waktu anda sangatlah berharga. Oleh karenanya, kami akan
                memproses pesanan anda segera setelah kami terima pembayaran.
                Biasanya saldo PayPal akan masuk ke akun anda kurang dari 30
                menit.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="why-card">
              <i class="ri-calculator-line"></i>
              <div class="feature">Transparan</div>
              <p>
                Dengan fitur simulasi order, Anda dapat menghitung berapa
                nominal rupiah yang harus dibayarkan dan berapa saldo PayPal
                yang akan Anda terima ketika membeli saldo PayPal. Menarik
                bukan?
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="why-card">
              <i class="ri-customer-service-2-line"></i>
              <div class="feature">Pelayanan Prima</div>
              <p>
                Berbekal pada service knowledge, jiwa melayani dan kemampuan
                yang komunikasi handal, customer service kami mampu memberikan
                pelayanan yang prima, cepat, efisien dan ramah.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="why-card">
              <i class="ri-shield-check-line"></i>
              <div class="feature">Bergaransi</div>
              <p>
                Setiap order yang Anda buat di Saldobit dilindungi oleh
                <b>GARANSI</b> sehingga Anda tenang dan tidak perlu khawatir.
                Silahkan baca dan pelajari ketentuan garansi sebelum order
                disini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Why Choose End ====== -->

    <!-- Simulasi dan cara order Start --->
    <section id="pricing">
      <div class="container py-5">
        <div class="row justify-content-center mb-3">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center">
              <span class="pt-50">Cara Order dan Simulasi Perhitungan</span>
              <h2>Saldobit Untuk Top Up PayPal dan Pembayaran Online Anda!</h2>
              <p>
                Di Saldobit, kami memberikan cara order saldo PayPal dan jasa
                pembayaran online yang cepat dan mudah, berikut perhitungannya
              </p>
            </div>
          </div>
        </div>
        <div class="py-2 mb-5">
          <!-- Rounded tabs -->
          <ul
            id="nav-tab"
            role="tablist"
            class="nav nav-tabs nav-pills flex-column flex-sm-row text-center bg-heading-color border-0 rounded-nav"
          >
            <li class="nav-item flex-sm-fill" role="presentation">
              <a
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                class="nav-link border-0 text-uppercase fw-bold active"
                >Top Up PayPal</a
              >
            </li>
            <li class="nav-item flex-sm-fill" role="presentation">
              <a
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                class="nav-link border-0 text-uppercase fw-bold"
                >Jasa Bayar</a
              >
            </li>
          </ul>
          <div id="nav-tabContent" class="tab-content">
            <div
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              class="tab-pane fade px-2 py-5 show active"
            >
              <div class="row align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <h3 class="mb-4">Cara Top Up Saldo PayPal di Saldobit</h3>
                  <p class="mb-4">
                    Cara top up saldo PayPal di Saldobit sangatlah mudah.
                    Berikut ini ada 4 langkah mudah untuk isi saldo PayPal di
                    Saldobit.
                  </p>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Login</h5>
                      <p class="mb-0">
                        Silahkan login ke akun Saldobit anda melalui link
                        <nuxt-link to="/login">Login</nuxt-link>. Jika belum punya akun,
                        silahkan daftar dulu.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Order Saldo</h5>
                      <p class="mb-0">
                        Pada menu Order, klik Top Up, masukkan nominal, akun
                        PayPal yang ingin diisi saldo dan pesan jika ada.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Pembayaran</h5>
                      <p class="mb-0">
                        Lakukan pembayaran ke rekening Saldobit sesuai dengan
                        informasi yang anda terima.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Pengiriman</h5>
                      <p class="mb-0">
                        Tunggu beberapa saat, saldo PayPal akan terkirim ke akun
                        Anda, biasanya kurang dari 30 menit.
                      </p>
                    </div>
                  </div>
                  <!--<a href="#" class="ud-main-btn ud-white-btn py-sm-3 mt-3">Order Sekarang</a>-->
                </div>
                <div class="col-lg-6 justify-content-center">
                  <div
                    class="form-simulasi wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <h4>Form Simulasi Top Up PayPal</h4>
                    <p class="desc">
                      Form simulasi untuk menghitung rupiah yang harus dibayar
                      dan jumlah saldo PayPal yang akan diterima.
                    </p>
                    <div class="">
                      <form class="" id="">
                        <div class="d-grid gap-3">
                          <div class="form-group">
                            <label for="input-nominal" class="form-label"
                              >Nominal Saldo PayPal ($)</label
                            >
                            <input
                              type="text"
                              name="nominal-top-up"
                              v-model="paypalValue"
                              placeholder="Masukkan nominal yang dibeli ($)"
                              id="nominal-top-up"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label
                              for="input-country-account"
                              class="form-label"
                              >Akun PayPal</label
                            >
                            <select class="form-select" id="country_input">
                              <option value="indonesia" selected="selected">
                                Indonesia
                              </option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="input-rate" class="form-label"
                              >Rate PayPal</label
                            >
                            <input
                              type="text"
                              name="rate"
                              value="15100"
                              id="rate-top-up"
                              class="form-control"
                              disabled
                            />
                          </div>
                          <div
                            id="result_calculate"
                            data-wow-duration="0.5s"
                            data-wow-delay=".1s"
                          >
                            <!-- ini harusnya di hide dulu, kalau di klik hitung baru muncul // hide start -->
                            Estimasi yang diterima :
                            <span class="fw-bold" id="result_estimate">{{
                              new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(estimasiPaypal)
                            }}</span
                            ><br />
                            Nominal yang harus dibayar :
                            <span class="fw-bold" id="result_pay">{{
                              new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              }).format(result)
                            }}</span
                            ><br />
                            <br />
                            <!-- hide end -->
                          </div>
                          <button
                            type="button"
                            class="ud-main-btn ud-white-btn mt-2"
                            @click="hitungtopup()"
                          >
                            Hitung
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              class="tab-pane fade px-4 py-5"
            >
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <h3 class="mb-4">
                    Cara Order Jasa Pembayaran Online di Saldobit
                  </h3>
                  <p class="mb-4">
                    Berikut ini adalah 4 langkah cara order jasa pembayaran
                    online di Saldobit
                  </p>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Login</h5>
                      <p class="mb-0">
                        Silahkan login terlebih dahulu melalui link: login.
                        <!--Jika belum punya, silahkan mendaftar terlebih dahulu.-->
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Order</h5>
                      <p class="mb-0">
                        Pada menu Order, klik Jasa Bayar. Masukkan nominal, link
                        item yang anda beli dan informasi lainnya jika
                        diperlukan.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Pembayaran</h5>
                      <p class="mb-0">
                        Lakukan pembayaran sesuai dengan info yang anda terima
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mb-4">
                    <div
                      class="flex-shrink-0 btn-square rounded-circle bg-success-point"
                    >
                      <i class="ri-check-fill ri-xl"></i>
                    </div>
                    <div class="ms-4">
                      <h5>Pengiriman</h5>
                      <p class="mb-0">
                        Tunggu beberapa saat, item yang anda inginkan sudah
                        terbeli.
                      </p>
                    </div>
                  </div>
                  <!--<a href="#" class="ud-main-btn ud-white-btn py-sm-3 mt-3">Order Sekarang</a>-->
                </div>
                <div class="col-lg-6">
                  <div class="form-simulasi">
                    <h4>Form Simulasi Jasa Bayar</h4>
                    <p class="desc">
                      Form simulasi untuk menghitung rupiah yang harus dibayar
                      ketika membeli produk seharga $x.
                    </p>
                    <div class="">
                      <form class="" id="">
                        <div class="d-grid gap-3">
                          <div class="form-group">
                            <label for="input-nominal" class="form-label"
                              >Harga item yang anda beli ($)</label
                            >
                            <input
                              type="text"
                              name="nominal-bayar"
                              v-model="jasabayarValue"
                              placeholder="Masukkan harga item yang ingin dibeli"
                              id="input-nominal-bayar"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="input-rate" class="form-label"
                              >Rate PayPal</label
                            >
                            <input
                              type="text"
                              name="rate"
                              :value="rate"
                              id="rate-bayar"
                              class="form-control"
                              disabled
                            />
                          </div>
                          <div
                            id="result_calculate"
                            data-wow-duration="0.5s"
                            data-wow-delay=".1s"
                          >
                            <!-- ini harusnya di hide dulu, kalau di klik hitung baru muncul // hide start -->
                            Biaya admin (4% / min Rp 30.000) :
                            <span class="fw-bold" id="result_fee"
                              >{{
                                new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format((rate*jasabayarValue)*(4/100) > 30000 ? (rate*jasabayarValue)*(4/100) : 30000 )
                              }}</span
                            ><br />
                            Nominal yang harus dibayar :
                            <span class="fw-bold" id="result_pay"
                              >{{
                                new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format(resultBayar)
                              }}</span
                            ><br />
                            <br />
                            <!-- hide end -->
                          </div>
                          <button
                            type="button"
                            @click="hitungbayar()"
                            class="ud-main-btn ud-white-btn mt-2"
                          >
                            Hitung
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End rounded tabs -->
        </div>
      </div>
    </section>
    <!-- Simulasi dan cara order --->
    <!-- ====== Pembayaran Start ====== -->
    <section id="pembayaran" class="ud-faq">
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="col-lg-8 col-md-10">
            <div class="section-title mx-auto text-center">
              <span>Metode Pembayaran</span>
              <h2>Beragam Pilihan Transfer via Rekening Bank</h2>
              <p>
                Kami menerima berbagai macam metode pembayaran untuk memudahkan
                Anda bertransaksi di Saldobit
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div class="ud-testimonial-info">
                <img
                  src="/images/bank/bca.svg"
                  loading="lazy"
                  alt="bank bca"
                  width="296"
                  height="95"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div class="ud-testimonial-info">
                <img
                  src="/images/bank/bni.svg"
                  loading="lazy"
                  alt="bank bni"
                  width="296"
                  height="95"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div class="ud-testimonial-info">
                <img
                  src="/images/bank/mandiri.svg"
                  loading="lazy"
                  alt="bank mandiri"
                  width="296"
                  height="95"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div class="ud-testimonial-info">
                <img
                  src="/images/bank/bri.svg"
                  loading="lazy"
                  alt="bank bri"
                  width="296"
                  height="95"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div class="ud-testimonial-info">
                <img
                  src="/images/bank/jago.svg"
                  loading="lazy"
                  alt="bank jago"
                  width="296"
                  height="95"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".35s"
            >
              <div class="ud-testimonial-info">
                <img
                  src="/images/bank/jenius.svg"
                  loading="lazy"
                  alt="jenius btpn"
                  width="296"
                  height="95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Pembayaran End ====== -->
    <!-- ====== Testimonials Start ====== -->
    <section id="testimonials" class="ud-testimonials">
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="col-lg-8 col-md-10">
            <div class="section-title mx-auto text-center">
              <span>Testimonials</span>
              <h2>What Our Customers Says</h2>
              <p>
                Ribuan orang telah melakukan order baik untuk top up PayPal
                maupun jasa pembayaran online. Berikut ini sejumlah testimoni
                yang diberikan.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div class="ud-testimonial-ratings">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <div class="ud-testimonial-content">
                <p>
                  Langganan saya saat butuh pembayaran online. Biasa saya pakai
                  untuk order domain di domaincoaster.
                </p>
              </div>
              <div class="ud-testimonial-info">
                <div class="ud-testimonial-image">
                  <img
                    src="/images/testimonials/author-01.png"
                    loading="lazy"
                    alt="author"
                    width="50"
                    height="50"
                  />
                </div>
                <div class="ud-testimonial-meta">
                  <div class="nama">Avanda Alfin</div>
                  <div class="profesi">IM Publisher</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div class="ud-testimonial-ratings">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <div class="ud-testimonial-content">
                <p>
                  Berawal tahu dari mulut-mulut, saya coba layanannya untuk
                  bayar pelatihan international. Alhamdulillah semua lancar dan
                  aman.
                </p>
              </div>
              <div class="ud-testimonial-info">
                <div class="ud-testimonial-image">
                  <!-- image diambil dari field image dan alt tag diambil dari nama customer -->
                  <img
                    src="/images/testimonials/author-01.png"
                    loading="lazy"
                    alt="author"
                    width="50"
                    height="50"
                  />
                </div>
                <div class="ud-testimonial-meta">
                  <div class="nama">Asadul Murtadlo</div>
                  <div class="profesi">Physical Engineer</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div class="ud-testimonial-ratings">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <div class="ud-testimonial-content">
                <p>
                  Sudah berkali-kali menggunakan jasa saldobit untuk top up
                  PayPal saya, pelayanannya luar biasa.
                </p>
              </div>
              <div class="ud-testimonial-info">
                <div class="ud-testimonial-image">
                  <img
                    src="/images/testimonials/author-01.png"
                    loading="lazy"
                    alt="author"
                    width="50"
                    height="50"
                  />
                </div>
                <div class="ud-testimonial-meta">
                  <div class="nama">Arif Rahman Fauzi</div>
                  <div class="profesi">Domainer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Testimonials End ====== -->
    <!-- ====== Content 1000 Start ====== -->
    <section class="landing-area">
      <div class="container">
        <div class="landing-title">
          <h2>Jual Saldo PayPal Legal Aman Murah dan Terpercaya</h2>
        </div>
        <div class="landing-content two-columns-text">
          <p style="text-align: justify">
            Bertransaksi di dunia maya sering kali tidak mengenal batasan.
            Melalui transaksi online, setiap orang dapat dengan mudahnya
            melakukan proses jual beli bukan hanya di dalam negeri saja, tetapi
            juga dari dan ke luar negeri. Tidak sedikit masyarakat Indonesia
            yang melakukan hal ini dan berhasil mendapatkan produk incaran dari
            negeri seberang yang berharga murah. Sayangnya, banyak yang merasa
            kebingungan saat dihadapkan dengan sistem pembayaran yang tepat.
          </p>
          <p style="text-align: justify">
            Adapun salah satu bentuk pembayaran yang paling banyak dipilih untuk
            transaksi global yaitu dengan penggunaan PayPal. Namun, bisa jadi
            tidak semua orang mengetahui apa itu PayPal dan apa saja manfaatnya.
            Termasuk banyak juga yang penasaran dengan bagaimana cara untuk
            menemukan tempat <strong>jual saldo PayPal murah</strong>, legal
            aman dan terpercaya. Jika pertanyaan ini muncul di benak Anda,
            sebaiknya simak informasi menarik berikut ini.
          </p>
          <h3>Apa Itu PayPal</h3>
          <p style="text-align: justify">
            PayPal merupakan <em>payment gateway</em>, alat pembayaran online
            yang memungkinkan Anda membayar item yang Anda beli dengan mudah dan
            aman. Metode pembayarannya atau sumber pendanaan, dapat Anda pilih
            menggunakan balance PayPal Anda atau kartu kredit. Untuk dapat
            melakukan pembayaran menggunakan PayPal, Anda harus mempunyai saldo
            di akun PayPal Anda atau mempunyai saldo di kartu kredit Anda. Anda
            dapat juga mengatur referensi metode pembayaran yang ingin Anda
            gunakan, apakah menggunakan balance PayPal atau kartu kredit.
          </p>
          <p style="text-align: justify">
            Selain membayar barang atapun jasa menggunakan PayPal, Anda juga
            dapat menerima uang melalui akun PayPal tersebut. Sebagai contoh,
            Anda menjual item di marketplace ebay, etsy dan lain-lain, ataupun
            bekerja sebagai freelancer, web developer atau desainer, atau
            publisher iklan, yang mana pembayarannya menggunakan paypal. Setiap
            pembayaran yang Anda terima akan masuk ke akun PayPal Anda dan dapat
            Anda gunakan saat membayar sesuatu, atau tarik ke rekening bank di
            Indonesia.
          </p>
          <p style="text-align: justify">
            Secara garis besar, metode pengiriman uang di PayPal ada 2, yaitu
            Good and Service (GnS) dan Family and Friend (FnF). Metode GnS,
            metode paling aman karena ada perlindungan dari pihak PayPal. Untuk
            menggunakan metode ini, dikenakan biaya yang umumnya, sekitar 3.9% +
            0.3 mata uang yang digunakan dan biaya akan ditanggung oleh penerima
            uang. Oleh karenanya, apabila Anda menjual item di eBay, uang yang
            Anda terima/masuk ke akun paypal Anda adalah sebesar harga jual item
            dikurangi biaya pembayaran. Sedangkan metode FnF tidak menerapkan
            biaya selama tidak ada konversi mata uang yang diperlukan. Metode
            FnF sangat cocok untuk mentransfer uang ke teman atau keluarga yang
            mana Anda mengenal dia dengan baik.
          </p>
          <h3>Manfaat Penggunaan PayPal</h3>
          <p style="text-align: justify">
            Melakukan transaksi dengan mata uang asing memang bisa dilakukan
            dengan berbagai cara. Namun hingga saat ini banyak yang lebih nyaman
            untuk mempercayakan hal tersebut kepada PayPal. Mengapa demikian?
            Karena PayPal dapat memberikan banyak manfaat menarik seperti
            misalnya berikut ini.
          </p>
          <ul>
            <li><strong>Lebih Mudah dan Praktis</strong></li>
          </ul>
          <p style="text-align: justify">
            Anda tidak akan mengalami kesulitan saat ingin menggunakan akun
            PayPal, karena saat ini akun PayPal Anda dapat dengan mudah diakses
            kapan saja dan dimana saja. Kini dengan kemajuan teknologi
            smartphone dan aplikasi berbasis Android/iOS, Anda dapat
            mengaksesnya melalui smartphone maupun laptop.
          </p>
          <ul>
            <li><strong>Keamanan dan Kenyaman Bertransaksi</strong></li>
          </ul>
          <p style="text-align: justify">
            Satu hal yang membedakan PayPal dengan payment gateway lain adalah
            adanya fitur dispute (perselisihan/sengketa). Sebagai pembeli, fitur
            ini akan memberikan Anda rasa nyaman dan aman dalam bertransaksi.
            Sebagai contoh, apabila Anda membeli barang dari luar negeri melalui
            ebay, ketika item yang Anda beli tidak kunjung datang sampai batas
            waktu normal, Anda bisa melalukan <em>open dispute</em>, dengan
            menjelaskan dan melampirkan bukti-bukti yang ada. Selanjutnya, pihak
            PayPal akan menentukan siapa yang bersalah. Jika Anda memenangkan
            dispute, uang Anda akan dikembalikan. Atau jika Anda membeli barang,
            setelah barangnya dating ternyata tidak sesuai dengan deskripsi
            produk saat dijual, Anda pun bisa melakukan
            <em>open dispute</em> dengan alasan
            <em>item not as description</em>.
          </p>
          <ul>
            <li><strong>Keamanan dan Kenyaman Bertransaksi</strong></li>
          </ul>
          <p style="text-align: justify">
            Dengan menggunakan PayPal maka Anda dapat membayar dari 2 sumber
            dana, yaitu saldo PayPal dan kartu kredit Anda. Jika Anda tidak
            punya saldo PayPal, sementara kartu kredit Anda terkena limit atau
            Anda tidak punya kartu kredit, Anda bisa mengisi saldo di tempat
            jual saldo PayPal terpercaya. Variasi sumber dana ini memberikan
            kemudahan bagi Anda untuk melakukan transaksi menggunakan PayPal.
          </p>
          <ul>
            <li><strong>Keamanan dan Kenyaman Bertransaksi</strong></li>
          </ul>
          <p style="text-align: justify">
            Manfaat berikutnya yang cukup menarik yaitu bahwa PayPal sendiri
            sudah banyak diakui dan digunakan oleh berbagai macam merchant di
            dunia. Termasuk di berbagai macam e-commerce ternama, seperti ebay,
            fiverr, alibaba dan lain-lain. Sehingga Anda tidak perlu khawatir
            saat ingin berbelanja di situs manapun.
          </p>
          <h3>Mencari Tempat Jual Saldo PayPal Legal</h3>
          <p style="text-align: justify">
            Salah satu kendala yang sering dihadapi oleh para pengguna PayPal
            umumnya yaitu menemukan tempat jual saldo PayPal legal. Mengapa
            harus legal? Karena dengan menerima balance PayPal dari sumber yang
            legal, akun PayPal Anda lebih aman dan mengurangi resiko terkena
            limit oleh pihak PayPal. Jika bukan dari sumber legal, bisa jadi
            suatu saat pihak paypal akan melakukan investigasi dan menarik
            balance tersebut dari akun Anda dan selanjutnya akan dikembalikan ke
            yang punya balance.
          </p>
          <p style="text-align: justify">
            Kabar baiknya, di Indonesia sudah banyak tempat yang jual saldo
            PayPal legal dan aman. Sehingga tidak perlu ragu dan takut terhadap
            resiko penipuan. Terutama jika harus berurusan dengan masalah hukum
            hanya karena masalah pengisian saldo PayPal. Pasti hal tersebut
            dapat menimbulkan rasa yang kurang nyaman dan di satu sisi juga
            cukup membahayakan. Karena itu sebaiknya pilih selalu tempat jual
            saldo PayPal legal dan aman, contohnya di
            <a href="https://saldobit.com/">Saldobit.com</a>.
          </p>
          <h3>Jual Saldo Paypal Paling Murah</h3>
          <p style="text-align: justify">
            Tidak dipungkiri lagi bahwa masyarakat Indonesia kebanyakan akan
            lebih suka dengan penawaran harga yang ekonomis dan murah. Secara
            umum, lebih banyak orang yang merasa nyaman saat hanya mengeluarkan
            sedikit biaya untuk berbagai macam hal. Termasuk saat mencari tempat
            jual saldo PayPal, tentu saja bukan hal yang aneh jika memilih
            tempat jual sado Paypal paling murah.
          </p>
          <p style="text-align: justify">
            Banyak yang mengatakan bahwa jika bisa mendapatkan sesuatu dengan
            harga yang ekonomis, tentu akan lebih baik daripada membayar dengan
            harga yang mahal. Sama halnya mencari tempat jual saldo PayPal,
            harga yang paling murah dan bersahabat tentu akan menjadi
            pertimbangan yang paling utama. Sepeti halnya yang ditawarkan oleh
            <a href="https://saldobit.com/">Saldobit.com</a> sebagai tempat jual
            saldo PayPal paling murah.
          </p>
          <h3>Jual Saldo Paypal Terpercaya</h3>
          <p style="text-align: justify">
            Tidak hanya legal dan murah saja, tetapi cukup penting memastikan
            bahwa Anda telah memilih tempat jual saldo PayPal yang terpercaya.
            Ada banyak tempat dimana Anda bisa mencoba untuk mengisi saldo
            PayPal Anda secara cepat dan praktis. Ada juga yang menawarkan harga
            bersaing dan super murah. Namun jika tidak dapat dipercaya tentu
            sama saja hanya mendatangkan kerugian di kemudian hari. Oleh sebab
            itu tidak ada salahnya mencari review dan informasi di dunia maya
            tentang tempat jual saldo PayPal terpercaya yang bisa Anda pilih.
            Salah satunya yaitu
            <a href="https://saldobit.com/">Saldobit.com</a>.<span
              style="mso-spacerun: yes"
              >&nbsp;
            </span>
          </p>
          <h3>Tempat Jual Saldo Paypal Online</h3>
          <p style="text-align: justify">
            Bagi Anda yang lebih suka cara praktis dan tidak berbelit-belit,
            sebaiknya carilah tempat jual saldo PayPal secara online. Di dunia
            maya saat ini ada banyak pihak yang siap membantu manakala Anda
            membutuhkan saldo PayPal kapanpun. Jadi Anda tidak perlu panik saat
            ingin melakukan transaksi apapun tanpa bantuan perantara e-commerce.
          </p>
          <p style="text-align: justify">
            Menemukan tempat jual saldo PayPal secara online cukup cepat dan
            mudah. Sewaktu-waktu Anda membutuhkan saldo PayPal siap sedia, maka
            pilihan untuk mempercayakan pada tempat jual saldo PayPal online
            bisa menjadi alternatif yang terbaik untuk dipilih. Misalnya dengan
            memilih <a href="https://saldobit.com/">Saldobit.com</a> yang siap
            membantu Anda kapan saja dan dimana saja.
          </p>
          <p style="text-align: justify">
            Ternyata menggunakan PayPal bisa memberikan manfaat yang cukup
            banyak. Tidak hanya itu saja, mencari tempat jual saldo Paypal
            sepertinya juga tidak sesulit yang diperkirakan. Jika tidak yakin
            dan merasa bingung untuk memilih, sebaiknya pilih
            <a href="https://saldobit.com/">Saldobit.com</a> sebagai solusi jasa
            jual saldo PayPal terpercaya di Indonesia.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "main",
  auth: false,
  data() {
    return {
      rate: 0,
      jasabayarValue: 50,
      estimasiPaypal:0,
      estimasiBayar:0,
      paypalValue: 50,
      result: 0,
      resultBayar: 0,
    };
  },
  async mounted() {
    await this.getRate();
  },
  methods: {
    async getRate() {
      const { data } = await this.$axios.get("/api/get-rate");
      console.log(data);
      this.rate = data.rate;
      this.result = this.paypalValue * this.rate;
      this.resultBayar = this.jasabayarValue * this.rate;
      this.estimasiPaypal = this.paypalValue * 1
      this.estimasiBayar = this.jasabayarValue * 1
    },
    hitungtopup() {
      this.result = this.paypalValue * this.rate;
      this.estimasiPaypal = this.paypalValue * 1
    },
    hitungbayar() {
      this.resultBayar = this.jasabayarValue * this.rate;
      this.estimasiBayar = this.jasabayarValue * 1
    },
  },
};
</script>
