//Dependencies
import React, { Component , PropTypes} from 'react';
import moment from 'moment';
import {notification as notificationStyle} from './style';
const propTypes = {
    uuid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    targetUrl: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

const Notification = ({sender, creationDate, content, title, type, icon, targetUrl}) => {
    const {style, iconStyle, contentStyle, headerStyle, bodyStyle, dateStyle} = notificationStyle;
    return (
        <div data-focus='notification' data-type={type} style={style}>
            <img src={icon} style={iconStyle}/>
            <div style={bodyStyle}>
                <h3 style={headerStyle}>{title}</h3>
                <div style={dateStyle}>{moment(creationDate).fromNow()}</div>
                <div style={contentStyle}>{content}</div>
            </div>
        </div>
    );
};

Notification.propTypes = propTypes;
Notification.displayName = 'Notification';

export default Notification;
