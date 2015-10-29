import {RECEIVE_NOTIFICATIONS} from '../actions/fetch-notifications';

// reducer in charge of dealing with the visibility filter.
export default function hasFetchedOnceReducer(state = false, action = {}) {
    const {type, isFetching} = action;
    switch (type) {
        case RECEIVE_NOTIFICATIONS:
            return true;
        default:
            return state;
    }
}
