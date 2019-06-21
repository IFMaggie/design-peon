<template>
  <div class="detail" v-if="detail">
    <i class="detail-logo"></i>

    <div class="detail-person">
      <img v-if="detail.person.picture"
           v-lazy="detail.person.picture">
      <div class="text">
        <h3>{{detail.person.name}}</h3>
        <p>{{detail.person.job}}</p>
      </div>
    </div>

    <div class="detail-content">
      <h3 class="detail-content__title" v-if="detail.title">{{detail.title}}</h3>
      <div class="detail-content__container" v-if="detail.detailList && detail.detailList.length">
        <div class="detail-content__container-item"
             v-for="(item,index) in detail.detailList"
             :key="index">
          <h3 class="title">{{item.title}}</h3>
          <p class="sub-title">{{item.subTitle}}</p>
          <div class="description" v-if="item.descriptionContent && item.descriptionContent.length">
            <p v-for="(desc,idx) in item.descriptionContent"
               :key="idx">
              {{desc}}
            </p>
          </div>
          <div class="picture" v-if="item.pictureContent && item.pictureContent.length">
            <img v-for="(pic,idx) in item.pictureContent"
                 :key="idx"
                 v-lazy="pic">
          </div>
        </div>
      </div>
    </div>
    <div class="detail-fifteen flex">
      <i class="detail-fifteen__line flex-1"></i>
      <img class="detail-fifteen__picture"
           src="./images/logo-15.png">
      <i class="detail-fifteen__line flex-1"></i>
    </div>
  </div>
</template>
<script>
  import data from '@pages/20190527anniversary-pc/service/detail'
  import urlSearch from '@lib/url_search'

  export default {
    data() {
      return {
        detailType: '',
        detailId: '',
        detail: null
      }
    },
    mounted() {
      let _this = this;
      _this.detailType = urlSearch.search('type')
      _this.detailId = +urlSearch.search('id')
      data.detail.forEach((item) => {
        if (item.type == _this.detailType) {
          item.content.forEach((list) => {
            _this.detail = list.id == _this.detailId ? list : null
          })
        }
      })
    }
  }
</script>
<style lang="less">
  body {
    background-imgae: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  }

  .detail {
    position: relative;
    width: 100%;
    min-height: 1334px;
    padding-bottom: 70px;
    background-image: url(https://web-s3.alo7.com/website/assets/dc9c6a98-9d58-4823-8393-3855318c08ca.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #000;
    background-size: 100% 1334px;

    &-logo {
      display: inline-block;
      margin: 104px 0 0 44px;
      width: 206px;
      height: 106px;
      background: url(./images/icon-logo.png) no-repeat;
      background-size: 100% auto;
    }

    &-person {
      position: absolute;
      top: 46px;
      left: 0;
      width: 100%;

      img {
        position: absolute;
        right: 90px;
        width: 210px;
        height: 214px;
      }

      .text {
        position: absolute;
        top: 142px;
        right: 42px;
        text-align: right;

        h3 {
          font-size: 38px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 52px;
        }

        p {
          margin-top: 2px;
          font-size: 22px;
          font-weight: 300;
          color: rgba(255, 255, 255, .7);
          line-height: 30px;
        }
      }
    }

    &-content {
      position: relative;
      margin: 116px auto 0;
      padding: 70px 22px 32px;
      width: 710px;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(104, 104, 104, .2) 100%);
      border-radius: 6px;
      border: 1px solid;
      border-image: linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(168, 168, 168, .2)) 1 1;
      box-sizing: border-box;

      &__title {
        position: relative;
        padding-left: 44px;
        font-size: 42px;
        font-weight: 600;
        color: rgba(216, 216, 216, 1);
        line-height: 58px;
        -webkit-background-clip: text;

        &:before {
          content: '';
          position: absolute;
          top: -40px;
          left: 0;
          width: 116px;
          height: 116px;
          background: url(./images/icon-block.png) no-repeat;
          background-size: 100% auto;
        }
      }

      &__container {
        margin-top: 78px;

        &-item {
          & + .detail-content__container-item {
            margin-top: 40px;
          }
        }

        .title {
          margin-bottom: 40px;
          font-size: 34px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 44px;
        }

        .sub-title {
          font-size: 26px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 44px;
        }

        .description {
          margin-bottom: 40px;

          p {
            font-size: 26px;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            line-height: 44px;

            & + p {
              margin-top: 40px;
            }
          }
        }

        .picture {

          img + img {
            margin-top: 30px;
          }
        }
      }

      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 528px;
        height: 186px;
        background: url(./images/bg-border.png) no-repeat;
        background-size: 100% auto;
      }
    }

    &-fifteen {
      margin-top: 58px;
      align-items: center;

      &__line {
        height: 2px;
        background: rgba(151, 151, 151, .3);
      }

      &__picture {
        margin: 0 20px;
        width: 188px;
        height: 76px;
      }
    }
  }
</style>
