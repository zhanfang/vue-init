<template>
  <a class="at-tab-item" 
    @click="$parent.selected = id"
    :class="{ 'is-selected' : $parent.selected === id}"
    v-link="id">
    <div class="at-tab-item-label">
      <slot></slot>
    </div>
  </a>
</template>
<script>
  export default {
    name: 'tab-item',
    props: {
      id: ''
    }
  }
</script>
<style scoped>
  .at-tab-item{
    flex: 1;
  }
  .is-selected{
    background: #fff;
  }
</style>
