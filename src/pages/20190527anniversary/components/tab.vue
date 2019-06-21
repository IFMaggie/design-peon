<template>
  <div class="tab">
    <ul class="tab-content">
      <li class="tab-content__item"
          v-for="(item,index) in tab"
          :key="index"
          :class="{'is-active':activeIndex == index}"
          @click="handleClickTab(index)">
          <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      tab: {
        type: Array
      },
      activeIndex: {
        type: Number
      }
    },
    methods: {
      handleClickTab(index) {
        this.$emit('tab', index)
      }
    }
  }
</script>
<style lang="less">
  .tab {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .95) 100%);
    z-index: 2;

    &-content {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      padding-right: 54px;

      &__item {
        text-align: right;

        p {
          color: rgba(255, 255, 255, .5);
          font-size: 32px;
          font-weight: 500;
          line-height: 44px;
        }

        &.is-active {
          background: linear-gradient(135deg, rgba(48, 35, 174, 1) 0%, rgba(200, 109, 215, 1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;

          p {
            font-size: 48px;
            line-height: 66px;
          }
        }

        & + li {
          margin-top: 68px;
        }
      }
    }
  }
</style>
