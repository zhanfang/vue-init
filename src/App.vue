<template>
  <div class="app">
    <main>
      <header>
        <tabbar :selected.sync="selected">
          <tab-item id="task">
            赛场
          </tab-item>
          <tab-item id="reward">
            奖励
          </tab-item>
          <tab-item id="rank">
            榜单
          </tab-item>
          <tab-item id="rule">
            规则
          </tab-item>
        </tabbar>
      </header>
      <router-view><router-view>
    </main>
  </div>
</template>
<script>
  import store from './vuex/store'
  import Tabbar from 'components/tabbar/tabbar'
  import TabItem from 'components/tabbar/tab-item'
  export default {
    store,
    components: {
      Tabbar,
      TabItem
    },
    data () {
      return {
        selected: this.$route.name
      }
    }
  }
</script>
<style lang="stylus">
  body
    background: transparent
    cursor: default
  .app
    position: relative
    width: 462px
    height: 458px
    margin: 0 auto
    
    background url('assets/img/bg.png')
  main
    padding-top: 60px
    header
      padding: 0 10px
    
</style>
