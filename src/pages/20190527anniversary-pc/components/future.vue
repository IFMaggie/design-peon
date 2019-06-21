<template>
  <div class="future" v-if="list && list.length">
    <ul class="future-list flex">
      <li class="future-list__item"
          v-for="(item,index) in list"
          :key="index"
          :class="{'is-active': activeIndex == index}"
          @mouseover="handleMouseOver(index)">
        <i class="future-list__item-star" v-if="activeIndex != index"></i>
        <div class="content">
          <img class="picture"
               v-if="item.picture"
               v-lazy="item.picture">
          <div class="main">
            <h3 class="toh">{{item.name}}</h3>
            <p class="toh">{{item.job}}</p>
          </div>
          <div class="other">
            <h3 class="title">{{item.articleTitle}}</h3>
            <div class="description"
                 v-if="activeIndex == index && item.articleContent && item.articleContent.length">
              <p v-for="(desc,idx) in item.articleContent"
                 :key="idx">
                {{desc}}
              </p>
            </div>
            <span class="btn"
                  v-if="activeIndex == index"
                  @click="goToDetail">详情>></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import data from '../service/futureData'

  export default {
    data() {
      const _list = data.futureData
      return {
        list: _list,
        activeIndex: 0,
      }
    },
    methods: {
      handleMouseOver(index) {
        this.activeIndex = index
      },
      goToDetail() {
        let _url = '/20190527anniversary-pc/detail.html?type=' + this.list[this.activeIndex].type + '&id=' + this.list[this.activeIndex].id
        window.open(_url, '_blank')
      }
    }
  }
</script>
<style lang="less">
  .future {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    background: #000 url(https://web-s3.alo7.com/website/assets/a27f231d-54e5-43ab-bf0d-262545631dbb.png) no-repeat;
    background-size: 100% 100%;

    &-list {
      position: absolute;
      top: 412px;
      left: 50%;
      width: 80%;
      transform: translateX(-50%);

      &__item {
        position: relative;
        width: 250px;
        z-index: 1;

        &-star {
          position: absolute;
          top: 32px;
          left: -124px;
          width: 306px;
          height: 254px;
          background: url(../images/bg-star.png) no-repeat;
          background-size: 100% auto;
        }

        .picture {
          position: absolute;
          top: -70px;
          left: 0;
          width: 105px;
          height: 113px;
          z-index: 1;
        }

        .content {
          position: relative;
          background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(104, 104, 104, .2) 100%);
          border-radius: 5px;
          border: 1px solid;
          border-image: linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(168, 168, 168, .2)) 1 1;
          z-index: 1;
        }

        .main {
          position: relative;
          margin: 0 auto;
          padding-bottom: 18px;
          width: 203px;
          height: 52px;
          box-sizing: border-box;
          background: url(../images/bg-line.png) no-repeat left bottom;
          background-size: 100% 1px;
          z-index: 2;

          h3 {
            position: absolute;
            left: 50px;
            top: -12px;
            font-size: 20px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            line-height: 29px;
          }

          p {
            position: absolute;
            left: 50px;
            top: 16px;
            margin-top: 3px;
            font-size: 13px;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            line-height: 17px;
          }
        }

        .other {
          padding: 22px 28px 18px;
          z-index: 2;
        }

        .title {
          position: relative;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 20px;

          &:after {
            content: '';
            position: absolute;
            top: -10px;
            right: 0;
            width: 42px;
            height: 42px;
            background: url(../images/icon-block.png) no-repeat;
          }
        }

        .description {
          margin-top: 30px;
          max-height: 143px;
          overflow: hidden;

          p {
            font-size: 10px;
            color: rgba(255, 255, 255, 1);
            line-height: 15px;
            box-sizing: border-box;

            &:last-child {
              background: linear-gradient(360deg, rgba(255, 255, 255, .2) 30%, rgba(255, 242, 242, .9) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent
            }
          }
        }

        .btn {
          display: inline-block;
          margin-top: 14px;
          font-size: 10px;
          font-weight: 300;
          color: rgba(255, 255, 255, .7);
          line-height: 16px;
          cursor: pointer;
        }

        &.is-active {
          margin-left: 100px;
          margin-right: 50px;
          transform: scale(1.7);
          transform-origin: center;
        }

        & + li {
          margin-left: 50px;
        }
      }
    }
  }
</style>
