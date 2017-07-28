/* eslint-disable no-console */

// ======================
// Dotenv - Load .env file depending on development
// or production
//
const ENV = process.env.NODE_ENV || 'development';
require('dotenv').load({
    path: ENV === 'development' ?
        '.env.dev' :
        '.nev.prod'
});

// ======================
// Standard Node tools and modules
//
const path = require('path');


// ======================
// Express + middleware
//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Security Middleware
const helmet = require('helmet');
app.use(helmet());

// Logging
const logger = require('morgan');
app.use(logger('dev'));

// ======================
// Webpack and front end compilation tools
//

const pathIndex = path.resolve(__dirname, 'dist');
if(ENV === 'development') {
    // Have webpack compile everything
    // and enable hot module replacement
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/',
        hot: true,
        contentBase: pathIndex,
    }));

    app.use(require('webpack-hot-middleware')(compiler));
} else {
    // Production only settings

    // Compress everything for super fast loading times!
    const compression = require('compression');
    app.use(compression());

    // enable static files to be served from 'dist'
    app.use(express.static('dist'));
}

// ======================
// Routing
//

const apiRouter = require('./api/apiRouter');

app.use('/api', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(pathIndex+'/index.html');
});

// DEFAULT PORT is 3000 unless specified by dotenv
const PORT = Number(JSON.stringify(process.env.PORT)) ?
    Number(JSON.stringify(process.env.PORT)) : 3000;
app.listen(PORT, () => {
    console.log(`Server running in ${ENV.toUpperCase()} mode`);
    console.log(`listening on Port ${PORT}`);
});

