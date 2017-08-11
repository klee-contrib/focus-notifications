import fetch from 'isomorphic-fetch';
import { getConfig } from '../config';
import { clearError, setError } from './error';
export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS'

//
function requestNotifications(user) {
    return {
        type: REQUEST_NOTIFICATIONS,
        user
    };
}

//
function receiveNotifications(user, json) {
    return {
        type: RECEIVE_NOTIFICATIONS,
        user,
        payload: json
    };
}

//Example call
// store.dispatch(fetchNotifications('userId'));

export function fetchNotifications(user, fromDate) {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    //
    return function dispatchFetchNotifications(dispatch) {
        //read the conf after extension.
        const config = getConfig();
        //Create the URL
        const URL = `${config.rootURL}/${config.notificationURL}`

        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        //Maybe see https://github.com/rackt/redux/issues/911#issuecomment-149361073 for a saner implementation instead of chaining two dispatch.
        dispatch(clearError());
        dispatch(requestNotifications(user));

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
        const datePartURL = fromDate ? `?date=${fromDate}` : '';
        const credentialOptions = config.useCredentials ? { credentials: 'include' } : {};
        const contentType = config.noContentType ? {} : config.contentType ? { headers: { contentType: config.contentType } } : { headers: { 'Content-Type': 'application/json' } };
        return fetch(`${URL}${datePartURL}`, { ...contentType, ...credentialOptions })
            .then(response => response && response.status !== 204 ? response.json() : undefined)
            .then(json => dispatch(receiveNotifications(user, json))) // Here, we update the app state with the results of the API call.
            .catch(err => dispatch(setError({ content: err.message, type: 'network' })));
    };
}
