//Dependencies
import React, { Component , PropTypes } from 'react';
import NotificationList from './notification-list';
import NotificationAdd from './notification-add';
import { connect } from 'react-redux';
import { addNotification, readNotification, setVisibilityFilter } from '../actions';

/**
 * Notification.
 */
class NotificationCenter extends Component {
    render() {
        const {dispatch, notificationList} = this.props;
        return (
            <div data-focus='notification-center'>
                <NotificationAdd onAddClick={text => dispatch(addNotification({content: text, author: 'joe.lopez@gmail.com', title: 'title', date: new Date().toISOString()}))} />
                <NotificationList data={notificationList} />
            </div>
        );
    }
}

NotificationCenter.displayName = 'NotificationCenter';

NotificationCenter.propTypes = {
    dispatch: PropTypes.func,
    notificationList: PropTypes.array
}

// Select the notification from the state.
function selectNotifications(notifications, filter) {
    return notifications;
}

// Select the part of the state.
function select(state) {
    return {
        notificationList: selectNotifications(state.notifications, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}
export default connect(select)(NotificationCenter);
