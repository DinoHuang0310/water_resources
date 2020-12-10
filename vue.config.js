// vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '乾旱終將成為台灣的宿命？'
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