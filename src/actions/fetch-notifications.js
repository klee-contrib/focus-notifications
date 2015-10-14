import config from '../config.json';
import fetch from 'isomorphic-fetch';
const URL = `${config.root}/${notificationURL}`
export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
function requestNotifications(user) {
    return {
        type: REQUEST_NOTIFICATIONS,
        user
    };
}

export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS'
function receiveNotifications(user, json) {
    return {
        type: RECEIVE_NOTIFICATIONS,
        user,
        payload: json
    };
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'));

export function fetchNotifications(user) {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function dispatchFetchNotifications(dispatch) {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestNotifications(user));

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch(`${URL}/${user}`)
        .then(response => response.json())
        .then(json =>

            // We can dispatch many times!
            // Here, we update the app state with the results of the API call.

            dispatch(requestNotifications(user, json))
        );

        // In a real world app, you also want to
        // catch any error in the network call.
    };
}
