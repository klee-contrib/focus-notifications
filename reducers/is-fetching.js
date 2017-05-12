'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFetchingReducer;

var _fetchNotifications = require('../actions/fetch-notifications');

var _error = require('../actions/error');

// reducer in charge of dealing with the visibility filter.
function isFetchingReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        isFetching = action.isFetching;

    switch (type) {
        case _fetchNotifications.REQUEST_NOTIFICATIONS:
            return true;
        case _error.SET_ERROR:
        case _fetchNotifications.RECEIVE_NOTIFICATIONS:
            return false;
        default:
            return state;
    }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiaXNGZXRjaGluZ1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpc0ZldGNoaW5nIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFHd0JBLGlCOztBQUh4Qjs7QUFDQTs7QUFDQTtBQUNlLFNBQVNBLGlCQUFULEdBQXVEO0FBQUEsUUFBNUJDLEtBQTRCLHVFQUFwQixLQUFvQjtBQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTtBQUFBLFFBQzNEQyxJQUQyRCxHQUN2Q0QsTUFEdUMsQ0FDM0RDLElBRDJEO0FBQUEsUUFDckRDLFVBRHFELEdBQ3ZDRixNQUR1QyxDQUNyREUsVUFEcUQ7O0FBRWxFLFlBQVFELElBQVI7QUFDSTtBQUNJLG1CQUFPLElBQVA7QUFDSjtBQUNBO0FBQ0ksbUJBQU8sS0FBUDtBQUNKO0FBQ0ksbUJBQU9GLEtBQVA7QUFQUjtBQVNIIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRVFVRVNUX05PVElGSUNBVElPTlMsIFJFQ0VJVkVfTk9USUZJQ0FUSU9OU30gZnJvbSAnLi4vYWN0aW9ucy9mZXRjaC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHtTRVRfRVJST1J9IGZyb20gJy4uL2FjdGlvbnMvZXJyb3InO1xyXG4vLyByZWR1Y2VyIGluIGNoYXJnZSBvZiBkZWFsaW5nIHdpdGggdGhlIHZpc2liaWxpdHkgZmlsdGVyLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ZldGNoaW5nUmVkdWNlcihzdGF0ZSA9IGZhbHNlLCBhY3Rpb24gPSB7fSkge1xyXG4gICAgY29uc3Qge3R5cGUsIGlzRmV0Y2hpbmd9ID0gYWN0aW9uO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBSRVFVRVNUX05PVElGSUNBVElPTlM6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGNhc2UgU0VUX0VSUk9SOlxyXG4gICAgICAgIGNhc2UgUkVDRUlWRV9OT1RJRklDQVRJT05TOlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==