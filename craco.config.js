const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  webpack: {
    // 别名
    alias: {
      '@': path.resolve('src'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#873bf4' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};