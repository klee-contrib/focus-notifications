//Dependencies
import React, { Component , PropTypes } from 'react';
import NotificationList from './notification-list';
import NotificationAdd from './notification-add';
import { connect } from 'react-redux';
import { addNotification, readNotification, setVisibilityFilter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';

// Notification center component
class NotificationCenter extends Component {
    render() {
        const {dispatch, hasAddNotif, notificationList} = this.props;
        return (
            <div data-focus='notification-center'>
                <h1 onClick={() => dispatch(fetchNotifications())}>{`You have ${notificationList.length} notifications`}</h1>
                {
                    hasAddNotif &&
                    <NotificationAdd onAddClick={data => dispatch(addNotification(data))} />
                }
                <NotificationList data={notificationList} />
                <h2>{'Debug'}</h2>
                {JSON.stringify(this.props)}
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
function selectNotifications(notificationList, filter) {
    return notificationList;
}

// Select the part of the state.
function select(state) {
    const {notificationList, visibilityFilter, isFetching} = state;
    return {
        //select the notification list from the state
        notificationList: selectNotifications(notificationList, visibilityFilter),
        // select the visibility filter
        visibilityFilter,
        isFetching
    };
}

// connect the notification center to the state.
export default connect(select)(NotificationCenter);
