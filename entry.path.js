/* 对应页面入口
 *  Author  Maggie
 */

const _staticHtml = "public/index.html";
const _static = "src/pages/";

let _staticUrl = {

  common: "src/lib/common.js",  // 公共JS

  index: "src/main.js&title=",

  "20190417web-sem/index": _static + "20190417web-sem/index.js&title=公开演讲",

  "20190422web-sem-pc/index": _static + "20190417web-sem/index.js&title=公众演讲课"
};

for (let k in _staticUrl) {
  let ar = _staticUrl[k];
  let _newAr = ar.split('&title=');
  if (_newAr.length == 1) {
    _staticUrl[k] = {
      entry: _newAr[0]
    };
  }

  if (_newAr.length > 1) {
    _staticUrl[k] = {
      entry: _newAr[0],
      title: _newAr[1],
      template: _staticHtml
      // chunks: ["common"]
    };
  }

}

module.exports = _staticUrl;
