//Dependencies
import React, {PropTypes, PureComponent} from 'react';

class NotificationCenterIcon extends PureComponent {
    render() {
        const {iconName, number, openCenter} = this.props;
        const displayedNumber = number > 99 ? '99' : number;
        const conditionnalProps = number > 0 ? {'data-badge': displayedNumber} : {};
        return (
            <div data-focus='notification-center-icon'>
                <span className='material-icons mdl-badge' {...conditionnalProps} onClick={openCenter}>
                    <i className='material-icons'>{iconName}</i>
                </span>
                <span id='notification-center-icon'></span>
                <div className='mdl-tooltip mdl-tooltip--large' htmlFor='notification-center-icon'>{`you have ${number} notifications`}</div>
            </div>
        );
    }
}
NotificationCenterIcon.displayName = 'NotificationCenterIcon';
NotificationCenterIcon.propTypes = {
    iconName: PropTypes.string,
    number: PropTypes.number.isRequired,
    openCenter: PropTypes.func.isRequired
};
NotificationCenterIcon.defaultProps = {
    iconName: 'notifications_none',
    hasDate: true
}
export default NotificationCenterIcon;
