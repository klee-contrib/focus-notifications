/*import 'node_modules/react/react.js';
import 'node_modules/dropzone/dist/dropzone.js';
import 'node_modules/dropzone/dist/dropzone.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.0/lodash.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone.js';
import 'node_modules/focusjs/dist/focus.js';*/
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
