//Dependencies
import React, { Component , PropTypes} from 'react';
import shorten from '../util/shorten';
const propTypes = {
    hasDate: PropTypes.bool,
    uuid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    dismissTimerDuration: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    targetUrl: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
};
const {setTimeout} = window;
class NotificationReceived extends Component {
    componentDidMount() {
        const {uuid, onDismiss, dismissTimerDuration} = this.props;
        setTimeout(() => {
            onDismiss(uuid);
        }, dismissTimerDuration);
    }
    render() {
        const {sender, creationDate, content, title, type, icon, targetUrl, hasDate, onDismiss, uuid} = this.props;
        return (
            <li data-focus='notification-received' data-type={type} className='fade-in'>
                {icon && <div data-focus='notification-icon'><img src={icon} /></div>}
                <div data-focus='notification-body'>
                    <h4 data-focus='notification-title'>{title}</h4>
                    <div data-focus='notification-content'>{shorten(content, 150)}</div>
                </div>
                <div data-focus='notification-action'>
                    <button className='mdl-button mdl-js-button mdl-button--icon' onClick={() => onDismiss(uuid)}>
                        <i className='material-icons'>{'clear'}</i>
                    </button>
                </div>

            </li>
        );
    }
}
NotificationReceived.defaultProps = {
    dismissTimerDuration: 5*1000 //5 sec
}
NotificationReceived.propTypes = propTypes;
NotificationReceived.displayName = 'NotificationReceived';

export default NotificationReceived;
