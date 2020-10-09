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
        target: 'http://127.0.0.1:8880/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: false
      }
    },
    disableHostCheck: true,
    port: 8888,
  }
}
