/**
 * 使得页面里的1rem等于设计稿上10% (设计稿750px)
 */

const maxWidth = 750;

(function () {
  var html = document.getElementsByTagName('html')[0];

  function setContainerFontSize() {
    var windowWidth = document.documentElement.clientWidth;
    var baseWidth = windowWidth > maxWidth ? maxWidth : windowWidth;
    var perRem = baseWidth / 10;

    html.style['font-size'] = perRem + 'px';
  }

  window.addEventListener('resize', setContainerFontSize);
  setContainerFontSize();
})();
