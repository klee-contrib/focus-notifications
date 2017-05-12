'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //Dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    data: _react.PropTypes.array,
    onClick: _react.PropTypes.func.isRequired
};

var NotificationList = function NotificationList(_ref) {
    var data = _ref.data,
        onRead = _ref.onRead,
        onClick = _ref.onClick;

    return _react2.default.createElement(
        'ul',
        { 'data-focus': 'notification-list' },
        data.map(function (notif, id) {
            return _react2.default.createElement(_notification2.default, _extends({ key: id, onRead: onRead, onClick: onClick }, notif));
        })
    );
};

NotificationList.propTypes = propTypes;

exports.default = NotificationList;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiZGF0YSIsImFycmF5Iiwib25DbGljayIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiTm90aWZpY2F0aW9uTGlzdCIsIm9uUmVhZCIsIm1hcCIsIm5vdGlmIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7OztrUUFBQTs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTUEsWUFBWTtBQUNkQyxVQUFNLGlCQUFVQyxLQURGO0FBRWRDLGFBQVMsaUJBQVVDLElBQVYsQ0FBZUM7QUFGVixDQUFsQjs7QUFLQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixPQUE2QjtBQUFBLFFBQTNCTCxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxRQUFyQk0sTUFBcUIsUUFBckJBLE1BQXFCO0FBQUEsUUFBYkosT0FBYSxRQUFiQSxPQUFhOztBQUNsRCxXQUNJO0FBQUE7QUFBQSxVQUFJLGNBQVcsbUJBQWY7QUFDS0YsYUFBS08sR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBUUMsRUFBUjtBQUFBLG1CQUFlLGlFQUFjLEtBQUtBLEVBQW5CLEVBQXVCLFFBQVFILE1BQS9CLEVBQXVDLFNBQVNKLE9BQWhELElBQTZETSxLQUE3RCxFQUFmO0FBQUEsU0FBVDtBQURMLEtBREo7QUFLSCxDQU5EOztBQVFBSCxpQkFBaUJOLFNBQWpCLEdBQTZCQSxTQUE3Qjs7a0JBRWVNLGdCIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlcGVuZGVuY2llc1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50ICwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25MaXN0ID0gKHtkYXRhLCBvblJlYWQsIG9uQ2xpY2t9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tbGlzdCc+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgobm90aWYsIGlkKSA9PiA8Tm90aWZpY2F0aW9uIGtleT17aWR9IG9uUmVhZD17b25SZWFkfSBvbkNsaWNrPXtvbkNsaWNrfSB7Li4ubm90aWZ9IC8+KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk5vdGlmaWNhdGlvbkxpc3QucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uTGlzdDtcclxuIl19