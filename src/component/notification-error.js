//Dependencies
import React, { Component , PropTypes} from 'react';

const propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.func.isRequired
};

const NotificationError = ({type, content}) => {
    return (
        <div data-focus='notification-error' data-type={type}>
            {content}
        </div>
    );
};

NotificationError.propTypes = propTypes;
NotificationError.displayName = 'NotificationError';
export default NotificationError;
