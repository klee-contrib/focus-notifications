//Dependencies
import React, {PropTypes} from 'react';

const NotificationError = ({type, content, onDismiss}) => {
    return (
        <div data-focus='notification-error' data-type={type}>
            <div data-focus='notification-error--icon'><i className='material-icons'>signal_cellular_connected_no_internet_4_bar</i></div>
            <div data-focus='notification-error--content'>
                {content}
            </div>
            <div data-focus='notification-error--action'>
                <button
                    className='mdl-button mdl-js-button mdl-button--icon'
                    onClick={() => onDismiss()}>
                    <i className='material-icons'>clear</i>
                </button>
            </div>
        </div>
    );
};

NotificationError.displayName = 'NotificationError';
NotificationError.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
};
export default NotificationError;
