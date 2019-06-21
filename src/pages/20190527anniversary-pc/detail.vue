<template>
  <div class="detail" v-if="detail">
    <div class="detail-content">
      <span class="detail-content__logo"/>
      <div class="detail-content__container">
        <h3 class="detail-content__container-title">{{detail.title}}</h3>
        <div class="detail-content__container-person">
          <img class="picture"
               v-if="detail.person.picture"
               v-lazy="detail.person.picture">
          <div class="other">
            <h3 class="name">{{detail.person.name}}</h3>
            <p class="job">{{detail.person.job}}</p>
          </div>
        </div>
        <div class="detail-content__container-content">
          <div class="item"
               v-for="(item,index) in detail.detailList"
               :key="index">
            <h3 class="title">{{item.title}}</h3>
            <p class="sub-title">{{item.subTitle}}</p>
            <div class="description">
              <p v-for="(desc,idx) in item.descriptionContent"
                 :key="idx">
                {{desc}}
              </p>
            </div>
            <div class="picture flex">
              <span v-for="(pic,idx) in item.pictureContent"
                    :key="idx"
                    :class="{'two':item.pictureContent.length > 1}">
                <img v-if="pic"
                     v-lazy="pic">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-logo flex">
      <i class="detail-logo__line flex-1"></i>
      <img class="detail-logo__picture"
           src="./images/logo-year.png">
      <i class="detail-logo__line flex-1"></i>
    </div>
  </div>
</template>
<script>
  import data from './service/detail'
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
    padding: 150px 0 103px;
    width: 100%;
    min-height: 100%;
    background-image: url(https://web-s3.alo7.com/website/assets/eee62b9b-9873-4f33-9671-3fc7e82bd067.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #000;

    &-content {
      margin: 0 auto;
      width: 1344px;

      &__logo {
        display: inline-block;
        width: 205px;
        height: 124px;
        background: url(./images/icon-logo.png) no-repeat;
        background-size: 100% auto;
      }

      &__container {
        position: relative;
        padding: 60px 62px 109px 66px;
        width: 100%;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(104, 104, 104, .2) 100%);
        border: 1px solid;
        border-image: linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(168, 168, 168, .2)) 1 1;
        border-radius: 10px;
        box-sizing: border-box;

        &:after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 965px;
          height: 151px;
          background: url(./images/bg-border.png) no-repeat;
          background-size: 100% auto;
        }

        &-title {
          position: relative;
          padding-left: 122px;
          font-size: 46px;
          font-weight: 600;
          color: rgba(216, 216, 216, 1);
          line-height: 65px;
          -webkit-background-clip: text;

          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 82px;
            height: 82px;
            background: url(./images/icon-block.png) no-repeat;
            background-size: 100% auto;
          }
        }

        &-person {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          z-index: 2;

          .picture {
            position: absolute;
            left: 900px;
            top: -185px;
            display: block;
            width: 291px;
            height: 297px;
          }

          .other {
            position: absolute;
            left: 1046px;
            top: 40px;

            h3 {
              margin-bottom: 4px;
              font-size: 35px;
              font-weight: 600;
              color: rgba(255, 255, 255, 1);
              line-height: 50px;
            }

            p {
              font-size: 20px;
              font-weight: 300;
              color: rgba(255, 255, 255, 1);
              line-height: 28px;
            }
          }
        }

        &-content {
          margin-top: 92px;
          width: 100%;
          box-sizing: border-box;

          .item {
            & + .item {
              margin-top: 30px;
            }
          }

          .title {
            margin-bottom: 35px;
            font-size: 28px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 35px;
          }

          .sub-title {
            font-size: 20px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 30px;
          }

          .description {
            p {
              font-size: 20px;
              font-weight: 300;
              color: rgba(255, 255, 255, 1);
              line-height: 30px;
            }
          }

          .picture {
            margin-top: 25px;
            justify-content: center;
            width: 100%;
            box-sizing: border-box;

            span {
              & + span {
                margin-left: 52px;
              }

              &.two {
                img {
                  max-width: 575px;
                }
              }
            }
          }
        }
      }
    }

    &-logo {
      margin-top: 117px;
      align-items: center;

      &__line {
        height: 1px;
        background: rgba(151, 151, 151, .3);
      }

      &__picture {
        margin: 0 40px;
        width: 308px;
        height: 122px;
      }
    }
  }
</style>
