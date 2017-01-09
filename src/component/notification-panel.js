import React, {PropTypes, PureComponent} from 'react';
import NotificationGroup from './notification-group';
import NotificationAdd from './notification-add';
import NotificationError from './notification-error';

import { addNotification, readNotification, readNotificationGroup, closeCenter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';
import {getConfig} from '../config';

class NotificationCenterPanel extends PureComponent {
    render() {
        const {hasAddNotif, isFetching, unreadNotifs, onGroupRead, onSingleRead, onClosePanel, onSingleClick, onTitleClick, onAddClick, onDismissError, error, zIndex} = this.props;
        const {i18n} = getConfig();
        return (
            <div style={{zIndex, top: 0, right: 0, position: 'fixed'}}>
                <div data-focus='notification-center-overlay' className='fade-in' onClick={onClosePanel} style={{zIndex: 1}}></div>
                <div data-focus='notification-center-panel' className='bounce-in-right' data-fetching={isFetching} style={{zIndex: 2}}>
                    <header>
                        <button className='mdl-button mdl-button--icon' data-focus='notification-center-close' onClick={onClosePanel}><i className="material-icons">{'clear'}</i></button>
                        <h1 onClick={onTitleClick}>{i18n.center}</h1>
                    </header>
                    {hasAddNotif && <NotificationAdd onAddClick={onAddClick} />}
                    {error && <NotificationError onDismiss={onDismissError} {...error}/>}
                    <NotificationGroup
                        data={unreadNotifs}
                        onGroupRead={onGroupRead}
                        onSingleRead={onSingleRead}
                        onSingleClick={onSingleClick} />
                </div>
            </div>
        );
    }
};
NotificationCenterPanel.displayName = 'NotificationCenterPanel';
NotificationCenterPanel.propTypes = {
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onDismissError: PropTypes.func.isRequired,
    hasAddNotif: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    unreadNotifs: PropTypes.array.isRequired,
    onGroupRead: PropTypes.func.isRequired,
    onSingleClick: PropTypes.func.isRequired,
    onSingleRead: PropTypes.func.isRequired,
    onClosePanel: PropTypes.func.isRequired,
    onTitleClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
    zIndex: PropTypes.number.isRequired
};
export default NotificationCenterPanel;
