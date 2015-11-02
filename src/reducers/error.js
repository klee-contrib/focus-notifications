import {SET_ERROR, CLEAR_ERROR} from '../actions/error';

// reducer in charge of dealing with the visibility filter.
export default function errorReducer(state = false, action = {}) {
    const {type, payload} = action;
    switch (type) {
        case SET_ERROR:
            return {...payload};
        case CLEAR_ERROR:
            return false;
        default:
            return state;
    }
}
