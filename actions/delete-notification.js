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
        var contentType = config.noContentType ? {} : config.contentType ? { contentType: contentType } : { 'Content-Type': 'application/json' };

        return (0, _isomorphicFetch2.default)(URL + '/' + notificationId, _extends({ method: 'delete' }, credentialOptions, contentType)).then(function (response) {
            return response ? response.json() : response;
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
        var contentType = config.noContentType ? {} : config.contentType ? { contentType: contentType } : { 'Content-Type': 'application/json' };

        return (0, _isomorphicFetch2.default)('' + URL, _extends({ method: 'delete', body: JSON.stringify(notificationIds) }, credentialOptions, contentType)).then(function (response) {
            return response ? response.json() : response;
        }).then(function (json) {
            return dispatch(deleteNotificationGroupSuccess(json));
        }).catch(function (err) {
            return dispatch((0, _error.setError)({ content: err.message, type: 'network' }));
        });
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZGVsZXRlTm90aWZpY2F0aW9uIiwiZGVsZXRlR3JvdXBOb3RpZmljYXRpb24iLCJERUxFVEVfTk9USUZJQ0FUSU9OIiwiU1VDQ0VTU19ERUxFVEVfTk9USUZJQ0FUSU9OIiwiRkFJTF9ERUxFVEVfTk9USUZJQ0FUSU9OIiwiREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCIsIlNVQ0NFU1NfREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCIsIkZBSUxfREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCIsImRlbGV0ZU5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJqc29uRGVsZXRlZCIsInR5cGUiLCJwYXlsb2FkIiwiZGVsZXRlTm90aWZpY2F0aW9uR3JvdXBTdWNjZXNzIiwibm90aWZpY2F0aW9uSWRzIiwibm90aWZpY2F0aW9uSWQiLCJjYWxsRGVsZXRlTm90aWZpY2F0aW9uIiwiZGlzcGF0Y2giLCJjb25maWciLCJVUkwiLCJyb290VVJMIiwibm90aWZpY2F0aW9uVVJMIiwiY3JlZGVudGlhbE9wdGlvbnMiLCJ1c2VDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwiY29udGVudFR5cGUiLCJub0NvbnRlbnRUeXBlIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNhdGNoIiwiY29udGVudCIsImVyciIsIm1lc3NhZ2UiLCJjYWxsRGVsZXRlTm90aWZpY2F0aW9uR3JvdXAiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7OztRQThCZ0JBLGtCLEdBQUFBLGtCO1FBcUJBQyx1QixHQUFBQSx1Qjs7QUF2RGhCOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFFQTtBQUNPLElBQU1DLG9EQUFzQixxQkFBNUI7QUFDQSxJQUFNQyxvRUFBOEIsNkJBQXBDO0FBQ0EsSUFBTUMsOERBQTJCLDBCQUFqQzs7QUFFUDs7QUFFTyxJQUFNQyxnRUFBNEIsMkJBQWxDO0FBQ0EsSUFB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Y2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge2NsZWFyRXJyb3IsIHNldEVycm9yfSBmcm9tICcuL2Vycm9yJztcclxuXHJcbi8vSW1wb3J0IG90aGVyIGFjdGlvbnNcclxuaW1wb3J0IHtyZWFkTm90aWZpY2F0aW9uLCByZWFkTm90aWZpY2F0aW9uR3JvdXB9IGZyb20gJy4vJztcclxuXHJcbi8vTm90aWZpY2F0aW9uIGFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IERFTEVURV9OT1RJRklDQVRJT04gPSAnREVMRVRFX05PVElGSUNBVElPTic7XHJcbmV4cG9ydCBjb25zdCBTVUNDRVNTX0RFTEVURV9OT1RJRklDQVRJT04gPSAnU1VDQ0VTU19ERUxFVEVfTk9USUZJQ0FUSU9OJztcclxuZXhwb3J0IGNvbnN0IEZBSUxfREVMRVRFX05PVElGSUNBVElPTiA9ICdGQUlMX0RFTEVURV9OT1RJRklDQVRJT04nO1xyXG5cclxuLy9Ob3RpZmljYXRpb24gZ3JvdXAgYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9OT1RJRklDQVRJT05fR1JPVVAgPSAnREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCc7XHJcbmV4cG9ydCBjb25zdCBTVUNDRVNTX0RFTEVURV9OT1RJRklDQVRJT05fR1JPVVAgPSAnU1VDQ0VTU19ERUxFVEVfTk9USUZJQ0FUSU9OX0dST1VQJ1xyXG5leHBvcnQgY29uc3QgRkFJTF9ERUxFVEVfTk9USUZJQ0FUSU9OX0dST1VQID0gJ0ZBSUxfREVMRVRFX05PVElGSUNBVElPTl9HUk9VUCc7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVOb3RpZmljYXRpb25TdWNjZXNzKGpzb25EZWxldGVkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNVQ0NFU1NfREVMRVRFX05PVElGSUNBVElPTixcclxuICAgICAgICBwYXlsb2FkOiBqc29uRGVsZXRlZFxyXG4gICAgfTtcclxufVxyXG5cclxuLy9cclxuZnVuY3Rpb24gZGVsZXRlTm90aWZpY2F0aW9uR3JvdXBTdWNjZXNzKG5vdGlmaWNhdGlvbklkcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBTVUNDRVNTX0RFTEVURV9OT1RJRklDQVRJT05fR1JPVVAsXHJcbiAgICAgICAgcGF5bG9hZDogbm90aWZpY2F0aW9uSWRzXHJcbiAgICB9O1xyXG59XHJcblxyXG4vL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FsbERlbGV0ZU5vdGlmaWNhdGlvbihkaXNwYXRjaCkge1xyXG4gICAgICAgIC8vcmVhZCB0aGUgY29uZiBhZnRlciBleHRlbnNpb24uXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKCk7XHJcbiAgICAgICAgLy9DcmVhdGUgdGhlIFVSTFxyXG4gICAgICAgIGNvbnN0IFVSTCA9IGAke2NvbmZpZy5yb290VVJMfS8ke2NvbmZpZy5ub3RpZmljYXRpb25VUkx9YDtcclxuICAgICAgICAvL01heWJlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvaXNzdWVzLzkxMSNpc3N1ZWNvbW1lbnQtMTQ5MzYxMDczIGZvciBhIHNhbmVyIGltcGxlbWVudGF0aW9uIGluc3RlYWQgb2YgY2hhaW5pbmcgdHdvIGRpc3BhdGNoLlxyXG4gICAgICAgIGRpc3BhdGNoKGNsZWFyRXJyb3IoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVhZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsT3B0aW9ucyA9IGNvbmZpZy51c2VDcmVkZW50aWFscyA/IHsgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ30gOiB7fTtcclxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IGNvbmZpZy5ub0NvbnRlbnRUeXBlID8ge30gOiBjb25maWcuY29udGVudFR5cGUgPyB7Y29udGVudFR5cGV9IDogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH07XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtVUkx9LyR7bm90aWZpY2F0aW9uSWR9YCwge21ldGhvZDogJ2RlbGV0ZScsIC4uLmNyZWRlbnRpYWxPcHRpb25zLCAuLi5jb250ZW50VHlwZX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UgPyByZXNwb25zZS5qc29uKCkgOiByZXNwb25zZSlcclxuICAgICAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKGRlbGV0ZU5vdGlmaWNhdGlvblN1Y2Nlc3MoanNvbikpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goc2V0RXJyb3Ioe2NvbnRlbnQ6IGVyci5tZXNzYWdlLCB0eXBlOiAnbmV0d29yayd9KSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlR3JvdXBOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWRzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY2FsbERlbGV0ZU5vdGlmaWNhdGlvbkdyb3VwKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgLy9yZWFkIHRoZSBjb25mIGFmdGVyIGV4dGVuc2lvbi5cclxuICAgICAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcclxuICAgICAgICAvL0NyZWF0ZSB0aGUgVVJMXHJcbiAgICAgICAgY29uc3QgVVJMID0gYCR7Y29uZmlnLnJvb3RVUkx9LyR7Y29uZmlnLm5vdGlmaWNhdGlvblVSTH1gO1xyXG4gICAgICAgIC8vTWF5YmUgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWR1eC9pc3N1ZXMvOTExI2lzc3VlY29tbWVudC0xNDkzNjEwNzMgZm9yIGEgc2FuZXIgaW1wbGVtZW50YXRpb24gaW5zdGVhZCBvZiBjaGFpbmluZyB0d28gZGlzcGF0Y2guXHJcbiAgICAgICAgZGlzcGF0Y2goY2xlYXJFcnJvcigpKTtcclxuICAgICAgICBkaXNwYXRjaChyZWFkTm90aWZpY2F0aW9uR3JvdXAobm90aWZpY2F0aW9uSWRzKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxPcHRpb25zID0gY29uZmlnLnVzZUNyZWRlbnRpYWxzID8geyBjcmVkZW50aWFsczogJ2luY2x1ZGUnfSA6IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gY29uZmlnLm5vQ29udGVudFR5cGUgPyB7fSA6IGNvbmZpZy5jb250ZW50VHlwZSA/IHtjb250ZW50VHlwZX0gOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke1VSTH1gLCB7bWV0aG9kOiAnZGVsZXRlJywgYm9keTogSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uSWRzKSwgLi4uY3JlZGVudGlhbE9wdGlvbnMsIC4uLmNvbnRlbnRUeXBlfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UgPyByZXNwb25zZS5qc29uKCkgOiByZXNwb25zZSlcclxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChkZWxldGVOb3RpZmljYXRpb25Hcm91cFN1Y2Nlc3MoanNvbikpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGRpc3BhdGNoKHNldEVycm9yKHtjb250ZW50OiBlcnIubWVzc2FnZSwgdHlwZTogJ25ldHdvcmsnfSkpKTtcclxuICAgIH1cclxufVxyXG4iXX0=