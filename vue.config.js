const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  outputDir:'dist',
  productionSourceMap:false,//生产环境是否生成sourceMap文件
  css:{
    loaderOptions:{
      sass:{
        additionalData: `@import "@/scss/base.scss";`
      }
    }
  }
})
