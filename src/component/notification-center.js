//Dependencies
import React, {PropTypes, PureComponent} from 'react';
import NotificationCenterIcon from './notification-center-icon';
import NotificationReceiver from './notification-receiver';
import NotificationPanel from './notification-panel';
import {connect} from 'react-redux';
import {addNotification, setVisibilityFilter, openCenter, closeCenter } from '../actions';
import {deleteNotification, deleteGroupNotification} from '../actions/delete-notification'
import {fetchNotifications} from '../actions/fetch-notifications';
import {dismissNotification} from '../actions/receive-notifications';
import {clearError} from '../actions/error';
import polling from '../util/polling';

// Notification center component
class NotificationCenter extends PureComponent {
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
        const {dispatch, hasAddNotif, notificationList, iconName, isOpen, isFetching, notificationReceiver, onSingleClick, error, zIndex, panelHeader, panelFooter} = this.props;
        const {notificationsReceived, hasFetchedOnce} = notificationReceiver;

        //display only the undred notifications
        const unreadNotifs = notificationList.filter(n => !n.read);
        return (
            <div data-focus='notification-center'>
                <NotificationCenterIcon
                    iconName={iconName}
                    number={unreadNotifs.length}
                    openCenter={() => dispatch(openCenter())} />

                {!isOpen && hasFetchedOnce &&
                    <NotificationReceiver
                        data={notificationsReceived}
                        onDismiss={notifId => dispatch(dismissNotification(notifId))}
                        zIndex={zIndex} />
                }
                {isOpen &&
                    <NotificationPanel
                        error={error}
                        hasAddNotif={hasAddNotif}
                        isFetching={isFetching}
                        onAddClick={data => dispatch(addNotification(data))}
                        onClosePanel={() => dispatch(closeCenter())}
                        onDismissError={() => dispatch(clearError())}
                        onSingleClick={onSingleClick}
                        onGroupRead={data => dispatch(deleteGroupNotification(data))}
                        onSingleRead={data => dispatch(deleteNotification(data))}
                        onTitleClick={() => dispatch(fetchNotifications())}
                        unreadNotifs={unreadNotifs}
                        zIndex={zIndex}
                        panelHeader={panelHeader}
                        panelFooter={panelFooter}
                        />
                }
            </div>
        );
    }
}

NotificationCenter.displayName = 'NotificationCenter';
NotificationCenter.propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    hasAddNotif: PropTypes.bool,
    iconName: PropTypes.string,
    isFetching: PropTypes.bool,
    isOpen: PropTypes.bool,
    notificationList: PropTypes.array,
    notificationReceiver: PropTypes.object,
    onSingleClick: PropTypes.func.isRequired,
    pollingTimer: PropTypes.number,
    zIndex: PropTypes.number
}
NotificationCenter.defaultProps = {
    hasAddNotif: false,
    pollingTimer: 6* 10 * 1000, //1 min
    zIndex: 16777271
};

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
