const path = require("path");
const _staticUrl = require("./entry.path");

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: "dist",
  filenameHashing: false,
  css: {
    extract: true,
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [
          require('autoprefixer'),
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve("src/assets"))
      .set('@lib', resolve('src/lib'))
      .set('@utils', resolve('src/utils'))
      .set('@pages', resolve('src/pages'))
      .set('@less', resolve('less'));
  },
  pages: _staticUrl
};
