<template>
  <div class="row">
    <h5 class="card-title">Order Service</h5>
    <div class="col-6">
      <div class="card">
        <nuxt-link to="paypal" class="card-body">
          <div class="service-card">
            <div class="service-avatar">
              <span class="badge bg-primary badge-number"
                ><i class="ri-paypal-line"></i
              ></span>
            </div>
            <div class="service-info">Top Up PayPal</div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="col-6">
      <div class="card">
        <nuxt-link to="bayar" class="card-body">
          <div class="service-card">
            <div class="service-avatar">
              <span class="badge bg-primary badge-number"
                ><i class="ri-secure-payment-line"></i
              ></span>
            </div>
            <div class="service-info">Jasa Bayar</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>