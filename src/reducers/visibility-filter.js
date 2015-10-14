import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions';
const {SHOW_ALL} = VisibilityFilters;

// reducer in charge of dealing with the visibility filter.
function visibilityFilter(state = SHOW_ALL, action = {}) {
    const {type, filter} = action;
    switch (type) {
        case SET_VISIBILITY_FILTER:
            return filter;
        default:
            return state;
    }
}
