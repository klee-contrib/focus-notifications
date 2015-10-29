//Dependencies
import React, { Component , PropTypes } from 'react';
import NotificationGroup from './notification-group';
import NotificationAdd from './notification-add';
import NotificationCenterIcon from './notification-center-icon';
import NotificationReceiver from './notification-receiver';
import { connect } from 'react-redux';
import { addNotification, readNotification, readNotificationGroup, setVisibilityFilter, openCenter, closeCenter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';
import{ dismissNotification } from '../actions/receive-notifications';
import polling from '../util/polling';
// Notification center component
class NotificationCenter extends Component {
    componentWillMount() {
        //build a polling timeout.
        const {pollingTimer, dispatch} = this.props;
        polling(() => {
            dispatch(fetchNotifications(null, this.lastFetch));
            this.lastFetch = new Date().toISOString();
        }, pollingTimer);
        dispatch(fetchNotifications());
        this.lastFetch = new Date().toISOString();
    }
    //componentWillUnMount() {
    //    clearTimeout(this.pollingTimeoutID)
    //}
    //Should be replaced by a promise.cancel
    render() {
        const {dispatch, hasAddNotif, notificationList, isOpen, isFetching, notificationReceiver} = this.props;
        const {notificationsReceived, hasFetchedOnce} = notificationReceiver;
        //display only the undred notifications
        const unreadNotifs = notificationList.filter( n => !n.read);

        return (
            <div data-focus='notification-center'>
                <NotificationCenterIcon number={unreadNotifs.length} openCenter={ () => dispatch(openCenter())}/>
                {!isOpen && hasFetchedOnce && <NotificationReceiver data={notificationsReceived} onDismiss={ notifId => dispatch(dismissNotification(notifId)) }/>}
                {
                    isOpen &&
                    <div  data-fetching={isFetching} data-focus='notification-center-panel'>
                        <header>
                            <button data-focus='notification-center-close' className='mdl-button mdl-button--icon' onClick={() => dispatch(closeCenter())}>
                              <i className="material-icons">clear</i>
                            </button>
                            <h1 onClick={() => dispatch(fetchNotifications())}>{`Notification center (${unreadNotifs.length})`}</h1>
                        </header>
                        {
                            hasAddNotif &&
                            <NotificationAdd onAddClick={data => dispatch(addNotification(data))} />
                        }
                        <NotificationGroup data={unreadNotifs} onGroupRead={data => dispatch(readNotificationGroup(data))} onSingleRead={data => dispatch(readNotification(data))} />
                    </div>
                }
            </div>
        );
    }
}

NotificationCenter.displayName = 'NotificationCenter';

NotificationCenter.defaultProps = {
    hasAddNotif: false,
    pollingTimer: 10 * 1000 //1 min
};
NotificationCenter.propTypes = {
    dispatch: PropTypes.func,
    hasAddNotif: PropTypes.bool,
    isFetching: PropTypes.bool,
    isOpen: PropTypes.bool,
    notificationList: PropTypes.array,
    notificationReceiver: PropTypes.object,
    pollingTimer: PropTypes.number
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
