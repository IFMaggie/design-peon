<template>
  <div class="torch">

    <div class="torch-person">
      <ul class="clearfix">
        <li v-for="(item, index) in newTorchList[activeIndex].figureList"
            :key="index">
          <img v-if="item.picture"
               v-lazy="item.picture"
               class="picture">
          <div class="main">
            <h3>{{item.name}}</h3>
            <p>{{item.job}}</p>
          </div>
          <div class="other">
            <p>{{item.description}}</p>
            <span @click="goToDetail(item.type, item.id)">详情>></span>
          </div>
        </li>
      </ul>
    </div>

    <div class="torch-progress"
         ref="progressBox">

      <div class="torch-progress__content">
        <!--<roll-box :list="newTorchList"-->
                  <!--:active-index="getIndex"-->
                  <!--@over="handleOverYear"/>-->
        <swiper-box :list="newTorchList"
                    :active-index="getIndex"
                    @over="handleOverYear"/>
      </div>
    </div>

    <div class="torch-news"
         v-for="(item, index) in newTorchList[activeIndex].news"
         :key="index"
         @click="goToDetail(item.type, item.id)">
      <img v-if="item.image" v-lazy="item.image">
      <p>{{item.content}}</p>
    </div>
  </div>
</template>
<script>
  import '@utils/jquery.js'
  import '@utils/jquery.cloud9carousel.js'
  import '@utils/scrolloverflow.js'
  import data from '../service/salaryList'

  import rollBox from './roll-box'
  import swiperBox from './swiper-box'

  export default {
    data() {
      return {
        torchList: data.salaryList,
        personList: [],
        activeIndex: 0
      }
    },
    components: {
      rollBox,
      swiperBox
    },
    methods: {
      handleOverYear(data) {
        this.personList = data.item.figureList
        this.activeIndex = data.index
      },
      goToDetail(type,id){
        let _url = '/20190527anniversary-pc/detail.html?type=' + type + '&id=' + id
        window.open(_url, '_blank')
      }
    },
    computed: {
      newTorchList() {
        let newTorchList = []
        for (let i = 0; i < 3; i++) {
          this.torchList.forEach((item) => {
            newTorchList.push(item)
          })
        }
        return this.torchList
      },
      getIndex() {
        return this.activeIndex
      }
    },
    mounted() {

    }
  }
</script>
<style lang="less" scoped>
  .torch {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000 url(https://web-s3.alo7.com/website/assets/a27f231d-54e5-43ab-bf0d-262545631dbb.png) no-repeat center;
    background-size: 100% 100%;
    &-person {
      position: absolute;
      top: 28%;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(104, 104, 104, .2) 100%);
      border-radius: 7px 7px 7px 0px;
      border-image: linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(168, 168, 168, 1)) 1 1;

      ul {
        display: flex;
      }

      li {
        flex: 1;
        position: relative;
        padding: 86px 31px 18px;
        width: 369px;
        height: 204px;
        box-sizing: border-box;

        .picture {
          position: absolute;
          top: -99px;
          left: 31px;
          width: 187px;
          height: 185px;
        }

        .main {
          position: absolute;
          left: 184px;
          top: -28px;
          width: 100%;

          h3 {
            font-size: 35px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            line-height: 49px;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, .7);
            line-height: 28px;
          }
        }

        .other {
          padding-top: 34px;
          border-top: 1px solid #3023AE;
          border-image: linear-gradient(360deg, rgba(48, 35, 174, 1) 0%, rgba(200, 109, 215, 1) 100%);

          p {
            font-size: 20px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 32px;
          }

          span {
            display: block;
            font-size: 20px;
            font-weight: 300;
            color: rgba(255, 255, 255, .7);
            line-height: 32px;
            cursor: pointer;
          }
        }

        & + li {
          margin-left: 30px;
        }
      }
    }

    &-progress {
      position: absolute;
      top: 52%;
      left: 0;
      width: 100%;
      height: 300px;

      .item {
        width: 160px;
        height: 100px;
        background: red;
        color: #fff;
      }
    }

    &-news {
      position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 172px;
      border-radius: 4px 4px 6px 6px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      p {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 20px;
        width: 100%;
        height: 52px;
        box-sizing: border-box;
        background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);
        font-size: 18px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
      }
    }
  }
</style>
