'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = notificationsReceived;

var _actions = require('../actions');

var _fetchNotifications = require('../actions/fetch-notifications');

var _receiveNotifications = require('../actions/receive-notifications');

var _errorGenerator = require('./util/error-generator');

var _errorGenerator2 = _interopRequireDefault(_errorGenerator);

var _lang = require('lodash/lang');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REDUCER_NAME = 'NOTIFICATIONS_RECEIVED';

function _addNotifToStateIfNeeded(state, notif) {
    var uuid = notif.uuid;

    if (!state[uuid]) {
        state[uuid] = notif;
    }
    return _extends({}, state);
}
function _addReadToNotificationIfExists(state, uuid) {
    if ((0, _lang.isObject)(state[uuid])) {
        state[uuid] = _extends({}, state[uuid], { displayed: true });
    }
    return _extends({}, state);
}

// reducers in charge of generatin the notification list
function notificationsReceived() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        index = action.index,
        payload = action.payload;

    switch (type) {
        case _actions.ADD_NOTIFICATION:
            if (!(0, _lang.isObject)(payload) || (0, _lang.isArray)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'object' }));
            }
            return _addNotifToStateIfNeeded(state, payload);
        case _actions.ADD_NOTIFICATIONS:
        case _fetchNotifications.RECEIVE_NOTIFICATIONS:
            if (!(0, _lang.isArray)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'array' }));
            }
            action.payload.forEach(function (notif) {
                return _addNotifToStateIfNeeded(state, notif);
            });
            return _extends({}, state);
        case _receiveNotifications.DISMISS_NOTIFICATION:
        case _actions.READ_NOTIFICATION:
            if (!(0, _lang.isString)(payload) && !(0, _lang.isNumber)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'string|number' }));
            }
            return _addReadToNotificationIfExists(state, payload);
        case _actions.READ_NOTIFICATION_GROUP:
            if (!(0, _lang.isArray)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'array' }));
            }
            payload.forEach(function (notifUuid) {
                return _addReadToNotificationIfExists(state, notifUuid);
            });
            return _extends({}, state);
        default:
            return state;
    }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9uc1JlY2VpdmVkIiwiUkVEVUNFUl9OQU1FIiwiX2FkZE5vdGlmVG9TdGF0ZUlmTmVlZGVkIiwic3RhdGUiLCJub3RpZiIsInV1aWQiLCJfYWRkUmVhZFRvTm90aWZpY2F0aW9uSWZFeGlzdHMiLCJkaXNwbGF5ZWQiLCJhY3Rpb24iLCJ0eXBlIiwiaW5kZXgiLCJwYXlsb2FkIiwiRXJyb3IiLCJuYW1lIiwiZXhwZWN0ZWRUeXBlIiwiZm9yRWFjaCIsIm5vdGlmVXVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBc0J3QkEscUI7O0FBdEJ4Qjs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0EsSUFBTUMsZUFBZSx3QkFBckI7O0FBRUEsU0FBU0Msd0JBQVQsQ0FBa0NDLEtBQWxDLEVBQXlDQyxLQUF6QyxFQUFnRDtBQUFBLFFBQ3JDQyxJQURxQyxHQUM3QkQsS0FENkIsQ0FDckNDLElBRHFDOztBQUU1QyxRQUFHLENBQUNGLE1BQU1FLElBQU4sQ0FBSixFQUFpQjtBQUNiRixjQUFNRSxJQUFOLElBQWNELEtBQWQ7QUFDSDtBQUNELHdCQUFXRCxLQUFYO0FBQ0g7QUFDRCxTQUFTRyw4QkFBVCxDQUF3Q0gsS0FBeEMsRUFBK0NFLElBQS9DLEVBQXFEO0FBQ2pELFFBQUcsb0JBQVNGLE1BQU1FLElBQU4sQ0FBVCxDQUFILEVBQTBCO0FBQ3RCRixjQUFNRSxJQUFOLGlCQUFrQkYsTUFBTUUsSUFBTixDQUFsQixJQUErQkUsV0FBVyxJQUExQztBQUNIO0FBQ0Qsd0JBQVdKLEtBQVg7QUFDSDs7QUFFRDtBQUNlLFNBQVNILHFCQUFULEdBQXdEO0FBQUEsUUFBekJHLEtBQXlCLHVFQUFqQixFQUFpQjtBQUFBLFFBQWJLLE1BQWEsdUVBQUosRUFBSTtBQUFBLFFBQzVEQyxJQUQ0RCxHQUNwQ0QsTUFEb0MsQ0FDNURDLElBRDREO0FBQUEsUUFDdERDLEtBRHNELEdBQ3BDRixNQURvQyxDQUN0REUsS0FEc0Q7QUFBQSxRQUMvQ0MsT0FEK0MsR0FDcENILE1BRG9DLENBQy9DRyxPQUQrQzs7QUFFbkUsWUFBUUYsSUFBUjtBQUNJO0FBQ0ksZ0JBQUcsQ0FBQyxvQkFBU0UsT0FBVCxDQUFELElBQXNCLG1CQUFRQSxPQUFSLENBQXpCLEVBQTJDO0FBQUUsc0JBQU0sSUFBSUMsS0FBSixDQUFXLDhCQUFjLEVBQUNDLE1BQU1aLFlBQVAsRUFBcUJPLGNBQXJCLEVBQTZCTSxjQUFjLFFBQTNDLEVBQWQsQ0FBWCxDQUFOO0FBQXdGO0FBQ3JJLG1CQUFPWix5QkFBeUJDLEtBQXpCLEVBQWdDUSxPQUFoQyxDQUFQO0FBQ0o7QUFDQTtBQUNJLGdCQUFHLENBQUMsbUJBQVFBLE9BQVIsQ0FBSixFQUFzQjtBQUFFLHNCQUFNLElBQUlDLEtBQUosQ0FBVSw4QkFBYyxFQUFDQyxNQUFNWixZQUFQLEVBQXFCTyxjQUFyQixFQUE2Qk0sY0FBYyxPQUEzQyxFQUFkLENBQVYsQ0FBTjtBQUFzRjtBQUM5R04sbUJBQU9HLE9BQVAsQ0FBZUksT0FBZixDQUF1QixVQUFDWCxLQUFEO0FBQUEsdUJBQVdGLHlCQUF5QkMsS0FBekIsRUFBZ0NDLEtBQWhDLENBQVg7QUFBQSxhQUF2QjtBQUNBLGdDQUFXRCxLQUFYO0FBQ0o7QUFDQTtBQUNJLGdCQUFHLENBQUMsb0JBQVNRLE9BQVQsQ0FBRCxJQUFzQixDQUFDLG9CQUFTQSxPQUFULENBQTFCLEVBQTZDO0FBQUUsc0JBQU0sSUFBSUMsS0FBSixDQUFVLDhCQUFjLEVBQUNDLE1BQU1aLFlBQVAsRUFBcUJPLGNBQXJCLEVBQTZCTSxjQUFjLGVBQTNDLEVBQWQsQ0FBVixDQUFOO0FBQThGO0FBQzdJLG1CQUFPUiwrQkFBK0JILEtBQS9CLEVBQXFDUSxPQUFyQyxDQUFQO0FBQ0o7QUFDSSxnQkFBRyxDQUFDLG1CQUFRQSxPQUFSLENBQUosRUFBc0I7QUFBRSxzQkFBTSxJQUFJQyxLQUFKLENBQVUsOEJBQWMsRUFBQ0MsTUFBTVosWUFBUCxFQUFxQk8sY0FBckIsRUFBNkJNLGNBQWMsT0FBM0MsRUFBZCxDQUFWLENBQU47QUFBc0Y7QUFDOUdILG9CQUFRSSxPQUFSLENBQWdCLFVBQUNDLFNBQUQ7QUFBQSx1QkFBZVYsK0JBQStCSCxLQUEvQixFQUFzQ2EsU0FBdEMsQ0FBZjtBQUFBLGFBQWhCO0FBQ0EsZ0NBQVdiLEtBQVg7QUFDSjtBQUNJLG1CQUFPQSxLQUFQO0FBbEJSO0FBb0JIIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRERfTk9USUZJQ0FUSU9OLCBBRERfTk9USUZJQ0FUSU9OUywgUkVBRF9OT1RJRklDQVRJT04sIFJFQURfTk9USUZJQ0FUSU9OX0dST1VQfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHtSRUNFSVZFX05PVElGSUNBVElPTlN9IGZyb20gJy4uL2FjdGlvbnMvZmV0Y2gtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IERJU01JU1NfTk9USUZJQ0FUSU9OfSBmcm9tICcuLi9hY3Rpb25zL3JlY2VpdmUtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBnZW5lcmF0ZUVycm9yIGZyb20gJy4vdXRpbC9lcnJvci1nZW5lcmF0b3InO1xyXG5pbXBvcnQge2lzT2JqZWN0LCBpc0FycmF5LCBpc1N0cmluZywgaXNOdW1iZXJ9IGZyb20gJ2xvZGFzaC9sYW5nJztcclxuY29uc3QgUkVEVUNFUl9OQU1FID0gJ05PVElGSUNBVElPTlNfUkVDRUlWRUQnO1xyXG5cclxuZnVuY3Rpb24gX2FkZE5vdGlmVG9TdGF0ZUlmTmVlZGVkKHN0YXRlLCBub3RpZikge1xyXG4gICAgY29uc3Qge3V1aWR9ID0gbm90aWY7XHJcbiAgICBpZighc3RhdGVbdXVpZF0pIHtcclxuICAgICAgICBzdGF0ZVt1dWlkXSA9IG5vdGlmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsuLi5zdGF0ZX07XHJcbn1cclxuZnVuY3Rpb24gX2FkZFJlYWRUb05vdGlmaWNhdGlvbklmRXhpc3RzKHN0YXRlLCB1dWlkKSB7XHJcbiAgICBpZihpc09iamVjdChzdGF0ZVt1dWlkXSkpIHtcclxuICAgICAgICBzdGF0ZVt1dWlkXSA9IHsuLi5zdGF0ZVt1dWlkXSwgZGlzcGxheWVkOiB0cnVlfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7Li4uc3RhdGV9O1xyXG59XHJcblxyXG4vLyByZWR1Y2VycyBpbiBjaGFyZ2Ugb2YgZ2VuZXJhdGluIHRoZSBub3RpZmljYXRpb24gbGlzdFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZmljYXRpb25zUmVjZWl2ZWQoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pIHtcclxuICAgIGNvbnN0IHt0eXBlLCBpbmRleCwgcGF5bG9hZH0gPSBhY3Rpb247XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9OT1RJRklDQVRJT046XHJcbiAgICAgICAgICAgIGlmKCFpc09iamVjdChwYXlsb2FkKSB8fCBpc0FycmF5KHBheWxvYWQpKSB7IHRocm93IG5ldyBFcnJvciAoZ2VuZXJhdGVFcnJvcih7bmFtZTogUkVEVUNFUl9OQU1FLCBhY3Rpb24sIGV4cGVjdGVkVHlwZTogJ29iamVjdCd9KSk7IH1cclxuICAgICAgICAgICAgcmV0dXJuIF9hZGROb3RpZlRvU3RhdGVJZk5lZWRlZChzdGF0ZSwgcGF5bG9hZCk7XHJcbiAgICAgICAgY2FzZSBBRERfTk9USUZJQ0FUSU9OUzpcclxuICAgICAgICBjYXNlIFJFQ0VJVkVfTk9USUZJQ0FUSU9OUzpcclxuICAgICAgICAgICAgaWYoIWlzQXJyYXkocGF5bG9hZCkpIHsgdGhyb3cgbmV3IEVycm9yKGdlbmVyYXRlRXJyb3Ioe25hbWU6IFJFRFVDRVJfTkFNRSwgYWN0aW9uLCBleHBlY3RlZFR5cGU6ICdhcnJheSd9KSk7IH1cclxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgobm90aWYpID0+IF9hZGROb3RpZlRvU3RhdGVJZk5lZWRlZChzdGF0ZSwgbm90aWYpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX07XHJcbiAgICAgICAgY2FzZSBESVNNSVNTX05PVElGSUNBVElPTjpcclxuICAgICAgICBjYXNlIFJFQURfTk9USUZJQ0FUSU9OOlxyXG4gICAgICAgICAgICBpZighaXNTdHJpbmcocGF5bG9hZCkgJiYgIWlzTnVtYmVyKHBheWxvYWQpKSB7IHRocm93IG5ldyBFcnJvcihnZW5lcmF0ZUVycm9yKHtuYW1lOiBSRURVQ0VSX05BTUUsIGFjdGlvbiwgZXhwZWN0ZWRUeXBlOiAnc3RyaW5nfG51bWJlcid9KSk7IH1cclxuICAgICAgICAgICAgcmV0dXJuIF9hZGRSZWFkVG9Ob3RpZmljYXRpb25JZkV4aXN0cyhzdGF0ZSxwYXlsb2FkKTtcclxuICAgICAgICBjYXNlIFJFQURfTk9USUZJQ0FUSU9OX0dST1VQOlxyXG4gICAgICAgICAgICBpZighaXNBcnJheShwYXlsb2FkKSkgeyB0aHJvdyBuZXcgRXJyb3IoZ2VuZXJhdGVFcnJvcih7bmFtZTogUkVEVUNFUl9OQU1FLCBhY3Rpb24sIGV4cGVjdGVkVHlwZTogJ2FycmF5J30pKTsgfVxyXG4gICAgICAgICAgICBwYXlsb2FkLmZvckVhY2goKG5vdGlmVXVpZCkgPT4gX2FkZFJlYWRUb05vdGlmaWNhdGlvbklmRXhpc3RzKHN0YXRlLCBub3RpZlV1aWQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==