const webpack = require('webpack');

const title = '融合工具-主应用-vue';

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,

  runtimeCompiler: true,

  filenameHashing: process.env.NODE_ENV === 'production',

  devServer: {
    port: 10000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false
  },

  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 1024 * 1024 * 1024,
      maxAssetSize: 1024 * 1024 * 1024,
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
    plugins: [],
    resolve: { }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },

  chainWebpack(config) {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', title);

    // https://webpack.js.org/configuration/devtool/#development
    config.when(process.env.NODE_ENV === 'development', config => config.devtool('source-map'));

    // remove vue-cli-service's progress output
    config.plugins.delete('progress');
    // replace with another progress output plugin to solve the this bug:
    // https://github.com/vuejs/vue-cli/issues/4557
    config.plugin('simple-progress-webpack-plugin').use(require.resolve('simple-progress-webpack-plugin'), [
      {
        format: 'compact'
      }
    ]);

    const svg = config.module.rule('svg');

    svg.uses.clear();

    svg.use('vue-svg-loader').loader('vue-svg-loader');

    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          }
        }
      });
      config.optimization.runtimeChunk('single');
    });
  }
};
