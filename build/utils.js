var path = require('path')
var config = require('../config')
var glob = require('glob')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

exports.assetsPath = function (_path) {
    var env = process.env.NODE_ENV
    var subDirectory = env === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;

    return path.posix.join(subDirectory, _path)
}

exports.cssLoaders = function(options) {
  options = options || {}
  // generate loader string to be used with extract text plugin
  function generateLoaders(loaders) {
    var sourceLoader = loaders.map(function(loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}

exports.getHtmlWebpackPlugins = function(entry) {
  var pages = getEntry('src/*.html')
  var env = process.env.NODE_ENV
  var plugins = []

  for (var pathName in pages) {
    // 配置生成的html文件，定义路径等
    var conf = {
      filename: path.resolve(config.build.dist, pathName + '.html'), // html文件输出路径
      template: pages[pathName], // 模板路径
      inject: true // js插入位置
    };

    if (env === 'production') {
      conf.minify = {
          removeComments: true,
          collapseWhitespace: true,
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        }
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      conf.chunksSortMode = 'dependency'
    }

    if (pathName in entry) {
      conf.chunks = env === 'production' ? ['vendor', 'manifest', pathName] : [pathName];
      conf.hash = false; // LYS 干什么用的？
    }


    plugins.push(new HtmlWebpackPlugin(conf));
  }

  return plugins;
}

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    // pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
    pathname = basename; // 正确输出js和html的路径
    entries[pathname] = entry;
  });

  // console.log('getEntry', entries);
  return entries;
}
