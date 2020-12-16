// vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '《今周刊》乾旱恐成台灣宿命？ - 數位專題'
                return args
            })
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector',
    ],
    publicPath: process.env.NODE_ENV === 'production' ?
        '/lazyweb/project/water_resources/' : './' // 正式
        // '/edm/dinoTest/water_resources/' : './' // 測試
        // './' : './' // localhost
}