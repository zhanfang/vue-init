// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    dist: path.resolve(__dirname, '../dist/'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // cdn地址
    // assetsPublicPath: '//cdn.demozhan.com/vue/',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8000,
    proxyTable: {
        '/api': {
            // json-server的服务器
            target: 'http://localhost:3000',
            changeOrigin: true,
            logLevel: 'debug'
        }
    },
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
