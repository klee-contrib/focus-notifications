const devConfig =  require('webpack-focus').devConfig;
var focusNotifConf = require('./focus-notifications-webpack.config');
module.exports = devConfig(focusNotifConf);
