<template>
  <div class="prospect">
    <ul class="prospect-list clearfix">
      <li class="prospect-list__item"
          v-for="(item,index) in prospectList"
          :key="index"
          :class="{'is-active': activeIndex== index}"
          @mouseover="handleMouseOver(index)">
        <div class="prospect-list__item-bg">

        </div>
        <div class="prospect-list__item-person">
          <i class="icon-circle"></i>
          <img class="picture"
               v-if="item.picture" v-lazy="item.picture">
          <div class="main">
            <h3>{{item.name}}</h3>
            <p>{{item.job}}</p>
          </div>
          <div class="other">
            <h3 class="title" v-if="activeIndex != index">{{item.articleTitle}}</h3>
            <div class="content"
                 v-if="activeIndex == index && item.articleContent && item.articleContent.length">
              <p v-for="(article, idx) in item.articleContent"
                 :key="idx">
                {{article}}
              </p>
            </div>
            <span class="see-detail"
                  v-if="activeIndex == index"
                  @click="goToDetail">详情>></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import data from '../service/prospectData'

  export default {
    data() {
      const _prospectList = data.prospectData
      return {
        activeIndex: 0,
        prospectList: _prospectList
      }
    },
    methods: {
      handleMouseOver(index) {
        this.activeIndex = index
      },
      goToDetail(){
        let _url = '/20190527anniversary-pc/detail.html?type=' + this.prospectList[this.activeIndex].type + '&id=' + this.prospectList[this.activeIndex].id
        window.open(_url, '_blank')
      }
    }
  }
</script>
<style lang="less">
  .prospect {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    background: #000 url(https://web-s3.alo7.com/website/assets/a27f231d-54e5-43ab-bf0d-262545631dbb.png) no-repeat;
    background-size: 100% 100%;

    &-list {
      position: absolute;
      top: 240px;
      left: 50%;
      transform: translateX(-50%);
      width: 1315px;

      &__item {
        position: relative;
        width: 552px;
        float: left;
        cursor: pointer;

        &-bg {
          position: absolute;
          top: 296px;
          left: -120px;
          width: 403px;
          height: 324px;
          background: url(../images/bg-star.png) no-repeat bottom left;
          background-size: 403px 324px;
        }

        &-person {
          position: relative;
          width: 100%;

          .icon-circle {
            display: none;
          }
        }

        .picture {
          position: relative;
          margin: 0 auto;
          width: 371px;
          height: 412px;
          z-index: 2;
        }

        .main {
          position: absolute;
          top: 286px;
          left: 0;
          padding: 0 22px 7px;
          width: 100%;
          height: 126px;
          box-sizing: border-box;
          background: url(../images/bg-line.png) no-repeat left bottom;
          background-size: 100% 2px;
          z-index: 2;

          h3 {
            font-size: 54px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            line-height: 75px;
          }

          p {
            margin-top: 8px;
            font-size: 24px;
            font-weight: 400;
            color: rgba(255, 255, 255, .7);
            line-height: 33px;
          }
        }

        .other {
          padding-top: 46px;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            right: 45px;
            top: 23px;
            width: 65px;
            height: 62px;
            background: url(../images/icon-block.png) no-repeat;
            background-size: 100% auto;
          }

          .title {
            position: relative;
            font-size: 34px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 49px;
          }

          .content {
            max-height: 326px;

            p {
              font-size: 22px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 32px;
              background: linear-gradient(360deg, rgba(255, 255, 255, .2) 30%, rgba(255, 242, 242, .9) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;

              & + p {
                margin-top: 20px;
              }
            }
          }

          .see-detail {
            display: inline-block;
            margin-top: 20px;
            font-size: 22px;
            font-weight: 300;
            color: rgba(255, 255, 255, .7);
            line-height: 32px;
          }
        }

        &.is-active {
          .prospect-list__item-person {
            transform: scale(1.14);
            transform-origin: left center;
          }

          .icon-circle {
            display: block;
            position: absolute;
            right: 0;
            top: 135px;
            width: 276px;
            height: 276px;
            background: url(https://web-s3.alo7.com/website/assets/691d1b6b-1bde-47ed-8b29-fcbe82617adc.png) no-repeat;
            background-size: 100% 100%;
          }
        }

        & + li {
          margin-left: 200px;
        }
      }
    }
  }
</style>
