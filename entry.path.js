/* 对应页面入口
 *  Author  Maggie
 */

const _staticHtml = "public/index.html";
const _static = "src/pages/";

let _staticUrl = {
  index: "src/main.js",

  common: "src/lib/common.js",

  "20190417web-sem/index": _static + "20190417web-sem/index.js",

  "20190422web-sem-pc/index": _static + "20190417web-sem/index.js"
};

for (let k in _staticUrl) {
  let ar = _staticUrl[k];

  _staticUrl[k] = {
    entry: ar,
    title: "测试标题",
    template: _staticHtml
    // chunks: ["common"]
  };
}

module.exports = _staticUrl;
