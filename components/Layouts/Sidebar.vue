<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/dashboard">
          <i class="ri-dashboard-fill"></i>
          <span>Dashboard</span>
        </nuxt-link>
      </li>
      <!-- End Dashboard Nav -->
      <li class="nav-heading">Order</li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#order-nav"
          data-bs-toggle="collapse"
          href="#"
          aria-expanded="false"
        >
          <i class="ri-shopping-cart-2-line"></i><span>Order</span
          ><i class="ri-arrow-right-s-line arrow-down ms-auto"></i>
        </a>
        <ul
          id="order-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
          style=""
        >
          <li>
            <nuxt-link to="/order/list"> <span>Order List</span> </nuxt-link>
          </li>
          <li v-if="$auth.user.role != 'admin'">
            <nuxt-link to="/order/new"> <span>New Order</span> </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#voucher-nav"
          data-bs-toggle="collapse"
          href="#"
          aria-expanded="false"
        >
          <i class="ri-coupon-line"></i><span>Voucher</span
          ><i class="ri-arrow-right-s-line arrow-down ms-auto"></i>
        </a>
        <ul
          id="voucher-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
          style=""
        >
          <li>
            <nuxt-link to="/voucher/list">
              <span>Voucher List</span>
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav-heading" v-if="$auth.user.role == 'admin'">Blog</li>
      <li class="nav-item" v-if="$auth.user.role == 'admin'">
        <a
          class="nav-link collapsed"
          data-bs-target="#blog-nav"
          data-bs-toggle="collapse"
          href="#"
          aria-expanded="false"
        >
          <i class="ri-book-open-line"></i><span>Post</span
          ><i class="ri-arrow-right-s-line arrow-down ms-auto"></i>
        </a>
        <ul
          id="blog-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
          style=""
        >
          <li>
            <nuxt-link to="/post/list"> <span>Post List</span> </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/post/new"> <span>New Post</span> </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav-item" v-if="$auth.user.role == 'admin'">
        <a
          class="nav-link collapsed"
          data-bs-target="#category-nav"
          data-bs-toggle="collapse"
          href="#"
          aria-expanded="false"
        >
          <i class="ri-book-open-line"></i><span>Category</span
          ><i class="ri-arrow-right-s-line arrow-down ms-auto"></i>
        </a>
        <ul
          id="category-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
          style=""
        >
          <li>
            <nuxt-link to="/category/list">
              <span>Category List</span>
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>