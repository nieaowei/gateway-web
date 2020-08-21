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
        target: 'http://code.nekilc.com:8880/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: false
      }
    }
  }
}
