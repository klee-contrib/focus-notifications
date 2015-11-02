console.log(require('webpack-focus'));
const productionConfig =  require('webpack-focus').productionConfig;
var focusNotifConf = require('./focus-notifications-webpack.config');
focusNotifConf.entry = [
    './src/index'
];
focusNotifConf.externals = {
    'focus-core': 'FocusCore',
    react: 'React',
    'react-dom': 'ReactDOM'
};
module.exports = productionConfig(focusNotifConf);
