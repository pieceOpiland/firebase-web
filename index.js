const fs = require('fs');

const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use('/dist/main.js', function(req, res) {
        res.sendFile('./dist/main.js');
    });
} else {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');

    const config = require('./webpack.dev');

    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true
    }));

    app.use(hotMiddleware(compiler));
}

app.use(function(req, res) {
    // I know, I could send the file directly I'm going to work on doing some SSR with this.
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        if(err) {
            res.status(500);
            res.end(err);
        } else {
            res.end(data);
        }
    });
});

app.listen(3000);
