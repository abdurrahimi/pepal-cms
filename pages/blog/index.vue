<template>
  <section class="ud-blog-grids">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="(item,key) in post.data" :key="key">
          <div class="ud-single-blog">
            <div class="ud-blog-image">
              <nuxt-link :to="'/blog/detail/'+item.slug">
                <img :src="item.image" alt="blog" style="max-height: 234px"/>
              </nuxt-link>
            </div>
            <div class="ud-blog-content">
              <span class="ud-blog-date">Dec 22, 2023</span>
              <h3 class="ud-blog-title">
                <nuxt-link :to="'/blog/detail/'+item.slug">
                  {{ item.title }}
                </nuxt-link>
              </h3>
              <p class="ud-blog-desc" v-html="item.content">
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
  async asyncData({$axios}){
    const post = await $axios.$get(`http://127.0.0.1:8000/api/v1/blog/post`)
      return { post }
  },
};
</script>
<style scoped>
.ud-blog-desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>