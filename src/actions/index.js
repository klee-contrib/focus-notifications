/*
* action types
*/

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const ADD_NOTIFICATIONS = 'ADD_NOTIFICATIONS';
export const READ_NOTIFICATION = 'READ_NOTIFICATION';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
* other constants
*/

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
* action creators
*/

export function addNotification(notif) {
    return { type: ADD_NOTIFICATION, payload: notif };
}

export function addNotifications(notifs) {
    return { type: ADD_NOTIFICATIONS, payload: notifs };
}

export function readNotification(notificationId) {
    return { type: READ_NOTIFICATION, payload: notificationId };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}
