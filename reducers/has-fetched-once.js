'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hasFetchedOnceReducer;

var _fetchNotifications = require('../actions/fetch-notifications');

// reducer in charge of dealing with the visibility filter.
function hasFetchedOnceReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        isFetching = action.isFetching;

    switch (type) {
        case _fetchNotifications.RECEIVE_NOTIFICATIONS:
            return true;
        default:
            return state;
    }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiaGFzRmV0Y2hlZE9uY2VSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNGZXRjaGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxxQjs7QUFIeEI7O0FBRUE7QUFDZSxTQUFTQSxxQkFBVCxHQUEyRDtBQUFBLFFBQTVCQyxLQUE0Qix1RUFBcEIsS0FBb0I7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFBQSxRQUMvREMsSUFEK0QsR0FDM0NELE1BRDJDLENBQy9EQyxJQUQrRDtBQUFBLFFBQ3pEQyxVQUR5RCxHQUMzQ0YsTUFEMkMsQ0FDekRFLFVBRHlEOztBQUV0RSxZQUFRRCxJQUFSO0FBQ0k7QUFDSSxtQkFBTyxJQUFQO0FBQ0o7QUFDSSxtQkFBT0YsS0FBUDtBQUpSO0FBTUgiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UkVDRUlWRV9OT1RJRklDQVRJT05TfSBmcm9tICcuLi9hY3Rpb25zL2ZldGNoLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuLy8gcmVkdWNlciBpbiBjaGFyZ2Ugb2YgZGVhbGluZyB3aXRoIHRoZSB2aXNpYmlsaXR5IGZpbHRlci5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzRmV0Y2hlZE9uY2VSZWR1Y2VyKHN0YXRlID0gZmFsc2UsIGFjdGlvbiA9IHt9KSB7XHJcbiAgICBjb25zdCB7dHlwZSwgaXNGZXRjaGluZ30gPSBhY3Rpb247XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFJFQ0VJVkVfTk9USUZJQ0FUSU9OUzpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==