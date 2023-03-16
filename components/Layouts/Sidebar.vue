<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">
          <i class="ri-dashboard-fill"></i>
          <span>Dashboard</span>
        </nuxt-link>
      </li>
      <!-- End Dashboard Nav -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#order-nav"
          data-bs-toggle="collapse"
          href="#"
          aria-expanded="false"
        >
          <i class="ri-shopping-cart-2-line"></i><span>Example</span
          ><i class="ri-arrow-right-s-line arrow-down ms-auto"></i>
        </a>
        <ul
          id="order-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
          style=""
        >
          <li>
            <nuxt-link to="/example"> <span>example</span> </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/404"> <span>404</span> </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>