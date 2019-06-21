<template>
  <div class="witness">
    <div class="witness-map">
      <ul class="witness-map__content">
        <li class="witness-map__content-item"
            v-for="(item,index) in witnessData"
            :class="{'is-active':activeIndex == index}"
            :key="index"
            @click="handleClickBalloon(index)">
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

      <div class="witness-map__tips" v-if="!showModel">
        <h3>{{witnessData[activeIndex].provinceName + ' ' + witnessData[activeIndex].provinceNumber}}</h3>
        <p>点击地图查看更多合作伙伴</p>
      </div>
    </div>

    <transition name="fade" v-if="showModel">
      <dialog-witness :brand="witnessData[activeIndex]"
                      @close="handleClickClosePop"
                      @detail="handleGoToDetail"/>
    </transition>

  </div>
</template>
<script>
  import data from '@pages/20190527anniversary-pc/service/provinceData.js'

  import dialogWitness from './ui-dialog_witness'

  export default {
    props: {
      changeIndex: {
        type: Number
      }
    },
    data() {
      const _witness = data.provinceData;
      return {
        showModel: false,
        activeIndex: 0,
        witnessData: _witness,
        intervalMapAnimation: null
      }
    },
    watch: {
      changeIndex() {
        if (this.changeIndex != 2) {
          this.showModel = false
        }
      }
    },
    components: {
      dialogWitness
    },
    methods: {
      handleClickBalloon(index) {
        this.activeIndex = index
        this.showModel = true

        clearInterval(this.intervalMapAnimation) // 暂停一下
      },
      handleClickClosePop() {
        let _this = this;
        _this.showModel = false
        _this.intervalMapAnimation = setInterval(() => {
          _this.activeIndex = _this.activeIndex < _this.witnessData.length - 1 ? _this.activeIndex + 1 : 0
        }, 2000)
      },
      handleGoToDetail(data) {
        this.showModel = false
        let _url = '/20190527anniversary/detail.html?type=' + data.type + '&id=' + data.id
        window.open(_url, '_blank')
      }
    },
    mounted() {
      const _this = this;
      _this.intervalMapAnimation = setInterval(() => {
        _this.activeIndex = _this.activeIndex < _this.witnessData.length - 1 ? _this.activeIndex + 1 : 0
      }, 2000)
    }
  }
</script>
<style lang="less">

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
    opacity: 0;
  }

  .witness {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 128px;
    box-sizing: border-box;
    background: url(https://web-s3.alo7.com/website/assets/dc9c6a98-9d58-4823-8393-3855318c08ca.png) no-repeat;
    background-size: 100% 100%;

    &-map {
      width: 100%;

      &__content {
        position: relative;
        width: 708px;
        height: 790px;
        background: url(https://web-s3.alo7.com/website/assets/0c153f60-8850-47ab-b160-eb0da83d76e6.png) no-repeat;
        background-size: 100% auto;

        &-item {
          position: absolute;
          right: 114px;
          top: 80px;
          width: 50px;
          height: 68px;
          background: url(../images/bg-balloon.png) no-repeat;
          background-size: 100% auto;
          cursor: pointer;
          z-index: 1;

          .content {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            box-sizing: border-box;

            .text {
              display: inline-block;
              padding: 8px 0;
              width: 100%;
              height: 100%;
              text-align: center;
              box-sizing: border-box;
            }

            .number {
              font-size: 15px;
              font-weight: 600;
              line-height: 18px;
              color: rgba(255, 255, 255, 1);
              transform: scale(.8);
              text-align: center;
              transform-origin: bottom center;
            }

            .address {
              margin-top: 1px;
              font-size: 10px;
              font-weight: 300;
              line-height: 12px;
              color: rgba(255, 255, 255, 1);
              text-align: center;
              transform: scale(.8);
              transform-origin: bottom center;
            }
          }

          .logo {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50px;
          }

          &:nth-child(2) {
            right: 88px;
            top: 154px;
            z-index: 2;
          }

          &:nth-child(3) {
            right: 214px;
            top: 270px;
            z-index: 3;
          }

          &:nth-child(4) {
            right: 240px;
            top: 260px;
            z-index: 4;
          }

          &:nth-child(5) {
            right: 168px;
            top: 328px;
            z-index: 5;
          }

          &:nth-child(6) {
            right: 164px;
            top: 384px;
            z-index: 6;
          }

          &:nth-child(7) {
            right: 114px;
            top: 426px;
            z-index: 7;
          }

          &:nth-child(8) {
            right: 134px;
            top: 426px;
            z-index: 8;
          }

          &:nth-child(9) {
            right: 130px;
            top: 500px;
            z-index: 9;
          }

          &:nth-child(10) {
            right: 170px;
            top: 572px;
            z-index: 10;
          }

          &:nth-child(11) {
            right: 272px;
            top: 634px;
            z-index: 11;
          }

          &:nth-child(12) {
            right: 202px;
            top: 434px;
            z-index: 12;
          }

          &:nth-child(13) {
            right: 260px;
            top: 384px;
            z-index: 13;
          }

          &:nth-child(14) {
            right: 292px;
            top: 452px;
            z-index: 14;
          }

          &:nth-child(15) {
            right: 342px;
            top: 358px;
            z-index: 15;
          }

          &:nth-child(16) {
            right: 452px;
            top: 500px;
            z-index: 16;
          }

          &:nth-child(17) {
            right: 478px;
            top: 440px;
            z-index: 17;
          }

          &.is-active {
            background: url(../images/bg-balloon-active.png) no-repeat;
            background-size: 100% auto;
            transform: scale(1.6);
            transform-origin: bottom center;
            animation: boostMap 1s ease-in-out;
            -webkit-animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            -ms-animation-fill-mode: forwards;
            -o-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
          }
        }
      }

      &__tips {
        padding: 0 58px;
        margin-top: 26px;

        h3 {
          font-size: 44px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 60px;
        }

        p {
          margin-top: 24px;
          font-size: 28px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 40px;
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
