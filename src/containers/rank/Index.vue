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
  <tab-container :active.sync="selected" class="list">
    <tab-container-item id="anchor">
      <ul>
        <li>
          <span>排名</span>
          <span>艺人</span>
          <span>魅力值</span>
        </li>
        <li v-for="n in 1000">{{n}}</li>
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
    data () {
      return {
        selected: 'anchor'
      }
    },
    methods: {
      getAnchor () {
        this.getAnchorRank({anchor_uni: 123456})
      }
    }
  }
</script>
<style scoped>
  .list {
    height: 300px;
    overflow: hidden;
  }
  .list:hover {
    overflow-y: scroll;
  }
  .list::-webkit-scrollbar {
    background: RGBA(72, 167, 242, .30);
    border-radius: 10px;
    width: 10px;
    height: 200px;
  }
  .list::-webkit-scrollbar-thumb {
    background: RGBA(72, 167, 242, 1);
    width: 8px;
    height: 20px;
    border-radius: 5px;
  }
</style>
