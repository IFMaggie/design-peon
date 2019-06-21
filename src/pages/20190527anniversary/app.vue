<template>
  <div class="anniversary">

    <span class="anniversary-logo" v-if="activeIndex > 0"></span>

    <div class="anniversary-title">
      <h3 class="anniversary-title__text"
          v-if="tabList[activeIndex].text">{{tabList[activeIndex].text}}</h3>
    </div>

    <span class="anniversary-menu"
          :class="{'is-open': openTab}"
          @click="openTab = !openTab"></span>

    <transition name="fade">
      <tab v-if="openTab"
           :tab="tabList"
           :active-index="activeIndex"
           @tab="changeTab"/>
    </transition>

    <full-page ref="fullpage"
               :options="options"
               id="fullpage"
               class="fullpage">
      <div class="section">
        <home-page :change-index="changeActiveIndex"/>
      </div>

      <div class="section">
        <salary/>
      </div>

      <div class="section">
        <witness :change-index="changeActiveIndex"/>
      </div>

      <div class="section">
        <prospect/>
      </div>

      <div class="section">
        <future/>
      </div>
    </full-page>

    <span class="anniversary-arrow"
          v-if="activeIndex < 4"
          @click="changePage"></span>

  </div>
</template>
<script>
  import Vue from 'vue'
  // import VueFullPage from 'fullpage-vue'
  import VueFullPage from 'vue-fullpage.js'
  import {Popup} from 'mint-ui';

  Vue.component(Popup.name, Popup);
  Vue.use(VueFullPage)

  import tab from './components/tab'
  import homePage from './components/home-page'
  import salary from './components/salary'
  import witness from './components/witness'
  import prospect from './components/prospect'
  import future from './components/future'

  export default {
    data() {
      const _this = this;
      return {
        openTab: false,
        activeIndex: 0,
        tabList: [
          {
            text: '首页',
            englishName: 'HOME'
          },
          {
            text: '薪火',
            englishName: 'SALARY'
          },
          {
            text: '见证',
            englishName: 'WITNESS'
          },
          {
            text: '远瞻',
            englishName: 'PROSPECT'
          },
          {
            text: '未来',
            englishName: 'FUTURE'
          }
        ],
        options: {
          afterLoad: function (origin, destination, direction) {
            _this.activeIndex = destination.index
          }
        }
      }
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
      prospect,
      future
    },
    methods: {
      changeTab(index) {
        this.openTab = false
        this.activeIndex = index
        this.$refs.fullpage.api.moveTo(this.activeIndex + 1, 0);
      },
      changePage() {
        this.$refs.fullpage.api.moveSectionDown();
      }
    }
  }
</script>
<style lang="less">

  html, body {
    width: 100%;
    height: 100%;
  }

  .anniversary {
    position: fixed;
    width: 100%;
    height: 100%;

    &-logo {
      position: absolute;
      top: 30px;
      left: 42px;
      width: 146px;
      height: 88px;
      background: url(./images/icon-logo.png) no-repeat center;
      background-size: 140px 58px;
      z-index: 2;
    }

    &-title {
      position: absolute;
      top: 16px;
      left: 226px;
      width: 412px;
      height: 106px;
      z-index: 2;

      &__text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 106px;
        text-align: center;
        font-size: 44px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 106px;
      }
    }

    &-menu {
      position: absolute;
      top: 50px;
      right: 40px;
      display: inline-block;
      width: 44px;
      height: 36px;
      background: url(./images/icon-menu.png) no-repeat;
      background-size: 100% auto;
      cursor: pointer;
      z-index: 3;

      &.is-open {
        width: 40px;
        height: 40px;
        background: url(./images/icon-cross.png) no-repeat;
        background-size: 100% auto;
      }
    }

    &-arrow {
      position: absolute;
      bottom: 44px;
      left: 50%;
      transform: translateX(-50%);
      width: 48px;
      height: 48px;
      background: url(./images/icon-arrow.png) no-repeat;
      background-size: 100% auto;
      animation: ArrowUpAndDown 1.5s infinite linear;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
    opacity: 0;
  }

  @keyframes ArrowUpAndDown {
    0% {
      bottom: 44px;
    }

    25% {
      bottom: 50px;
    }

    50% {
      bottom: 55px;
    }
    75% {
      bottom: 50px;
    }
    100% {
      bottom: 44px;
    }
  }

</style>
