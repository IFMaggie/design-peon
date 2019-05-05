const path = require("path");
const _staticUrl = require("./entry.path");

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "./",
  filenameHashing: false, // 打包后的文件是否加 hash
  css: {
    extract: true,
    sourceMap: false,
    modules: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 下面这段是自己加的，根据自己文件的位置来修改
        path.resolve(__dirname, "./less/common/common.less")
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        bypassOnDebug: true
      })
      .end();
    // 配置别名
    config.resolve.alias
      .set("@src", path.join(__dirname, "src"))
      .set("@less", path.join(__dirname, "less"));
  },
  configureWebpack: () => ({
    optimization: {
      splitChunks: {
        cacheGroups: {
          // vendor:{
          //   chunks:"all",
          //   test: /node_modules/,
          //   name:"vendor",
          //   minChunks: 1,
          //   maxInitialRequests: 5,
          //   minSize: 0,
          //   priority:100,
          // },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: "common",
            test: /\.(le|sc|c)ss$/,
            chunks: "all",
            enforce: true
          },
          runtimeChunk: {
            name: "manifest"
          }
        }
      }
    }
  }),
  pages: _staticUrl
};
