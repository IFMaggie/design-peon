<template>
  <div class="witness">
    <div class="witness-map">
      <ul class="witness-map__content">
        <li class="witness-map__content-item"
            v-for="(item,index) in proviceList"
            :key="index"
            :class="{'is-active': activeIndex == index}"
            @mouseover.stop="handleMouseOver(item,index)"
            @mouseleave.stop="handleMouseLeave(index)"
            @click="handleClickMap(item,index)">
          <div v-if="activeIndex == index"
               class="content">
            <span class="text"
                  v-if="!item.defaultLogo">
                <p class="number">{{item.provinceNumber}}</p>
                <p class="address">{{item.provinceName}}</p>
            </span>
            <img class="logo"
                 v-if="item.defaultLogo"
                 v-lazy="item.defaultLogo">
          </div>
        </li>
      </ul>
    </div>

    <div class="witness-organ">
      <div class="witness-organ__list"
           :style="{'backgroundImage': 'url('+ getBgImage +')'}">
        <h3 class="witness-organ__list-title">{{proviceList[showIndex].provinceName + ' '
          +proviceList[showIndex].provinceNumber}}</h3>
        <ul class="clearfix">
          <li v-for="(item,index) in  proviceList[showIndex].brandList"
              :key="index">
            <img v-if="item.brandLogo" v-lazy="item.brandLogo">
            <p class="toh">{{item.brandName}}</p>
          </li>
        </ul>
      </div>
      <div class="witness-organ__description">
        <h3 class="witness-organ__description-title toh">{{proviceList[showIndex].brandList[0].title}}</h3>
        <p class="witness-organ__description-sub toh">{{proviceList[showIndex].brandList[0].subTitle}}</p>
        <p class="witness-organ__description-description">{{proviceList[showIndex].brandList[0].description}}</p>
        <span class="witness-organ__description-btn"
              @click="goToDetail">详情>></span>
      </div>
    </div>
  </div>
</template>
<script>
  import data from '../service/provinceData'

  export default {
    data() {
      return {
        proviceList: data.provinceData,
        activeIndex: 0,
        showIndex: 0,
        intervalMapAnimation: null
      }
    },
    computed: {
      getBgImage() {
        return this.proviceList[this.activeIndex].brandList && this.proviceList[this.activeIndex].brandList ? 'https://web-s3.alo7.com/website/assets/ade32adb-e9e4-4cc4-9f59-ce4c7faa2e20.png' : ''
      }
    },
    methods: {
      handleMouseOver(item, index) {
        this.activeIndex = index
        clearInterval(this.intervalMapAnimation)
      },
      handleMouseLeave() {
        this.intervalMapAnimation = setInterval(() => {
          this.activeIndex = this.activeIndex < this.proviceList.length - 1 ? this.activeIndex + 1 : 0
        }, 2000)
      },
      handleClickMap() {
        this.showIndex = this.activeIndex
      },
      goToDetail(){
        let _url = '/20190527anniversary-pc/detail.html?type=' + this.proviceList[this.showIndex].type + '&id=' + this.proviceList[this.showIndex].brandId
        window.open(_url, '_blank')
      }
    },
    mounted() {
      this.intervalMapAnimation = setInterval(() => {
        this.activeIndex = this.activeIndex < this.proviceList.length - 1 ? this.activeIndex + 1 : 0
      }, 2000)
    }
  }
</script>
<style lang="less" scoped>
  .witness {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000 url(https://web-s3.alo7.com/website/assets/a27f231d-54e5-43ab-bf0d-262545631dbb.png) no-repeat center;
    background-size: 100% 100%;

    &-map {
      position: absolute;
      left: 210px;
      top: 139px;
      width: 997px;
      height: 805px;
      background: url(https://web-s3.alo7.com/website/assets/5a96da24-7308-4bf7-86ac-b23b91df79f2.png) no-repeat;
      background-size: 100% auto;

      &__content {
        position: relative;
        width: 100%;
        height: 100%;

        &-item {
          position: absolute;
          right: 122px;
          top: 81px;
          width: 45px;
          height: 60px;
          background: url(../images/icon-map.png) no-repeat;
          background-size: 100% auto;
          cursor: pointer;

          .content {
            width: 45px;
            height: 45px;
          }

          .text {
            display: inline-block;
            padding: 10px;
            text-align: center;
            box-sizing: border-box;

            .number {
              font-size: 13px;
              font-weight: 600;
              line-height: 15px;
              color: rgba(255, 255, 255, 1);
            }

            .address {
              font-size: 8px;
              font-weight: 300;
              line-height: 12px;
              color: rgba(255, 255, 255, 1);
            }

          }

          .logo {
            display: block;
            width: 45px;
            height: 45px;
            border-radius: 45px;
          }

          &.is-active {
            background: url(../images/icon-map__active.png) no-repeat;
            background-size: 100% auto;
            transform: scale(1.9);
            transform-origin: bottom center;
            animation: boostMap 1s ease-in-out;
            -webkit-animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            -ms-animation-fill-mode: forwards;
            -o-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
          }

          &:nth-child(2) {
            right: 95px;
            top: 157px;
          }

          &:nth-child(3) {
            right: 223px;
            top: 275px;
          }

          &:nth-child(4) {
            right: 250px;
            top: 275px;
          }

          &:nth-child(5) {
            right: 176px;
            top: 334px;
          }

          &:nth-child(6) {
            right: 172px;
            top: 391px;
          }

          &:nth-child(7) {
            right: 122px;
            top: 434px;
          }

          &:nth-child(8) {
            right: 150px;
            top: 440px;
          }

          &:nth-child(9) {
            right: 138px;
            top: 509px;
          }

          &:nth-child(10) {
            right: 179px;
            top: 582px;
          }

          &:nth-child(11) {
            right: 270px;
            top: 650px;
          }

          &:nth-child(12) {
            right: 211px;
            top: 442px;
          }

          &:nth-child(13) {
            right: 270px;
            top: 392px;
          }

          &:nth-child(14) {
            right: 303px;
            top: 460px;
          }

          &:nth-child(15) {
            right: 354px;
            top: 364px;
          }

          &:nth-child(16) {
            right: 446px;
            top: 509px;
          }

          &:nth-child(17) {
            right: 492px;
            top: 448px;
          }
        }
      }

      &:before {
        content: '';
        position: absolute;
        left: -58px;
        bottom: 59px;
        width: 444px;
        height: 369px;
        background: url(../images/bg-star.png) no-repeat;
        background-size: 100% auto;
      }
    }

    &-organ {
      position: absolute;
      left: 1227px;
      top: 318px;

      &__list {
        padding: 14px 0;
        width: 394px;
        height: 203px;
        box-sizing: border-box;


        &-title {
          font-size: 20px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 29px;
          text-align: center;
        }

        ul {
          li {
            padding: 16px 15px;
            float: left;

            img {
              display: block;
              width: 68px;
              height: 68px;
              border-radius: 68px;
            }

            p {
              margin-top: 16px;
              width: 68px;
              font-size: 14px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 19px;
              text-align: center;
            }
          }
        }
      }

      &__description {
        margin-top: 40px;
        width: 394px;
        box-sizing: border-box;

        &-title {
          font-size: 40px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 62px;
        }

        &-sub {
          position: relative;
          margin-top: 20px;
          font-size: 26px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 40px;

          &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 65px;
            height: 62px;
            background: url(../images/icon-block.png) no-repeat;
            background-size: 100% auto;
          }
        }

        &-description {
          margin-top: 42px;
          font-size: 16px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        &-btn {
          display: inline-block;
          margin-top: 30px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 32px;
          cursor: pointer;
        }
      }
    }
  }

  @keyframes boostMap {
    0% {
      transform: scale(1.9);
      transform-origin: bottom center;
    }
    50% {
      transform: scale(1.5);
      transform-origin: bottom center;
    }
    100% {
      transform: scale(1.9);
      transform-origin: bottom center;
    }
  }
</style>
