<template>
  <div class="roll">
    <ul class="roll-content" ref="rollBox"
        @mouseenter.stop="handleMouseEnter"
        @mouseover.stop="handleMouseOver">
      <li class="roll-content__item"
          v-for="(item,index) in list"
          :class="{'is-active': activeIndex == index}"
          :key="index" @mouseover="mouseOverItem(item,index)">

        <ul class="head-picture"
            v-if="activeIndex != index && item.figureList.length">
          <li v-for="(pic, idx) in item.figureList"
              :key="idx"
              v-show="pic.picture"
              :style="{'transform': item.figureList.length> 1 && idx == 0 ? 'rotateZ(-20deg)' : ''}">
            <img v-if="pic.headPicture"
                 v-lazy="pic.headPicture">
          </li>
        </ul>
        <i class="icon-circle"><i></i></i>
        <span class="year">{{item.year}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array
      },
      activeIndex: {
        type: Number
      }
    },
    data() {
      return {
        left: 0,
        timeInterval: null,
        distanceX: 0
      }
    },
    methods: {
      handleMouseEnter(e) {
        this.distanceX = e.clientX
      },
      handleMouseOver(e) {
        this.left = this.left + (e.clientX - this.distanceX) / 15
      },
      mouseOverItem(item, index) {
        console.log(item.year)
        let _data = {
          item,
          index
        }
        this.$emit('over', _data)
      }
    },
    mounted() {

      const _box = this.$refs.rollBox
      const _clientWidth = document.body.clientWidth

      this.left = -(_box.offsetWidth - _clientWidth)

      this.timeInterval = setInterval(() => {
        this.left = this.left + 2
        if (this.left < (_clientWidth)) {
          // _box.style.transform = 'translate3d(' + this.left + 'px, 0px, 0px)';
          _box.style.transform = 'translateX(' + this.left + 'px)';
        }
        if (_box.getBoundingClientRect().left > 0) {
          console.log('距离屏幕左边的距离')
        }
      }, 150)
    }
  }
</script>
<style lang="less">
  .roll {
    position: relative;
    overflow: hidden;

    &-content {
      padding-top: 100px;
      white-space: nowrap;
      display: inline-block;

      &__item {
        position: relative;
        padding-top: 36px;
        display: inline-block;
        width: 266px;
        color: #fff;
        font-size: 56px;
        cursor: pointer;
        font-weight: bold;
        line-height: 70px;
        background: url(../images/icon-line.png) no-repeat;
        background-size: 100% auto;

        &.is-active {
          .icon-circle {
            position: absolute;
            top: -24.5px;
            left: 50%;
            margin-left: -22.5px;
            width: 50px;
            height: 50px;
            background: url(../images/icon-star.png) no-repeat center;
            background-size: 40px auto;
          }
        }

        .icon-circle {
          position: absolute;
          top: -12px;
          left: 50%;
          width: 26px;
          height: 26px;
          margin-left: -13px;
          border-radius: 26px;
          background: rgba(255, 255, 255, .1);
          z-index: 1;

          i {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -6px;
            margin-top: -6px;
            width: 12px;
            height: 12px;
            margin-left: -6px;
            border-radius: 12px;
            background: #fff;
          }
        }

        .year {
          display: inline-block;
          width: 100%;
          text-align: center;
        }

        .head-picture {
          position: absolute;
          top: -90px;
          left: 50%;
          display: flex;
          transform: translateX(-50%);

          li {
            width: 50px;
            height: 71px;
            background: url(../images/icon-head.png) no-repeat;
            background-size: 100% auto;
            transform-origin: bottom center;

            & + li {
              margin-left: -40px;
              transform: rotateZ(20deg);
            }

            img {
              display: block;
              width: 50px;
              height: 50px;
              border-radius: 50px;
            }
          }
        }
      }
    }
  }
</style>
