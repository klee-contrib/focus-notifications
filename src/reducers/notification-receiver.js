import { ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION, READ_NOTIFICATION_GROUP} from '../actions';
import {RECEIVE_NOTIFICATIONS} from '../actions/fetch-notifications';
import { DISMISS_NOTIFICATION} from '../actions/receive-notifications';
import notificationsReceivedReducer from './notifications-received';
import hasFetchedOnceReducer from './has-fetched-once';

export default function notificationReceiver(state = {hasFetchedOnce: false, notificationsReceived: {}}, action = {}) {
    const {type, index, payload} = action;
    switch (type) {
        case ADD_NOTIFICATIONS:
        case RECEIVE_NOTIFICATIONS:
            const {hasFetchedOnce, notificationsReceived} = state;
            if (!hasFetchedOnce) {
                action.payload = payload.map( n => ({...n, displayed: true}) );
            }
            return {
                hasFetchedOnce: hasFetchedOnceReducer(hasFetchedOnce, action),
                notificationsReceived: notificationsReceivedReducer(notificationsReceived, action)
            };
        case ADD_NOTIFICATION:
        case DISMISS_NOTIFICATION:
        case READ_NOTIFICATION:
        case READ_NOTIFICATION_GROUP:
            return {
                hasFetchedOnce: hasFetchedOnceReducer(hasFetchedOnce, action),
                notificationsReceived: notificationsReceivedReducer(notificationsReceived, action)
            };
        default:
            return state;
    }
}
