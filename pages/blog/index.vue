<template>
  <section class="ud-blog-grids">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="ud-single-blog">
            <div class="ud-blog-image">
              <nuxt-link to="/blog/detail/contoh-title-article">
                <img src="/images/blog/blog-01.jpg" alt="blog" />
              </nuxt-link>
            </div>
            <div class="ud-blog-content">
              <span class="ud-blog-date">Dec 22, 2023</span>
              <h3 class="ud-blog-title">
                <nuxt-link to="/blog/detail/contoh-title-article">
                  Kalau pakai lavarel titlenya diubah setiap huruf pertama jadi
                  kapital
                </nuxt-link>
              </h3>
              <p class="ud-blog-desc">
                Ini harusnya mengambil 200 karakter pertama dari $post->content,
                kalau di laravel mungkin $content = Str::limit($post->content,
                200);
              </p>
            </div>
          </div>
        </div>
        <div class="">
            <ul class="pagination">
              <li class="icon">
                <a href="#"><span class="ri-arrow-left-s-line"></span>Prev</a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">6</a></li>
              <li><a href="#">7</a></li>
              <li><a href="#">8</a></li>
              <li><a href="#">9</a></li>
              <li><a href="#">10</a></li>
              <li class="icon">
                <a href="#">Next<span class="ri-arrow-right-s-line"></span></a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: "main",
  auth:false,
};
</script>