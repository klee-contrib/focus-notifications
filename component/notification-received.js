'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shorten = require('../util/shorten');

var _shorten2 = _interopRequireDefault(_shorten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //Dependencies


var propTypes = {
    hasDate: _react.PropTypes.bool,
    uuid: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    title: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    creationDate: _react.PropTypes.string.isRequired,
    dismissTimerDuration: _react.PropTypes.number.isRequired,
    type: _react.PropTypes.string.isRequired,
    sender: _react.PropTypes.string.isRequired,
    targetUrl: _react.PropTypes.string.isRequired,
    icon: _react.PropTypes.string.isRequired,
    onDismiss: _react.PropTypes.func.isRequired
};
var _window = window,
    setTimeout = _window.setTimeout;

var NotificationReceived = function (_Component) {
    _inherits(NotificationReceived, _Component);

    function NotificationReceived() {
        _classCallCheck(this, NotificationReceived);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    NotificationReceived.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props,
            uuid = _props.uuid,
            onDismiss = _props.onDismiss,
            dismissTimerDuration = _props.dismissTimerDuration;

        setTimeout(function () {
            onDismiss(uuid);
        }, dismissTimerDuration);
    };

    NotificationReceived.prototype.render = function render() {
        var _props2 = this.props,
            sender = _props2.sender,
            creationDate = _props2.creationDate,
            content = _props2.content,
            title = _props2.title,
            type = _props2.type,
            icon = _props2.icon,
            targetUrl = _props2.targetUrl,
            hasDate = _props2.hasDate,
            onDismiss = _props2.onDismiss,
            uuid = _props2.uuid;

        return _react2.default.createElement(
            'li',
            { 'data-focus': 'notification-received', 'data-type': type, className: 'fade-in' },
            icon && _react2.default.createElement(
                'div',
                { 'data-focus': 'notification-icon' },
                _react2.default.createElement('img', { src: icon })
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'notification-body' },
                _react2.default.createElement(
                    'h4',
                    { 'data-focus': 'notification-title' },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { 'data-focus': 'notification-content' },
                    (0, _shorten2.default)(content, 150)
                )
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'notification-action' },
                _react2.default.createElement(
                    'button',
                    { className: 'mdl-button mdl-js-button mdl-button--icon', onClick: function onClick() {
                            return onDismiss(uuid);
                        } },
                    _react2.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'clear'
                    )
                )
            )
        );
    };

    return NotificationReceived;
}(_react.Component);

NotificationReceived.defaultProps = {
    dismissTimerDuration: 5 * 1000 //5 sec
};
NotificationReceived.propTypes = propTypes;
NotificationReceived.displayName = 'NotificationReceived';

exports.default = NotificationReceived;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaGFzRGF0ZSIsImJvb2wiLCJ1dWlkIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwiY29udGVudCIsImNyZWF0aW9uRGF0ZSIsImRpc21pc3NUaW1lckR1cmF0aW9uIiwidHlwZSIsInNlbmRlciIsInRhcmdldFVybCIsImljb24iLCJvbkRpc21pc3MiLCJmdW5jIiwid2luZG93Iiwic2V0VGltZW91dCIsIk5vdGlmaWNhdGlvblJlY2VpdmVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsInJlbmRlciIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7K2VBRkE7OztBQUdBLElBQU1BLFlBQVk7QUFDZEMsYUFBUyxpQkFBVUMsSUFETDtBQUVkQyxVQUFNLGlCQUFVQyxTQUFWLENBQW9CLENBQUMsaUJBQVVDLE1BQVgsRUFBbUIsaUJBQVVDLE1BQTdCLENBQXBCLEVBQTBEQyxVQUZsRDtBQUdkQyxXQUFPLGlCQUFVSCxNQUFWLENBQWlCRSxVQUhWO0FBSWRFLGFBQVMsaUJBQVVKLE1BQVYsQ0FBaUJFLFVBSlo7QUFLZEcsa0JBQWMsaUJBQVVMLE1BQVYsQ0FBaUJFLFVBTGpCO0FBTWRJLDBCQUFzQixpQkFBVUwsTUFBVixDQUFpQkMsVUFOekI7QUFPZEssVUFBTSxpQkFBVVAsTUFBVixDQUFpQkUsVUFQVDtBQVFkTSxZQUFRLGlCQUFVUixNQUFWLENBQWlCRSxVQVJYO0FBU2RPLGVBQVcsaUJBQVVULE1BQVYsQ0FBaUJFLFVBVGQ7QUFVZFEsVUFBTSxpQkFBVVYsTUFBVixDQUFpQkUsVUFWVDtBQVdkUyxlQUFXLGlCQUFVQyxJQUFWLENBQWVWO0FBWFosQ0FBbEI7Y0FhcUJXLE07SUFBZEMsVSxXQUFBQSxVOztJQUNEQyxvQjs7Ozs7Ozs7O21DQUNGQyxpQixnQ0FBb0I7QUFBQSxxQkFDZ0MsS0FBS0MsS0FEckM7QUFBQSxZQUNUbkIsSUFEUyxVQUNUQSxJQURTO0FBQUEsWUFDSGEsU0FERyxVQUNIQSxTQURHO0FBQUEsWUFDUUwsb0JBRFIsVUFDUUEsb0JBRFI7O0FBRWhCUSxtQkFBVyxZQUFNO0FBQ2JILHNCQUFVYixJQUFWO0FBQ0gsU0FGRCxFQUVHUSxvQkFGSDtBQUdILEs7O21DQUNEWSxNLHFCQUFTO0FBQUEsc0JBQzJGLEtBQUtELEtBRGhHO0FBQUEsWUFDRVQsTUFERixXQUNFQSxNQURGO0FBQUEsWUFDVUgsWUFEVixXQUNVQSxZQURWO0FBQUEsWUFDd0JELE9BRHhCLFdBQ3dCQSxPQUR4QjtBQUFBLFlBQ2lDRCxLQURqQyxXQUNpQ0EsS0FEakM7QUFBQSxZQUN3Q0ksSUFEeEMsV0FDd0NBLElBRHhDO0FBQUEsWUFDOENHLElBRDlDLFdBQzhDQSxJQUQ5QztBQUFBLFlBQ29ERCxTQURwRCxXQUNvREEsU0FEcEQ7QUFBQSxZQUMrRGIsT0FEL0QsV0FDK0RBLE9BRC9EO0FBQUEsWUFDd0VlLFNBRHhFLFdBQ3dFQSxTQUR4RTtBQUFBLFlBQ21GYixJQURuRixXQUNtRkEsSUFEbkY7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSSxjQUFXLHVCQUFmLEVBQXVDLGFBQVdTLElBQWxELEVBQXdELFdBQVUsU0FBbEU7QUFDS0csb0JBQVE7QUFBQTtBQUFBLGtCQUFLLGNBQVcsbUJBQWhCO0FBQW9DLHVEQUFLLEtBQUtBLElBQVY7QUFBcEMsYUFEYjtBQUVJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLG1CQUFoQjtBQUNJO0FBQUE7QUFBQSxzQkFBSSxjQUFXLG9CQUFmO0FBQXFDUDtBQUFyQyxpQkFESjtBQUVJO0FBQUE7QUFBQSxzQkFBSyxjQUFXLHNCQUFoQjtBQUF3QywyQ0FBUUMsT0FBUixFQUFpQixHQUFqQjtBQUF4QztBQUZKLGFBRko7QUFNSTtBQUFBO0FBQUEsa0JBQUssY0FBVyxxQkFBaEI7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBVSwyQ0FBbEIsRUFBOEQsU0FBUztBQUFBLG1DQUFNTyxVQUFVYixJQUFWLENBQU47QUFBQSx5QkFBdkU7QUFDSTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUErQjtBQUEvQjtBQURKO0FBREo7QUFOSixTQURKO0FBZUgsSzs7Ozs7QUFFTGlCLHFCQUFxQkksWUFBckIsR0FBb0M7QUFDaENiLDBCQUFzQixJQUFFLElBRFEsQ0FDSDtBQURHLENBQXBDO0FBR0FTLHFCQUFxQnBCLFNBQXJCLEdBQWlDQSxTQUFqQztBQUNBb0IscUJBQXFCSyxXQUFyQixHQUFtQyxzQkFBbkM7O2tCQUVlTCxvQiIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCAsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc2hvcnRlbiBmcm9tICcuLi91dGlsL3Nob3J0ZW4nO1xyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgICBoYXNEYXRlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHV1aWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNyZWF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGlzbWlzc1RpbWVyRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHNlbmRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdGFyZ2V0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuY29uc3Qge3NldFRpbWVvdXR9ID0gd2luZG93O1xyXG5jbGFzcyBOb3RpZmljYXRpb25SZWNlaXZlZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7dXVpZCwgb25EaXNtaXNzLCBkaXNtaXNzVGltZXJEdXJhdGlvbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBvbkRpc21pc3ModXVpZCk7XHJcbiAgICAgICAgfSwgZGlzbWlzc1RpbWVyRHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZW5kZXIsIGNyZWF0aW9uRGF0ZSwgY29udGVudCwgdGl0bGUsIHR5cGUsIGljb24sIHRhcmdldFVybCwgaGFzRGF0ZSwgb25EaXNtaXNzLCB1dWlkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1yZWNlaXZlZCcgZGF0YS10eXBlPXt0eXBlfSBjbGFzc05hbWU9J2ZhZGUtaW4nPlxyXG4gICAgICAgICAgICAgICAge2ljb24gJiYgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24taWNvbic+PGltZyBzcmM9e2ljb259IC8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi10aXRsZSc+e3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY29udGVudCc+e3Nob3J0ZW4oY29udGVudCwgMTUwKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tYWN0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb24nIG9uQ2xpY2s9eygpID0+IG9uRGlzbWlzcyh1dWlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnsnY2xlYXInfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbk5vdGlmaWNhdGlvblJlY2VpdmVkLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc21pc3NUaW1lckR1cmF0aW9uOiA1KjEwMDAgLy81IHNlY1xyXG59XHJcbk5vdGlmaWNhdGlvblJlY2VpdmVkLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuTm90aWZpY2F0aW9uUmVjZWl2ZWQuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uUmVjZWl2ZWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uUmVjZWl2ZWQ7XHJcbiJdfQ==