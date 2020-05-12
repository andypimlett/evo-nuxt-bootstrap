<template>
  <div class="rte">
    <span v-html="content"></span>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
