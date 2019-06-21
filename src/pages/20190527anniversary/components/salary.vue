<template>
  <div class="salary">
    <div class="salary-progress">
      <swiper-box :list="salaryList"/>
    </div>
  </div>
</template>
<script>

  import data from '@pages/20190527anniversary-pc/service/salaryList.js'

  import swiperBox from './swiper-box'

  export default {
    components: {
      swiperBox
    },
    data() {
      return {
        salaryList: data.salaryList
      }
    }
  }
</script>
<style lang="less">
  .salary {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(https://web-s3.alo7.com/website/assets/dc9c6a98-9d58-4823-8393-3855318c08ca.png) no-repeat;
    background-size: 100% 100%;

    &-progress {
      padding-top: 128px;
    }
  }
</style>
