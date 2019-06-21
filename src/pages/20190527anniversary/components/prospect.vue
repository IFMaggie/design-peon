<template>
  <div class="prospect"  v-if="list && list.length">
    <div class="prospect-person">
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
          <p>{{singlePerson.articleTitle}}</p>
          <span @click="goToDetail">详情>></span>
        </div>
      </div>
    </div>

    <ul class="prospect-list flex">
      <li class="flex-1"
          v-for="(item,index) in list"
          :key="index"
          :class="{'is-active':activeIndex == index}"
          @click="changeIndex(index)">
        <img v-if="item.picture"
             v-lazy="item.picture"
             class="picture">
        <div class="content flex">
          <i class="icon-line"></i>
          <div class="other">
            <h3 class="name">{{item.name}}</h3>
            <p class="job toh">{{item.job}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import data from '@pages/20190527anniversary-pc/service/prospectData'

  export default {
    data() {
      const _list = data.prospectData
      return {
        activeIndex: 0,
        list: _list
      }
    },
    computed: {
      singlePerson() {
        return this.list[this.activeIndex]
      }
    },
    methods: {
      changeIndex(index) {
        this.activeIndex = index
      },
      goToDetail(){
        let _url = '/20190527anniversary/detail.html?type=' + this.singlePerson.type + '&id=' + this.singlePerson.id
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
    background: url(https://web-s3.alo7.com/website/assets/dc9c6a98-9d58-4823-8393-3855318c08ca.png) no-repeat;
    background-size: 100% 100%;

    &-person {
      position: absolute;
      top: 496px;
      left: 70px;
      width: 646px;

      .picture {
        position: absolute;
        top: -350px;
        left: 0;
        padding-left: 56px;
        width: 646px;
        height: 464px;
        box-sizing: border-box;
        z-index: 2;

        &:after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          display: block;
          width: 356px;
          height: 290px;
          background: url(https://web-s3.alo7.com/website/assets/3a378800-ecdf-4942-8fd1-0294df5c8da0.png) no-repeat;
          background-size: 100% auto;
          z-index: 1;
        }

        img {
          position: relative;
          width: 470px;
          height: 464px;
          z-index: 2;
        }
      }

      .main {
        position: relative;
        z-index: 3;
      }

      .person {
        padding-bottom: 8px;
        background: url(../images/icon-long-line.png) no-repeat left bottom;
        background-size: 100% 6px;

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
        padding: 32px 0;

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
          font-size: 26px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 36px;
          cursor: pointer;
        }
      }

      &:before {
        content: '';
        position: absolute;
        left: -70px;
        top: -72px;
        width: 370px;
        height: 370px;
        background: url(../images/bg-star.png) no-repeat;
        background-size: 100% auto;
        z-index: 3;
      }
    }

    &-list {
      position: absolute;
      top: 946px;
      left: 50%;
      transform: translateX(-50%);
      padding: 52px 34px;
      width: 666px;
      height: 170px;
      box-sizing: border-box;
      background: url(../images/bg-prospect-list.png) no-repeat;
      background-size: 100% auto;
      justify-content: space-between;

      li {
        position: relative;
        height: 64px;
        z-index: 1;

        .picture {
          position: absolute;
          top: -160px;
          left: 24px;
          width: 182px;
          height: 188px;
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
        }

        .icon-line {
          display: inline-block;
          width: 4px;
          height: 64px;
          background: url(../images/icon-line-prospect.png) no-repeat;
          background-size: 100% auto;
        }

        .other {
          padding: 0 5px;
          margin-left: 14px;
          width: 285px;
          box-sizing: border-box;
        }

        .name {
          font-size: 22px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 32px;
        }

        .job {
          margin-top: 2px;
          font-size: 18px;
          font-weight: 300;
          color: rgba(255, 255, 255, .5);
          line-height: 26px;
        }

        & + li {
          margin-left: 5px;
        }

        &:before {
          content: '';
          position: absolute;
          top: -200px;
          left: 0;
          width: 294px;
          height: 290px;
          background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);
          opacity: .6;
          z-index: 99;
        }

        &.is-active {

          &:before {
            display: none;
          }
        }
      }
    }
  }
</style>
