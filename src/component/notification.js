//Dependencies
import React, {PropTypes, PureComponent} from 'react';
import {getConfig} from '../config';

function translateDate(date) {
    const {translateDate} = getConfig();
    return translateDate(date);
}

class Notification extends PureComponent {
    render() {
        const {creationDate, content, hasDate, icon, onClick, onRead, uuid, sender, targetUrl, title, type} = this.props;
        return (
            <li data-focus='notification' data-type={type} onClick={()=>{ onClick({targetUrl})}}>
                {icon && <div data-focus='notification-icon'><img src={icon}/></div>}
                <div data-focus='notification-body' >
                    <h4 data-focus='notification-title'>{title}</h4>
                    <div data-focus='notification-content'>{content}</div>
                </div>
                {hasDate &&
                    <div data-focus='notification-date'>
                        <button className='mdl-button mdl-js-button mdl-button--icon' onClick={() => onRead(uuid)}>
                            <i className='material-icons'>done</i>
                        </button>
                        <div>{translateDate(creationDate)}</div>
                    </div>
                }
            </li>
        );
    };
}

Notification.displayName = 'Notification';
Notification.propTypes = {
    hasDate: PropTypes.bool,
    uuid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    targetUrl: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onRead: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};
Notification.defaultProps = {
    hasDate: true
}
export default Notification;
