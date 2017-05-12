'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_NOTIFICATIONS = exports.REQUEST_NOTIFICATIONS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fetchNotifications = fetchNotifications;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = require('../config');

var _error = require('./error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_NOTIFICATIONS = exports.REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
var RECEIVE_NOTIFICATIONS = exports.RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

//
function requestNotifications(user) {
    return {
        type: REQUEST_NOTIFICATIONS,
        user: user
    };
}

//
function receiveNotifications(user, json) {
    return {
        type: RECEIVE_NOTIFICATIONS,
        user: user,
        payload: json
    };
}

//Example call
// store.dispatch(fetchNotifications('userId'));

function fetchNotifications(user, fromDate) {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    //
    return function dispatchFetchNotifications(dispatch) {
        //read the conf after extension.
        var config = (0, _config.getConfig)();
        //Create the URL
        var URL = config.rootURL + '/' + config.notificationURL;

        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        //Maybe see https://github.com/rackt/redux/issues/911#issuecomment-149361073 for a saner implementation instead of chaining two dispatch.
        dispatch((0, _error.clearError)());
        dispatch(requestNotifications(user));

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
        var datePartURL = fromDate ? '?date=' + fromDate : '';
        var credentialOptions = config.useCredentials ? { credentials: 'include' } : {};
        var contentType = config.noContentType ? {} : config.contentType ? { headers: { contentType: contentType } } : { headers: { 'Content-Type': 'application/json' } };
        return (0, _isomorphicFetch2.default)('' + URL + datePartURL, _extends({}, contentType, credentialOptions)).then(function (response) {
            return response && response.status !== 204 ? response.json() : undefined;
        }).then(function (json) {
            return dispatch(receiveNotifications(user, json));
        }) // Here, we update the app state with the results of the API call.
        .catch(function (err) {
            return dispatch((0, _error.setError)({ content: err.message, type: 'network' }));
        });
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZmV0Y2hOb3RpZmljYXRpb25zIiwiUkVRVUVTVF9OT1RJRklDQVRJT05TIiwiUkVDRUlWRV9OT1RJRklDQVRJT05TIiwicmVxdWVzdE5vdGlmaWNhdGlvbnMiLCJ1c2VyIiwidHlwZSIsInJlY2VpdmVOb3RpZmljYXRpb25zIiwianNvbiIsInBheWxvYWQiLCJmcm9tRGF0ZSIsImRpc3BhdGNoRmV0Y2hOb3RpZmljYXRpb25zIiwiZGlzcGF0Y2giLCJjb25maWciLCJVUkwiLCJyb290VVJMIiwibm90aWZpY2F0aW9uVVJMIiwiZGF0ZVBhcnRVUkwiLCJjcmVkZW50aWFsT3B0aW9ucyIsInVzZUNyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiLCJjb250ZW50VHlwZSIsIm5vQ29udGVudFR5cGUiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwidW5kZWZpbmVkIiwiY2F0Y2giLCJjb250ZW50IiwiZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1FBMEJnQkEsa0IsR0FBQUEsa0I7O0FBMUJoQjs7OztBQUNBOztBQUNBOzs7O0FBQ08sSUFBTUMsd0RBQXdCLHVCQUE5QjtBQUNBLElBQU1DLHdEQUF3Qix1QkFBOUI7O0FBRVA7QUFDQSxTQUFTQyxvQkFBVCxDQUE4QkMsSUFBOUIsRUFBb0M7QUFDaEMsV0FBTztBQUNIQyxjQUFNSixxQkFESDtBQUVIRztBQUZHLEtBQVA7QUFJSDs7QUFFRDtBQUNBLFNBQVNFLG9CQUFULENBQThCRixJQUE5QixFQUFvQ0csSUFBcEMsRUFBMEM7QUFDdEMsV0FBTztBQUNIRixjQUFNSCxxQkFESDtBQUVIRSxrQkFGRztBQUdISSxpQkFBU0Q7QUFITixLQUFQO0FBS0g7O0FBRUQ7QUFDQTs7QUFFTyxTQUFTUCxrQkFBVCxDQUE0QkksSUFBNUIsRUFBa0NLLFFBQWxDLEVBQTRDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8sU0FBU0MsMEJBQVQsQ0FBb0NDLFFBQXBDLEVBQThDO0FBQ2pEO0FBQ0EsWUFBTUMsU0FBUyx3QkFBZjtBQUNBO0FBQ0EsWUFBTUMsTUFBU0QsT0FBT0UsT0FBaEIsU0FBMkJGLE9BQU9HLGVBQXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBSixpQkFBUyx3QkFBVDtBQUNBQSxpQkFBU1IscUJBQXFCQyxJQUFyQixDQUFUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQU1ZLGNBQWNQLHNCQUFvQkEsUUFBcEIsR0FBaUMsRUFBckQ7QUFDQSxZQUFNUSxvQkFBb0JMLE9BQU9NLGNBQVAsR0FBd0IsRUFBRUMsYUFBYSxTQUFmLEVBQXhCLEdBQW9ELEVBQTlFO0FBQ0EsWUFBTUMsY0FBY1IsT0FBT1MsYUFBUCxHQUF1QixFQUF2QixHQUE0QlQsT0FBT1EsV0FBUCxHQUFxQixFQUFDRSxTQUFTLEVBQUNGLHdCQUFELEVBQVYsRUFBckIsR0FBZ0QsRUFBRUUsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBWCxFQUFoRztBQUNBLGVBQU8sb0NBQVNULEdBQVQsR0FBZUcsV0FBZixlQUFrQ0ksV0FBbEMsRUFBa0RILGlCQUFsRCxHQUNOTSxJQURNLENBQ0Q7QUFBQSxtQkFBWUMsWUFBWUEsU0FBU0MsTUFBVCxLQUFvQixHQUFoQyxHQUFzQ0QsU0FBU2pCLElBQVQsRUFBdEMsR0FBd0RtQixTQUFwRTtBQUFBLFNBREMsRUFFRkgsSUFGRSxDQUVHO0FBQUEsbUJBQVFaLFNBQVNMLHFCQUFxQkYsSUFBckIsRUFBMkJHLElBQTNCLENBQVQsQ0FBUjtBQUFBLFNBRkgsRUFFdUQ7QUFGdkQsU0FHRm9CLEtBSEUsQ0FHSTtBQUFBLG1CQUFPaEIsU0FBUyxxQkFBUyxFQUFDaUIsU0FBU0MsSUFBSUMsT0FBZCxFQUF1QnpCLE1BQU0sU0FBN0IsRUFBVCxDQUFULENBQVA7QUFBQSxTQUhKLENBQVA7QUFJSCxLQXhCRDtBQXlCSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQge2dldENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtjbGVhckVycm9yLCBzZXRFcnJvcn0gZnJvbSAnLi9lcnJvcic7XHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX05PVElGSUNBVElPTlMgPSAnUkVRVUVTVF9OT1RJRklDQVRJT05TJztcclxuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfTk9USUZJQ0FUSU9OUyA9ICdSRUNFSVZFX05PVElGSUNBVElPTlMnXHJcblxyXG4vL1xyXG5mdW5jdGlvbiByZXF1ZXN0Tm90aWZpY2F0aW9ucyh1c2VyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFJFUVVFU1RfTk9USUZJQ0FUSU9OUyxcclxuICAgICAgICB1c2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG4vL1xyXG5mdW5jdGlvbiByZWNlaXZlTm90aWZpY2F0aW9ucyh1c2VyLCBqc29uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFJFQ0VJVkVfTk9USUZJQ0FUSU9OUyxcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBheWxvYWQ6IGpzb25cclxuICAgIH07XHJcbn1cclxuXHJcbi8vRXhhbXBsZSBjYWxsXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGZldGNoTm90aWZpY2F0aW9ucygndXNlcklkJykpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTm90aWZpY2F0aW9ucyh1c2VyLCBmcm9tRGF0ZSkge1xyXG5cclxuICAgIC8vIFRodW5rIG1pZGRsZXdhcmUga25vd3MgaG93IHRvIGhhbmRsZSBmdW5jdGlvbnMuXHJcbiAgICAvLyBJdCBwYXNzZXMgdGhlIGRpc3BhdGNoIG1ldGhvZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgZnVuY3Rpb24sXHJcbiAgICAvLyB0aHVzIG1ha2luZyBpdCBhYmxlIHRvIGRpc3BhdGNoIGFjdGlvbnMgaXRzZWxmLlxyXG4gICAgLy9cclxuICAgIHJldHVybiBmdW5jdGlvbiBkaXNwYXRjaEZldGNoTm90aWZpY2F0aW9ucyhkaXNwYXRjaCkge1xyXG4gICAgICAgIC8vcmVhZCB0aGUgY29uZiBhZnRlciBleHRlbnNpb24uXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKCk7XHJcbiAgICAgICAgLy9DcmVhdGUgdGhlIFVSTFxyXG4gICAgICAgIGNvbnN0IFVSTCA9IGAke2NvbmZpZy5yb290VVJMfS8ke2NvbmZpZy5ub3RpZmljYXRpb25VUkx9YFxyXG5cclxuICAgICAgICAvLyBGaXJzdCBkaXNwYXRjaDogdGhlIGFwcCBzdGF0ZSBpcyB1cGRhdGVkIHRvIGluZm9ybVxyXG4gICAgICAgIC8vIHRoYXQgdGhlIEFQSSBjYWxsIGlzIHN0YXJ0aW5nLlxyXG4gICAgICAgIC8vTWF5YmUgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWR1eC9pc3N1ZXMvOTExI2lzc3VlY29tbWVudC0xNDkzNjEwNzMgZm9yIGEgc2FuZXIgaW1wbGVtZW50YXRpb24gaW5zdGVhZCBvZiBjaGFpbmluZyB0d28gZGlzcGF0Y2guXHJcbiAgICAgICAgZGlzcGF0Y2goY2xlYXJFcnJvcigpKTtcclxuICAgICAgICBkaXNwYXRjaChyZXF1ZXN0Tm90aWZpY2F0aW9ucyh1c2VyKSk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRodW5rIG1pZGRsZXdhcmUgY2FuIHJldHVybiBhIHZhbHVlLFxyXG4gICAgICAgIC8vIHRoYXQgaXMgcGFzc2VkIG9uIGFzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGRpc3BhdGNoIG1ldGhvZC5cclxuXHJcbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlLCB3ZSByZXR1cm4gYSBwcm9taXNlIHRvIHdhaXQgZm9yLlxyXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IHJlcXVpcmVkIGJ5IHRodW5rIG1pZGRsZXdhcmUsIGJ1dCBpdCBpcyBjb252ZW5pZW50IGZvciB1cy5cclxuICAgICAgICBjb25zdCBkYXRlUGFydFVSTCA9IGZyb21EYXRlID8gYD9kYXRlPSR7ZnJvbURhdGV9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxPcHRpb25zID0gY29uZmlnLnVzZUNyZWRlbnRpYWxzID8geyBjcmVkZW50aWFsczogJ2luY2x1ZGUnfSA6IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gY29uZmlnLm5vQ29udGVudFR5cGUgPyB7fSA6IGNvbmZpZy5jb250ZW50VHlwZSA/IHtoZWFkZXJzOiB7Y29udGVudFR5cGV9fSA6IHsgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfX07XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke1VSTH0ke2RhdGVQYXJ0VVJMfWAsIHsuLi5jb250ZW50VHlwZSwgLi4uY3JlZGVudGlhbE9wdGlvbnN9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyAhPT0gMjA0ID8gcmVzcG9uc2UuanNvbigpIDogdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKHJlY2VpdmVOb3RpZmljYXRpb25zKHVzZXIsIGpzb24pKSkgLy8gSGVyZSwgd2UgdXBkYXRlIHRoZSBhcHAgc3RhdGUgd2l0aCB0aGUgcmVzdWx0cyBvZiB0aGUgQVBJIGNhbGwuXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goc2V0RXJyb3Ioe2NvbnRlbnQ6IGVyci5tZXNzYWdlLCB0eXBlOiAnbmV0d29yayd9KSkpO1xyXG4gICAgfTtcclxufVxyXG4iXX0=