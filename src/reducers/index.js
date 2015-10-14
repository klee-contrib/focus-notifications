import { combineReducers } from 'redux';
import notificationList from './notifications-list';
import visibilityFilter from './visibility-filter';

export default combineReducers({
    visibilityFilter,
    notificationList
});
