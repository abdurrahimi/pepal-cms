<template>
  <div>
    <div class="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/dashboard">Home</nuxt-link>
          </li>
          <li class="breadcrumb-item">Users</li>
          <li class="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div
              class="card-body profile-card pt-4 d-flex flex-column align-items-center"
            >
              <img
                :src="user.profile_pict ?? '/assets/img/profile-img.jpg'"
                alt="Profile"
                class="rounded-circle"
              />
              <h2>{{ user.name }}</h2>
              <h3>{{ user.profesi }}</h3>
            </div>
          </div>
        </div>

        <div class="col-xl-8">
          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                    aria-selected="true"
                    role="tab"
                  >
                    Overview
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-edit"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Edit Profile
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-settings"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Settings
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-change-password"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Change Password
                  </button>
                </li>
              </ul>
              <div class="tab-content pt-2">
                <div
                  class="tab-pane fade profile-overview active show"
                  id="profile-overview"
                  role="tabpanel"
                >
                  <h5 class="card-title">Profile Details</h5>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Nama Lengkap</div>
                    <div class="col-lg-9 col-md-8">{{ user.name }}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Profesi</div>
                    <div class="col-lg-9 col-md-8">{{ user.profesi }}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Alamat</div>
                    <div class="col-lg-9 col-md-8">
                      {{ user.alamat }}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Phone/WA</div>
                    <div class="col-lg-9 col-md-8">{{ user.phone }}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8">{{ user.email }}</div>
                  </div>
                </div>

                <div
                  class="tab-pane fade profile-edit pt-3"
                  id="profile-edit"
                  role="tabpanel"
                >
                  <!-- Profile Edit Form -->
                  <form method="post" action="" @submit.prevent="editProfile">
                    <div class="row mb-3">
                      <label
                        for="profileImage"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Profile Image</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <img
                          :src="
                            form.profile_pict ?? 'assets/img/profile-img.jpg'
                          "
                          alt="Profile"
                        />
                        <div class="pt-2">
                          <input
                            id="imageSelect"
                            type="file"
                            @change="onFileChange"
                            style="display: none"
                          />
                          <a
                            href="#"
                            class="btn btn-primary btn-sm"
                            @click="uploadImage()"
                            title="Upload image"
                            ><i class="ri-upload-2-line"></i
                          ></a>
                          <a
                            href="#"
                            class="btn btn-danger btn-sm"
                            @click="removeImage()"
                            title="Remove image"
                            ><i class="ri-delete-bin-6-line"></i
                          ></a>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="fullName"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Nama Lengkap</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="fullName"
                          type="text"
                          class="form-control"
                          id="nama-lengkap"
                          v-model="form.name"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Job" class="col-md-4 col-lg-3 col-form-label"
                        >Profesi</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="job"
                          type="text"
                          class="form-control"
                          id="profesi"
                          v-model="form.profesi"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Address"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Alamat</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="address"
                          type="text"
                          class="form-control"
                          id="alamat"
                          v-model="form.alamat"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Phone"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Phone/WA</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="phone"
                          type="number"
                          class="form-control"
                          id="phone-wa"
                          v-model="form.phone"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Email"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Email</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="email"
                          v-model="form.email"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Button Submit"
                        class="col-md-4 col-lg-3 col-form-label"
                      ></label>
                      <div class="col-md-8 col-lg-9">
                        <button type="submit" class="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                  <!-- End Profile Edit Form -->
                </div>

                <div
                  class="tab-pane fade pt-3"
                  id="profile-settings"
                  role="tabpanel"
                >
                  <!-- Settings Form -->
                  <form @submit.prevent="updateSetting">
                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3"
                        >Email Notifications</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="changesMade"
                            checked
                          />
                          <label class="form-check-label" for="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="proOffers"
                          />
                          <label class="form-check-label" for="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="securityNotify"
                            checked
                            disabled
                          />
                          <label class="form-check-label" for="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3"
                        >Login OTP</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="setting.otp"
                            value="1"
                            id="settingOtpTrue"
                          />
                          <label class="form-check-label" for="settingOtpTrue">
                            Kirimkan saya OTP melalui email
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            v-model="setting.otp"
                            value="0"
                            id="settingOtpFalse"
                          />
                          <label class="form-check-label" for="settingOtpFalse">
                            Jangan kirimkan saya OTP
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="verifikasi" class="col-md-4 col-lg-3"
                        >Verifikasi Kata Sandi Sebelum Order</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="verifiedChecked"
                            v-model="setting.verif"
                          />
                          <label class="form-check-label" for="verifiedChecked"
                            >Yes</label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Button Submit"
                        class="col-md-4 col-lg-3 col-form-label"
                      ></label>
                      <div class="col-md-8 col-lg-9">
                        <button type="submit" class="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                  <!-- End settings Form -->
                </div>

                <div
                  class="tab-pane fade pt-3"
                  id="profile-change-password"
                  role="tabpanel"
                >
                  <!-- Change Password Form -->
                  <form @submit.prevent="changePw">
                    <div class="row mb-3">
                      <label
                        for="currentPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Current Password</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="password"
                          type="password"
                          class="form-control"
                          v-model="pw.old_pass"
                          id="currentPassword"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="newPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                        >New Password</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="newpassword"
                          type="password"
                          v-model="pw.password"
                          class="form-control"
                          id="newPassword"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="renewPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Re-enter New Password</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="renewpassword"
                          type="password"
                          v-model="pw.password_confirm"
                          class="form-control"
                          id="renewPassword"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Button Submit"
                        class="col-md-4 col-lg-3 col-form-label"
                      ></label>
                      <div class="col-md-8 col-lg-9">
                        <button type="submit" class="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                  <!-- End Change Password Form -->
                </div>
              </div>
              <!-- End Bordered Tabs -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ store }) {
    let data = await store.dispatch("profile");
    return data;
  },
  data() {
    return {
      submit: {
        profile: false,
        pw: false,
        setting: false,
      },
      form: {
        profile_pict: "",
        nama: "",
        profesi: "",
        phone: "",
        email: "",
      },
      pw: {
        old_pass: "",
        password: "",
        password_confirm: "",
      },
      setting: {
        otp: 0,
        verif: 0,
      },
    };
  },
  mounted() {
    this.form = {
      profile_pict: this.user.profile_pict,
      name: this.user.name,
      profesi: this.user.profesi,
      alamat: this.user.alamat,
      phone: this.user.phone,
      email: this.user.email,
    };
    this.setting = {
      otp: this.user.is_login_otp,
      verif: this.user.is_verif_sandi_order,
    };
  },
  methods: {
    async editProfile() {
      this.submit.profile = true;
      await this.$axios
        .post("/api/profile", this.form)
        .then((res) => {
          this.$auth.fetchUser()
          this.form = {
            profile_pict: res.data.user.profile_pict,
            name: res.data.user.name,
            profesi: res.data.user.profesi,
            alamat: res.data.user.alamat,
            phone: res.data.user.phone,
            email: res.data.user.email,
          };
          this.user = { ...this.form };
          this.setting = {
            otp: res.data.user.is_login_otp,
            verif: res.data.user.is_verif_sandi_order,
          };
          this.submit.profile = false;
          this.$swal.fire("Success", "Profile berhasil disimpan", "success");
        })
        .catch((err) => {
          this.$swal.fire("Failed", "Terjadi error!", "error");
        });
    },
    async changePw() {
      this.submit.pw = true;
      await this.$axios
        .post("/api/password", this.pw)
        .then((res) => {
          this.submit.pw = false;
          this.$swal.fire("Success", "Profile berhasil disimpan", "success");
        })
        .catch((err) => {
          if (err.response.status == 400) {
            this.$swal.fire("Failed", err.response.data.message, "error");
          }
          this.$swal.fire("Failed", "Terjadi error!", "error");
        });
    },
    async updateSetting() {
      this.submit.setting = true;
      await this.$axios
        .post("/api/setting", this.setting)
        .then((res) => {
          this.submit.setting = false;
          this.$swal.fire("Success", "Profile berhasil disimpan", "success");
        })
        .catch((err) => {
          if (err.response.status == 400) {
            this.$swal.fire("Failed", err.response.data.message, "error");
          }
          this.$swal.fire("Failed", "Terjadi error!", "error");
        });
    },
    uploadImage() {
      $("#imageSelect").click();
    },
    removeImage() {
      this.form.profile_pict = "/assets/img/preview.png";
    },
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      Object.values(files).map((file) => {
        this.createImage(file);
      });
      $("#inputImage").val("");
    },
    createImage(file, key) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.form.profile_pict = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>