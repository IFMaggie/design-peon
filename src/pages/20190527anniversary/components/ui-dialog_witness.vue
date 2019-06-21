<template>
  <div class="dialog-witness" v-if="brand">
    <div class="dialog-witness__bg"></div>

    <div class="dialog-witness__logo">
      <i class="close" @click="clickClosePop"></i>
      <h3 class="title">{{brand.provinceName+ '' + brand.provinceNumber }}</h3>
      <ul class="content flex" v-if="brand.brandList && brand.brandList.length">
        <li class="item"
            v-for="(item,index) in brand.brandList"
            :key="index"
            @click="handleChangeBrand(index)">
          <img v-if="item.brandLogo" v-lazy="item.brandLogo">
          <p v-if="item.brandName">{{item.brandName}}</p>
        </li>
      </ul>
    </div>

    <div class="dialog-witness__description">
      <h3 class="dialog-witness__description-title">{{brand.brandList[showIndex].title}}</h3>
      <p class="dialog-witness__description-tips">{{brand.brandList[showIndex].description}}</p>
      <span class="dialog-witness__description-btn"
            v-if="brand.brandList[showIndex].title || brand.brandList[showIndex].description"
            @click="goToDetail(brand.brandList[showIndex].type, brand.brandList[showIndex].brandId)">详情>></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      brand: {
        type: Object
      },
      showPop: {
        type: Boolean
      }
    },
    data() {
      return {
        showIndex: 0
      }
    },
    methods: {
      clickClosePop() {
        this.$emit('close')
      },
      handleChangeBrand(index) {
        this.showIndex = index
      },
      goToDetail(type, id) {
        const _data = {
          type,
          id
        }
        this.$emit('detail',_data)
      }
    }
  }
</script>
<style lang="less">
  .dialog-witness {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
      opacity: 0.9;
      z-index: 99;
    }

    &__logo {
      position: relative;
      margin: 252px auto 0;
      padding: 70px 26px 0;
      width: 698px;
      height: 406px;
      box-sizing: border-box;
      background: url(../images/bg-irregular.png) no-repeat;
      background-size: 100% auto;
      z-index: 100;

      .title {
        font-size: 36px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;
        text-align: center;
      }

      .close {
        position: absolute;
        right: 68px;
        top: 10px;
        width: 64px;
        height: 66px;
        background: url(../images/icon-close.png) no-repeat;
        background-size: 100% auto;
        cursor: pointer;
      }

      .content {
        margin-top: 44px;
      }

      .item {
        width: 120px;

        & + .item {
          margin-left: 58px;
        }

        img {
          width: 120px;
          height: 120px;
          border-radius: 120px;
        }

        p {
          margin-top: 30px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 34px;
          text-align: center;
        }
      }
    }

    &__description {
      position: relative;
      padding: 0 58px;
      margin-top: 242px;
      z-index: 100;

      &-title {
        font-size: 44px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
      }

      &-tips {
        margin-top: 14px;
        font-size: 24px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 34px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }

      &-btn {
        margin-top: 15px;
        display: inline-block;
        font-size: 28px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
</style>
