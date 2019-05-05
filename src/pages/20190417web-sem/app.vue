<template>
  <div class="wrap">
    {{ test }}
    <img src="./images/logo.png" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: "岛上书店"
    };
  }
};
</script>
<style type="text/less" lang="less">
.wrap {
  width: 375px;
  color: orange;
  background: url(./images/logo.png) no-repeat;
  background-size: 100% auto;

  img {
    display: block;
    width: 200px;
  }
}
</style>
