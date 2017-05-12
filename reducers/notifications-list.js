'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = notifications;

var _actions = require('../actions');

var _fetchNotifications = require('../actions/fetch-notifications');

var _errorGenerator = require('./util/error-generator');

var _errorGenerator2 = _interopRequireDefault(_errorGenerator);

var _lang = require('lodash/lang');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var REDUCER_NAME = 'NOTIFICATION_LIST';

// reducers in charge of generatin the notification list
function notifications() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        index = action.index,
        payload = action.payload;

    switch (type) {
        case _actions.ADD_NOTIFICATION:
            if (!(0, _lang.isObject)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'object' }));
            }
            return [].concat(_toConsumableArray(state), [_extends({}, payload, {
                read: false
            })]);
        case _actions.ADD_NOTIFICATIONS:
        case _fetchNotifications.RECEIVE_NOTIFICATIONS:
            if (!(0, _lang.isArray)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'array' }));
            }

            return payload.reduce(function (newState, notif) {
                var newNotifId = notif.uuid,
                    read = notif.read;

                if (newState.findIndex(function (_ref) {
                    var uuid = _ref.uuid;
                    return uuid === newNotifId;
                }) === -1) {
                    newState.push(_extends({}, notif, { read: read || false }));
                }
                return newState;
            }, state);
        case _actions.READ_NOTIFICATION:
            if (!(0, _lang.isString)(payload) && !(0, _lang.isNumber)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'string|number' }));
            }
            var _index = state.findIndex(function (notif) {
                return notif.uuid === action.payload;
            });
            if (_index === -1) {
                return state;
            }
            return [].concat(_toConsumableArray(state.slice(0, _index)), [
            //Add the read element to the index fitting the payload.
            _extends({}, state[_index], { read: true })], _toConsumableArray(state.slice(_index + 1)));
        case _actions.READ_NOTIFICATION_GROUP:
            if (!(0, _lang.isArray)(payload)) {
                throw new Error((0, _errorGenerator2.default)({ name: REDUCER_NAME, action: action, expectedType: 'array' }));
            }
            var ids = payload;
            //Reduce the state to change the read elements.
            return state.reduce(function (newState, notif) {
                //The notif is already read or its index is in the read indexes.
                var read = notif.read || ids.indexOf(notif.uuid) !== -1;
                newState.push(_extends({}, notif, { read: read }));
                return newState;
            }, []);
        default:
            return state;
    }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9ucyIsIlJFRFVDRVJfTkFNRSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImluZGV4IiwicGF5bG9hZCIsIkVycm9yIiwibmFtZSIsImV4cGVjdGVkVHlwZSIsInJlYWQiLCJyZWR1Y2UiLCJuZXdTdGF0ZSIsIm5vdGlmIiwibmV3Tm90aWZJZCIsInV1aWQiLCJmaW5kSW5kZXgiLCJwdXNoIiwic2xpY2UiLCJpZHMiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFRd0JBLGE7O0FBUnhCOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU1DLGVBQWUsbUJBQXJCOztBQUdBO0FBQ2UsU0FBU0QsYUFBVCxHQUFnRDtBQUFBLFFBQXpCRSxLQUF5Qix1RUFBakIsRUFBaUI7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFBQSxRQUNwREMsSUFEb0QsR0FDNUJELE1BRDRCLENBQ3BEQyxJQURvRDtBQUFBLFFBQzlDQyxLQUQ4QyxHQUM1QkYsTUFENEIsQ0FDOUNFLEtBRDhDO0FBQUEsUUFDdkNDLE9BRHVDLEdBQzVCSCxNQUQ0QixDQUN2Q0csT0FEdUM7O0FBRTNELFlBQVFGLElBQVI7QUFDSTtBQUNJLGdCQUFHLENBQUMsb0JBQVNFLE9BQVQsQ0FBSixFQUF1QjtBQUFFLHNCQUFNLElBQUlDLEtBQUosQ0FBVyw4QkFBYyxFQUFDQyxNQUFNUCxZQUFQLEVBQXFCRSxjQUFyQixFQUE2Qk0sY0FBYyxRQUEzQyxFQUFkLENBQVgsQ0FBTjtBQUF3RjtBQUNqSCxnREFBV1AsS0FBWCxpQkFDT0ksT0FEUDtBQUVJSSxzQkFBTTtBQUZWO0FBSUo7QUFDQTtBQUNJLGdCQUFHLENBQUMsbUJBQVFKLE9BQVIsQ0FBSixFQUFzQjtBQUFFLHNCQUFNLElBQUlDLEtBQUosQ0FBVSw4QkFBYyxFQUFDQyxNQUFNUCxZQUFQLEVBQXFCRSxjQUFyQixFQUE2Qk0sY0FBYyxPQUEzQyxFQUFkLENBQVYsQ0FBTjtBQUFzRjs7QUFFOUcsbUJBQU9ILFFBQVFLLE1BQVIsQ0FBZSxVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFBQSxvQkFDMUJDLFVBRDBCLEdBQ05ELEtBRE0sQ0FDaENFLElBRGdDO0FBQUEsb0JBQ2RMLElBRGMsR0FDTkcsS0FETSxDQUNkSCxJQURjOztBQUV2QyxvQkFBR0UsU0FBU0ksU0FBVCxDQUFtQjtBQUFBLHdCQUFFRCxJQUFGLFFBQUVBLElBQUY7QUFBQSwyQkFBWUEsU0FBU0QsVUFBckI7QUFBQSxpQkFBbkIsTUFBd0QsQ0FBQyxDQUE1RCxFQUErRDtBQUMzREYsNkJBQVNLLElBQVQsY0FBa0JKLEtBQWxCLElBQXlCSCxNQUFNQSxRQUFRLEtBQXZDO0FBQ0g7QUFDRCx1QkFBT0UsUUFBUDtBQUNILGFBTk0sRUFNSlYsS0FOSSxDQUFQO0FBT0o7QUFDSSxnQkFBRyxDQUFDLG9CQUFTSSxPQUFULENBQUQsSUFBc0IsQ0FBQyxvQkFBU0EsT0FBVCxDQUExQixFQUE2QztBQUFFLHNCQUFNLElBQUlDLEtBQUosQ0FBVSw4QkFBYyxFQUFDQyxNQUFNUCxZQUFQLEVBQXFCRSxjQUFyQixFQUE2Qk0sY0FBYyxlQUEzQyxFQUFkLENBQVYsQ0FBTjtBQUE4RjtBQUM3SSxnQkFBTUosU0FBUUgsTUFBTWMsU0FBTixDQUFpQixVQUFDSCxLQUFEO0FBQUEsdUJBQVdBLE1BQU1FLElBQU4sS0FBZVosT0FBT0csT0FBakM7QUFBQSxhQUFqQixDQUFkO0FBQ0EsZ0JBQUdELFdBQVUsQ0FBQyxDQUFkLEVBQWlCO0FBQ2IsdUJBQU9ILEtBQVA7QUFDSDtBQUNELGdEQUNPQSxNQUFNZ0IsS0FBTixDQUFZLENBQVosRUFBZWIsTUFBZixDQURQO0FBRUk7QUFGSix5QkFHUUgsTUFBTUcsTUFBTixDQUhSLElBR3NCSyxNQUFNLElBSDVCLHlCQUlPUixNQUFNZ0IsS0FBTixDQUFZYixTQUFRLENBQXBCLENBSlA7QUFNSjtBQUNJLGdCQUFHLENBQUMsbUJBQVFDLE9BQVIsQ0FBSixFQUFzQjtBQUFFLHNCQUFNLElBQUlDLEtBQUosQ0FBVSw4QkFBYyxFQUFDQyxNQUFNUCxZQUFQLEVBQXFCRSxjQUFyQixFQUE2Qk0sY0FBYyxPQUEzQyxFQUFkLENBQVYsQ0FBTjtBQUFzRjtBQUM5RyxnQkFBTVUsTUFBTWIsT0FBWjtBQUNBO0FBQ0EsbUJBQU9KLE1BQU1TLE1BQU4sQ0FBYSxVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDckM7QUFDQSxvQkFBTUgsT0FBT0csTUFBTUgsSUFBTixJQUFjUyxJQUFJQyxPQUFKLENBQVlQLE1BQU1FLElBQWxCLE1BQTRCLENBQUMsQ0FBeEQ7QUFDQUgseUJBQVNLLElBQVQsY0FBa0JKLEtBQWxCLElBQXlCSCxVQUF6QjtBQUNBLHVCQUFPRSxRQUFQO0FBQ0gsYUFMTSxFQUtKLEVBTEksQ0FBUDtBQU1KO0FBQ0ksbUJBQU9WLEtBQVA7QUF6Q1I7QUEyQ0giLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9OT1RJRklDQVRJT04sIEFERF9OT1RJRklDQVRJT05TLCBSRUFEX05PVElGSUNBVElPTiwgUkVBRF9OT1RJRklDQVRJT05fR1JPVVB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQge1JFQ0VJVkVfTk9USUZJQ0FUSU9OU30gZnJvbSAnLi4vYWN0aW9ucy9mZXRjaC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IGdlbmVyYXRlRXJyb3IgZnJvbSAnLi91dGlsL2Vycm9yLWdlbmVyYXRvcic7XHJcbmltcG9ydCB7aXNPYmplY3QsIGlzQXJyYXksIGlzU3RyaW5nLCBpc051bWJlcn0gZnJvbSAnbG9kYXNoL2xhbmcnO1xyXG5jb25zdCBSRURVQ0VSX05BTUUgPSAnTk9USUZJQ0FUSU9OX0xJU1QnO1xyXG5cclxuXHJcbi8vIHJlZHVjZXJzIGluIGNoYXJnZSBvZiBnZW5lcmF0aW4gdGhlIG5vdGlmaWNhdGlvbiBsaXN0XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbnMoc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcclxuICAgIGNvbnN0IHt0eXBlLCBpbmRleCwgcGF5bG9hZH0gPSBhY3Rpb247XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9OT1RJRklDQVRJT046XHJcbiAgICAgICAgICAgIGlmKCFpc09iamVjdChwYXlsb2FkKSkgeyB0aHJvdyBuZXcgRXJyb3IgKGdlbmVyYXRlRXJyb3Ioe25hbWU6IFJFRFVDRVJfTkFNRSwgYWN0aW9uLCBleHBlY3RlZFR5cGU6ICdvYmplY3QnfSkpOyB9XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICByZWFkOiBmYWxzZVxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICBjYXNlIEFERF9OT1RJRklDQVRJT05TOlxyXG4gICAgICAgIGNhc2UgUkVDRUlWRV9OT1RJRklDQVRJT05TOlxyXG4gICAgICAgICAgICBpZighaXNBcnJheShwYXlsb2FkKSkgeyB0aHJvdyBuZXcgRXJyb3IoZ2VuZXJhdGVFcnJvcih7bmFtZTogUkVEVUNFUl9OQU1FLCBhY3Rpb24sIGV4cGVjdGVkVHlwZTogJ2FycmF5J30pKTsgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQucmVkdWNlKChuZXdTdGF0ZSwgbm90aWYpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt1dWlkOiBuZXdOb3RpZklkLCByZWFkfSA9IG5vdGlmO1xyXG4gICAgICAgICAgICAgICAgaWYobmV3U3RhdGUuZmluZEluZGV4KCh7dXVpZH0pID0+IHV1aWQgPT09IG5ld05vdGlmSWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLnB1c2goey4uLm5vdGlmLCByZWFkOiByZWFkIHx8IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgIH0sIHN0YXRlKTtcclxuICAgICAgICBjYXNlIFJFQURfTk9USUZJQ0FUSU9OOlxyXG4gICAgICAgICAgICBpZighaXNTdHJpbmcocGF5bG9hZCkgJiYgIWlzTnVtYmVyKHBheWxvYWQpKSB7IHRocm93IG5ldyBFcnJvcihnZW5lcmF0ZUVycm9yKHtuYW1lOiBSRURVQ0VSX05BTUUsIGFjdGlvbiwgZXhwZWN0ZWRUeXBlOiAnc3RyaW5nfG51bWJlcid9KSk7IH1cclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maW5kSW5kZXgoIChub3RpZikgPT4gbm90aWYudXVpZCA9PT0gYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgLy9BZGQgdGhlIHJlYWQgZWxlbWVudCB0byB0aGUgaW5kZXggZml0dGluZyB0aGUgcGF5bG9hZC5cclxuICAgICAgICAgICAgICAgIHsuLi5zdGF0ZVtpbmRleF0sIHJlYWQ6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgUkVBRF9OT1RJRklDQVRJT05fR1JPVVA6XHJcbiAgICAgICAgICAgIGlmKCFpc0FycmF5KHBheWxvYWQpKSB7IHRocm93IG5ldyBFcnJvcihnZW5lcmF0ZUVycm9yKHtuYW1lOiBSRURVQ0VSX05BTUUsIGFjdGlvbiwgZXhwZWN0ZWRUeXBlOiAnYXJyYXknfSkpOyB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9IHBheWxvYWQ7XHJcbiAgICAgICAgICAgIC8vUmVkdWNlIHRoZSBzdGF0ZSB0byBjaGFuZ2UgdGhlIHJlYWQgZWxlbWVudHMuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5yZWR1Y2UoKG5ld1N0YXRlLCBub3RpZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9UaGUgbm90aWYgaXMgYWxyZWFkeSByZWFkIG9yIGl0cyBpbmRleCBpcyBpbiB0aGUgcmVhZCBpbmRleGVzLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZCA9IG5vdGlmLnJlYWQgfHwgaWRzLmluZGV4T2Yobm90aWYudXVpZCkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUucHVzaCh7Li4ubm90aWYsIHJlYWR9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iXX0=