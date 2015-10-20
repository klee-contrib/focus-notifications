import { ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION, READ_NOTIFICATION_GROUP} from '../actions';
import {RECEIVE_NOTIFICATIONS} from '../actions/fetch-notifications';
import generateError from './util/error-generator';
import {isObject, isArray} from 'lodash/lang';
import {reject} from 'lodash/collection';
const REDUCER_NAME = 'NOTIFICATION_LIST';


// reducers in charge of generatin the notification list
export default function notifications(state = [], action = {}) {
    const {type, index, payload} = action;
    switch (type) {
        case ADD_NOTIFICATION:
            if(!isObject(payload)) { throw new Error (generateError({name: REDUCER_NAME, action, expectedType: 'object'})); }
            return [...state, {
                ...payload,
                read: false
            }];
        case ADD_NOTIFICATIONS:
        case RECEIVE_NOTIFICATIONS:
            if(!isArray(payload)) { throw new Error(generateError({name: REDUCER_NAME, action, expectedType: 'array'})); }
            const data = action.payload.map((notif) => ({...notif, read: false}));
            return [...state, ...data];
        case READ_NOTIFICATION:
            const index = state.findIndex( (notif) => notif.uuid === action.payload);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        case READ_NOTIFICATION_GROUP:
            const ids = action.payload;
            return reject(state, (notif) => ids.indexOf(notif.uuid) !== -1);
        default:
            return state;
    }
}
