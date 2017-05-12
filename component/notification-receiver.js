'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //Dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notificationReceived = require('./notification-received');

var _notificationReceived2 = _interopRequireDefault(_notificationReceived);

var _object = require('lodash/object');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationReceiver = function NotificationReceiver(_ref) {
    var data = _ref.data,
        onDismiss = _ref.onDismiss,
        zIndex = _ref.zIndex;

    var style = { zIndex: zIndex };
    return _react2.default.createElement(
        'ul',
        { 'data-focus': 'notification-receiver', style: style },
        (0, _object.values)(data).filter(function (notif) {
            return !notif.displayed;
        }).map(function (notif, id) {
            return _react2.default.createElement(_notificationReceived2.default, _extends({ key: id, onDismiss: onDismiss }, notif));
        })
    );
};

NotificationReceiver.displayName = 'NotificationReceiver';
NotificationReceiver.propTypes = {
    data: _react.PropTypes.object.isRequired,
    onDismiss: _react.PropTypes.func.isRequired,
    zIndex: _react.PropTypes.number.isRequired
};

exports.default = NotificationReceiver;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uUmVjZWl2ZXIiLCJkYXRhIiwib25EaXNtaXNzIiwiekluZGV4Iiwic3R5bGUiLCJmaWx0ZXIiLCJub3RpZiIsImRpc3BsYXllZCIsIm1hcCIsImlkIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tRQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsU0FBdkJBLG9CQUF1QixPQUErQjtBQUFBLFFBQTdCQyxJQUE2QixRQUE3QkEsSUFBNkI7QUFBQSxRQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsUUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUN4RCxRQUFNQyxRQUFRLEVBQUNELGNBQUQsRUFBZDtBQUNBLFdBQ0k7QUFBQTtBQUFBLFVBQUksY0FBVyx1QkFBZixFQUF1QyxPQUFPQyxLQUE5QztBQUNLLDRCQUFPSCxJQUFQLEVBQWFJLE1BQWIsQ0FBcUI7QUFBQSxtQkFBUyxDQUFDQyxNQUFNQyxTQUFoQjtBQUFBLFNBQXJCLEVBQWlEQyxHQUFqRCxDQUFxRCxVQUFDRixLQUFELEVBQVFHLEVBQVI7QUFBQSxtQkFBZSx5RUFBc0IsS0FBS0EsRUFBM0IsRUFBK0IsV0FBV1AsU0FBMUMsSUFBeURJLEtBQXpELEVBQWY7QUFBQSxTQUFyRDtBQURMLEtBREo7QUFLSCxDQVBEOztBQVNBTixxQkFBcUJVLFdBQXJCLEdBQW1DLHNCQUFuQztBQUNBVixxQkFBcUJXLFNBQXJCLEdBQWlDO0FBQzdCVixVQUFNLGlCQUFVVyxNQUFWLENBQWlCQyxVQURNO0FBRTdCWCxlQUFXLGlCQUFVWSxJQUFWLENBQWVELFVBRkc7QUFHN0JWLFlBQVEsaUJBQVVZLE1BQVYsQ0FBaUJGO0FBSEksQ0FBakM7O2tCQU1lYixvQiIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCAsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uUmVjZWl2ZWQgZnJvbSAnLi9ub3RpZmljYXRpb24tcmVjZWl2ZWQnO1xyXG5pbXBvcnQge3ZhbHVlc30gZnJvbSAnbG9kYXNoL29iamVjdCc7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25SZWNlaXZlciA9ICh7ZGF0YSwgb25EaXNtaXNzLCB6SW5kZXh9KSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHt6SW5kZXh9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLXJlY2VpdmVyJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICB7dmFsdWVzKGRhdGEpLmZpbHRlciggbm90aWYgPT4gIW5vdGlmLmRpc3BsYXllZCApLm1hcCgobm90aWYsIGlkKSA9PiA8Tm90aWZpY2F0aW9uUmVjZWl2ZWQga2V5PXtpZH0gb25EaXNtaXNzPXtvbkRpc21pc3N9IHsuLi5ub3RpZn0gLz4pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG59O1xyXG5cclxuTm90aWZpY2F0aW9uUmVjZWl2ZXIuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uUmVjZWl2ZXInO1xyXG5Ob3RpZmljYXRpb25SZWNlaXZlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uUmVjZWl2ZXI7XHJcbiJdfQ==