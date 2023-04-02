<template>
  <span v-if="status == 'Waiting'" class="badge bg-primary">Waiting</span>
  <span v-else-if="status == 'Pending'" class="badge bg-primary">Waiting</span>
  <span v-else-if="status == 'Canceled'" class="badge bg-danger">Canceled</span>
  <span v-else-if="status == 'Sent'" class="badge bg-danger">Canceled</span>
  <span v-else-if="status == 'Completed'" class="badge bg-success"
    >Completed</span
  >
  <span v-else-if="status == 'Processing'" class="badge bg-info"
    >Processing</span
  >
  <span v-else-if="status == 'Refunded'" class="badge bg-warning"
    >Refunded</span
  >
  <span v-else-if="status == 'Unconfirmed'" class="badge bg-muted"
    >Unconfirmed</span
  >
  <span v-else></span>
</template>
<script>
export default {
  props: ["status"],
};
</script>