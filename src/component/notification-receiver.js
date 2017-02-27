//Dependencies
import React, { Component , PropTypes} from 'react';
import NotificationReceived from './notification-received';
import {values} from 'lodash/object';

const NotificationReceiver = ({data, onDismiss, zIndex}) => {
    const style = {zIndex};
    return (
        <ul data-focus='notification-receiver' style={style}>
            {values(data).filter( notif => !notif.displayed ).map((notif, id) => <NotificationReceived key={id} onDismiss={onDismiss} {...notif} />)}
        </ul>
    );
};

NotificationReceiver.displayName = 'NotificationReceiver';
NotificationReceiver.propTypes = {
    data: PropTypes.object.isRequired,
    onDismiss: PropTypes.func.isRequired,
    zIndex: PropTypes.number.isRequired
};

export default NotificationReceiver;
