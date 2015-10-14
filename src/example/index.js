

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import NotificationCenter from '../component/notification-center';
import notificationReducers from '../reducers';

const store = createStore(notificationReducers);

const rootElement = document.getElementById('root');

document.addEventListener('DOMContentLoaded', (event) => {
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    ReactDOM.render(<Provider store={store}>
        <NotificationCenter />
    </Provider>,
    rootElement);
});
