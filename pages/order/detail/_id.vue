<template>
  <div v-if="$auth.user.role!='admin'">
    <OrderCustomer :data="data"/>
  </div>
  <OrderAdmin :data="data" @getDetail="getDetail()" v-else/>
</template>
<script>
export default {
  data(){
    return{
      data:{}
    }
  },
  mounted(){
    this.getDetail()
  },
  methods: {
    async getDetail(){
      const { data } = await this.$axios.get(`/api/order/${this.$route.params.id}`)
      this.data = data
    }
  }
}
</script>