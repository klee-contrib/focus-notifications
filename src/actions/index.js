/*
* action types
*/

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const ADD_NOTIFICATIONS = 'ADD_NOTIFICATIONS';
export const READ_NOTIFICATION = 'READ_NOTIFICATION';
export const READ_NOTIFICATION_GROUP = 'READ_NOTIFICATION_GROUP';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const OPEN_CENTER = 'OPEN_CENTER';
export const CLOSE_CENTER = 'CLOSE_CENTER';

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
    console.log(readNotification, notificationId);
    return { type: READ_NOTIFICATION, payload: notificationId };
}

export function readNotificationGroup(notificationIds) {
    console.log(readNotificationGroup, notificationIds);
    return { type: READ_NOTIFICATION_GROUP, payload: notificationIds };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}

//Actions creators related to the opening state.

export function openCenter() {
    return {type: OPEN_CENTER};
}
export function closeCenter() {
    return {type: CLOSE_CENTER};
}
