const devConfig =  require('webpack-focus').devConfig;
const focusNotifConf = require('./focus-notifications-webpack.config');
module.exports = devConfig(focusNotifConf);
