var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || 'dev';
var prod = {
    devtool: 'source-map',
    plugins : [new webpack.optimize.DedupePlugin()],
    entry: ['./src/component/index']
};
var devConf = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'nofification.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
            {test: /\.json$/, loader: 'json'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};


var prodConf = require('lodash').extend({}, devConf, prod);
module.exports = TARGET === 'dev' ? devConf : prodConf;
