<template>
  <div class="h5-wrap">
    {{ test }}
    <img src="./images/logo.png"/>
    <span class="picture" @click="getImage">下载图片哦</span>
  </div>
</template>
<script>
var FileSaver = require('file-saver');
export default {
  data() {
    return {
      test: "岛上书店"
    };
  },
  methods: {
    getImage() {
      let _imageBase64 = ''
      FileSaver.saveAs(_imageBase64, "HCFimage.jpg");
    }
  }
};
</script>

<style type="text/less" lang="less">
.h5-wrap {
  width: 10rem;
  color: orange;
  background: url(./images/logo.png) no-repeat;
  background-size: 100% auto;

  img {
    display: block;
    width: 100px;
  }

  .picture {
    margin-top: 50px;
    display: block;
    width: 200px;
    height: 100px;
    background: red;
    color: red;
  }
}
</style>
