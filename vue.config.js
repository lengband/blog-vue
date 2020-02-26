const PROXY_TIMEOUT = 1000 * 60 * 2

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: process.platform === 'darwin',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        ws: true,
        changeOrigin: true,
        proxyTimeout: PROXY_TIMEOUT
      }
    }
  }
}
