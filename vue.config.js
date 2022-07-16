// 在编写代码的时候关闭eslink开发工具
module.exports = {
    // 管理eslink校验
    lintOnSave: false,
    // 跨域
    devServer: {
        // true 则热更新，false 则手动刷新，默认值为 true
        //inline: true,
        // development server port 8000
        //port: 8001,
        proxy: {
            //会把请求路径中的/api换为后面的代理服务器
            '/api': {
                //提供数据的服务器地址
                target: 'http://gmall-h5-api.atguigu.cn',
                pathrEWRITE: { "^/api": "" },
            }
        },
    }
}