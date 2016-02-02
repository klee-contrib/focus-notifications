import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {persistState, devTools} from 'redux-devtools';
// import DevTools from '../container/dev-tools';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

console.log('Env', __DEV__ ? 'dev':'prod');

const createStoreWithMiddleware = __DEV__ ? compose(
    applyMiddleware(
        thunkMiddleware,
      //  loggerMiddleware
    ),
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
) (createStore) : applyMiddleware(thunkMiddleware)(createStore);

export default function createNotificationStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
