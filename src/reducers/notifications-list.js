import { ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION, READ_NOTIFICATION_GROUP} from '../actions';
import {RECEIVE_NOTIFICATIONS} from '../actions/fetch-notifications';
import generateError from './util/error-generator';
import {isObject, isArray, isString, isNumber} from 'lodash/lang';
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

            return payload.reduce((newState, notif) => {
                const {uuid: newNotifId, read} = notif;
                if(newState.findIndex(({uuid}) => uuid === newNotifId) === -1) {
                    newState.push({...notif, read: read || false});
                }
                return newState;
            }, state);
        case READ_NOTIFICATION:
            if(!isString(payload) && !isNumber(payload)) { throw new Error(generateError({name: REDUCER_NAME, action, expectedType: 'string|number'})); }
            const index = state.findIndex( (notif) => notif.uuid === action.payload);
            if(index === -1) {
                return state;
            }
            return [
                ...state.slice(0, index),
                //Add the read element to the index fitting the payload.
                {...state[index], read: true},
                ...state.slice(index + 1)
            ];
        case READ_NOTIFICATION_GROUP:
            if(!isArray(payload)) { throw new Error(generateError({name: REDUCER_NAME, action, expectedType: 'array'})); }
            const ids = payload;
            //Reduce the state to change the read elements.
            return state.reduce((newState, notif) => {
                //The notif is already read or its index is in the read indexes.
                const read = notif.read || ids.indexOf(notif.uuid) !== -1;
                newState.push({...notif, read});
                return newState;
            }, []);
        default:
            return state;
    }
}
