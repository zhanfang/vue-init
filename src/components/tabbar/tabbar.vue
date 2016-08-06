<template>
  <div class="at-tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      selected: ''
    }
  }
</script>
<style scoped>
  .at-tabbar{
    display: flex;
  }
</style>
