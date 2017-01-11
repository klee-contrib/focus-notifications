const configBuilder = require('webpack-focus').configBuilder;
const customConfig = {
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        // 'redux-devtools': 'redux-devtools',
        moment: 'moment',
        lodash: 'lodash'
    }
}

module.exports = configBuilder(customConfig);
