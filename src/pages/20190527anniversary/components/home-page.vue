<template>
  <div class="home">
    <img src="../images/logo-15.png" class="home-logo">

    <div class="home-btn" @click="popVideo = true"><i></i> 爱乐奇十五周年视频</div>

    <div class="home-video"
         v-show="popVideo">
      <div class="home-video__bg" @click="handleClickCloseVideo"></div>
      <span class="home-video__close" @click="handleClickCloseVideo"></span>
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
        popVideo: false,
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
        this.popVideo = true
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
        this.popVideo = false
      },
      onPlayerPlay() {
      },
      onPlayerPause() {
      }
    }
  }
</script>
<style lang="less">
  .home {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000 url(https://web-s3.alo7.com/website/assets/c7914309-15b9-4a81-a27d-590c81ab7e6e.png) no-repeat;
    background-size: 100% 100%;

    &-logo {
      padding-top: 380px;
      margin: 0 auto;
      width: 616px;
      height: 244px;
    }

    &-btn {
      margin-top: 108px;
      text-align: center;
      cursor: pointer;
      font-size: 34px;
      font-weight: 400;
      color: rgba(255, 255, 255, .6);
      line-height: 48px;

      i {
        margin-right: 20px;
        display: inline-block;
        width: 54px;
        height: 30px;
        background: url(../images/btn-play.png) no-repeat;
        background-size: 54px 30px;
        vertical-align: middle;
      }
    }

    &-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;

      &__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .68);
        z-index: 100;
      }

      &__close {
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
        margin-left: -325px;
        width: 650px;
        height: 375px;
        z-index: 101;
      }
    }
  }
</style>
