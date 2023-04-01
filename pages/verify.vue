<template>
  <div class="center">
    <p>logging you in...</p>
  </div>
</template>
<script>
export default {
  auth: false,
  layout: "blank",
  created() {
    if(this.$route.query.token == "" || this.$route.query.token == null){
        this.$router.replace('404')
    }
    this.$auth.setUserToken(this.$route.query.token)
    //.then(() => this.$toast.success('User set!'))
      .then(() => this.$auth.fetchUser())
      .then(() => {
        this.$router.replace('/')
      })
  },
};
</script>
<style scoped>
.center {
  height: 95vh;
  position: relative;
}

.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>