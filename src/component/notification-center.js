//Dependencies
import React, { Component , PropTypes} from 'react';
import NotificationList from './notification-list';

const NotificationCenter = ({notificationList}) => {
    return (
        <div data-focus='notification-center'>
            <NotificationList data={notificationList} />
        </div>
    );
};

export default NotificationCenter;
