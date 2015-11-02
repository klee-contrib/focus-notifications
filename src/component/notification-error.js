//Dependencies
import React, { Component , PropTypes} from 'react';

const propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
};

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
                    onClick={() => onDismiss()}
                >
                    <i className='material-icons'>clear</i>
                </button>
            </div>
        </div>
    );
};

NotificationError.propTypes = propTypes;
NotificationError.displayName = 'NotificationError';
export default NotificationError;
