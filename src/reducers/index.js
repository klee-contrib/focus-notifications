import { combineReducers } from 'redux';
import notificationList from './notifications-list';
import visibilityFilter from './visibility-filter';
import isFetching from './is-fetching';

//This is a reduce function to ease reducer composition.
export default combineReducers({
    visibilityFilter,
    notificationList,
    isFetching
});
