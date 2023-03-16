<template>
  <div>
    <div class="pagetitle">
      <h1 class="fs-5 mb-1">Example page</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <section class="section dashboard">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Reports Monthly</h5>
              <!-- Line Chart -->
              <table id="xxx" class="table table-hovered table-stripped">
                <thead>
                  <tr>
                    <th>contoh</th>
                    <th>consad</th>
                    <th>lerem</th>
                    <th>ipsum</th>
                  </tr>
                </thead>
              </table>

              <!-- End Line Chart -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  mounted() {
    this.loadDatatable();
  },
  methods: {
    loadDatatable() {
      //Should implements serverside table
      window.table = $("#xxx").DataTable();
    },
  },
};
</script>