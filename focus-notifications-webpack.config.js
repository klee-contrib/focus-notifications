const path  = require('path');
module.exports =  {
    entry: [
        './src/example/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'focus-notifications.js',
        publicPath: '/dist/',
        libraryTarget: 'var',
        library: 'FocusNotifications'
    },
    loaders: [
        {
            test: /\.css$/,
            loader: 'style!css'
        }
    ],
    plugins: [],
    directory: path.join(__dirname, 'src'),
    port: 3000
};
