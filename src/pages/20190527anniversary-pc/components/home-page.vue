<template>
  <div class="home-page">
    <img src="../images/logo-year.png"
         class="home-page__logo">
    <div class="home-page__btn"
         @click="handleClickPlayVideo">
      <i></i> <span></span> 爱乐奇十五周年视频 <i></i>
    </div>
    <div class="home-page__video"
         v-show="openVideoPop">
      <div class="home-page__video-bg" @click="handleClickCloseVideo"></div>
      <span class="home-page__video-close" @click="handleClickCloseVideo"></span>
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                    @play="onPlayerPlay($event, 'full')"
                    @pause="onPlayerPause($event)"/>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VideoPlayer from 'vue-video-player'

  Vue.use(VideoPlayer)

  export default {
    props: {
      changeIndex: {
        type: Number
      }
    },
    data() {
      return {
        openVideoPop: false,
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',
            src: 'http://web-s3.alo7.com/azj/teachers/aoc_instruct.mp4' // 你的视频地址（必填）
          }],
          poster: "../images/bg-index.png", //你的封面地址
          // width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
      }
    },
    watch: {
      changeIndex() {
        if (this.changeIndex != 0) {
          this.handleClickCloseVideo()
        }
      }
    },
    methods: {
      handleClickPlayVideo() {
        this.openVideoPop = true
        let _video = this.$refs.videoPlayer

        if (_video.player.paused) {
          _video.player.play()
        } else {
          _video.player.pause()
        }
      },
      handleClickCloseVideo() {
        let _video = this.$refs.videoPlayer
        _video.player.pause()
        this.openVideoPop = false
      },
      onPlayerPlay(e) {
        console.log(e)
      },
      onPlayerPause(e) {
        console.log(e)
      }
    }
  }
</script>
<style lang="less" scoped>

  .home-page {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: #000 url(https://web-s3.alo7.com/website/assets/e9a7279d-e0a4-42e2-a8a5-94fa500159cb.png) no-repeat center;
    background-size: 100% 100%;

    &__logo {
      display: block;
    }

    &__btn {
      position: absolute;
      bottom: 156px;
      left: 50%;
      transform: translateX(-50%);
      min-width: 535px;
      font-size: 26px;
      line-height: 36px;
      font-weight: 400;
      color: rgba(255, 255, 255, .7);
      cursor: pointer;

      span {
        margin-right: 25px;
        display: inline-block;
        width: 39px;
        height: 24px;
        background: url(../images/btn-play.png) no-repeat;
        background-size: 100% auto;
        vertical-align: middle;
      }

      i {
        margin: 0 42px;
        display: inline-block;
        width: 25px;
        height: 26px;
        background: url(../images/icon-arrow.png) no-repeat;
        background-size: 100% auto;
        vertical-align: middle;

        &:last-child {
          transform: rotateZ(180deg);
        }
      }
    }

    &__video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;

      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .68);
        z-index: 100;
      }

      &-close {
        position: absolute;
        top: 8%;
        right: 8%;
        width: 38px;
        height: 38px;
        background: url(../images/btn-close.png) no-repeat;
        background-size: 100% auto;
        cursor: pointer;
        z-index: 100;
      }

      .video-player {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%);
        margin-left: -470px;
        width: 964px;
        height: 570px;
        z-index: 101;
      }
    }
  }


</style>
