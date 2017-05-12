'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FAIL_DELETE_NOTIFICATION_GROUP = exports.SUCCESS_DELETE_NOTIFICATION_GROUP = exports.DELETE_NOTIFICATION_GROUP = exports.FAIL_DELETE_NOTIFICATION = exports.SUCCESS_DELETE_NOTIFICATION = exports.DELETE_NOTIFICATION = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//Import other actions


exports.deleteNotification = deleteNotification;
exports.deleteGroupNotification = deleteGroupNotification;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = require('../config');

var _error = require('./error');

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Notification actions
var DELETE_NOTIFICATION = exports.DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
var SUCCESS_DELETE_NOTIFICATION = exports.SUCCESS_DELETE_NOTIFICATION = 'SUCCESS_DELETE_NOTIFICATION';
var FAIL_DELETE_NOTIFICATION = exports.FAIL_DELETE_NOTIFICATION = 'FAIL_DELETE_NOTIFICATION';

//Notification group actions

var DELETE_NOTIFICATION_GROUP = exports.DELETE_NOTIFICATION_GROUP = 'DELETE_NOTIFICATION_GROUP';
var SUCCESS_DELETE_NOTIFICATION_GROUP = exports.SUCCESS_DELETE_NOTIFICATION_GROUP = 'SUCCESS_DELETE_NOTIFICATION_GROUP';
var FAIL_DELETE_NOTIFICATION_GROUP = exports.FAIL_DELETE_NOTIFICATION_GROUP = 'FAIL_DELETE_NOTIFICATION_GROUP';

function deleteNotificationSuccess(jsonDeleted) {
    return {
        type: SUCCESS_DELETE_NOTIFICATION,
        payload: jsonDeleted
    };
}

//
function deleteNotificationGroupSuccess(notificationIds) {
    return {
        type: SUCCESS_DELETE_NOTIFICATION_GROUP,
        payload: notificationIds
    };
}

//
function deleteNotification(notificationId) {
    return function callDeleteNotification(dispatch) {
        //read the conf after extension.
        var config = (0, _config.getConfig)();
        //Create the URL
        var URL = config.rootURL + '/' + config.notificationURL;
        //Maybe see https://github.com/rackt/redux/issues/911#issuecomment-149361073 for a saner implementation instead of chaining two dispatch.
        dispatch((0, _error.clearError)());
        dispatch((0, _.readNotification)(notificationId));

        var credentialOptions = config.useCredentials ? { credentials: 'include' } : {};
        var contentType = config.noContentType ? {} : config.contentType ? { headers: { contentType: contentType } } : { headers: { 'Content-Type': 'application/json' } };

        return (0, _isomorphicFetch2.default)(URL + '/' + notificationId, _extends({ method: 'delete' }, credentialOptions, contentType)).then(function (response) {
            return response && response.status !== 204 ? response.json() : undefined;
        }).then(function (json) {
            return dispatch(deleteNotificationSuccess(json));
        }).catch(function (err) {
            return dispatch((0, _error.setError)({ content: err.message, type: 'network' }));
        });
    };
}

//
function deleteGroupNotification(notificationIds) {
    return function callDeleteNotificationGroup(dispatch) {
        //read the conf after extension.
        var config = (0, _config.getConfig)();
        //Create the URL
        var URL = config.rootURL + '/' + config.notificationURL;
        //Maybe see https://github.com/rackt/redux/issues/911#issuecomment-149361073 for a saner implementation instead of chaining two dispatch.
        dispatch((0, _error.clearError)());
        dispatch((0, _.readNotificationGroup)(notificationIds));

        var credentialOptions = config.useCredentials ? { credentials: 'include' } : {};
        var contentType = config.noContentType ? {} : config.contentType ? { headers: { contentType: contentType } } : { headers: { 'Content-Type': 'application/json' } };

        return (0, _isomorphicFetch2.default)('' + URL, _extends({ method: 'delete', body: JSON.stringify(notificationIds) }, credentialOptions, contentType)).then(function (response) {
            return response && response.status !== 204 ? response.json() : undefined;
        }).then(function (json) {
            return dispatch(deleteNotificationGroupSuccess(json));
        }).catch(function (err) {
            return dispatch((0, _error.setError)({ content: err.message, type: 'network' }));
        });
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZGVsZXRlTm90aWZpY2F0aW9uIiwiZGVsZXRlR3JvdXBOb3RpZmljYXRpb24iLCJERUxFVEVfTk9USUZJQ0FUSU9OIiwiU1VDQ0VTU19ERUxFVEVfTk9USUZJQ0FUSU9OIiwiRkFJTF9ERUxFVEVfTk9USUZJQ0FUSU9OIiwiREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCIsIlNVQ0NFU1NfREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCIsIkZBSUxfREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCIsImRlbGV0ZU5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJqc29uRGVsZXRlZCIsInR5cGUiLCJwYXlsb2FkIiwiZGVsZXRlTm90aWZpY2F0aW9uR3JvdXBTdWNjZXNzIiwibm90aWZpY2F0aW9uSWRzIiwibm90aWZpY2F0aW9uSWQiLCJjYWxsRGVsZXRlTm90aWZpY2F0aW9uIiwiZGlzcGF0Y2giLCJjb25maWciLCJVUkwiLCJyb290VVJMIiwibm90aWZpY2F0aW9uVVJMIiwiY3JlZGVudGlhbE9wdGlvbnMiLCJ1c2VDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwiY29udGVudFR5cGUiLCJub0NvbnRlbnRUeXBlIiwiaGVhZGVycyIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJ1bmRlZmluZWQiLCJjYXRjaCIsImNvbnRlbnQiLCJlcnIiLCJtZXNzYWdlIiwiY2FsbERlbGV0ZU5vdGlmaWNhdGlvbkdyb3VwIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBOzs7UUE4QmdCQSxrQixHQUFBQSxrQjtRQXFCQUMsdUIsR0FBQUEsdUI7O0FBdkRoQjs7OztBQUNBOztBQUNBOztBQUdBOzs7O0FBRUE7QUFDTyxJQUFNQyxvREFBc0IscUJBQTVCO0FBQ0EsSUFBTUMsb0VBQThCLDZCQUFwQztBQUNBLElBQU1DLDhEQUEyQiwwQkFBakM7O0FBRVA7O0FB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U0FGSCxFQUdGRSxLQUhFLENBR0k7QUFBQSxtQkFBT2pCLFNBQVMscUJBQVMsRUFBQ2tCLFNBQVNDLElBQUlDLE9BQWQsRUFBdUIxQixNQUFNLFNBQTdCLEVBQVQsQ0FBVCxDQUFQO0FBQUEsU0FISixDQUFQO0FBSUgsS0FoQkQ7QUFpQkgiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHtnZXRDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7Y2xlYXJFcnJvciwgc2V0RXJyb3J9IGZyb20gJy4vZXJyb3InO1xyXG5cclxuLy9JbXBvcnQgb3RoZXIgYWN0aW9uc1xyXG5pbXBvcnQge3JlYWROb3RpZmljYXRpb24sIHJlYWROb3RpZmljYXRpb25Hcm91cH0gZnJvbSAnLi8nO1xyXG5cclxuLy9Ob3RpZmljYXRpb24gYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgREVMRVRFX05PVElGSUNBVElPTiA9ICdERUxFVEVfTk9USUZJQ0FUSU9OJztcclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfREVMRVRFX05PVElGSUNBVElPTiA9ICdTVUNDRVNTX0RFTEVURV9OT1RJRklDQVRJT04nO1xyXG5leHBvcnQgY29uc3QgRkFJTF9ERUxFVEVfTk9USUZJQ0FUSU9OID0gJ0ZBSUxfREVMRVRFX05PVElGSUNBVElPTic7XHJcblxyXG4vL05vdGlmaWNhdGlvbiBncm91cCBhY3Rpb25zXHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCA9ICdERUxFVEVfTk9USUZJQ0FUSU9OX0dST1VQJztcclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCA9ICdTVUNDRVNTX0RFTEVURV9OT1RJRklDQVRJT05fR1JPVVAnXHJcbmV4cG9ydCBjb25zdCBGQUlMX0RFTEVURV9OT1RJRklDQVRJT05fR1JPVVAgPSAnRkFJTF9ERUxFVEVfTk9USUZJQ0FUSU9OX0dST1VQJztcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZU5vdGlmaWNhdGlvblN1Y2Nlc3MoanNvbkRlbGV0ZWQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU1VDQ0VTU19ERUxFVEVfTk9USUZJQ0FUSU9OLFxyXG4gICAgICAgIHBheWxvYWQ6IGpzb25EZWxldGVkXHJcbiAgICB9O1xyXG59XHJcblxyXG4vL1xyXG5mdW5jdGlvbiBkZWxldGVOb3RpZmljYXRpb25Hcm91cFN1Y2Nlc3Mobm90aWZpY2F0aW9uSWRzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNVQ0NFU1NfREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCxcclxuICAgICAgICBwYXlsb2FkOiBub3RpZmljYXRpb25JZHNcclxuICAgIH07XHJcbn1cclxuXHJcbi8vXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjYWxsRGVsZXRlTm90aWZpY2F0aW9uKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgLy9yZWFkIHRoZSBjb25mIGFmdGVyIGV4dGVuc2lvbi5cclxuICAgICAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcclxuICAgICAgICAvL0NyZWF0ZSB0aGUgVVJMXHJcbiAgICAgICAgY29uc3QgVVJMID0gYCR7Y29uZmlnLnJvb3RVUkx9LyR7Y29uZmlnLm5vdGlmaWNhdGlvblVSTH1gO1xyXG4gICAgICAgIC8vTWF5YmUgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWR1eC9pc3N1ZXMvOTExI2lzc3VlY29tbWVudC0xNDkzNjEwNzMgZm9yIGEgc2FuZXIgaW1wbGVtZW50YXRpb24gaW5zdGVhZCBvZiBjaGFpbmluZyB0d28gZGlzcGF0Y2guXHJcbiAgICAgICAgZGlzcGF0Y2goY2xlYXJFcnJvcigpKTtcclxuICAgICAgICBkaXNwYXRjaChyZWFkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxPcHRpb25zID0gY29uZmlnLnVzZUNyZWRlbnRpYWxzID8geyBjcmVkZW50aWFsczogJ2luY2x1ZGUnfSA6IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gY29uZmlnLm5vQ29udGVudFR5cGUgPyB7fSA6IGNvbmZpZy5jb250ZW50VHlwZSA/IHtoZWFkZXJzOiB7Y29udGVudFR5cGV9fSA6IHsgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfX07XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtVUkx9LyR7bm90aWZpY2F0aW9uSWR9YCwge21ldGhvZDogJ2RlbGV0ZScsIC4uLmNyZWRlbnRpYWxPcHRpb25zLCAuLi5jb250ZW50VHlwZX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSAyMDQgPyByZXNwb25zZS5qc29uKCkgOiB1bmRlZmluZWQpXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChkZWxldGVOb3RpZmljYXRpb25TdWNjZXNzKGpzb24pKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGRpc3BhdGNoKHNldEVycm9yKHtjb250ZW50OiBlcnIubWVzc2FnZSwgdHlwZTogJ25ldHdvcmsnfSkpKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUdyb3VwTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkcykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGxEZWxldGVOb3RpZmljYXRpb25Hcm91cChkaXNwYXRjaCkge1xyXG4gICAgICAgIC8vcmVhZCB0aGUgY29uZiBhZnRlciBleHRlbnNpb24uXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKCk7XHJcbiAgICAgICAgLy9DcmVhdGUgdGhlIFVSTFxyXG4gICAgICAgIGNvbnN0IFVSTCA9IGAke2NvbmZpZy5yb290VVJMfS8ke2NvbmZpZy5ub3RpZmljYXRpb25VUkx9YDtcclxuICAgICAgICAvL01heWJlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvaXNzdWVzLzkxMSNpc3N1ZWNvbW1lbnQtMTQ5MzYxMDczIGZvciBhIHNhbmVyIGltcGxlbWVudGF0aW9uIGluc3RlYWQgb2YgY2hhaW5pbmcgdHdvIGRpc3BhdGNoLlxyXG4gICAgICAgIGRpc3BhdGNoKGNsZWFyRXJyb3IoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVhZE5vdGlmaWNhdGlvbkdyb3VwKG5vdGlmaWNhdGlvbklkcykpO1xyXG5cclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsT3B0aW9ucyA9IGNvbmZpZy51c2VDcmVkZW50aWFscyA/IHsgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ30gOiB7fTtcclxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IGNvbmZpZy5ub0NvbnRlbnRUeXBlID8ge30gOiBjb25maWcuY29udGVudFR5cGUgPyB7aGVhZGVyczoge2NvbnRlbnRUeXBlfX0gOiB7IGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH19O1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7VVJMfWAsIHttZXRob2Q6ICdkZWxldGUnLCBib2R5OiBKU09OLnN0cmluZ2lmeShub3RpZmljYXRpb25JZHMpLCAuLi5jcmVkZW50aWFsT3B0aW9ucywgLi4uY29udGVudFR5cGV9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyAhPT0gMjA0ID8gcmVzcG9uc2UuanNvbigpIDogdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKGRlbGV0ZU5vdGlmaWNhdGlvbkdyb3VwU3VjY2Vzcyhqc29uKSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goc2V0RXJyb3Ioe2NvbnRlbnQ6IGVyci5tZXNzYWdlLCB0eXBlOiAnbmV0d29yayd9KSkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==