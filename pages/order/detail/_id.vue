<template>
  <div v-if="$auth.user.role!='admin'">
    <OrderCustomer :data="data"/>
  </div>
  <OrderAdmin :data="data" @getDetail="getDetail()" v-else/>
</template>
<script>
export default {
  async asyncData({$axios,$config, route}){
    $axios.setBaseURL($config.baseURL);
    const { data }  = await $axios.get(`/api/v1/order/${route.params.id}`)
    return { data }
  }
}
</script>