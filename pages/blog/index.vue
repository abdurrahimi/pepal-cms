<template>
  <section class="ud-blog-grids">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="(item, key) in post.data"
          :key="key"
        >
          <div class="ud-single-blog">
            <div class="ud-blog-image">
              <nuxt-link :to="'/blog/detail/' + item.slug">
                <img :src="item.image" alt="blog" style="max-height: 234px" />
              </nuxt-link>
            </div>
            <div class="ud-blog-content">
              <span class="ud-blog-date">{{ new Date(item.created_at).toLocaleDateString() }}</span>
              <h3 class="ud-blog-title">
                <nuxt-link :to="'/blog/detail/' + item.slug">
                  {{ item.title }}
                </nuxt-link>
              </h3>
              <p
                class="ud-blog-desc"
                v-html="
                  item.content.replaceAll(/<\/?[^>]+(>|$)/gi, '').slice(0, 200)
                "
              ></p>
            </div>
          </div>
        </div>
        <div class="">
          <ul class="pagination">
            <li v-for="item,key in post.links" :key="key" :class="!item.active? 'icon' : ''">
              <a href="#" @click="item.active ? loadNewData(item.label) : ''"><span v-html="item.label"></span></a>
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
  auth: false,
  async asyncData({ store }) {
    const post = await store.dispatch('post')
    return { post };
  },
  mounted() {
  },
  methods:{
    loadNewData(page){
      this.$axios.get('/api/blog/post?page='+page).then(res => {
        this.post = res.data
      })
    }
  }
};
</script>
<style scoped>
.ud-blog-desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
