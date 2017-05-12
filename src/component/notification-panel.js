import React, {PropTypes, PureComponent} from 'react';
import NotificationGroup from './notification-group';
import NotificationAdd from './notification-add';
import NotificationError from './notification-error';

import { addNotification, readNotification, readNotificationGroup, closeCenter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';
import {getConfig} from '../config';

function translate(key) {
    const {translateText} = getConfig();
    return translateText(key);
}

class NotificationCenterPanel extends PureComponent {
    constructor(props) {
        super(props);
        this._hideBodyOverflow = this._hideBodyOverflow.bind(this);
        this._restoreBodyOverflow = this._restoreBodyOverflow.bind(this);
        this._onClosePanel = this._onClosePanel.bind(this);
    }
    componentDidMount() {
        this._hideBodyOverflow();
    }
    /**
    * Store the body overgflow property, and set it to hidden
    */
    _hideBodyOverflow() {
        document.body.style['overflow-y'] = 'hidden';
    }
    /**
    * Restore body overflow property
    */
    _restoreBodyOverflow() {
        document.body.style['overflow-y'] = 'auto';
    }
    _onClosePanel(evt) {
        const {onClosePanel} = this.props;
        onClosePanel(evt);
        this._restoreBodyOverflow();
    }
    render() {
        const {hasAddNotif, isFetching, unreadNotifs, onGroupRead, onSingleRead, onSingleClick, onTitleClick, onAddClick, onDismissError, error, zIndex, panelHeader, panelFooter} = this.props;
        const {translateText} = getConfig();
        const hasNotifications = unreadNotifs.length > 0;
        return (
            <div style={{zIndex, top: 0, right: 0, position: 'fixed'}}>
                <div data-focus='notification-center-overlay' className='fade-in' onClick={this._onClosePanel} style={{zIndex: 1}}></div>
                <div data-focus='notification-center-panel' className='bounce-in-right' data-fetching={isFetching} style={{zIndex: 2}}>
                    <header>
                        <button className='mdl-button mdl-button--icon' data-focus='notification-center-close' onClick={this._onClosePanel}><i className="material-icons">{'clear'}</i></button>
                        <h1 onClick={onTitleClick}>{translateText('focus.notifications.title')}</h1>
                        {panelHeader && panelHeader}
                    </header>
                    {hasAddNotif && <NotificationAdd onAddClick={onAddClick} />}
                    {error && <NotificationError onDismiss={onDismissError} {...error}/>}
                    {hasNotifications &&
                        <NotificationGroup
                            data={unreadNotifs}
                            onGroupRead={onGroupRead}
                            onSingleRead={onSingleRead}
                            onSingleClick={onSingleClick} />
                    }
                    {!hasNotifications &&
                        <div className='no-notification'>{translate('focus.notifications.nothing')}</div>
                    }
                    {panelFooter && <footer>{panelFooter}</footer>}
                </div>
            </div>
        );
    }
}
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
