import config from '../config.json';
import fetch from 'isomorphic-fetch';
const URL = `${config.rootURL}/${config.notificationURL}`;

import {readNotification, readNotificationGroup} from './';

//Notification actions
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const SUCCESS_DELETE_NOTIFICATION = 'SUCCESS_DELETE_NOTIFICATION';
export const FAIL_DELETE_NOTIFICATION = 'FAIL_DELETE_NOTIFICATION';

//Notification group actions

export const DELETE_NOTIFICATION_GROUP = 'DELETE_NOTIFICATION_GROUP';
export const SUCCESS_DELETE_NOTIFICATION_GROUP = 'SUCCESS_DELETE_NOTIFICATION_GROUP'
export const FAIL_DELETE_NOTIFICATION_GROUP = 'FAIL_DELETE_NOTIFICATION_GROUP';

function deleteNotificationSuccess(jsonDeleted) {
    return {
        type: SUCCESS_DELETE_NOTIFICATION,
        payload: jsonDeleted
    };
}

//
function deleteNotificationGroupSuccess(notificationIds) {
    return {
        type: SUCCESS_DELETE_NOTIFICATION_GROUP,
        payload: notificationIds
    };
}

//
export function deleteNotification(notificationId) {
    return function callDeleteNotification(dispatch) {
        dispatch(readNotification(notificationId));
        return fetch(`${URL}/${notificationId}`, {method: 'delete'})
        .then(response => response.json())
        .then(json => dispatch(deleteNotificationSuccess(json)))
        .catch(err => console.error('Delete notification error', err));
    }
}

//
export function deleteGroupNotification(notificationIds) {
    return function callDeleteNotificationGroup(dispatch) {
        dispatch(readNotificationGroup(notificationIds));
        return fetch(`${URL}`, {method: 'delete', body: JSON.stringify(notificationIds)})
        .then(response => response.json())
        .then(json => dispatch(deleteNotificationGroupSuccess(json)))
        .catch(err => console.error('Delete notification group error', err));
    }
}
