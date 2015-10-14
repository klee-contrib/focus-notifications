import { combineReducers } from 'redux';
import { VisibilityFilters, ADD_NOTIFICATION, READ_NOTIFICATION, SET_VISIBILITY_FILTER } from '../actions';
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
    console.log('reducer notif', state, action)
    switch (action.type) {
        case ADD_NOTIFICATION:
            return [...state, {
                ...action.notification,
                completed: false
            }];
        case READ_NOTIFICATION:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
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
