/* 对应页面入口
 *  Author  Maggie
 */

const _staticHtml = "public/index.html";
const _static = "src/pages/";

let _staticUrl = {

  common: "src/lib/common.js",  // 公共JS

  index: "src/main.js&title=",

  "20190417web-sem/index": _static + "20190417web-sem/index.js&title=公开演讲",

  "20190422web-sem-pc/index": _static + "20190417web-sem/index.js&title=公众演讲课",

  "20190527anniversary-pc/index": _static + "20190527anniversary-pc/index.js&title=爱乐奇15周年", // 15周年专题页
  "20190527anniversary-pc/detail": _static + "20190527anniversary-pc/detail.js&title=爱乐奇15周年", // 15周年详情页
  "20190527anniversary/index": _static + "20190527anniversary/index.js&title=爱乐奇15周年", // 15周年详情页
  "20190527anniversary/detail": _static + "20190527anniversary/detail.js&title=爱乐奇15周年", // 15周年详情页
};

Object.keys(_staticUrl).forEach(k => {
  let ar = _staticUrl[k];
  let _newAr = ar.split('&title=');
  if (_newAr.length === 1) {
    _staticUrl[k] = {
      entry: _newAr[0]
    };
  }

  if (_newAr.length > 1) {
    _staticUrl[k] = {
      entry: ["src/lib/common.js",_newAr[0]],
      title: _newAr[1],
      template: _staticHtml
      // chunks: ["common"]
    };
  }
})

module.exports = _staticUrl;
