/*
* action types
*/

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const COMPLETE_NOTIFICATION = 'COMPLETE_NOTIFICATION';
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
    return { type: ADD_NOTIFICATION, notif };
}

export function readNotification(notificationId) {
    return { type: READ_NOTIFICATION, notificationId };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}
