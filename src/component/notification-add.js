import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
export default class AddNotification extends Component {
    handleClick(e) {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick({content: text, author: 'joe.lopez@gmail.com', title: 'title', date: new Date().toISOString()});
        node.value = '';
    }
    render() {
        return (
            <div>
                <input ref='input' type='text' />
                <button onClick={(e) => this.handleClick(e)}>Add</button>
            </div>
        );
    }

}
AddNotification.displayName = 'AddNotification';
AddNotification.propTypes = {
    onAddClick: PropTypes.func.isRequired
};
