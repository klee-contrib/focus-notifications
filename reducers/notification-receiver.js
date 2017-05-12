'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = notificationReceiver;

var _actions = require('../actions');

var _fetchNotifications = require('../actions/fetch-notifications');

var _receiveNotifications = require('../actions/receive-notifications');

var _notificationsReceived = require('./notifications-received');

var _notificationsReceived2 = _interopRequireDefault(_notificationsReceived);

var _hasFetchedOnce = require('./has-fetched-once');

var _hasFetchedOnce2 = _interopRequireDefault(_hasFetchedOnce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notificationReceiver() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { hasFetchedOnce: false, notificationsReceived: {} };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        index = action.index,
        payload = action.payload;

    switch (type) {
        case _actions.ADD_NOTIFICATIONS:
        case _fetchNotifications.RECEIVE_NOTIFICATIONS:
            var hasFetchedOnce = state.hasFetchedOnce,
                notificationsReceived = state.notificationsReceived;

            if (!hasFetchedOnce) {
                action.payload = payload.map(function (n) {
                    return _extends({}, n, { displayed: true });
                });
            }
            return {
                hasFetchedOnce: (0, _hasFetchedOnce2.default)(hasFetchedOnce, action),
                notificationsReceived: (0, _notificationsReceived2.default)(notificationsReceived, action)
            };
        case _actions.ADD_NOTIFICATION:
        case _receiveNotifications.DISMISS_NOTIFICATION:
        case _actions.READ_NOTIFICATION:
        case _actions.READ_NOTIFICATION_GROUP:
            return {
                hasFetchedOnce: (0, _hasFetchedOnce2.default)(hasFetchedOnce, action),
                notificationsReceived: (0, _notificationsReceived2.default)(notificationsReceived, action)
            };
        default:
            return state;
    }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9uUmVjZWl2ZXIiLCJzdGF0ZSIsImhhc0ZldGNoZWRPbmNlIiwibm90aWZpY2F0aW9uc1JlY2VpdmVkIiwiYWN0aW9uIiwidHlwZSIsImluZGV4IiwicGF5bG9hZCIsIm1hcCIsIm4iLCJkaXNwbGF5ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQU13QkEsb0I7O0FBTnhCOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLG9CQUFULEdBQXVHO0FBQUEsUUFBekVDLEtBQXlFLHVFQUFqRSxFQUFDQyxnQkFBZ0IsS0FBakIsRUFBd0JDLHVCQUF1QixFQUEvQyxFQUFpRTtBQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTtBQUFBLFFBQzNHQyxJQUQyRyxHQUNuRkQsTUFEbUYsQ0FDM0dDLElBRDJHO0FBQUEsUUFDckdDLEtBRHFHLEdBQ25GRixNQURtRixDQUNyR0UsS0FEcUc7QUFBQSxRQUM5RkMsT0FEOEYsR0FDbkZILE1BRG1GLENBQzlGRyxPQUQ4Rjs7QUFFbEgsWUFBUUYsSUFBUjtBQUNJO0FBQ0E7QUFBQSxnQkFDV0gsY0FEWCxHQUNvREQsS0FEcEQsQ0FDV0MsY0FEWDtBQUFBLGdCQUMyQkMscUJBRDNCLEdBQ29ERixLQURwRCxDQUMyQkUscUJBRDNCOztBQUVJLGdCQUFJLENBQUNELGNBQUwsRUFBcUI7QUFDakJFLHVCQUFPRyxPQUFQLEdBQWlCQSxRQUFRQyxHQUFSLENBQWE7QUFBQSx3Q0FBVUMsQ0FBVixJQUFhQyxXQUFXLElBQXhCO0FBQUEsaUJBQWIsQ0FBakI7QUFDSDtBQUNELG1CQUFPO0FBQ0hSLGdDQUFnQiw4QkFBc0JBLGNBQXRCLEVBQXNDRSxNQUF0QyxDQURiO0FBRUhELHVDQUF1QixxQ0FBNkJBLHFCQUE3QixFQUFvREMsTUFBcEQ7QUFGcEIsYUFBUDtBQUlKO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksbUJBQU87QUFDSEYsZ0NBQWdCLDhCQUFzQkEsY0FBdEIsRUFBc0NFLE1BQXRDLENBRGI7QUFFSEQsdUNBQXVCLHFDQUE2QkEscUJBQTdCLEVBQW9EQyxNQUFwRDtBQUZwQixhQUFQO0FBSUo7QUFDSSxtQkFBT0gsS0FBUDtBQXBCUjtBQXNCSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX05PVElGSUNBVElPTiwgQUREX05PVElGSUNBVElPTlMsIFJFQURfTk9USUZJQ0FUSU9OLCBSRUFEX05PVElGSUNBVElPTl9HUk9VUH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7UkVDRUlWRV9OT1RJRklDQVRJT05TfSBmcm9tICcuLi9hY3Rpb25zL2ZldGNoLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBESVNNSVNTX05PVElGSUNBVElPTn0gZnJvbSAnLi4vYWN0aW9ucy9yZWNlaXZlLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgbm90aWZpY2F0aW9uc1JlY2VpdmVkUmVkdWNlciBmcm9tICcuL25vdGlmaWNhdGlvbnMtcmVjZWl2ZWQnO1xyXG5pbXBvcnQgaGFzRmV0Y2hlZE9uY2VSZWR1Y2VyIGZyb20gJy4vaGFzLWZldGNoZWQtb25jZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZmljYXRpb25SZWNlaXZlcihzdGF0ZSA9IHtoYXNGZXRjaGVkT25jZTogZmFsc2UsIG5vdGlmaWNhdGlvbnNSZWNlaXZlZDoge319LCBhY3Rpb24gPSB7fSkge1xyXG4gICAgY29uc3Qge3R5cGUsIGluZGV4LCBwYXlsb2FkfSA9IGFjdGlvbjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX05PVElGSUNBVElPTlM6XHJcbiAgICAgICAgY2FzZSBSRUNFSVZFX05PVElGSUNBVElPTlM6XHJcbiAgICAgICAgICAgIGNvbnN0IHtoYXNGZXRjaGVkT25jZSwgbm90aWZpY2F0aW9uc1JlY2VpdmVkfSA9IHN0YXRlO1xyXG4gICAgICAgICAgICBpZiAoIWhhc0ZldGNoZWRPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZCA9IHBheWxvYWQubWFwKCBuID0+ICh7Li4ubiwgZGlzcGxheWVkOiB0cnVlfSkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGFzRmV0Y2hlZE9uY2U6IGhhc0ZldGNoZWRPbmNlUmVkdWNlcihoYXNGZXRjaGVkT25jZSwgYWN0aW9uKSxcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnNSZWNlaXZlZDogbm90aWZpY2F0aW9uc1JlY2VpdmVkUmVkdWNlcihub3RpZmljYXRpb25zUmVjZWl2ZWQsIGFjdGlvbilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9OT1RJRklDQVRJT046XHJcbiAgICAgICAgY2FzZSBESVNNSVNTX05PVElGSUNBVElPTjpcclxuICAgICAgICBjYXNlIFJFQURfTk9USUZJQ0FUSU9OOlxyXG4gICAgICAgIGNhc2UgUkVBRF9OT1RJRklDQVRJT05fR1JPVVA6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoYXNGZXRjaGVkT25jZTogaGFzRmV0Y2hlZE9uY2VSZWR1Y2VyKGhhc0ZldGNoZWRPbmNlLCBhY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uc1JlY2VpdmVkOiBub3RpZmljYXRpb25zUmVjZWl2ZWRSZWR1Y2VyKG5vdGlmaWNhdGlvbnNSZWNlaXZlZCwgYWN0aW9uKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iXX0=