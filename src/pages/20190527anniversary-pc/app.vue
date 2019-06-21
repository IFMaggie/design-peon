<template>
  <div class="home">
    <tab :tab-list="tabList"
         :active-index="activeIndex"
         @tab="changeTab"/>

    <div class="default-logo" v-if="activeIndex != 0"></div>

    <div class="celebration" v-if="activeIndex != 0"></div>

    <full-page ref="fullpage" :options="options" id="fullpage" class="fullpage">
      <!-- 首页 -->
      <div class="section">
        <home-page :change-index="changeActiveIndex"/>
      </div>

      <!-- 薪火 -->
      <div class="section">
        <salary/>
      </div>

      <!-- 见证 -->
      <div class="section">
        <witness/>
      </div>

      <!-- 远瞻 -->
      <div class="section">
        <prospect/>
      </div>

      <!-- 未来 -->
      <div class="section">
        <future/>
      </div>
    </full-page>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueFullPage from 'vue-fullpage.js'

  Vue.use(VueFullPage)

  import tab from './components/tab'
  import homePage from './components/home-page'
  import salary from './components/salary'
  import witness from './components/witness'
  import future from './components/future'
  import prospect from './components/prospect'

  export default {
    data() {
      let _this = this;
      return {
        activeIndex: 0,
        tabList: [
          {
            text: '首页'
          },
          {
            text: '薪火'
          },
          {
            text: '见证'
          },
          {
            text: '远瞻'
          },
          {
            text: '未来'
          }
        ],
        options: {
          afterLoad: function (origin, destination, direction) {
            _this.activeIndex = destination.index
          }
        }
      };
    },
    computed: {
      changeActiveIndex() {
        return this.activeIndex
      }
    },
    components: {
      tab,
      homePage,
      salary,
      witness,
      future,
      prospect
    },
    methods: {
      changeTab(data) {
        this.activeIndex = data.index
        this.$refs.fullpage.api.moveTo(this.activeIndex + 1, 0);
      }
    },
    mounted() {

    }
  };
</script>
<style lang="less">
  html, body {
    width: 100%;
    height: 100%;
  }

  .home {
    position: fixed;
    width: 100%;
    height: 100%;

    .default-logo {
      position: absolute;
      top: 67px;
      left: 115px;
      width: 206px;
      height: 106px;
      background: url(./images/icon-logo.png) no-repeat;
      background-size: 100% auto;
      z-index: 2;
    }

    .celebration {
      position: absolute;
      bottom: 95px;
      left: 115px;
      width: 200px;
      height: 22px;
      background: url(./images/icon-year.png) no-repeat;
      background-size: 100% auto;
      z-index: 2;
    }

    .fullpage {
      height: 100%;
    }
  }

</style>
