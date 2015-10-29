import 'material-design-lite/material.min';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.css';

import React from 'react';
import App from './App';

let style = {
    border: '1px dotted tomato',
    height: '150px'
};
React.render(<App style={style} />, document.getElementById('root'));
