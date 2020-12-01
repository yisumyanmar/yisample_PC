module.exports = {
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // },
  lintOnSave: true,
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}
