const devConfig =  require('webpack-focus').devConfig;
var focusNotifConf = require('./focus-notifications-webpack.config');
focusNotifConf.entry = [
    './src/example/index'
];
module.exports = devConfig(focusNotifConf);
