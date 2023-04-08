<template>
    <div>
        <!-- ====== Hero Start ====== -->
    <section class="saldo-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="content">
              <span>Selamat datang di Saldobit</span>
              <h1>Jasa Pembayaran Online</h1>
              <p>Ingin belanja online seperti beli software, game, domain, dll namun tidak memiliki kartu kredit atau PayPal?
                Tenang, kami siap membantu anda melakukan pembayaran online melalui PayPal
              </p>
              <!--<p>Kami adalah penyedia jasa pembayaran online yang bertujuan membantu anda untuk membeli barang secara online di seluruh website yang memerlukan pembayaran melalui PayPal.</p>-->
            </div>
            <!-- ini arahkan ke wa admin saja, no wa-nya ambil dari menu setting -->
            <nuxt-link to="/order/new" class="sec-btn">Order Sekarang</nuxt-link>
          </div>
          <div class="col-lg-6">
            <div class="saldo-area-img">
              <img src="/assets/images/banner/banner-main6.webp" alt="Jasa Pembayaran PayPal" width="546" height="410">
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="rate bg-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-sm-12">
            <div class="box-head">
              <div class="box-content">
                <div class="box">
                  <div class="kurs">Rate: Rp 15.900</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ====== Hero End ====== -->
    <!-- ====== Why Choose Start ====== -->
    <section class="pt-80 pb-60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="why-left">
              <div class="section-title">
                <span>Why Choose Us?</span>
                <h2>Solusi Pembayaran Online Anda</h2>
                <p class="margin-auto">
                  Saldobit menyediakan jasa pembayaran online dengan tujuan membantu anda untuk membeli barang baik fisik maupun digital di ecommerce luar negeri, seperti Ebay, Envato, Aliexpress dan berbagai merchant lainnya yang menerima PayPal sebagai alat pembayaran.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="why-card why-card-color-bg">
                  <i class="ri-thumb-up-line"></i>
                  <div class="feature">Terpercaya </div>
                  <p>Saldobit telah berpengalaman lebih dari 6 tahun dengan ratusan transaksi pembayaran online, mulai dari barang fisik maupun digital.
                    Sebagian besar testimoni client Saldobit mengatakan puas dengan pelayanan kami.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="why-card why-card-color-bg">
                  <i class="ri-drop-line"></i>
                  <div class="feature">Rate dan Fee Rendah</div>
                  <p>Di Saldobit, kami menerapkan kurs sesuai dengan kartu kredit dan hanya mengenakan biaya layanan sebesar 4% atau min 30rb. Ini menjadikan layanan kami memberikan rate dan biaya rendah untuk Anda.​</p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="why-card why-card-color-bg">
                  <i class="ri-customer-service-2-line"></i>
                  <div class="feature">Pelayanan Prima</div>
                  <p>Berbekal pada service knowledge, jiwa melayani dan kemampuan yang komunikasi handal, customer service kami mampu memberikan pelayanan yang prima, cepat, efisien dan ramah.</p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="why-card why-card-color-bg">
                  <i class="ri-shield-check-line"></i>
                  <div class="feature">Bergaransi</div>
                  <p>Setiap order yang Anda buat di Saldobit dilindungi oleh <b>GARANSI</b> sehingga Anda tidak perlu khawatir. Silahkan baca dan pelajari ketentuan garansi sebelum order disini.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Why Choose End ====== -->
    <!-- ====== About Start ====== -->
    <section id="counter">
      <div class="counter-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="section-title text-center">
                <h2>Layanan Jasa Pembayaran Online Kami</h2>
                <p>Kami menyediakan jasa pembayaran online untuk semua merchant yang menerima pembayaran melalui PayPal.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="why-card">
                <i class="ri-shopping-bag-3-line"></i>
                <div class="feature">Pembayaran Personal</div>
                <p>Jasa ini diperuntukkan bagi anda yang ingin membayar kepada pihak lain, ke akun PayPal-nya langsung, sehingga kami perlu tahu akun PayPal penerima. Misal bayar jasa seo ke orang India.</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <div class="why-card">
                <i class="ri-store-2-line"></i>
                <div class="feature">Pembayaran Marketplace</div>
                <p>Jasa ini diperuntukkan bagi anda yang ingin membayar sesuatu melalui system checkout web, sehingga kami tidak perlu tahu akun PayPal penerima. Misal beli domain di Godaddy.</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <div class="why-card">
                <i class="ri-file-copy-line"></i>
                <div class="feature">Pembayaran Invoice</div>
                <p>Beberapa seller ada yang menerbitkan invoice pembayaran karena lebih jelas rincian (item dan harga) serta untuk apa. Jasa ini membantu Anda membayar tagihan invoice tersebut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== About End ====== -->
    <!-- Simulasi dan cara order Start --->
    <section id="pricing">
      <div class="container py-5">
        <div class="row justify-content-center mb-3">
          <div class="col-lg-9 col-md-10">
            <div class="section-title text-center">
              <span class="pt-50">Term Singkat dan Simulasi Order</span>
              <h2>Syarat dan Ketentuan Jasa Pembayaran PayPal</h2>
              <p>Untuk memberikan kenyamanan bertransaksi, kami menerapkan syarat dan ketentuan yang wajib anda patuhi.</p>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="mb-4">Syarat dan ketentuan menggunakan jasa pembayaran online kami</h3>
            <p class="mb-4">Mohon dibaca dengan seksama syarat dan ketentuan jasa pembayaran online di Saldobit.</p>
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 btn-square rounded-circle bg-success-point">
                <i class="ri-check-fill ri-xl"></i>
              </div>
              <div class="ms-4">
                <h5>Kami Bukan Pemilik atau Penjual</h5>
                <p>Pahami bahwa Saldobit bukanlah pemilik produk (barang / jasa), maupun penjual produk yang akan anda beli.</p>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 btn-square rounded-circle bg-success-point">
                <i class="ri-check-fill ri-xl"></i>
              </div>
              <div class="ms-4">
                <h5>Tanggung Jawab Kami</h5>
                <p>Tanggung jawab kami hanya sebatas melakukan pembayaran. Kami dibebaskan dari tanggung jawab terhadap : kerusakan barang, barang hilang, barang tertahan di bea cukai.</p>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 btn-square rounded-circle bg-success-point">
                <i class="ri-check-fill ri-xl"></i>
              </div>
              <div class="ms-4">
                <h5>Garansi</h5>
                <p>Kami memberikan garansi terbatas untuk setiap transaksi yang dilakukan oleh anda. Silahkan baca ketentuan garansi disini. </p>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="flex-shrink-0 btn-square rounded-circle bg-success-point">
                <i class="ri-check-fill ri-xl"></i>
              </div>
              <div class="ms-4">
                <h5>Biaya</h5>
                <p>Kami mengenakan biaya sebesar 4% (atau minimal Rp. 30.000) dari total pembayaran untuk setiap transaksi.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 justify-content-center">
            <div class="form-simulasi wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
              <h4>Form Simulasi Jasa Bayar</h4>
              <p class="desc">Form simulasi untuk menghitung rupiah yang harus dibayar ketika membeli produk seharga $x.</p>
              <div class="">
                <form class="" id="">
                  <div class="d-grid gap-3">
                    <div class="form-group">
                      <label for="input-nominal" class="form-label">Harga item yang anda beli ($)</label>
                      <input type="text" name="nominal" value="50" placeholder="Masukkan harga item yang ingin dibeli" id="input-nominal" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="input-rate" class="form-label">Rate PayPal</label>
                      <input type="text" name="rate" value="15100" id="input-rate" class="form-control" disabled />
                    </div>
                    <div id="result_calculate" data-wow-duration="0.5s" data-wow-delay=".1s">
                      Biaya admin (4% / min Rp 30.000) : <span class="fw-bold" id="result_estimate">Rp.30.000</span><br/>
                      Nominal yang harus dibayar : <span class="fw-bold" id="result_pay">Rp.785.000</span><br/>
                      <br/>
					  <!-- ini arahkan ke wa admin saja, no wa-nya ambil dari menu setting -->
					  <nuxt-link to="/order/new" class="sec-btn">Order Sekarang</nuxt-link>
                    </div>
                    <button type="submit" class="ud-main-btn ud-white-btn mt-2">Hitung</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Simulasi dan cara order --->
    <section class="work-process-area pt-md-0 pt-lg-5 pb-60 bg-succes-point">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-5">
            <div class="work-process-left">
              <div class="section-title">
                <span class="yellow">Our Working Process</span>
                <h2>4 Langkah mudah order jasa bayar online di Saldobit</h2>
              </div>
              <nuxt-link to="/order/new" class="quote-btn">Order Sekarang</nuxt-link>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="row">
              <div class="col-lg-6">
                <div class="work-process-card">
                  <i class="ri-login-box-line"></i>
                  <h3>Login</h3>
                  <p>Silahkan login ke akun Saldobit anda melalui link <nuxt-link to="/login">Login</nuxt-link>. Jika belum punya akun, silahkan daftar dulu.</p>
                  <div class="number">1</div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="work-process-card">
                  <i class="ri-sticky-note-line"></i>
                  <h3>Order</h3>
                  <p>Pada menu Order, klik Jasa Bayar, masukkan nominal dan link item yang ingin anda beli.</p>
                  <div class="number">2</div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="work-process-card">
                  <i class="ri-wallet-2-line"></i>
                  <h3>Pembayaran</h3>
                  <p>Lakukan pembayaran ke rekening Saldobit sesuai dengan informasi yang anda terima.</p>
                  <div class="number">3</div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="work-process-card">
                  <i class="ri-gift-2-line"></i>
                  <h3>Pembelian</h3>
                  <p>Kami akan segera membayarkan item/jasa yang anda beli dan berikan invoice pembayarannya.</p>
                  <div class="number">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== FAQ Start ====== -->
    <section id="faq" class="ud-faq">
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="col-lg-8 col-md-10">
            <div class="section-title text-center mx-auto">
              <span>FAQ</span>
              <h2>Tanya Jawab Jasa Pembayaran Online</h2>
              <p>Pertanyaan yang sering diajukan terkait jasa pembayaran online PayPal.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div class="accordion">
                <button class="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-1">
                <span class="icon flex-shrink-0"><i class="ri-arrow-down-s-line"></i></span>
                <span>Pembelian/pembayaran apa saja yang dapat dilayani oleh Saldobit?</span>
                </button>
                <div id="collapse-1" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Kami melayani untuk pembelian untuk semua website yang menerima pembayaran melalui PayPal, seperti belanja di marketplace luar, bayar invoice dan pembayaran personal.
                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div class="accordion">
                <button class="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-2">
                <span class="icon flex-shrink-0"><i class="ri-arrow-down-s-line"></i></span>
                <span>Website apa saja yang dapat Saldobit layani?</span>
                </button>
                <div id="collapse-2" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Kami melayani jasa bayar untuk website Ebay, Aliexpress, Themeforest, Envato, Godaddy, Namecheap, dan segala website yang menerima pembayaran melalui PayPal.
                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div class="accordion">
                <button class="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-3">
                <span class="icon flex-shrink-0"><i class="ri-arrow-down-s-line"></i></span>
                <span>Berapa lama proses pembayaran yang dilakukan oleh Saldobit?</span>
                </button>
                <div id="collapse-3" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Kami akan segera melakukan pembayaran seketika, setelah kami menerima pembayaran dari anda. Rata rata kecepatan transaksi kita adalah antara 20 – 30 menit (berdasarkan antrian jaringan bayar kami)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div class="accordion">
                <button class="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-4">
                <span class="icon flex-shrink-0"><i class="ri-arrow-down-s-line"></i></span>
                <span>Bagaimana jika saya belum menerima barang dalam rentang waktu yang telah disepakati?</span>
                </button>
                <div id="collapse-4" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Jika anda belum menerima barang atau layanan yang telah disepakati dari penjual, coba komunikasikan dengan penjual terlebih dahulu.
                    Namun, mohon maaf kami tidak bisa melakukan open dispute dengan alasan apapun.
                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div class="accordion">
                <button class="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-5">
                <span class="icon flex-shrink-0"><i class="ri-arrow-down-s-line"></i></span>
                <span>Bagaimana apabila terjadi refund?</span>
                </button>
                <div id="collapse-5" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Apabila terjadi pembatalan transaksi dari pihak penjual kepada Anda, pihak Saldobit akan mengembalikan dana anda 100% dipotong Fee Transaksi dari Saldobit.
                  </div>
                </div>
              </div>
            </div>
            <div class="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div class="accordion">
                <button class="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-6">
                <span class="icon flex-shrink-0"><i class="ri-arrow-down-s-line"></i></span>
                <span>Apakah Saldobit melayani jasa top up PayPal?</span>
                </button>
                <div id="collapse-6" class="accordion-collapse collapse">
                  <div class="ud-faq-body">
                    Ya kami melayani Top up saldo paypal juga. Untuk lebih jelas bisa dicek pada link berikut: <nuxt-link to="/topup">jual saldo PayPal</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== FAQ End ====== -->
    <!-- ====== Content 1000 Start ====== -->
    <section class="landing-area-2">
      <div class="container">
        <div class="landing-title">
          <h2>Jasa Pembayaran Online Paypal dan Kartu Kredit</h2>
        </div>
        <div class="landing-content two-columns-text">
          <p style="text-align: justify;">
            <strong>Jasa pembayaran online</strong> merupakan solusi buat Anda yang ingin membeli barang dan jasa online tertentu dari ecommerce luar negeri yang menggunakan paypal atau kartu kredit sebagai alat pembayaran- nya, namun anda tidak mempunyai paypal atau kartu kredit.
            Saldobit menyediakan jasa pembayaran untuk berbagai kebutuhan Anda seperti <strong>jasa pembayaran kartu kredit, 
            jasa pembayaran paypal,</strong> hingga <strong>jasa pembayaran ebay</strong> yang telah berpengalaman dalam jasa bayar online. 
            Pilih sendiri item yang ingin anda beli dan percayakan urusan pembayarannya pada kami karena kami adalah jasa pembayaran terpercaya dengan harga terjangkau.
          </p>
          <h3>Jasa Pembayaran Online untuk Solusi Belanja Anda</h3>
          <p style="text-align: justify;">
            Gaya hidup manusia modern memiliki andil dalam meningkatnya belanja online belakangan ini. Didukung dengan perkembangan teknologi, 
            Anda bisa dengan mudah melakukan transaksi jual beli di marketplace online di luar negeri. 
            Seperti beli item di Etsy, belanja di Ebay, beli produk China via Alibaba atau aliexpress, dan lain-lain. 
            Metode pembayaran yang biasa digunakan di marketplace luar negeri adalah Kartu Kredit dan PayPal.
            Melihat potensi tersebut beberapa pihak ada yang menawarkan jasa pembayaran online untuk membantu memudahkan 
            anda membeli item dari luar negeri. Seperti jasa pembayaran ebay, jasa pembayaran Zoom, 
            jasa pembayaran Paypal, hingga jasa top up PayPal.
          </p>
          <p style="text-align: justify;">
            Disamping produk fisik, anda juga bisa membeli produk digital seperti domain Godaddy, vps Linode,
            asset digital di freepik, creativemarket dan lain-lain. 
			Sesuai dengan namanya produk digital, produk ini tidak membutuhkan alamat pengiriman atau shipping address saat pembelian.
			Jika produk tersebut berupa file, bisa anda download dan gunakan langsung sesuai lisensi yang dibeli.
			Mayoritas web-web tersebut menggunakan PayPal sebagai alat pembayaran sehingga jasa pembayaran online sering digunakan adalah jasa pembayaran PayPal.
			
          </p>
          <p style="text-align: justify;">Salah satu metode pembayaran online yang banyak digunakan untuk transaksi jual beli 
            produk di website atau marketplace luar negeri adalah Paypal. Hampir semua toko online atau merchant besar 
            luar negeri menyediakan Paypal sebagai alat pembayaran. Sebut saja Ebay, Alibaba, Godaddy dan lain sebagainya.
          </p>
          <p style="text-align: justify;">Paypal banyak digunakan di merchant karena mememiliki 
            sejumlah keunggulan dibandingkan alat pembayaran yang lain. Pertama, Paypal menjamin keamanan data transaksi pembayaran 
            para pelanggan. Kedua, proses pembayaran bisa lebih mudah dilakukan karena Anda tidak memerlukan kartu kredit. Ketiga, Paypal mendukung 
            pembayaran belanja barang atau non-barang. Dan yang terakhir adalah, Paypal tidak mengenakan biaya tahunan alias gratis.
          </p>
          <p style="text-align: justify;">Dengan beberapa keunggulan diatas, Anda tidak perlu ragu lagi menggunakan PayPal sebagai alat pembayaran. 
            Dan buat Anda yang belum memiliki akun Paypal, Anda bisa membuatnya melalui website paypal. Hubungkan dengan kartu kredit, agar bisa 
            digunakan untuk transaksi maka Anda harus mengisi saldonya terlebih dahulu. Caranya adalah dengan menghubungkannya ke kartu kredit. 
            Untuk Anda yang tidak punya akun Paypal, tidak ada pengalaman transaksi online, kami menyarankan untuk menggunakan jasa bayar PayPal. 
			Sehingga anda tidak perlu pusing memikirkan saldo, dan limit akun paypal.
          </p>
          <p style="text-align: justify;">Selain Paypal, Anda juga bisa melakukan pembayaran online untuk beberapa transaksi di website atau 
            toko online luar negeri dengan menggunakan kartu kredit. Ada 2 jenis kartu kredit yaitu Visa dan MasterCard. Keduanya 
            sama-sama menawarkan keuntungan buat Anda tergantung jenis kartu yang Anda miliki.  
          </p>
          <h3>Jasa Pembayaran Online Saldobit</h3>
          <p style="text-align: justify;">
            Saldobit menyediakan jasa pembayaran online PayPal bagi anda yang ingin belanja online dari marketplace atau ecommerce luar negeri
            seperti ebay, alibaba, dll namun anda tidak mempunyai kartu kredit atau akun PayPal. Berikut ini layanan jasa pembayaran online yang dapat kami kerjakan.
          </p>
          <ul>
            <li><strong>1. Personal/Company Payment</strong></li>
          </ul>
          <p style="text-align: justify;">
            Layanan ini untuk anda yang ingin membayar kepada pihak lain langsung ke akun PayPalnya tanpa perlu melalui proses checkout, sehingga pihak Saldobit perlu mengetahui akun PayPal penerima. 
            Misalnya, anda ingin membayar jasa SEO kepada orang India, atau anda membayar biaya pelatihan international.  
          </p>
          <ul>
            <li><strong>2. Pembayaran Marketplace </strong></li>
          </ul>
          <p style="text-align: justify;">
            Layanan ini diperuntukan bagi anda ingin membayar/membeli barang atau jasa melalui proses checkout di web tersebut. 
            Yang saldobit perlukan ada link produk atau web dan informasi tambahan seperti login di web tersebut, pilihan metode pengiriman jika ada dan lain-lain.
            Misalnya anda membeli atau membayar perpanjangan domain dari Godaddy, yang perlu anda infokan berarti domain yang mau diperpanjang dan login ke akun godaddy anda.
          </p>
          <ul>
            <li><strong>3. Pembayaran Tagihan / Invoice</strong></li>
          </ul>
          <p style="text-align: justify;">
            Beberapa penjual menyiapkan invoice pembayaran karena informasi atau rincian (produk dan harga) lebih jelas dan untuk tujuan apa. Layanan ini membantu Anda membayar tagihan atau invoice tersebut.
          </p>
          <h3>Keunggulan Jasa Bayar Paypal di Saldobit</h3>
          <p style="text-align: justify;">
            Supaya anda tidak tertipu oleh jasa pembayaran online abal-abal, 
            Anda perlu berhati-hati dan cermat dalam memilih jasa pembayaran Paypal. 
            Saran kami, pilihlah jasa bayar online dengan reputasi baik, rate kompetitif, biaya yang transaparan dan bergaransi.
            Untuk jasa pembayaran PayPal terpercaya, Anda dapat menggunakan layanan Saldobit.com.
          </p>
          <p style="text-align: justify;">Mengapa menggunakan jasa pembayaran online di Saldobit? 
            <i>Pertama,</i> berpengalaman. Saldobit telah berpengalaman lebih dari 6 tahun dengan ratusan transaksi pembayaran online, 
            mulai dari barang fisik maupun digital seperti jasa pembayaran ebay, jasa pembayaran newhobby, jasa bayar Zoom, serta pembayaran paypal dan 
            memiliki track record yang bagus. 
          </p>
          <p style="text-align: justify;">
            <i>Kedua,</i> rate dan fee yang rendah. Di Saldobit, kami menerapkan kurs sesuai dengan kartu kredit dan hanya mengenakan biaya 
            layanan sebesar 4% atau min 30rb. Ini menjadikan layanan kami memberikan rate dan biaya rendah untuk Anda.​
          </p>
          <p style="text-align: justify;">
            <i>Ketiga,</i> prosesnya yang cepat dengan pelayanan prima. Berbekal pada service knowledge, jiwa melayani dan kemampuan yang komunikasi handal, customer service kami mampu memberikan 
            pelayanan yang prima, cepat, efisien dan ramah.
          </p>
          <p style="text-align: justify;">
            <i>Keempat,</i> bergaransi. Setiap order yang Anda buat di Saldobit dilindungi oleh garansi sehingga Anda tidak perlu khawatir. Silahkan baca dan pelajari ketentuan garansi sebelum order disini.
          </p>
          <p style="text-align: justify;">
            Saldobit.com merupakan salah satu pilihan jasa pembayaran online yang dapat dipercaya dan dapat menjawab kebutuhan transaksi 
            online yang aman dan efisien. Dengan biaya transaksi yang rendah, layanan pelanggan yang baik, dukungan untuk berbagai jenis pembayaran 
            dan kenyamanan transaksi yang tinggi, Saldobit.com menjadi solusi terbaik 
            bagi para pelaku bisnis atau individu yang ingin melakukan transaksi online.
          </p>
        </div>
      </div>
    </section>
    </div>
</template>
<script>
export default {
    layout:"main",
	auth:false,
}
</script>