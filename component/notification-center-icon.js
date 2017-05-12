'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //Dependencies


var NotificationCenterIcon = function (_PureComponent) {
    _inherits(NotificationCenterIcon, _PureComponent);

    function NotificationCenterIcon() {
        _classCallCheck(this, NotificationCenterIcon);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    NotificationCenterIcon.prototype.render = function render() {
        var _props = this.props,
            iconName = _props.iconName,
            number = _props.number,
            openCenter = _props.openCenter;

        var displayedNumber = number > 99 ? '99' : number;
        var conditionnalProps = number > 0 ? { 'data-badge': displayedNumber } : {};
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'notification-center-icon' },
            _react2.default.createElement(
                'span',
                _extends({ className: 'material-icons mdl-badge' }, conditionnalProps, { onClick: openCenter }),
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    iconName
                )
            ),
            _react2.default.createElement('span', { id: 'notification-center-icon' }),
            _react2.default.createElement(
                'div',
                { className: 'mdl-tooltip mdl-tooltip--large', htmlFor: 'notification-center-icon' },
                'you have ' + number + ' notifications'
            )
        );
    };

    return NotificationCenterIcon;
}(_react.PureComponent);

NotificationCenterIcon.displayName = 'NotificationCenterIcon';
NotificationCenterIcon.propTypes = {
    iconName: _react.PropTypes.string,
    number: _react.PropTypes.number.isRequired,
    openCenter: _react.PropTypes.func.isRequired
};
NotificationCenterIcon.defaultProps = {
    iconName: 'notifications_none',
    hasDate: true
};
exports.default = NotificationCenterIcon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uQ2VudGVySWNvbiIsInJlbmRlciIsInByb3BzIiwiaWNvbk5hbWUiLCJudW1iZXIiLCJvcGVuQ2VudGVyIiwiZGlzcGxheWVkTnVtYmVyIiwiY29uZGl0aW9ubmFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiaGFzRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OytlQURBOzs7SUFHTUEsc0I7Ozs7Ozs7OztxQ0FDRkMsTSxxQkFBUztBQUFBLHFCQUNrQyxLQUFLQyxLQUR2QztBQUFBLFlBQ0VDLFFBREYsVUFDRUEsUUFERjtBQUFBLFlBQ1lDLE1BRFosVUFDWUEsTUFEWjtBQUFBLFlBQ29CQyxVQURwQixVQUNvQkEsVUFEcEI7O0FBRUwsWUFBTUMsa0JBQWtCRixTQUFTLEVBQVQsR0FBYyxJQUFkLEdBQXFCQSxNQUE3QztBQUNBLFlBQU1HLG9CQUFvQkgsU0FBUyxDQUFULEdBQWEsRUFBQyxjQUFjRSxlQUFmLEVBQWIsR0FBK0MsRUFBekU7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsMEJBQWhCO0FBQ0k7QUFBQTtBQUFBLDJCQUFNLFdBQVUsMEJBQWhCLElBQStDQyxpQkFBL0MsSUFBa0UsU0FBU0YsVUFBM0U7QUFDSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxnQkFBYjtBQUErQkY7QUFBL0I7QUFESixhQURKO0FBSUksb0RBQU0sSUFBRywwQkFBVCxHQUpKO0FBS0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsZ0NBQWYsRUFBZ0QsU0FBUSwwQkFBeEQ7QUFBQSw4QkFBZ0dDLE1BQWhHO0FBQUE7QUFMSixTQURKO0FBU0gsSzs7Ozs7QUFFTEosdUJBQXVCUSxXQUF2QixHQUFxQyx3QkFBckM7QUFDQVIsdUJBQXVCUyxTQUF2QixHQUFtQztBQUMvQk4sY0FBVSxpQkFBVU8sTUFEVztBQUUvQk4sWUFBUSxpQkFBVUEsTUFBVixDQUFpQk8sVUFGTTtBQUcvQk4sZ0JBQVksaUJBQVVPLElBQVYsQ0FBZUQ7QUFISSxDQUFuQztBQUtBWCx1QkFBdUJhLFlBQXZCLEdBQXNDO0FBQ2xDVixjQUFVLG9CQUR3QjtBQUVsQ1csYUFBUztBQUZ5QixDQUF0QztrQkFJZWQsc0IiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzXHJcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgTm90aWZpY2F0aW9uQ2VudGVySWNvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpY29uTmFtZSwgbnVtYmVyLCBvcGVuQ2VudGVyfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheWVkTnVtYmVyID0gbnVtYmVyID4gOTkgPyAnOTknIDogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbm5hbFByb3BzID0gbnVtYmVyID4gMCA/IHsnZGF0YS1iYWRnZSc6IGRpc3BsYXllZE51bWJlcn0gOiB7fTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1jZW50ZXItaWNvbic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zIG1kbC1iYWRnZScgey4uLmNvbmRpdGlvbm5hbFByb3BzfSBvbkNsaWNrPXtvcGVuQ2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz57aWNvbk5hbWV9PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J25vdGlmaWNhdGlvbi1jZW50ZXItaWNvbic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kbC10b29sdGlwIG1kbC10b29sdGlwLS1sYXJnZScgaHRtbEZvcj0nbm90aWZpY2F0aW9uLWNlbnRlci1pY29uJz57YHlvdSBoYXZlICR7bnVtYmVyfSBub3RpZmljYXRpb25zYH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5Ob3RpZmljYXRpb25DZW50ZXJJY29uLmRpc3BsYXlOYW1lID0gJ05vdGlmaWNhdGlvbkNlbnRlckljb24nO1xyXG5Ob3RpZmljYXRpb25DZW50ZXJJY29uLnByb3BUeXBlcyA9IHtcclxuICAgIGljb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBvcGVuQ2VudGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcbk5vdGlmaWNhdGlvbkNlbnRlckljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWNvbk5hbWU6ICdub3RpZmljYXRpb25zX25vbmUnLFxyXG4gICAgaGFzRGF0ZTogdHJ1ZVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkNlbnRlckljb247XHJcbiJdfQ==