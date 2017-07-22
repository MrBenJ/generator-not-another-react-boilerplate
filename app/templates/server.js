
const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

const pathIndex = path.resolve(__dirname, 'dist');
app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    hot: true,
    contentBase: pathIndex,
}));

// const apiRouter = require('./api/apiRouter');

app.use(require('webpack-hot-middleware')(compiler));
// app.use('/api', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(pathIndex+'/index.html');
});

app.listen(3000, () => {
    console.log('listening on 3000');
});

