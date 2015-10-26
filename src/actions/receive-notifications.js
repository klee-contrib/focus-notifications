export const RECEIVE_NEW_NOTIFICATIONS = 'RECEIVE_NEW_NOTIFICATIONS';

export function receiveNotifications(newNotifications) {
    return { type: RECEIVE_NEW_NOTIFICATIONS, payload: newNotifications };
}
