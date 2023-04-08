<template>
  <div>
    <section class="ud-blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="ud-blog-details-content">
              <h2 class="ud-blog-details-title">
                {{ data.title }}
              </h2>
              <div class="ud-blog-overlay-content">
                <div class="ud-blog-author">
                  <span>Oleh Administrator</span>
                </div>
                <div class="ud-blog-meta">
                  <p class="date">
                    <i class="ri-calendar-line"></i>
                    <span>{{
                      new Date(data.date_published).toLocaleString()
                    }}</span>
                  </p>
                  <p class="view">
                    <i class="ri-eye-line"></i> <span>{{ data.views }}</span>
                  </p>
                </div>
              </div>
              <div class="mb-5 py-1 px-1">
                <img class="img-custom" :src="data.image" alt="blog details" />
              </div>
              <div class="content" v-html="data.content"></div>
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
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-01.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          The 8 best landing page builders, reviewed
                        </a>
                      </h5>
                      <p class="ud-article-author">Martin Fedous</p>
                    </div>
                  </li>
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-02.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          Create engaging online courses your student…
                        </a>
                      </h5>
                      <p class="ud-article-author">Glomiya Lucy</p>
                    </div>
                  </li>
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-03.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          The ultimate formula for launching online course
                        </a>
                      </h5>
                      <p class="ud-article-author">Andrio jeson</p>
                    </div>
                  </li>
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-04.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          50 Best web design tips & tricks that will help you
                        </a>
                      </h5>
                      <p class="ud-article-author">Samoyel Dayno</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="ud-articles-box">
                <h3 class="ud-articles-box-title">Categories</h3>
                <div class="widget-categories">
                  <ul>
                    <li>
                      <a href="news.html">Consultant <span>(23)</span></a>
                    </li>
                    <li>
                      <a href="news.html">Help <span>(24)</span></a>
                    </li>
                    <li>
                      <a href="news.html">Education <span>(11)</span></a>
                    </li>
                    <li>
                      <a href="news.html">Technology <span>(05)</span></a>
                    </li>
                    <li>
                      <a href="news.html">Business <span>(06)</span></a>
                    </li>
                    <li>
                      <a href="news.html">Events <span>(10)</span></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="ud-articles-box">
                <h3 class="ud-articles-box-title">Popular Articles</h3>
                <ul class="ud-articles-list">
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-01.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          The 8 best landing page builders, reviewed
                        </a>
                      </h5>
                      <p class="ud-article-author">Martin Fedous</p>
                    </div>
                  </li>
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-02.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          Create engaging online courses your student…
                        </a>
                      </h5>
                      <p class="ud-article-author">Glomiya Lucy</p>
                    </div>
                  </li>
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-03.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          The ultimate formula for launching online course
                        </a>
                      </h5>
                      <p class="ud-article-author">Andrio jeson</p>
                    </div>
                  </li>
                  <li>
                    <div class="ud-article-image">
                      <img
                        src="/images/blog/article-author-04.png"
                        alt="author"
                      />
                    </div>
                    <div class="ud-article-content">
                      <h5 class="ud-article-title">
                        <a href="javascript:void(0)">
                          50 Best web design tips & tricks that will help you
                        </a>
                      </h5>
                      <p class="ud-article-author">Samoyel Dayno</p>
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
          <div class="col-lg-4 col-md-6">
            <div class="ud-single-blog">
              <div class="ud-blog-image">
                <a href="blog-details.php">
                  <img src="/images/blog/blog-01.jpg" alt="blog" />
                </a>
              </div>
              <div class="ud-blog-content">
                <span class="ud-blog-date">Dec 22, 2023</span>
                <h3 class="ud-blog-title">
                  <a href="blog-details.php">
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p class="ud-blog-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ud-single-blog">
              <div class="ud-blog-image">
                <a href="blog-details.php">
                  <img src="/images/blog/blog-02.jpg" alt="blog" />
                </a>
              </div>
              <div class="ud-blog-content">
                <span class="ud-blog-date">Dec 22, 2023</span>
                <h3 class="ud-blog-title">
                  <a href="blog-details.php">
                    How to earn more money as a wellness coach
                  </a>
                </h3>
                <p class="ud-blog-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ud-single-blog">
              <div class="ud-blog-image">
                <a href="blog-details.php">
                  <img src="/images/blog/blog-03.jpg" alt="blog" />
                </a>
              </div>
              <div class="ud-blog-content">
                <span class="ud-blog-date">Dec 22, 2023</span>
                <h3 class="ud-blog-title">
                  <a href="blog-details.php">
                    The no-fuss guide to upselling and cross selling
                  </a>
                </h3>
                <p class="ud-blog-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
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
    $axios.setBaseURL($config.baseURL);
    let { data } = await $axios.post(`/api/v1/blog/detail/`, {
      slug: route.params.slug,
    });
    return { data };
  },
};
</script>
<style scoped>
.content{
  text-align: justify;
  text-justify: inter-word;
}
.img-custom{
  width: -webkit-fill-available;
}
</style>