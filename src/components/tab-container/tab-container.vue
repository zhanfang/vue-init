<template>
  <div class="tab-container"><slot></slot></div>
</template>
<script>
export default {
  name: 'tab-container',
  props: {
    active: ''
  }
}
</script>
