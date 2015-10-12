//Dependencies
import React, { Component , PropTypes} from 'react';

/**
* Component use for uploading files.
*/
class Notification extends Component {
    /** @inheritdoc */
    constructor(props) {
        super(props);
    }
    render(){
        const {author, date, content, title, type} = this.props;
        return (
            <div data-focus='notification' data-type={type}>
                <h2>{title}</h2>
                <div>{content}</div>
                <div>{date}</div>
            </div>
        );
    }
}

Notification.displayName = 'Notification';
Notification.propTypes = {
    content: PropTypes.string,
    date: PropTypes.date
};
export default Notification;
