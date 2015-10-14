//Dependencies
import React, { Component , PropTypes } from 'react';
import NotificationList from './notification-list';
import NotificationAdd from './notification-add';
import { connect } from 'react-redux';
import { addNotification, readNotification, setVisibilityFilter } from '../actions';

// Notification center component
class NotificationCenter extends Component {
    render() {
        const {dispatch, hasAddNotif, notificationList} = this.props;
        return (
            <div data-focus='notification-center'>
                <h1>{`You have ${notificationList.length} notifications`}</h1>
                {
                    hasAddNotif &&
                    <NotificationAdd onAddClick={data => dispatch(addNotification(data))} />
                }
                <NotificationList data={notificationList} />
            </div>
        );
    }
}

NotificationCenter.displayName = 'NotificationCenter';

NotificationCenter.defaultProps = {
    hasAddNotif: false
};
NotificationCenter.propTypes = {
    dispatch: PropTypes.func,
    hasAddNotif: PropTypes.bool,
    notificationList: PropTypes.array
}

// Select the notification from the state.
function selectNotifications(notifications, filter) {
    return notifications;
}

// Select the part of the state.
function select(state) {
    return {
        //select the notification list from the state
        notificationList: selectNotifications(state.notifications, state.visibilityFilter),
        // select the visibility filter
        visibilityFilter: state.visibilityFilter
    };
}

// connect the notification center to the state.
export default connect(select)(NotificationCenter);
