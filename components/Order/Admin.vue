<template>
  <div>
    <div class="pagetitle mb-3">
      <div class="row">
        <div class="col-md-8 mt-2">
          <h1 class="fs-5 mb-1">Order Info</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active">Order List</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Customer Detail (ini diambil dari data customer)
              </h5>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>Susanto</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>nagakan@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Telp/Wa</td>
                    <td>08298483001</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Order Info</h5>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Invoice</td>
                    <td>No INV</td>
                  </tr>
                  <tr>
                    <td>Tanggal</td>
                    <td>Tanggal Order</td>
                  </tr>
                  <tr>
                    <td>Pembayaran</td>
                    <td>
                      Bank BCA <span class="badge bg-danger">Unpaid</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
      </div>
      <!-- Order Detail -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Order Detail</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <td class="text-start fw-bold">Produk</td>
                    <td class="text-end fw-bold">Jumlah</td>
                    <td class="text-end fw-bold">Rate</td>
                    <td class="text-end fw-bold">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-start">
                      Top Up Paypal
                      <!--Mungkin diisi akun Paypalnya -->
                      <br />
                      <small> - santo@gmail.com</small>
                    </td>
                    <td class="text-end">$50.00</td>
                    <td class="text-end">Rp 15.900</td>
                    <td class="text-end">Rp 795.000</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Sub Total</td>
                    <td class="text-end">xxxxxx</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Fee</td>
                    <td class="text-end">xxxxxx</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Discount</td>
                    <td class="text-end">xxxxxx</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-end fw-bold">Total</td>
                    <td class="text-end fw-bold">xxxx</td>
                  </tr>
                </tbody>
              </table>
              <!-- Jika ada pesan/link echo -->
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <td><strong>Info tambahan</strong></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Akun PayPal:</strong> (jika topup, echo "Akun
                      Paypal", sebaliknya jika jasa bayar echo "Link/Akun
                      Pembayaran"<br />
                      <p>akunpp1@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Pesan:</strong><br />
                      <p>Misal info login, alamat pengiriman, dll</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- End Card with header and footer -->
        </div>
      </div>
      <!-- Payment Confirmation & Order Histrory -->
      <div class="row">
        <div class="col-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Payment Confirmation</h5>
              <div class="form-group mb-2 col-12 text-center">
                <p>
                  Screen shot bukti pembayaran customer akan ditampilkan disini
                </p>
                <img
                  src="assets/img/preview.png"
                  width="200"
                  height="200"
                  alt=""
                  class="img-thumbnail"
                />
                <div class="pt-2">
                  <button type="submit" class="btn btn-success">Confirm</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-8"><h5 class="card-title">Noted</h5></div>
                <div class="col-4">
                  <div class="pt-3 text-end">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#noted"
                    >
                      Add/Edit
                    </button>
                  </div>
                </div>
              </div>
              Dikirim dari akun ariframadani $100 dan akun mboknom
              $150,sedangkan $350 dari supplier A.
            </div>
          </div>
        </div>
        <div class="col-7">
          <div class="row">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">Order History</h5>
                  </div>
                </div>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td class="text-start">Date Added</td>
                      <td class="text-start">Comment</td>
                      <td class="text-start">Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-start">Tanggal</td>
                      <td class="text-start">
                        Pembayaran Sudah Kami Terima dan segera proses orderan
                        anda
                      </td>
                      <td class="text-start">
                        <span class="badge bg-info">Processing</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-start">Tanggal</td>
                      <td class="text-start">
                        Sudah saya kirim berikut link screenshotnya:
                      </td>
                      <td class="text-start">
                        <span class="badge bg-success">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">Add History</h5>
                  </div>
                </div>
                <form class="row" id="page-form" action="">
                  <div class="form-group d-grid gap-3">
                    <div class="row">
                      <label
                        for="order_status"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Status</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <select class="form-select" id="status" name="status">
                          <option value="" disabled>
                            Silahkan Pilih...
                          </option>
                          <option value="pending">Pending</option>
                          <option value="sent">Sent</option>
                          <option value="processing">Processing</option>
                          <option value="canceled">Canceled</option>
                          <option value="completed">Completed</option>
                          <option value="refunded">Refunded</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <label
                        for="comment"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Comment</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <textarea
                          name="comment"
                          placeholder=""
                          id="comment"
                          row="5"
                          class="form-control"
                          aria-hidden="true"
                          style="display: none"
                        ></textarea>
                        <div
                          role="application"
                          class="tox tox-tinymce"
                          aria-disabled="false"
                          style="visibility: hidden; height: 200px"
                        >
                          <div class="tox-editor-container">
                            <div
                              data-alloy-vertical-dir="toptobottom"
                              class="tox-editor-header"
                            >
                              <div
                                role="group"
                                class="tox-toolbar-overlord"
                                aria-disabled="false"
                              >
                                <div role="group" class="tox-toolbar__primary">
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabindex="-1"
                                    class="tox-toolbar__group"
                                  >
                                    <button
                                      title="Blocks"
                                      aria-label="Blocks"
                                      aria-haspopup="true"
                                      type="button"
                                      tabindex="-1"
                                      unselectable="on"
                                      class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                                      aria-expanded="false"
                                      style="user-select: none"
                                    >
                                      <span class="tox-tbtn__select-label"
                                        >Paragraph</span
                                      >
                                      <div class="tox-tbtn__select-chevron">
                                        <svg
                                          width="10"
                                          height="10"
                                          focusable="false"
                                        >
                                          <path
                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                            fill-rule="nonzero"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabindex="-1"
                                    class="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Bold"
                                      title="Bold"
                                      type="button"
                                      tabindex="-1"
                                      class="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span class="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8Zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4Zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4Z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Italic"
                                      title="Italic"
                                      type="button"
                                      tabindex="-1"
                                      class="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span class="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="m16.7 4.7-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8Z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Align left"
                                      title="Align left"
                                      type="button"
                                      tabindex="-1"
                                      class="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span class="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Align center"
                                      title="Align center"
                                      type="button"
                                      tabindex="-1"
                                      class="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span class="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2Zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                                            fill-rule="evenodd"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </div>
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabindex="-1"
                                    class="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="Insert/edit link"
                                      title="Insert/edit link"
                                      type="button"
                                      tabindex="-1"
                                      class="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span class="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2 2a2 2 0 1 0 2.6 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2Zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2Z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span></button
                                    ><button
                                      aria-label="Insert/edit image"
                                      title="Insert/edit image"
                                      type="button"
                                      tabindex="-1"
                                      class="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                    >
                                      <span class="tox-icon tox-tbtn__icon-wrap"
                                        ><svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="m5 15.7 3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7ZM5 18V19h3l2.8-2.9-2-2L5 17.9Zm14-3-2.5-2.4-6.4 6.5H19v-4ZM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                            fill-rule="nonzero"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="tox-anchorbar"></div>
                            </div>
                            <div class="tox-sidebar-wrap">
                              <div class="tox-edit-area">
                                <iframe
                                  id="comment_ifr"
                                  frameborder="0"
                                  allowtransparency="true"
                                  title="Rich Text Area"
                                  class="tox-edit-area__iframe"
                                  srcdoc='<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body id="tinymce" class="mce-content-body " data-id="comment" aria-label="Rich Text Area. Press ALT-0 for help."><br></body></html>'
                                ></iframe>
                              </div>
                              <div role="complementary" class="tox-sidebar">
                                <div
                                  data-alloy-tabstop="true"
                                  tabindex="-1"
                                  class="tox-sidebar__slider tox-sidebar--sliding-closed"
                                  style="width: 0px"
                                >
                                  <div
                                    class="tox-sidebar__pane-container"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tox-statusbar">
                            <div class="tox-statusbar__text-container">
                              <div
                                role="navigation"
                                data-alloy-tabstop="true"
                                class="tox-statusbar__path"
                                aria-disabled="false"
                              >
                                <div
                                  data-index="0"
                                  aria-level="1"
                                  role="button"
                                  tabindex="-1"
                                  class="tox-statusbar__path-item"
                                  aria-disabled="false"
                                >
                                  p
                                </div>
                              </div>
                              <span class="tox-statusbar__branding"
                                ><a
                                  href="https://www.tiny.cloud/powered-by-tiny?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v6"
                                  rel="noopener"
                                  target="_blank"
                                  aria-label="Powered by Tiny"
                                  tabindex="-1"
                                  ><svg
                                    width="50px"
                                    height="16px"
                                    viewBox="0 0 50 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M10.143 0c2.608.015 5.186 2.178 5.186 5.331 0 0 .077 3.812-.084 4.87-.361 2.41-2.164 4.074-4.65 4.496-1.453.284-2.523.49-3.212.623-.373.071-.634.122-.785.152-.184.038-.997.145-1.35.145-2.732 0-5.21-2.04-5.248-5.33 0 0 0-3.514.03-4.442.093-2.4 1.758-4.342 4.926-4.963 0 0 3.875-.752 4.036-.782.368-.07.775-.1 1.15-.1Zm1.826 2.8L5.83 3.989v2.393l-2.455.475v5.968l6.137-1.189V9.243l2.456-.476V2.8ZM5.83 6.382l3.682-.713v3.574l-3.682.713V6.382Zm27.173-1.64-.084-1.066h-2.226v9.132h2.456V7.743c-.008-1.151.998-2.064 2.149-2.072 1.15-.008 1.987.92 1.995 2.072v5.065h2.455V7.359c-.015-2.18-1.657-3.929-3.837-3.913a3.993 3.993 0 0 0-2.908 1.296Zm-6.3-4.266L29.16 0v2.387l-2.456.475V.476Zm0 3.2v9.132h2.456V3.676h-2.456Zm18.179 11.787L49.11 3.676H46.58l-1.612 4.527-.46 1.382-.384-1.382-1.611-4.527H39.98l3.3 9.132L42.15 16l2.732-.537ZM22.867 9.738c0 .752.568 1.075.921 1.075.353 0 .668-.047.998-.154l.537 1.765c-.23.154-.92.537-2.225.537-1.305 0-2.655-.997-2.686-2.686a136.877 136.877 0 0 1 0-4.374H18.8V3.676h1.612v-1.98l2.455-.476v2.456h2.302V5.9h-2.302v3.837Z"
                                    ></path></svg></a
                              ></span>
                            </div>
                            <div
                              title="Resize"
                              data-alloy-tabstop="true"
                              tabindex="-1"
                              class="tox-statusbar__resize-handle"
                            >
                              <svg width="10" height="10" focusable="false">
                                <g fill-rule="nonzero">
                                  <path
                                    d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7ZM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3Z"
                                  ></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            class="tox-throbber"
                            style="display: none"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-md-4 col-lg-3"></label>
                      <div class="col-md-8 col-lg-9">
                        <button type="button" class="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal Admin Noted-->
    <div
      class="modal fade"
      id="noted"
      tabindex="-1"
      aria-hidden="true"
      style="display: none"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Catatan Admin
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-group">
                <textarea
                  name="catatan"
                  rows="5"
                  placeholder="Catatan"
                  class="form-control"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>