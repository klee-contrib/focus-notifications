import { combineReducers } from 'redux';
import { VisibilityFilters, ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION, SET_VISIBILITY_FILTER } from '../actions';
const { SHOW_ALL } = VisibilityFilters;


function visibilityFilter(state = SHOW_ALL, action) {
    const {type, filter} = action;
    switch (type) {
        case SET_VISIBILITY_FILTER:
            return filter;
        default:
            return state;
    }
}


function notifications(state = [], action) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return [...state, {
                ...action.payload,
                read: false
            }];
        case ADD_NOTIFICATIONS:
            const data = action.payload.map((notif) => ({...notif, read: false}));
            return [...state, ...data];
        case READ_NOTIFICATION:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    read: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const notificationReducers = combineReducers({
    visibilityFilter,
    notifications
});

export default notificationReducers;
