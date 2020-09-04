const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/crops', {
      target:
        'https://www.fastmock.site/mock/75fa8d6f3f9a9b2de2eab2c8c15da4c2/example/',
      changeOrigin: true,
    }),
  );
  //   app.use(createProxyMiddleware('/crops', { target: 'https://www.fastmock.site/mock/75fa8d6f3f9a9b2de2eab2c8c15da4c2/example' ,changeOrigin: true})));
};
