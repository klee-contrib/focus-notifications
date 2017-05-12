'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notificationCenterIcon = require('./notification-center-icon');

var _notificationCenterIcon2 = _interopRequireDefault(_notificationCenterIcon);

var _notificationReceiver = require('./notification-receiver');

var _notificationReceiver2 = _interopRequireDefault(_notificationReceiver);

var _notificationPanel = require('./notification-panel');

var _notificationPanel2 = _interopRequireDefault(_notificationPanel);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _deleteNotification = require('../actions/delete-notification');

var _fetchNotifications = require('../actions/fetch-notifications');

var _receiveNotifications = require('../actions/receive-notifications');

var _error = require('../actions/error');

var _polling = require('../util/polling');

var _polling2 = _interopRequireDefault(_polling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //Dependencies


// Notification center component
var NotificationCenter = function (_PureComponent) {
    _inherits(NotificationCenter, _PureComponent);

    function NotificationCenter() {
        _classCallCheck(this, NotificationCenter);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    NotificationCenter.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        //build a polling timeout.
        var _props = this.props,
            pollingTimer = _props.pollingTimer,
            dispatch = _props.dispatch;

        (0, _polling2.default)(function () {
            dispatch((0, _fetchNotifications.fetchNotifications)(null, _this2.lastFetch));
            _this2.lastFetch = new Date().toISOString();
        }, pollingTimer);
        dispatch((0, _fetchNotifications.fetchNotifications)());
        this.lastFetch = new Date().toISOString();
    };
    //componentWillUnMount() {
    //    clearTimeout(this.pollingTimeoutID)
    //}
    //Should be replaced by a promise.cancel


    NotificationCenter.prototype.render = function render() {
        var _props2 = this.props,
            dispatch = _props2.dispatch,
            hasAddNotif = _props2.hasAddNotif,
            notificationList = _props2.notificationList,
            iconName = _props2.iconName,
            isOpen = _props2.isOpen,
            isFetching = _props2.isFetching,
            notificationReceiver = _props2.notificationReceiver,
            onSingleClick = _props2.onSingleClick,
            error = _props2.error,
            zIndex = _props2.zIndex,
            panelHeader = _props2.panelHeader,
            panelFooter = _props2.panelFooter;
        var notificationsReceived = notificationReceiver.notificationsReceived,
            hasFetchedOnce = notificationReceiver.hasFetchedOnce;

        //display only the undred notifications

        var unreadNotifs = notificationList.filter(function (n) {
            return !n.read;
        });
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'notification-center' },
            _react2.default.createElement(_notificationCenterIcon2.default, {
                iconName: iconName,
                number: unreadNotifs.length,
                openCenter: function openCenter() {
                    return dispatch((0, _actions.openCenter)());
                } }),
            !isOpen && hasFetchedOnce && _react2.default.createElement(_notificationReceiver2.default, {
                data: notificationsReceived,
                onDismiss: function onDismiss(notifId) {
                    return dispatch((0, _receiveNotifications.dismissNotification)(notifId));
                },
                zIndex: zIndex }),
            isOpen && _react2.default.createElement(_notificationPanel2.default, {
                error: error,
                hasAddNotif: hasAddNotif,
                isFetching: isFetching,
                onAddClick: function onAddClick(data) {
                    return dispatch((0, _actions.addNotification)(data));
                },
                onClosePanel: function onClosePanel() {
                    return dispatch((0, _actions.closeCenter)());
                },
                onDismissError: function onDismissError() {
                    return dispatch((0, _error.clearError)());
                },
                onSingleClick: onSingleClick,
                onGroupRead: function onGroupRead(data) {
                    return dispatch((0, _deleteNotification.deleteGroupNotification)(data));
                },
                onSingleRead: function onSingleRead(data) {
                    return dispatch((0, _deleteNotification.deleteNotification)(data));
                },
                onTitleClick: function onTitleClick() {
                    return dispatch((0, _fetchNotifications.fetchNotifications)());
                },
                unreadNotifs: unreadNotifs,
                zIndex: zIndex,
                panelHeader: panelHeader,
                panelFooter: panelFooter
            })
        );
    };

    return NotificationCenter;
}(_react.PureComponent);

NotificationCenter.displayName = 'NotificationCenter';
NotificationCenter.propTypes = {
    dispatch: _react.PropTypes.func,
    error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
    hasAddNotif: _react.PropTypes.bool,
    iconName: _react.PropTypes.string,
    isFetching: _react.PropTypes.bool,
    isOpen: _react.PropTypes.bool,
    notificationList: _react.PropTypes.array,
    notificationReceiver: _react.PropTypes.object,
    onSingleClick: _react.PropTypes.func.isRequired,
    pollingTimer: _react.PropTypes.number,
    zIndex: _react.PropTypes.number
};
NotificationCenter.defaultProps = {
    hasAddNotif: false,
    pollingTimer: 6 * 10 * 1000, //1 min
    zIndex: 16777271
};

// Select the notification from the state.
function selectNotifications(notificationList, filter) {
    return notificationList;
}

// Select the part of the state.
function select(state) {
    var notificationList = state.notificationList,
        visibilityFilter = state.visibilityFilter,
        otherStateProperties = _objectWithoutProperties(state, ['notificationList', 'visibilityFilter']);

    return _extends({
        //select the notification list from the state
        notificationList: selectNotifications(notificationList, visibilityFilter),
        visibilityFilter: visibilityFilter
    }, otherStateProperties);
}

// connect the notification center to the state.
exports.default = (0, _reactRedux.connect)(select)(NotificationCenter);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uQ2VudGVyIiwiY29tcG9uZW50V2lsbE1vdW50IiwicHJvcHMiLCJwb2xsaW5nVGltZXIiLCJkaXNwYXRjaCIsImxhc3RGZXRjaCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInJlbmRlciIsImhhc0FkZE5vdGlmIiwibm90aWZpY2F0aW9uTGlzdCIsImljb25OYW1lIiwiaXNPcGVuIiwiaXNGZXRjaGluZyIsIm5vdGlmaWNhdGlvblJlY2VpdmVyIiwib25TaW5nbGVDbGljayIsImVycm9yIiwiekluZGV4IiwicGFuZWxIZWFkZXIiLCJwYW5lbEZvb3RlciIsIm5vdGlmaWNhdGlvbnNSZWNlaXZlZCIsImhhc0ZldGNoZWRPbmNlIiwidW5yZWFkTm90aWZzIiwiZmlsdGVyIiwibiIsInJlYWQiLCJsZW5ndGgiLCJub3RpZklkIiwiZGF0YSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mVHlwZSIsImJvb2wiLCJvYmplY3QiLCJzdHJpbmciLCJhcnJheSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJzZWxlY3ROb3RpZmljYXRpb25zIiwic2VsZWN0Iiwic3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwib3RoZXJTdGF0ZVByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7K2VBWEE7OztBQWFBO0lBQ01BLGtCOzs7Ozs7Ozs7aUNBQ0ZDLGtCLGlDQUFxQjtBQUFBOztBQUNqQjtBQURpQixxQkFFZ0IsS0FBS0MsS0FGckI7QUFBQSxZQUVWQyxZQUZVLFVBRVZBLFlBRlU7QUFBQSxZQUVJQyxRQUZKLFVBRUlBLFFBRko7O0FBR2pCLCtCQUFRLFlBQU07QUFDVkEscUJBQVMsNENBQW1CLElBQW5C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QUpPO0FBSzNCdEIsZ0JBQVksaUJBQVVvQixJQUxLO0FBTTNCckIsWUFBUSxpQkFBVXFCLElBTlM7QUFPM0J2QixzQkFBa0IsaUJBQVUwQixLQVBEO0FBUTNCdEIsMEJBQXNCLGlCQUFVb0IsTUFSTDtBQVMzQm5CLG1CQUFlLGlCQUFVZ0IsSUFBVixDQUFlTSxVQVRIO0FBVTNCbEMsa0JBQWMsaUJBQVVtQyxNQVZHO0FBVzNCckIsWUFBUSxpQkFBVXFCO0FBWFMsQ0FBL0I7QUFhQXRDLG1CQUFtQnVDLFlBQW5CLEdBQWtDO0FBQzlCOUIsaUJBQWEsS0FEaUI7QUFFOUJOLGtCQUFjLElBQUcsRUFBSCxHQUFRLElBRlEsRUFFRjtBQUM1QmMsWUFBUTtBQUhzQixDQUFsQzs7QUFNQTtBQUNBLFNBQVN1QixtQkFBVCxDQUE2QjlCLGdCQUE3QixFQUErQ2EsTUFBL0MsRUFBdUQ7QUFDbkQsV0FBT2IsZ0JBQVA7QUFDSDs7QUFFRDtBQUNBLFNBQVMrQixNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBLFFBQ1poQyxnQkFEWSxHQUNtRGdDLEtBRG5ELENBQ1poQyxnQkFEWTtBQUFBLFFBQ01pQyxnQkFETixHQUNtREQsS0FEbkQsQ0FDTUMsZ0JBRE47QUFBQSxRQUMyQkMsb0JBRDNCLDRCQUNtREYsS0FEbkQ7O0FBRW5CO0FBQ0k7QUFDQWhDLDBCQUFrQjhCLG9CQUFvQjlCLGdCQUFwQixFQUFzQ2lDLGdCQUF0QyxDQUZ0QjtBQUdJQTtBQUhKLE9BSU9DLG9CQUpQO0FBTUg7O0FBRUQ7a0JBQ2UseUJBQVFILE1BQVIsRUFBZ0J6QyxrQkFBaEIsQyIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25DZW50ZXJJY29uIGZyb20gJy4vbm90aWZpY2F0aW9uLWNlbnRlci1pY29uJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblJlY2VpdmVyIGZyb20gJy4vbm90aWZpY2F0aW9uLXJlY2VpdmVyJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblBhbmVsIGZyb20gJy4vbm90aWZpY2F0aW9uLXBhbmVsJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7YWRkTm90aWZpY2F0aW9uLCBzZXRWaXNpYmlsaXR5RmlsdGVyLCBvcGVuQ2VudGVyLCBjbG9zZUNlbnRlciB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQge2RlbGV0ZU5vdGlmaWNhdGlvbiwgZGVsZXRlR3JvdXBOb3RpZmljYXRpb259IGZyb20gJy4uL2FjdGlvbnMvZGVsZXRlLW5vdGlmaWNhdGlvbidcclxuaW1wb3J0IHtmZXRjaE5vdGlmaWNhdGlvbnN9IGZyb20gJy4uL2FjdGlvbnMvZmV0Y2gtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7ZGlzbWlzc05vdGlmaWNhdGlvbn0gZnJvbSAnLi4vYWN0aW9ucy9yZWNlaXZlLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQge2NsZWFyRXJyb3J9IGZyb20gJy4uL2FjdGlvbnMvZXJyb3InO1xyXG5pbXBvcnQgcG9sbGluZyBmcm9tICcuLi91dGlsL3BvbGxpbmcnO1xyXG5cclxuLy8gTm90aWZpY2F0aW9uIGNlbnRlciBjb21wb25lbnRcclxuY2xhc3MgTm90aWZpY2F0aW9uQ2VudGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgLy9idWlsZCBhIHBvbGxpbmcgdGltZW91dC5cclxuICAgICAgICBjb25zdCB7cG9sbGluZ1RpbWVyLCBkaXNwYXRjaH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHBvbGxpbmcoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE5vdGlmaWNhdGlvbnMobnVsbCwgdGhpcy5sYXN0RmV0Y2gpKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0RmV0Y2ggPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfSwgcG9sbGluZ1RpbWVyKTtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaE5vdGlmaWNhdGlvbnMoKSk7XHJcbiAgICAgICAgdGhpcy5sYXN0RmV0Y2ggPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvL2NvbXBvbmVudFdpbGxVbk1vdW50KCkge1xyXG4gICAgLy8gICAgY2xlYXJUaW1lb3V0KHRoaXMucG9sbGluZ1RpbWVvdXRJRClcclxuICAgIC8vfVxyXG4gICAgLy9TaG91bGQgYmUgcmVwbGFjZWQgYnkgYSBwcm9taXNlLmNhbmNlbFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtkaXNwYXRjaCwgaGFzQWRkTm90aWYsIG5vdGlmaWNhdGlvbkxpc3QsIGljb25OYW1lLCBpc09wZW4sIGlzRmV0Y2hpbmcsIG5vdGlmaWNhdGlvblJlY2VpdmVyLCBvblNpbmdsZUNsaWNrLCBlcnJvciwgekluZGV4LCBwYW5lbEhlYWRlciwgcGFuZWxGb290ZXJ9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bm90aWZpY2F0aW9uc1JlY2VpdmVkLCBoYXNGZXRjaGVkT25jZX0gPSBub3RpZmljYXRpb25SZWNlaXZlcjtcclxuXHJcbiAgICAgICAgLy9kaXNwbGF5IG9ubHkgdGhlIHVuZHJlZCBub3RpZmljYXRpb25zXHJcbiAgICAgICAgY29uc3QgdW5yZWFkTm90aWZzID0gbm90aWZpY2F0aW9uTGlzdC5maWx0ZXIobiA9PiAhbi5yZWFkKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkNlbnRlckljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uTmFtZT17aWNvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXt1bnJlYWROb3RpZnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5DZW50ZXI9eygpID0+IGRpc3BhdGNoKG9wZW5DZW50ZXIoKSl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgeyFpc09wZW4gJiYgaGFzRmV0Y2hlZE9uY2UgJiZcclxuICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uUmVjZWl2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17bm90aWZpY2F0aW9uc1JlY2VpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M9e25vdGlmSWQgPT4gZGlzcGF0Y2goZGlzbWlzc05vdGlmaWNhdGlvbihub3RpZklkKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleD17ekluZGV4fSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FkZE5vdGlmPXtoYXNBZGROb3RpZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZz17aXNGZXRjaGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRDbGljaz17ZGF0YSA9PiBkaXNwYXRjaChhZGROb3RpZmljYXRpb24oZGF0YSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlUGFuZWw9eygpID0+IGRpc3BhdGNoKGNsb3NlQ2VudGVyKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3NFcnJvcj17KCkgPT4gZGlzcGF0Y2goY2xlYXJFcnJvcigpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TaW5nbGVDbGljaz17b25TaW5nbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Hcm91cFJlYWQ9e2RhdGEgPT4gZGlzcGF0Y2goZGVsZXRlR3JvdXBOb3RpZmljYXRpb24oZGF0YSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNpbmdsZVJlYWQ9e2RhdGEgPT4gZGlzcGF0Y2goZGVsZXRlTm90aWZpY2F0aW9uKGRhdGEpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UaXRsZUNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaE5vdGlmaWNhdGlvbnMoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVhZE5vdGlmcz17dW5yZWFkTm90aWZzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWxIZWFkZXI9e3BhbmVsSGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5lbEZvb3Rlcj17cGFuZWxGb290ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk5vdGlmaWNhdGlvbkNlbnRlci5kaXNwbGF5TmFtZSA9ICdOb3RpZmljYXRpb25DZW50ZXInO1xyXG5Ob3RpZmljYXRpb25DZW50ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgICBoYXNBZGROb3RpZjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpY29uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG5vdGlmaWNhdGlvbkxpc3Q6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIG5vdGlmaWNhdGlvblJlY2VpdmVyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25TaW5nbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHBvbGxpbmdUaW1lcjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlclxyXG59XHJcbk5vdGlmaWNhdGlvbkNlbnRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoYXNBZGROb3RpZjogZmFsc2UsXHJcbiAgICBwb2xsaW5nVGltZXI6IDYqIDEwICogMTAwMCwgLy8xIG1pblxyXG4gICAgekluZGV4OiAxNjc3NzI3MVxyXG59O1xyXG5cclxuLy8gU2VsZWN0IHRoZSBub3RpZmljYXRpb24gZnJvbSB0aGUgc3RhdGUuXHJcbmZ1bmN0aW9uIHNlbGVjdE5vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9uTGlzdCwgZmlsdGVyKSB7XHJcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uTGlzdDtcclxufVxyXG5cclxuLy8gU2VsZWN0IHRoZSBwYXJ0IG9mIHRoZSBzdGF0ZS5cclxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XHJcbiAgICBjb25zdCB7bm90aWZpY2F0aW9uTGlzdCwgdmlzaWJpbGl0eUZpbHRlciwgLi4ub3RoZXJTdGF0ZVByb3BlcnRpZXN9ID0gc3RhdGU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc2VsZWN0IHRoZSBub3RpZmljYXRpb24gbGlzdCBmcm9tIHRoZSBzdGF0ZVxyXG4gICAgICAgIG5vdGlmaWNhdGlvbkxpc3Q6IHNlbGVjdE5vdGlmaWNhdGlvbnMobm90aWZpY2F0aW9uTGlzdCwgdmlzaWJpbGl0eUZpbHRlciksXHJcbiAgICAgICAgdmlzaWJpbGl0eUZpbHRlcixcclxuICAgICAgICAuLi5vdGhlclN0YXRlUHJvcGVydGllc1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gY29ubmVjdCB0aGUgbm90aWZpY2F0aW9uIGNlbnRlciB0byB0aGUgc3RhdGUuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShOb3RpZmljYXRpb25DZW50ZXIpO1xyXG4iXX0=