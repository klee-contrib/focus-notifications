//Dependencies
import React, { Component , PropTypes} from 'react';
import moment from 'moment';
const propTypes = {
    hasDate: PropTypes.bool,
    uuid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    targetUrl: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onRead: PropTypes.func.isRequired
};

const Notification = ({sender, creationDate, content, title, type, icon, targetUrl, hasDate, onRead, uuid}) => {
    return (
        <li data-focus='notification' data-type={type}>
            <div data-focus='notification-icon'><img src={icon}/></div>
            <div data-focus='notification-body' >
                <h4 data-focus='notification-title'>{title}</h4>
                <div data-focus='notification-content'>{content}</div>
            </div>
            {hasDate &&
                <div data-focus='notification-date'>
                    <button className='mdl-button mdl-js-button mdl-button--icon' onClick={() => onRead(uuid)}>
                        <i className='material-icons'>done</i>
                    </button>
                    <div>{moment(creationDate).fromNow() }</div>
                </div>
            }
        </li>
    );
};

Notification.propTypes = propTypes;
Notification.displayName = 'Notification';
Notification.defaultProps = {
    hasDate: true
}
export default Notification;
