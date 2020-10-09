const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
    css: [
        'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
    ],
    js: [
        'https://unpkg.com/vue@2.6.12/dist/vue.min.js',
        'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
        'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
        'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
        'https://cdn.bootcss.com/echarts/4.1.0/echarts.min.js',
        'https://unpkg.com/element-ui/lib/index.js',
    ]
}
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        // 生产环境配置
        // if (isProduction) {
        // 生产环境注入cdn
        config.plugin('html')
            .tap(args => {
                args[0].cdn = cdn;
                return args;
            });
        // }
    },
    configureWebpack: (config) => {
        // if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
        config.mode = 'production'
        return {
            plugins: [new CompressionPlugin({
                test: /\.js$|\.html$|\.css/, //匹配文件名
                threshold: 10240, //对超过10k的数据进行压缩
                deleteOriginalAssets: false //是否删除原文件
            })],
            resolve: {
                alias: {
                    syyles: '@assets/styles'
                }
            },
            externals: {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'axios': 'axios',
                "echarts": "echarts",
                "ElementUI": "element-ui"
            },
        }
        // }
    },
    //     {
    //     resolve: {
    //         alias: {
    //             syyles: '@assets/styles'
    //         }
    //     },
    //     externals: {
    //         'vue': 'Vue',
    //         'vuex': 'Vuex',
    //         'vue-router': 'VueRouter',
    //         'axios': 'axios',
    //         "echarts": "echarts",
    //         "ElementUI": "element-ui"
    //     },
    //     plugins:[
    //         new CompressionPlugin({
    //         test: /\.js$|\.html$|\.css/, //匹配文件名
    //         threshold: 10240, //对超过10k的数据进行压缩
    //         deleteOriginalAssets: false //是否删除原文件
    //     })]
    // },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://code.nekilc.com:8880/',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: false
            }
        },
        disableHostCheck: true,
        port: 8888,
    },
}
