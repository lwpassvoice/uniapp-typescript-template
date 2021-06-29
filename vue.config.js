/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  parallel: false,
  // outputDir: '/',
  publicPath: '/',
  configureWebpack: {
    plugins: [
      // gzip
      new CompressionWebpackPlugin({
        // filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
    ],
  },
  chainWebpack: (config) => {
    // 分析
    if (process.env.VUE_APP_BUILD_ENV === 'analyzer') {
      config
        .plugin('webpack-bundle-analyzer')
        // eslint-disable-next-line global-require
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }
  },
};
