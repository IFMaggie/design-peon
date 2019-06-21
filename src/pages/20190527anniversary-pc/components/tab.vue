<template>
  <div class="tab">
    <span class="tab-title"
          v-if="getTitle">{{getTitle}}</span>
    <ul class="tab-content">
      <li v-for="(tab, index) in tabList"
          :key="index"
          :class="{'is-active': activeIndex == index}"
          @click="handleClickTab(tab ,index)">
        {{tab.text}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      activeIndex: {
        type: Number
      },
      tabList: {
        type: Array
      }
    },
    computed:{
      getTitle(){
       return this.activeIndex!=0 && this.tabList[this.activeIndex] ? this.tabList[this.activeIndex].text : ''
      }
    },
    methods: {
      handleClickTab(tab, index) {
        let _data = {
          text: tab.text,
          index
        }
        this.$emit('tab', _data)
      }
    }
  }
</script>
<style lang="less">
  .tab {
    position: fixed;
    right: 74px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;

    &-title {
      position: fixed;
      right: 0px;
      top: -149px;
      width: 110px;
      text-align: right;
      font-size: 47px;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 65px;
    }

    &-content {

      li {
        font-size: 18px;
        cfont-weight: 400;
        color: rgba(255, 255, 255, .5);
        line-height: 25px;
        text-align: center;
        cursor: pointer;

        & + li {
          margin-top: 31px;
        }

        &.is-active {
          font-size: 22px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
        }
      }
    }
  }
</style>
