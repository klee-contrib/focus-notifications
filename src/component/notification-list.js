//Dependencies
import React, { Component , PropTypes} from 'react';
import Notification from './notification';
const propTypes = {
    data: PropTypes.array,
    onClick: PropTypes.func.isRequired
};

const NotificationList = ({data, onRead, onClick}) => {
    return (
        <ul data-focus='notification-list'>
            {data.map((notif, id) => <Notification key={id} onRead={onRead} onClick={onClick} {...notif} />)}
        </ul>
    );
};

NotificationList.propTypes = propTypes;

export default NotificationList;
