import { REQUEST_NOTIFICATIONS, RECEIVE_NOTIFICATIONS} from '../actions/fetch-notifications';
import {SET_ERROR} from '../actions/error';
// reducer in charge of dealing with the visibility filter.
export default function isFetchingReducer(state = false, action = {}) {
    const {type, isFetching} = action;
    switch (type) {
        case REQUEST_NOTIFICATIONS:
            return true;
        case SET_ERROR:
        case RECEIVE_NOTIFICATIONS:
            return false;
        default:
            return state;
    }
}
