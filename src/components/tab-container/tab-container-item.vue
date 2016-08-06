<template>
  <div v-show="id === $parent.active" class="tab-container-item"><slot></slot></div>
</template>
<script>
export default {
  name: 'tab-container-item',

  props: {
    id: ''
  }
}
</script>