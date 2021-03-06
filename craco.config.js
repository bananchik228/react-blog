const path = require('path')

module.exports = {
  webpack: {
    alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@routes': path.resolve(__dirname, './src/routes'),
        '@utils': path.resolve(__dirname, './src/utils')
    } 
  }
}