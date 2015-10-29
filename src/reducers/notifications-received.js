import { ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION, READ_NOTIFICATION_GROUP} from '../actions';
import {RECEIVE_NOTIFICATIONS} from '../actions/fetch-notifications';
import { DISMISS_NOTIFICATION} from '../actions/receive-notifications';
import generateError from './util/error-generator';
import {isObject, isArray, isString, isNumber} from 'lodash/lang';
const REDUCER_NAME = 'NOTIFICATIONS_RECEIVED';

function _addNotifToStateIfNeeded(state, notif) {
    const {uuid} = notif;
    if(!state[uuid]) {
        state[uuid] = notif;
    }
    return {...state};
}
function _addReadToNotificationIfExists(state, uuid) {
    if(isObject(state[uuid])) {
        state[uuid] = {...state[uuid], displayed: true};
    }
    return {...state};
}

// reducers in charge of generatin the notification list
export default function notificationsReceived(state = {}, action = {}) {
    const {type, index, payload} = action;
    switch (type) {
        case ADD_NOTIFICATION:
            if(!isObject(payload) || isArray(payload)) { throw new Error (generateError({name: REDUCER_NAME, action, expectedType: 'object'})); }
            return _addNotifToStateIfNeeded(state, payload);
        case ADD_NOTIFICATIONS:
        case RECEIVE_NOTIFICATIONS:
            if(!isArray(payload)) { throw new Error(generateError({name: REDUCER_NAME, action, expectedType: 'array'})); }
            action.payload.forEach((notif) => _addNotifToStateIfNeeded(state, notif));
            return {...state};
        case DISMISS_NOTIFICATION:
        case READ_NOTIFICATION:
            if(!isString(payload) && !isNumber(payload)) { throw new Error(generateError({name: REDUCER_NAME, action, expectedType: 'string|number'})); }
            return _addReadToNotificationIfExists(state,payload);
        case READ_NOTIFICATION_GROUP:
            if(!isArray(payload)) { throw new Error(generateError({name: REDUCER_NAME, action, expectedType: 'array'})); }
            payload.forEach((notifUuid) => _addReadToNotificationIfExists(state, notifUuid));
            return {...state};
        default:
            return state;
    }
}
