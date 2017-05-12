'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isOpenReducer;

var _actions = require('../actions');

// reducer in charge of dealing with the visibility of the notification center.
function isOpenReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type;

    switch (type) {
        case _actions.OPEN_CENTER:
            return true;
        case _actions.CLOSE_CENTER:
            return false;
        default:
            return state;
    }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiaXNPcGVuUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxhOztBQUh4Qjs7QUFFQTtBQUNlLFNBQVNBLGFBQVQsR0FBbUQ7QUFBQSxRQUE1QkMsS0FBNEIsdUVBQXBCLEtBQW9CO0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQUEsUUFDdkRDLElBRHVELEdBQy9DRCxNQUQrQyxDQUN2REMsSUFEdUQ7O0FBRTlELFlBQVFBLElBQVI7QUFDSTtBQUNJLG1CQUFPLElBQVA7QUFDSjtBQUNJLG1CQUFPLEtBQVA7QUFDSjtBQUNJLG1CQUFPRixLQUFQO0FBTlI7QUFRSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT1BFTl9DRU5URVIsIENMT1NFX0NFTlRFUn0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG4vLyByZWR1Y2VyIGluIGNoYXJnZSBvZiBkZWFsaW5nIHdpdGggdGhlIHZpc2liaWxpdHkgb2YgdGhlIG5vdGlmaWNhdGlvbiBjZW50ZXIuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT3BlblJlZHVjZXIoc3RhdGUgPSBmYWxzZSwgYWN0aW9uID0ge30pIHtcclxuICAgIGNvbnN0IHt0eXBlfSA9IGFjdGlvbjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgT1BFTl9DRU5URVI6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGNhc2UgQ0xPU0VfQ0VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==