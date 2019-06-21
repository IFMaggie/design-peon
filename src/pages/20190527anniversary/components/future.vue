<template>
  <div class="future">

    <div class="future-person">
      <div class="picture">
        <img v-if="singlePerson.picture"
             v-lazy="singlePerson.picture">
      </div>
      <div class="main">
        <div class="person">
          <h3>{{singlePerson.name}}</h3>
          <p>{{singlePerson.job}}</p>
        </div>
        <div class="other">
          <p class="toh">{{singlePerson.articleTitle}}</p>
          <span @click="goToDetail">详情>></span>
        </div>
      </div>
    </div>

    <swiper :options="swiperOptionPaging"
            ref="swiperItem"
            class="future-list">
      <swiper-slide class="future-list__item"
                    v-for="(item,index) in list"
                    :key="index">
        <div class="item"
             @click="changeItemIndex(index)"
             :class="{'is-active':defaultIndex == index}">
          <img v-if="item.picture"
               v-lazy="item.picture"
               class="picture">
          <div class="content flex">
            <i class="icon-line"></i>
            <div class="other flex-1">
              <h3 class="name toh">{{item.name}}</h3>
              <p class="job toh">{{item.job}}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  Vue.use(VueAwesomeSwiper, /* { default global options } */)
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  import data from '@pages/20190527anniversary-pc/service/futureData'

  export default {
    data() {
      const _this = this;
      const _list = data.futureData
      return {
        list: _list,
        defaultIndex: 0,
        swiperOptionPaging: {
          slidesPerView: 3.2,
          // loopedSlides: 3.2,
          // loop: true,
          on: {
            slideChangeTransitionStart() {
              const _index = this.activeIndex
              _this.defaultIndex = _index
            }
          }
        },
      }
    },
    computed: {
      singlePerson() {
        return this.list[this.defaultIndex]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      changeItemIndex(index) {
        this.defaultIndex = index
      },
      goToDetail() {
        let _url = '/20190527anniversary/detail.html?type=' + this.singlePerson.type + '&id=' + this.singlePerson.id
        window.open(_url, '_blank')
      }
    }
  }
</script>
<style lang="less">
  @import '~swiper/dist/css/swiper.css';

  .future {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 412px;
    box-sizing: border-box;
    background: url(https://web-s3.alo7.com/website/assets/dc9c6a98-9d58-4823-8393-3855318c08ca.png) no-repeat;
    background-size: 100% 100%;

    &-person {
      position: relative;
      margin: 0 auto ;
      padding: 114px 10px 24px 38px;
      width: 692px;
      height: 394px;
      box-sizing: border-box;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(104, 104, 104, .2) 100%);
      border-radius: 6px;
      border: 1px solid;
      border-image: linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(168, 168, 168, .2)) 1 1;

      .picture {
        position: absolute;
        top: -205px;
        left: 78px;
        width: 436px;
        height: 468px;
        z-index: 1;
      }

      .main {
        position: relative;
        z-index: 99;
      }

      .person {
        position: relative;
        padding-bottom: 12px;
        background: url(../images/icon-long-line.png) no-repeat left bottom;
        background-size: 100% 4px;
        z-index: 2;

        h3 {
          font-size: 52px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 72px;
        }

        p {
          font-size: 26px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 36px;
        }
      }

      .other {
        padding-top: 32px;

        p {
          position: relative;
          font-size: 42px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 58px;

          &:after {
            content: '';
            position: absolute;
            right: 0;
            top: -20px;
            width: 88px;
            height: 88px;
            background: url(../images/icon-block.png) no-repeat;
            background-size: 100% auto;
          }
        }

        span {
          margin-top: 10px;
          font-size: 24px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 34px;
          cursor: pointer;
        }
      }

      &:before {
        content: '';
        position: absolute;
        left: -30px;
        top: 22px;
        width: 370px;
        height: 370px;
        background: url(../images/bg-star.png) no-repeat;
        background-size: 100% auto;
        z-index: 3;
      }
    }

    &-list {
      margin-top: 88px;

      &__item {
        position: relative;
        width: 220px;
        height: 256px;

        .item {
          position: relative;
          width: 100%;
          height: 100%;

          &:before {
            content: '';
            position: absolute;
            top: 0px;
            left: 0;
            width: 220px;
            height: 256px;
            background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);
            opacity: .9;
            z-index: 99;
          }

          &.is-active {
            &:before {
              display: none;
            }
          }
        }

        .picture {
          position: absolute;
          top: 0;
          left: 24px;
          width: 170px;
          height: 182px;
          z-index: 2;
        }

        .content {
          position: absolute;
          top: 96px;
          padding: 52px 0;
          width: 100%;
          box-sizing: border-box;
          background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(104, 104, 104, .2) 100%)
        }

        .icon-line {
          margin-right: 14px;
          width: 4px;
          height: 62px;
          background: url(../images/icon-line-prospect.png) no-repeat;
          background-size: 100% auto;
        }

        .other {
          padding-right: 2px;
          width: 0;
          z-index: 3;
        }

        .name {
          font-size: 22px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 32px;
        }

        .job {
          font-size: 18px;
          font-weight: 300;
          color: rgba(255, 255, 255, .5);
          line-height: 26px;
        }
      }
    }
  }
</style>
