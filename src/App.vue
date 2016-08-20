<template>
  <div class="app">
    <main>
      <header>
        <tabbar :selected.sync="selected">
          <tab-item id="task" link="true">
            赛场
          </tab-item>
          <tab-item id="reward" link="true">
            奖励
          </tab-item>
          <tab-item id="rank" link="true">
            榜单
          </tab-item>
          <tab-item id="rule" link="true">
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
        selected: this.$route.name || 'task'
      }
    },
    created () {
      console.log(this.$route)
    }
  }
</script>

<style lang="stylus">
  @import "~styles/common.styl"
</style>

<style lang="stylus" scoped>
  @import "~styles/rem.styl"
  main{
    padding-top: px2rem(30);
    header{
      padding: 0 10px;
    }
  }
  .app{
    .tab-item{
      background: #000;
    }
  }
    
</style>
