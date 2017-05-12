'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = errorReducer;

var _error = require('../actions/error');

// reducer in charge of dealing with the visibility filter.
function errorReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        payload = action.payload;

    switch (type) {
        case _error.SET_ERROR:
            return _extends({}, payload);
        case _error.CLEAR_ERROR:
            return false;
        default:
            return state;
    }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZXJyb3JSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBR3dCQSxZOztBQUh4Qjs7QUFFQTtBQUNlLFNBQVNBLFlBQVQsR0FBa0Q7QUFBQSxRQUE1QkMsS0FBNEIsdUVBQXBCLEtBQW9CO0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQUEsUUFDdERDLElBRHNELEdBQ3JDRCxNQURxQyxDQUN0REMsSUFEc0Q7QUFBQSxRQUNoREMsT0FEZ0QsR0FDckNGLE1BRHFDLENBQ2hERSxPQURnRDs7QUFFN0QsWUFBUUQsSUFBUjtBQUNJO0FBQ0ksZ0NBQVdDLE9BQVg7QUFDSjtBQUNJLG1CQUFPLEtBQVA7QUFDSjtBQUNJLG1CQUFPSCxLQUFQO0FBTlI7QUFRSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTRVRfRVJST1IsIENMRUFSX0VSUk9SfSBmcm9tICcuLi9hY3Rpb25zL2Vycm9yJztcclxuXHJcbi8vIHJlZHVjZXIgaW4gY2hhcmdlIG9mIGRlYWxpbmcgd2l0aCB0aGUgdmlzaWJpbGl0eSBmaWx0ZXIuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yUmVkdWNlcihzdGF0ZSA9IGZhbHNlLCBhY3Rpb24gPSB7fSkge1xyXG4gICAgY29uc3Qge3R5cGUsIHBheWxvYWR9ID0gYWN0aW9uO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTRVRfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucGF5bG9hZH07XHJcbiAgICAgICAgY2FzZSBDTEVBUl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iXX0=