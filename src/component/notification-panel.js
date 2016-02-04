//Dependencies
import React, { Component , PropTypes} from 'react';
import NotificationGroup from './notification-group';
import NotificationAdd from './notification-add';
import NotificationError from './notification-error';

import { addNotification, readNotification, readNotificationGroup, closeCenter } from '../actions';
import { fetchNotifications } from '../actions/fetch-notifications';
import {getConfig} from '../config';
import CSSTransitionGroup from 'react-addons-css-transition-group';
const TRANSITION_TIMEOUT =  5000;

const propTypes = {
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

const NotificationCenterPanel = ({hasAddNotif,isFetching, unreadNotifs, onGroupRead, onSingleRead, onClosePanel, onSingleClick, onTitleClick, onAddClick, onDismissError, error, zIndex}) => {
    const style = {zIndex};
    const {i18n} = getConfig();
    return (

      <CSSTransitionGroup  transitionName='panel' transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div data-fetching={isFetching} data-focus='notification-center-panel' style={style}>
              <header>
                  <button className='mdl-button mdl-button--icon'  data-focus='notification-center-close' onClick={onClosePanel}>
                    <i className="material-icons">{'clear'}</i>
                  </button>
                  <h1 onClick={onTitleClick}>{`${i18n.center} (${unreadNotifs.length})`}</h1>
              </header>
              {
                  hasAddNotif &&
                  <NotificationAdd onAddClick={onAddClick} />
              }
              {
                  error &&
                  <NotificationError onDismiss={onDismissError} {...error}/>
              }
              <NotificationGroup
                  data={unreadNotifs}
                  onGroupRead={onGroupRead}
                  onSingleRead={onSingleRead}
                  onSingleClick={onSingleClick}
              />
        </div>
        </CSSTransitionGroup>
    );
};

NotificationCenterPanel.propTypes = propTypes;

export default NotificationCenterPanel;
