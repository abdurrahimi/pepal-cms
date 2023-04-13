export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      // cookie found
      try {
        // check data user login with cookie
        var token = this.$cookies.get('auth._token.laravelJWT')
        this.$axios.setHeader('Authorization', token)
        const { data } = await this.$axios.get('/api/v1/user')
        this.$auth.setUser(data)
      } catch (err) {
        auth = null
      }
    }
  },
  async post({ commit }) {
    if(this.$axios.defaults.baseURL == '/'){
      const response = await this.$axios.get('/api/blog/post')
      return response.data
    }else{
      const response = await this.$axios.get('/api/v1/blog/post')
      return response.data
    }
  },
  async details({ commit },param) {
    if(this.$axios.defaults.baseURL == '/'){
      const response = await this.$axios.post('/api/blog/detail/',param)
      return response.data
    }else{
      const response = await this.$axios.post('/api/v1/blog/detail/',param)
      return response.data
    }
  },
  async profile({ commit },param) {
    if(this.$axios.defaults.baseURL == '/'){
      const response = await this.$axios.get('/api/profile')
      return response.data
    }else{
      const response = await this.$axios.get('/api/v1/profile')
      return response.data
    }
  },
}
