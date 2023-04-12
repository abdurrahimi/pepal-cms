<template>
  <div>
    <section class="ud-blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="ud-blog-details-content">
              <h2 class="ud-blog-details-title">
                {{ data.body.title }}
              </h2>
              <div class="ud-blog-overlay-content">
                <div class="ud-blog-author">
                  <span>Oleh Administrator</span>
                </div>
                <div class="ud-blog-meta">
                  <p class="date">
                    <i class="ri-calendar-line"></i>
                    <span>{{
                      new Date(data.body.date_published).toLocaleString()
                    }}</span>
                  </p>
                  <p class="view">
                    <i class="ri-eye-line"></i>
                    <span>{{ data.body.views }}</span>
                  </p>
                </div>
              </div>
              <div class="mb-5 py-1 px-1">
                <img
                  class="img-custom"
                  :src="data.body.image"
                  alt="blog details"
                />
              </div>
              <div class="content" v-html="data.body.content"></div>
              <div class="ud-blog-details-action mt-2">
                <ul class="ud-blog-tags">
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Info</a>
                  </li>
                </ul>
                <div class="ud-blog-share">
                  <h6>Share This Post</h6>
                  <ul class="ud-blog-share-links">
                    <li>
                      <a href="javascript:void(0)" class="facebook">
                        <i class="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="twitter">
                        <i class="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="linkedin">
                        <i class="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="ud-blog-sidebar">
              <div class="ud-articles-box">
                <h3 class="ud-articles-box-title">Search</h3>
                <div class="search_widget">
                  <form action="#">
                    <input type="text" placeholder="Search your keyword..." />
                    <button type="submit">
                      <i class="ri-search-line"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div class="ud-articles-box">
                <h3 class="ud-articles-box-title">Featured Articles</h3>
                <ul class="ud-articles-list">
                  <li v-for="(item, key) in data.featured" :key="key">
                    <div class="ud-article-image">
                      <img :src="item.image" :alt="item.image_alt" />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <nuxt-link :to="item.slug">
                          {{ item.title }}
                        </nuxt-link>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="ud-articles-box">
                <h3 class="ud-articles-box-title">Categories</h3>
                <div class="widget-categories">
                  <ul>
                    <li v-for="(cat, k) in data.categories" :key="k">
                      <nuxt-link
                        :to="
                          '/categories/' +
                          cat.category.category.toLowerCase().replace(' ', '-')
                        "
                        >{{ cat.category.category }}
                        <span>({{ cat.post_count }})</span></nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="ud-articles-box">
                <h3 class="ud-articles-box-title">Popular Articles</h3>
                <ul class="ud-articles-list">
                  <li v-for="(item, key) in data.popular" :key="key">
                    <div class="ud-article-image">
                      <img :src="item.image" :alt="item.image_alt" />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <nuxt-link :to="item.slug">
                          {{ item.title }}
                        </nuxt-link>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Blog Details End ====== -->
    <!-- ====== Blog Start ====== -->
    <section class="ud-blog-grids ud-related-articles">
      <div class="container">
        <div class="row col-lg-12">
          <div class="ud-related-title">
            <h2 class="ud-related-articles-title">Related Articles</h2>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="(item, key) in data.related"
            :key="key"
          >
            <div class="ud-single-blog">
              <div class="ud-blog-image">
                <a href="blog-details.php">
                  <img :src="item.image" :alt="item.image_alt" />
                </a>
              </div>
              <div class="ud-blog-content">
                <span class="ud-blog-date">{{
                  new Date(item.created_at).toLocaleDateString()
                }}</span>
                <h3 class="ud-blog-title">
                  <a href="blog-details.php">
                    {{ item.title }}
                  </a>
                </h3>
                <p
                  class="ud-blog-desc"
                  v-html="
                    item.content
                      .replaceAll(/<\/?[^>]+(>|$)/gi, '')
                      .slice(0, 200)
                  "
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "main",
  auth: false,
  async asyncData({ $axios, $config, route }) {
    //$axios.setBaseURL($config.baseURL);
    let { data } = await $axios.post(`/api/v1/blog/detail/`, {
      slug: route.params.slug,
    });
    return { data };
  },
};
</script>
<style scoped>
.content {
  text-align: justify;
  text-justify: inter-word;
}
.img-custom {
  width: -webkit-fill-available;
}

.ud-blog-desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
