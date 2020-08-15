module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        syyles: '@assets/styles'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.106.251.178:8880/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: false
      }
    }
  }
}
