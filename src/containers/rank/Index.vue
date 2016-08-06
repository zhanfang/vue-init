<template>
  <header>
    <tabbar :selected.sync="selected">
      <tab-item id="anchor">
        艺人
      </tab-item>
      <tab-item id="fans">
        土豪
      </tab-item>
      <tab-item id="sociaty">
        公会
      </tab-item>
    </tabbar>
  </header>
  <tab-container :active.sync="selected">
    <tab-container-item id="anchor">
      <ul>
        <li>
          <span>排名</span>
          <span>艺人</span>
          <span>魅力值</span>
        </li>
        <li v-for="n in 10">{{n}}</li>
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

  export default {
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
    }
  }
</script>
