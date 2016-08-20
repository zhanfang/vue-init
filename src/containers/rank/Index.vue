<template>
  <header>
    <tabbar :selected.sync="selected">
      <tab-item id="anchor" >
        <h1 @click="getAnchor">艺人</h1>
      </tab-item>
      <tab-item id="fans">
        <h1>土豪</h1>
      </tab-item>
      <tab-item id="sociaty">
        <h1>公会</h1>
      </tab-item>
    </tabbar>
  </header>
  <tab-container :active.sync="selected" class="list scroll-list">
    <tab-container-item id="anchor">
      <ul>
        <li>
          <span>排名</span>
          <span>艺人</span>
          <span>魅力值</span>
        </li>
        <li v-for="(index, user) in anchor" v-tap="tapClick" track-by="$index">
          <span>{{index}}</span>
          <span>{{user.name}}</span>
        </li>
      </ul>
    </tab-container-item>
    <tab-container-item id="fans">
      <ul>
        <li>
          <span>排名</span>
          <span>土豪</span>
          <span>财富</span>
        </li>
        <li v-for="n in 10">{{n}}</li>
      </ul>
    </tab-container-item>
    <tab-container-item id="sociaty">
      <ul>
        <li>
          <span>排名</span>
          <span>公会</span>
          <span>热力值</span>
        </li>
        <li v-for="n in 10">{{n}}</li>
      </ul>
    </tab-container-item>
  </tab-container>
</template>
<script>
  import Tabbar from 'components/tabbar/tabbar'
  import TabItem from 'components/tabbar/tab-item'
  import TabContainer from 'components/tab-container/tab-container'
  import TabContainerItem from 'components/tab-container/tab-container-item'
  import { getAnchorRank } from 'store/actions/rank'

  export default {
    vuex: {
      getters: {
        anchor: ({rank}) => rank.anchor,
        fans: ({rank}) => rank.fans
      },
      actions: {
        getAnchorRank
      }
    },
    components: {
      Tabbar,
      TabItem,
      TabContainer,
      TabContainerItem
    },
    created () {
      this.getAnchorRank({anchor_uni: 123456})
    },
    data () {
      return {
        selected: 'anchor'
      }
    },
    methods: {
      getAnchor () {
        console.log('重新拉取anchor数据')
      },
      tapClick (){
        console.log('this is tapClick')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/rem.styl"
    ul{
      li{
        padding: px2rem(10);
        border-bottom: 1px solid;
      }
    }

</style>
