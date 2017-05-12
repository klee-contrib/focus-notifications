'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationError = function NotificationError(_ref) {
    var type = _ref.type,
        content = _ref.content,
        onDismiss = _ref.onDismiss;

    return _react2.default.createElement(
        'div',
        { 'data-focus': 'notification-error', 'data-type': type },
        _react2.default.createElement(
            'div',
            { 'data-focus': 'notification-error--icon' },
            _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'signal_cellular_connected_no_internet_4_bar'
            )
        ),
        _react2.default.createElement(
            'div',
            { 'data-focus': 'notification-error--content' },
            content
        ),
        _react2.default.createElement(
            'div',
            { 'data-focus': 'notification-error--action' },
            _react2.default.createElement(
                'button',
                {
                    className: 'mdl-button mdl-js-button mdl-button--icon',
                    onClick: function onClick() {
                        return onDismiss();
                    } },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'clear'
                )
            )
        )
    );
}; //Dependencies


NotificationError.displayName = 'NotificationError';
NotificationError.propTypes = {
    type: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    onDismiss: _react.PropTypes.func.isRequired
};
exports.default = NotificationError;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uRXJyb3IiLCJ0eXBlIiwiY29udGVudCIsIm9uRGlzbWlzcyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUFnQztBQUFBLFFBQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxRQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsUUFBZkMsU0FBZSxRQUFmQSxTQUFlOztBQUN0RCxXQUNJO0FBQUE7QUFBQSxVQUFLLGNBQVcsb0JBQWhCLEVBQXFDLGFBQVdGLElBQWhEO0FBQ0k7QUFBQTtBQUFBLGNBQUssY0FBVywwQkFBaEI7QUFBMkM7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBQTNDLFNBREo7QUFFSTtBQUFBO0FBQUEsY0FBSyxjQUFXLDZCQUFoQjtBQUNLQztBQURMLFNBRko7QUFLSTtBQUFBO0FBQUEsY0FBSyxjQUFXLDRCQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUNJLCtCQUFVLDJDQURkO0FBRUksNkJBQVM7QUFBQSwrQkFBTUMsV0FBTjtBQUFBLHFCQUZiO0FBR0k7QUFBQTtBQUFBLHNCQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBSEo7QUFESjtBQUxKLEtBREo7QUFlSCxDQWhCRCxDLENBSEE7OztBQXFCQUgsa0JBQWtCSSxXQUFsQixHQUFnQyxtQkFBaEM7QUFDQUosa0JBQWtCSyxTQUFsQixHQUE4QjtBQUMxQkosVUFBTSxpQkFBVUssTUFBVixDQUFpQkMsVUFERztBQUUxQkwsYUFBUyxpQkFBVUksTUFBVixDQUFpQkMsVUFGQTtBQUcxQkosZUFBVyxpQkFBVUssSUFBVixDQUFlRDtBQUhBLENBQTlCO2tCQUtlUCxpQiIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25FcnJvciA9ICh7dHlwZSwgY29udGVudCwgb25EaXNtaXNzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1lcnJvcicgZGF0YS10eXBlPXt0eXBlfT5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tZXJyb3ItLWljb24nPjxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnNpZ25hbF9jZWxsdWxhcl9jb25uZWN0ZWRfbm9faW50ZXJuZXRfNF9iYXI8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWVycm9yLS1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tZXJyb3ItLWFjdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRpc21pc3MoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+Y2xlYXI8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuTm90aWZpY2F0aW9uRXJyb3IuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uRXJyb3InO1xyXG5Ob3RpZmljYXRpb25FcnJvci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uRXJyb3I7XHJcbiJdfQ==