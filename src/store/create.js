
import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../container/dev-tools';

const isDev = __DEV__;

const enhancerDev = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&]+)\b/
        )
    )
);

const enhancerProd = compose(
    applyMiddleware(thunk)
);

export default function configureStore(initialState) {
    const storeEnhancer = isDev ? enhancerDev : enhancerProd;
    const store = createStore(rootReducer, initialState, storeEnhancer);
    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
    }
    return store;
}
