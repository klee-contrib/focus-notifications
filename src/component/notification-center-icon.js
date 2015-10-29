//Dependencies
import React, { Component , PropTypes} from 'react';
const propTypes = {
    number: PropTypes.number.isRequired,
    openCenter: PropTypes.func.isRequired
};

const NotificationCenterIcon = ({number, openCenter}) => {
    return (
        <div data-focus='notification-center-icon'>
            <span className='material-icons mdl-badge' data-badge={number} onClick={openCenter}>
                add_alert
            </span>
            <span id='notification-center-icon'></span>
            <div className='mdl-tooltip mdl-tooltip--large' htmlFor='notification-center-icon'>{`you have ${number} notifications`}</div>
        </div>
    );
};

NotificationCenterIcon.propTypes = propTypes;
NotificationCenterIcon.displayName = 'NotificationCenterIcon';
NotificationCenterIcon.defaultProps = {
    hasDate: true
}
export default NotificationCenterIcon;
