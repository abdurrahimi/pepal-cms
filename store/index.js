export const actions = {
    async nuxtServerInit ({ commit }, { req }) {
      let auth = null
      if (req.headers.cookie) {
        // cookie found
        try {
          // check data user login with cookie
          var token = this.$cookies.get('auth._token.laravelJWT')
          this.$axios.setHeader('Authorization',token)
          const { data } = await this.$axios.get('/api/v1/user')
          this.$auth.setUser(data)
        } catch (err) {
          auth = null
        }
      }
    },
  }