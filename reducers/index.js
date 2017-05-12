'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _notificationsList = require('./notifications-list');

var _notificationsList2 = _interopRequireDefault(_notificationsList);

var _visibilityFilter = require('./visibility-filter');

var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

var _isFetching = require('./is-fetching');

var _isFetching2 = _interopRequireDefault(_isFetching);

var _isOpen = require('./is-open');

var _isOpen2 = _interopRequireDefault(_isOpen);

var _notificationReceiver = require('./notification-receiver');

var _notificationReceiver2 = _interopRequireDefault(_notificationReceiver);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This is a reduce function to ease reducer composition.
exports.default = (0, _redux.combineReducers)({
    visibilityFilter: _visibilityFilter2.default,
    notificationList: _notificationsList2.default,
    isFetching: _isFetching2.default,
    isOpen: _isOpen2.default,
    notificationReceiver: _notificationReceiver2.default,
    error: _error2.default
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsidmlzaWJpbGl0eUZpbHRlciIsIm5vdGlmaWNhdGlvbkxpc3QiLCJpc0ZldGNoaW5nIiwiaXNPcGVuIiwibm90aWZpY2F0aW9uUmVjZWl2ZXIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtrQkFDZSw0QkFBZ0I7QUFDM0JBLGdEQUQyQjtBQUUzQkMsaURBRjJCO0FBRzNCQyxvQ0FIMkI7QUFJM0JDLDRCQUoyQjtBQUszQkMsd0RBTDJCO0FBTTNCQztBQU4yQixDQUFoQixDIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBub3RpZmljYXRpb25MaXN0IGZyb20gJy4vbm90aWZpY2F0aW9ucy1saXN0JztcclxuaW1wb3J0IHZpc2liaWxpdHlGaWx0ZXIgZnJvbSAnLi92aXNpYmlsaXR5LWZpbHRlcic7XHJcbmltcG9ydCBpc0ZldGNoaW5nIGZyb20gJy4vaXMtZmV0Y2hpbmcnO1xyXG5pbXBvcnQgaXNPcGVuIGZyb20gJy4vaXMtb3Blbic7XHJcbmltcG9ydCBub3RpZmljYXRpb25SZWNlaXZlciBmcm9tICcuL25vdGlmaWNhdGlvbi1yZWNlaXZlcic7XHJcbmltcG9ydCBlcnJvciBmcm9tICcuL2Vycm9yJztcclxuXHJcbi8vVGhpcyBpcyBhIHJlZHVjZSBmdW5jdGlvbiB0byBlYXNlIHJlZHVjZXIgY29tcG9zaXRpb24uXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICB2aXNpYmlsaXR5RmlsdGVyLFxyXG4gICAgbm90aWZpY2F0aW9uTGlzdCxcclxuICAgIGlzRmV0Y2hpbmcsXHJcbiAgICBpc09wZW4sXHJcbiAgICBub3RpZmljYXRpb25SZWNlaXZlcixcclxuICAgIGVycm9yXHJcbn0pO1xyXG4iXX0=