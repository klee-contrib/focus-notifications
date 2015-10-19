//Dependencies
import React, { Component , PropTypes} from 'react';
import Notification from './notification';
const propTypes = {
    data: PropTypes.array
};

const NotificationList = ({data, onRead}) => {
    return (
        <ul data-focus='notification-list'>
            {data.map((notif, id) => <Notification key={id} onRead={onRead} {...notif} />)}
        </ul>
    );
};

NotificationList.propTypes = propTypes;

export default NotificationList;
