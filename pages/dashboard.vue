<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div class="card card-full bg-danger-card">
          <div class="card-inner">
            <div class="card-title-group align-start mb-0">
              <div class="card-title py-0">
                <h6 class="subtitle">Total Top Up</h6>
              </div>
            </div>
            <div class="card-amount">
              <span class="amount fw-bolder">
                {{
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(topup)
                }}
              </span>
            </div>
            <div class="trx-data">
              <div class="trx-data-amount g-2">
                <div class="trx-data-history">
                  <div class="title">Bulan Ini</div>
                  <div class="amount">
                    {{
                      new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        datas.transaksi?.month?.filter(
                          (v) => v.tipe == "paypal"
                        )[0]?.total ?? 0
                      )
                    }}
                  </div>
                </div>
                <div class="trx-data-history">
                  <div class="title">Minggu Ini</div>
                  <div class="amount">
                    {{
                      new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        datas.transaksi?.week?.filter(
                          (v) => v.tipe == "paypal"
                        )[0]?.total ?? 0
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- .card -->
      </div>
      <div class="col-md-4">
        <div class="card card-full bg-info-card">
          <div class="card-inner">
            <div class="card-title-group align-start mb-0">
              <div class="card-title py-0">
                <h6 class="subtitle">Total Jasa Bayar</h6>
              </div>
            </div>
            <div class="card-amount">
              <span class="amount fw-bolder">
                {{
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    datas.transaksi?.all.filter((v) => v.tipe == "bayar")[0]
                      ?.total ?? 0
                  )
                }}
              </span>
            </div>
            <div class="trx-data">
              <div class="trx-data-amount g-2">
                <div class="trx-data-history">
                  <div class="title">Bulan Ini</div>
                  <div class="amount">
                    {{
                      new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        datas.transaksi?.month?.filter(
                          (v) => v.tipe == "bayar"
                        )[0]?.total ?? 0
                      )
                    }}
                  </div>
                </div>
                <div class="trx-data-history">
                  <div class="title">Minggu Ini</div>
                  <div class="amount">
                    {{
                      new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        datas.transaksi?.week?.filter(
                          (v) => v.tipe == "bayar"
                        )[0]?.total ?? 0
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- .card -->
      </div>
      <div class="col-md-4">
        <div class="card bg-success-card">
          <div class="card-inner">
            <div class="card-title-group align-start mb-0">
              <div class="card-title py-0">
                <h6 class="subtitle">Total Transaksi</h6>
              </div>
            </div>
            <div class="card-amount">
              <span class="amount fw-bolder">{{ getTotal }}</span>
            </div>
            <div class="trx-data">
              <div class="trx-data-amount g-2">
                <div class="trx-data-history">
                  <div class="title">TopUp PayPal</div>
                  <div class="amount">{{ getTotalPaypal }}</div>
                </div>
                <div class="trx-data-history">
                  <div class="title">Jasa Bayar</div>
                  <div class="amount">{{ getTotalBayar }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- .card -->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Reports Monthly</h5>
            <!-- Line Chart -->
            <div id="reportsChart" style="min-height: 380px"></div>
            <!--             <script>
              document.addEventListener("DOMContentLoaded", () => {
                new ApexCharts(document.querySelector("#reportsChart"), {
                  series: [
                    {
                      name: "Top Up",
                      data: [
                        2265, 4000, 3450, 3560, 1790, 4700, 1000, 2450, 3000,
                        2265, 4000, 3450, 3560, 1790, 4700, 1000, 2450, 3000,
                        2265, 4000, 3450, 3560, 1790, 4700, 3289, 3280, 2740,
                      ],
                    },
                    {
                      name: "Jasa Bayar",
                      data: [
                        10, 350, 230, 0, 120, 200, 40, 100, 500, 10, 350, 230,
                        0, 120, 200, 40, 100, 0, 20, 400, 10, 350, 230, 0, 120,
                        200, 40, 160, 290,
                      ],
                    },
                  ],
                  chart: {
                    height: 365,
                    type: "area",
                    toolbar: {
                      show: false,
                    },
                  },
                  markers: {
                    size: 4,
                  },
                  colors: ["#0f67ff", "#fb5272"],
                  fill: {
                    type: "gradient",
                    gradient: {
                      shadeIntensity: 1,
                      opacityFrom: 0.3,
                      opacityTo: 0.4,
                      stops: [0, 90, 100],
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                    width: 2,
                  },
                  xaxis: {
                    type: "date",
                    categories: [
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                      "26",
                      "27",
                      "28",
                      "29",
                    ],
                  },
                  tooltip: {
                    x: {
                      format: "dd/MM/yy HH:mm",
                    },
                  },
                }).render();
              });
            </script> -->
            <!-- End Line Chart -->
          </div>
        </div>
      </div>
      <!-- .col -->
      <div class="col-lg-4">
        <div class="row">
          <div class="col-sm-6 col-lg-12">
            <div class="card info-card topup-card">
              <div class="card-body">
                <div class="card-title fs-6">Top Up Saldo</div>
                <div class="fs-5 fw-bold mb-2 text-primary">
                  {{
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(topup)
                  }}
                </div>
                <div class="progress-card">
                  <template v-for="(item, key) in datas.transaksi?.all">
                    <div :key="key" v-if="item.tipe == 'paypal'">
                      <div
                        v-if="
                          item.status == 'Waiting' ||
                          item.status == 'Processing'
                        "
                      >
                        <div class="d-flex justify-content-between mb-1">
                          <span>{{ item.status }}</span>
                          <span class="fw-bold">{{
                            new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(item.total)
                          }}</span>
                        </div>
                        <div class="progress mb-2" style="height: 8px">
                          <div
                            class="progress-bar"
                            :class="
                              item.status == 'Waiting'
                                ? 'bg-primary'
                                : 'bg-success'
                            "
                            role="progressbar"
                            :style="
                              'width:' + Math.floor(Math.random() * 101) + '%'
                            "
                            :aria-valuenow="Math.random()"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="80%"
                            data-bs-original-title="80%"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <!-- <div class="d-flex justify-content-between mb-1">
                    <span>Processing</span>
                    <span class="fw-bold">$1.034</span>
                  </div>
                  <div class="progress mb-2" style="height: 8px">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 20%"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="20%"
                      data-bs-original-title="20%"
                    ></div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-12">
            <div class="card info-card bayar-card">
              <div class="card-body">
                <div class="card-title fs-6">Jasa Bayar</div>
                <div class="fs-5 fw-bold mb-2 text-danger">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(
                      datas.transaksi?.all.filter((v) => v.tipe == "bayar")[0]
                        ?.total ?? 0
                    )
                  }}
                </div>
                <div class="progress-card">
                  <template v-for="(item, key) in datas.transaksi?.all">
                    <div :key="key" v-if="item.tipe == 'bayar'">
                      <div class="d-flex justify-content-between mb-1">
                        <span>{{ item.status }}</span>
                        <span class="fw-bold">{{
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(item.total)
                        }}</span>
                      </div>
                      <div class="progress mb-2" style="height: 8px">
                        <div
                          class="progress-bar"
                          :class="
                            background[
                              Math.floor(Math.random() * background.length)
                            ]
                          "
                          role="progressbar"
                          :style="
                            'width:' + Math.floor(Math.random() * 101) + '%'
                          "
                          :aria-valuenow="Math.random()"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="80%"
                          data-bs-original-title="80%"
                        ></div>
                      </div>
                    </div>
                  </template>
                  <!-- <div class="d-flex justify-content-between mb-1">
                    <span>Waiting</span>
                    <span class="fw-bold">$50</span>
                  </div>
                  <div class="progress mb-2" style="height: 8px">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 30%"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="30%"
                      data-bs-original-title="30%"
                    ></div>
                  </div>
                  <div class="d-flex justify-content-between mb-1">
                    <span>Processing</span>
                    <span class="fw-bold">$110</span>
                  </div>
                  <div class="progress mb-2" style="height: 8px">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 70%"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="70%"
                      data-bs-original-title="70%"
                    ></div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card recent-sales">
          <div class="card-body">
            <h5 class="card-title">Recent Sales</h5>
            <div
              id="datatable_wrapper"
              class="dataTables_wrapper dt-bootstrap5 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-6"></div>
                <div class="col-sm-12 col-md-6">
                  <div id="datatable_filter" class="dataTables_filter">
                    <label
                      >Search:<input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder=""
                        aria-controls="datatable"
                    /></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table
                    class="table table-hover table-bordered dt-responsive nowrap dataTable no-footer dtr-inline"
                    style="
                      border-collapse: collapse;
                      border-spacing: 0px;
                      width: 100%;
                    "
                    id="datatable"
                    aria-describedby="datatable_info"
                  >
                    <thead>
                      <tr>
                        <th
                          class="sorting sorting_asc"
                          tabindex="0"
                          aria-controls="datatable"
                          rowspan="1"
                          colspan="1"
                          style="width: 204px"
                          aria-sort="ascending"
                          aria-label="# OrderID: activate to sort column descending"
                        >
                          # OrderID
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="datatable"
                          rowspan="1"
                          colspan="1"
                          style="width: 358px"
                          aria-label="Customer: activate to sort column ascending"
                        >
                          Customer
                        </th>
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="datatable"
                          rowspan="1"
                          colspan="1"
                          style="width: 166px"
                          aria-label="Service: activate to sort column ascending"
                        >
                          Service
                        </th>
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="datatable"
                          rowspan="1"
                          colspan="1"
                          style="width: 261px"
                          aria-label="Nominal USD: activate to sort column ascending"
                        >
                          Nominal USD
                        </th>
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="datatable"
                          rowspan="1"
                          colspan="1"
                          style="width: 226px"
                          aria-label="Harga: activate to sort column ascending"
                        >
                          Harga
                        </th>
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="datatable"
                          rowspan="1"
                          colspan="1"
                          style="width: 167px"
                          aria-label="Status: activate to sort column ascending"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="odd"
                        v-for="item in datas.latest"
                        :key="item.id"
                      >
                        <th
                          scope="row"
                          class="dtr-control sorting_1"
                          tabindex="0"
                        >
                          <a :href="'/order/detail/' + item.id"
                            >#{{ item.id }}</a
                          >
                        </th>
                        <td>{{ item.user?.name }}</td>
                        <td>
                          <span v-if="item.tipe == 'paypal'"> Top Up</span>
                          <span v-else> Pembayaran </span>
                        </td>
                        <td>
                          {{
                            new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(item.nominal)
                          }}
                        </td>
                        <td>
                          {{
                            new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(item.total)
                          }}
                        </td>
                        <td><Status :status="item.status" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-5">
                  <div
                    class="dataTables_info"
                    id="datatable_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to {{ datas.latest.length }} of
                    {{ datas.latest.length }} entries
                  </div>
                </div>
                <div class="col-sm-12 col-md-7">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="datatable_paginate"
                  >
                    <ul class="pagination">
                      <li
                        class="paginate_button page-item previous disabled"
                        id="datatable_previous"
                      >
                        <a
                          href="#"
                          aria-controls="datatable"
                          data-dt-idx="0"
                          tabindex="0"
                          class="page-link"
                          >Previous</a
                        >
                      </li>
                      <li class="paginate_button page-item active">
                        <a
                          href="#"
                          aria-controls="datatable"
                          data-dt-idx="1"
                          tabindex="0"
                          class="page-link"
                          >1</a
                        >
                      </li>
                      <li
                        class="paginate_button page-item next disabled"
                        id="datatable_next"
                      >
                        <a
                          href="#"
                          aria-controls="datatable"
                          data-dt-idx="2"
                          tabindex="0"
                          class="page-link"
                          >Next</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Recent Sales -->
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      datas: { total: [], transaksi: { all: [] }, latest: [] },
      background: [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-warning",
        "bg-danger",
      ],
    };
  },
  computed: {
    getTotal() {
      var sum = 0;
      Object.values(this.datas.total).map((v, k) => {
        sum += v.total;
      });
      return sum;
    },
    getTotalPaypal() {
      var sum = 0;
      Object.values(this.datas.total).map((v, k) => {
        if (v.tipe == "paypal") sum += v.total;
      });
      return sum;
    },
    getTotalBayar() {
      var sum = 0;
      Object.values(this.datas.total).map((v, k) => {
        if (v.tipe == "bayar") sum += v.total;
      });
      return sum;
    },
    topup() {
      var sum = 0;
      if (this.datas.transaksi !== undefined)
        Object.values(this.datas.transaksi.all).map((v, k) => {
          if (v.tipe == "paypal") sum += v.total;
        });
      return sum;
    },
  },
  mounted() {
    this.getData();
    //this.loadChart();
  },
  methods: {
    getData() {
      this.$axios.get("/api/dashboard").then((res) => {
        this.datas = res.data;
        this.loadChart(
          res.data.daily.topup,
          res.data.daily.bayar,
          res.data.daily.date
        );
      });
    },
    loadChart(topup, bayar, date) {
      new ApexCharts(document.querySelector("#reportsChart"), {
        series: [
          {
            name: "Top Up",
            data: topup,
          },
          {
            name: "Jasa Bayar",
            data: bayar,
          },
        ],
        chart: {
          height: 365,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        markers: {
          size: 4,
        },
        colors: ["#0f67ff", "#fb5272"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.4,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        xaxis: {
          type: "date",
          categories: date,
        },
        yaxis: [
          {
            labels: {
              formatter: function (val) {
                return val.toFixed(0);
              },
            },
          },
        ],
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      }).render();
    },
  },
};
</script>
