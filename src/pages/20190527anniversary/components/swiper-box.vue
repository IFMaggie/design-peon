<template>
  <div class="swiper-box">
    <swiper :options="swiperOption"
            ref="MySwiper"
            class="swiper-box__navigator">
      <swiper-slide class="swiper-box__navigator-item"
                    v-for="(slide,index) in list"
                    :key="index">
        <ul class="content flex"
            v-if="slide.figureList && slide.figureList.length">
          <li class="flex-1"
              v-for="(item,idx) in slide.figureList"
              :key="idx">
            <img v-if="item.picture"
                 v-lazy="item.picture">
            <div class="person">
              <h3>{{item.name}}</h3>
              <p class="toh">{{item.job}}</p>
            </div>
            <div class="other">
              <p>{{item.description}}</p>
              <span @click="goToDetail(item.type,item.id)">详情>></span>
            </div>
          </li>
        </ul>
      </swiper-slide>
    </swiper>

    <swiper :options="swiperOptionPaging"
            ref="swiperItem"
            class="swiper-box__paging">
      <swiper-slide class="swiper-box__paging-item"
                    v-for="(item,index) in list"
                    :key="index">
        <div class="content"
             @click="changeItemIndex(index)"
             :class="{'is-active':defaultIndex == index}">
          <ul class="picture flex"
              v-if="item.figureList && item.figureList.length">
            <li v-for="(person,idx) in item.figureList"
                :key="idx">
              <img v-if="person.headPicture"
                   v-lazy="person.headPicture">
            </li>
          </ul>
          <i class="circle"></i>
          <span class="year">{{item.year}}</span>
        </div>
      </swiper-slide>
    </swiper>

    <swiper :options="swiperNews"
            ref="newsSwiper"
            class="swiper-box__news">
      <swiper-slide v-for="(slide,index) in list"
                    :key="index">
        <div class="news"
             v-if="slide.news && slide.news.length">
          <div class="news-item"
               v-for="(item, idx) in slide.news"
               :key="idx"
               @click="goToDetail(item.type, item.id)">
            <img v-if="item.image"
                 v-lazy="item.image">
            <p class="toh">{{item.content}}</p>
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

  export default {
    props: {
      list: {
        type: Array
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data() {
      const _this = this;
      return {
        defaultIndex: 0,
        swiperOption: {
          on: {
            slideChangeTransitionStart() {
              const _index = this.activeIndex
              _this.defaultIndex = _index
            }
          }
        },
        swiperOptionPaging: {
          slidesPerView: 3,
          on: {
            slideChangeTransitionStart() {
              const _index = this.activeIndex
              _this.defaultIndex = _index
            }
          }
        },
        swiperNews: {}
      }
    },
    watch: {
      defaultIndex() {
        this.$refs.swiperItem.swiper.slideTo(this.defaultIndex, 1000, false)
        this.$refs.MySwiper.swiper.slideTo(this.defaultIndex, 1000, false)
        this.$refs.newsSwiper.swiper.slideTo(this.defaultIndex, 1000, false)
      }
    },
    methods: {
      changeItemIndex(index) {
        this.defaultIndex = index
      },
      goToDetail(type, id) {
        let _url = '/20190527anniversary/detail.html?type=' + type + '&id=' + id
        window.open(_url, '_blank')
      }
    },
    mounted() {
      this.$refs.swiperItem.swiper.slideTo(this.defaultIndex, 1000, false)
      this.$refs.MySwiper.swiper.slideTo(this.defaultIndex, 1000, false)
      this.$refs.newsSwiper.swiper.slideTo(this.defaultIndex, 1000, false)
    }
  }
</script>
<style lang="less">
  @import '~swiper/dist/css/swiper.css';

  .swiper-box {
    color: #fff;

    &__navigator {

      &-item {
        position: relative;
        padding: 0 20px;
        height: 416px;
        box-sizing: border-box;
      }

      .content {
        position: absolute;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 20px;
        height: 216px;
        box-sizing: border-box;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(104, 104, 104, .2) 100%);
        border-radius: 3px 3px 3px 0px;
        border: 1px solid;
        border-image: linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(168, 168, 168, .2)) 1 1;

        li {
          position: relative;
          width: 302px;

          img {
            position: absolute;
            top: -158px;
            left: 0;
            width: 216px;
            height: 238px;
            z-index: 1;
          }

          & + li {
            margin-left: 60px;
          }
        }
      }

      .person {
        position: relative;
        height: 80px;
        z-index: 2;

        h3 {
          font-size: 26px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 36px;
        }

        p {
          margin-top: 2px;
          font-size: 22px;
          font-weight: 300;
          color: rgba(255, 255, 255, .7);
          line-height: 32px;
        }
      }

      .other {
        position: relative;
        padding: 10px 0;
        background: url(../images/icon-line.png) no-repeat top left;
        background-size: 100% 1px;
        z-index: 2;

        p {
          position: relative;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 34px;

          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 60px;
            height: 60px;
            background: url(../images/icon-block.png) no-repeat;
            background-size: 100% auto;
          }
        }

        span {
          font-size: 22px;
          font-weight: 300;
          color: rgba(255, 255, 255, .7);
          line-height: 32px;
          cursor: pointer;
        }
      }
    }

    &__paging {
      margin-top: 38px;

      &-item {
        padding-top: 84px;
        height: 160px;
        background: url(../images/icon-sawtooth.png) no-repeat left top;
        background-size: 100% 1px;

        .content {
          position: relative;
          padding-top: 60px;
          width: 100%;
          height: 160px;
          background: url(../images/icon-sawtooth.png) no-repeat left top;
          background-size: 100% 30px;
          text-align: center;
          font-size: 48px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 58px;

          .picture {
            position: absolute;
            top: -84px;
            left: 50%;
            transform: translateX(-50%);

            li {
              transform-origin: bottom center;

              & + li {
                margin-left: -30px;
                transform: rotateZ(20deg);
              }
            }

            img {
              width: 60px;
              height: 60px;
              border-radius: 60px;
            }
          }

          .circle {
            position: absolute;
            top: -11px;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 24px;
            border-radius: 24px;
            background: rgba(255, 255, 255, .1);

            &:before {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              margin-left: -5px;
              margin-top: -5px;
              width: 10px;
              height: 10px;
              border-radius: 10px;
              background: rgba(255, 255, 255, 1);
            }
          }

          .year {
            display: inline-block;
            font-size: 48px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 58px;
          }

          &.is-active {
            font-size: 64px;
            line-height: 86px;

            .circle {
              top: -26px;
              left: 50%;
              transform: translateX(-50%);
              width: 54px;
              height: 56px;
              background: url(../images/icon-star.png) no-repeat center;
              background-size: 48px 50px;
            }

            .year {
              font-size: 74px;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              line-height: 76px;
            }
          }
        }
      }
    }

    &__news {
      margin-top: 30px;
      position: relative;
      height: 248px;

      .news {
        position: relative;
        margin: 0 auto;
        width: 440px;

        img {
          width: 440px;
          height: 248px;
        }

        p {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 20px 30px 14px;
          width: 100%;
          font-size: 26px;
          box-sizing: border-box;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 36px;
          background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);
        }
      }
    }
  }
</style>
