const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PAT = process.env.PAT;

app.use('/status-board/moodysanalytics', createProxyMiddleware({
    target: `https://raw.githubusercontent.com`,
    changeOrigin: true,
    pathRewrite: {[`^/status-board/`]: '/'},
    onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader('Authorization',  `Bearer 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`);
    }
}));

app.use('/status-board/repos', createProxyMiddleware({
    target: `https://api.github.com`,
    changeOrigin: true,
    pathRewrite: {[`^/status-board/`]: '/'},
    onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader('Authorization', `Bearer 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`);
    }
}));

app.listen(3000, () => {
    console.log('Server listening on port ', 3000);
});
