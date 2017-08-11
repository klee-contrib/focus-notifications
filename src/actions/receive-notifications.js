export const RECEIVE_NEW_NOTIFICATIONS = 'RECEIVE_NEW_NOTIFICATIONS';
export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';

export function receiveNotifications(newNotifications) {
    return { type: RECEIVE_NEW_NOTIFICATIONS, payload: newNotifications };
}
export function dismissNotification(notificationUuid) {
    return { type: DISMISS_NOTIFICATION, payload: notificationUuid };
}
