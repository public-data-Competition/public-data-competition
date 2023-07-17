'use strict';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware(['/address'], {
            target: "http://api.vworld.kr",
            changeOrigin: true
        })
    );
};