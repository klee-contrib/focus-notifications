import { OPEN_CENTER, CLOSE_CENTER} from '../actions';

// reducer in charge of dealing with the visibility of the notification center.
export default function isOpenReducer(state = false, action = {}) {
    const {type} = action;
    switch (type) {
        case OPEN_CENTER:
            return true;
        case CLOSE_CENTER:
            return false;
        default:
            return state;
    }
}
