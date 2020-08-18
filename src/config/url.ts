/**
 * baseUrl: 项目访问的接口地址
 * 如果是生产模式下访问http://production.com
 * 如果是开发模式下访问http://localhost:1234
 * 如果在webpack中配置了devServer，在devServer中，
 * proxy: 'http://localhost:1234'，那么这里的‘http://localhost:1234’可以改为‘/’
 */
export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1234'
    : 'http://production.com';
