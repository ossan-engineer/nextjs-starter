const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['pages/', 'components/', 'utils/']
  }
})
