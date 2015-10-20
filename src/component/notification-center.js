//Dependencies
import React, { Component , PropTypes } from 'react';
import NotificationGroup from './notification-group';
import NotificationAdd from './notification-add';
import { connect } from 'react-redux';
import { addNotification, readNotification, setVisibilityFilter, openCenter, closeCenter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';

// Notification center component
class NotificationCenter extends Component {
    render() {
        const {dispatch, hasAddNotif, notificationList, isOpen, isFetching} = this.props;
        const onClickHandler = () =>  dispatch(isOpen ? closeCenter() : openCenter());
        return (
            <div>
                <span className='material-icons mdl-badge' data-badge={notificationList.length} data-focus='notification-bell' onClick={onClickHandler} >add_alert</span>
                {!isOpen && <div data-focus='notification-receiver'></div>}
                {
                    isOpen &&
                    <div  data-fetching={isFetching} data-focus='notification-center'>
                        <h1 onClick={() => dispatch(fetchNotifications())}>{`You have ${notificationList.length} notifications`}</h1>
                        {
                            hasAddNotif &&
                            <NotificationAdd onAddClick={data => dispatch(addNotification(data))} />
                        }
                        <NotificationGroup data={notificationList} onRead={data => dispatch(readNotification(data))} />
                    </div>
                }
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
    isOpen: PropTypes.bool,
    notificationList: PropTypes.array
}

// Select the notification from the state.
function selectNotifications(notificationList, filter) {
    return notificationList;
}

// Select the part of the state.
function select(state) {
    const {notificationList, visibilityFilter, ...otherStateProperties} = state;
    return {
        //select the notification list from the state
        notificationList: selectNotifications(notificationList, visibilityFilter),
        visibilityFilter,
        ...otherStateProperties
    };
}

// connect the notification center to the state.
export default connect(select)(NotificationCenter);
