<template>
  <div >
    <div class="pagetitle mb-3">
      <div class="row">
        <div class="col-md-8 mt-2">
          <h1>Order Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/dashboard">Home</nuxt-link></li>
              <li class="breadcrumb-item active">Order</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">Order Service</div>
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-sm-12 col-lg-6 mb-3 text-center">
                  <div class="my-2 fs-6">Jumlah Transfer</div>
                  <div class="text-primary fw-bold fs-4">Rp780.000</div>
                  <div class="fw-bold fs-3">Bank Transfer BCA</div>
                  <div class="fw-bold text-success fs-4">076-22-999-66</div>
                  <div class="mt-1">An. Susanto</div>
                </div>
              </div>
              <hr />
              <div class="row justify-content-center my-4">
                <div class="col-sm-12 col-lg-6 text-center">
                  Order Anda akan secara otomatis dibatalkan jika tidak ada
                  pembayaran
                  <div class="fw-bold text-danger fs-4 my-2">23 : 10 : 23</div>
                  <div class="">
                    sebelum <strong>10-10-2022 10 : 29 : 23 </strong>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row my-3">
                <div class="col-sm-12 text-start">
                  <div class="mb-2 fw-bold">Syarat dan Ketentuan</div>
                  <ul>
                    <li>
                      Jika Anda mentransfer pada saat bank offline, kami tidak
                      dapat mengecek pembayaran Anda. Pembayaran Anda akan kami
                      proses saat bank tersebut online dan memberikan laporan
                      bahwa transfer Anda sudah kami terima. Kami tidak
                      bertanggung jawab jika ada transfer pada waktu tersebut.
                    </li>
                    <li>
                      Segera konfirmasikan pembayaran Anda dengan mengirimkan
                      bukti transfer pada form konfirmasi pembayaran yang telah
                      kami sediakan. Pembayaran akan diverifikasi dalam waktu
                      1x24 jam.
                    </li>
                    <ul></ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>