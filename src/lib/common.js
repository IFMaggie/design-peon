console.log("Author Maggie");
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

require('./response.es6')
import "../common/common.less";
