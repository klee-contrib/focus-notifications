'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.extendConfig = extendConfig;
exports.getConfig = getConfig;

var DEFAULT_CONF = {
    rootURL: 'http://localhost:9999/x/notification',
    notificationURL: 'notifications',
    translateDate: undefined,
    translateText: undefined,
    useCredentials: false
};

//Default config on port 9999
var conf = _extends({}, DEFAULT_CONF);

function extendConfig(newConf) {
    conf = _extends({}, conf, newConf);
    console.info('NOTIFICATIONS = extends configuration', conf);
    return conf;
}

function getConfig() {
    return conf;
}

exports.default = conf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZXh0ZW5kQ29uZmlnIiwiZ2V0Q29uZmlnIiwiREVGQVVMVF9DT05GIiwicm9vdFVSTCIsIm5vdGlmaWNhdGlvblVSTCIsInRyYW5zbGF0ZURhdGUiLCJ1bmRlZmluZWQiLCJ0cmFuc2xhdGVUZXh0IiwidXNlQ3JlZGVudGlhbHMiLCJjb25mIiwibmV3Q29uZiIsImNvbnNvbGUiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVlnQkEsWSxHQUFBQSxZO1FBTUFDLFMsR0FBQUEsUzs7QUFqQmhCLElBQU1DLGVBQWU7QUFDakJDLGFBQVMsc0NBRFE7QUFFakJDLHFCQUFpQixlQUZBO0FBR2pCQyxtQkFBZUMsU0FIRTtBQUlqQkMsbUJBQWVELFNBSkU7QUFLakJFLG9CQUFnQjtBQUxDLENBQXJCOztBQVFBO0FBQ0EsSUFBSUMsb0JBQVdQLFlBQVgsQ0FBSjs7QUFFTyxTQUFTRixZQUFULENBQXNCVSxPQUF0QixFQUErQjtBQUNsQ0Qsd0JBQVdBLElBQVgsRUFBb0JDLE9BQXBCO0FBQ0FDLFlBQVFDLElBQVIsQ0FBYSx1Q0FBYixFQUFzREgsSUFBdEQ7QUFDQSxXQUFPQSxJQUFQO0FBQ0g7O0FBRU0sU0FBU1IsU0FBVCxHQUFxQjtBQUN4QixXQUFPUSxJQUFQO0FBQ0g7O2tCQUVjQSxJIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgREVGQVVMVF9DT05GID0ge1xyXG4gICAgcm9vdFVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6OTk5OS94L25vdGlmaWNhdGlvbicsXHJcbiAgICBub3RpZmljYXRpb25VUkw6ICdub3RpZmljYXRpb25zJyxcclxuICAgIHRyYW5zbGF0ZURhdGU6IHVuZGVmaW5lZCxcclxuICAgIHRyYW5zbGF0ZVRleHQ6IHVuZGVmaW5lZCxcclxuICAgIHVzZUNyZWRlbnRpYWxzOiBmYWxzZVxyXG59O1xyXG5cclxuLy9EZWZhdWx0IGNvbmZpZyBvbiBwb3J0IDk5OTlcclxubGV0IGNvbmYgPSB7Li4uREVGQVVMVF9DT05GfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRDb25maWcobmV3Q29uZikge1xyXG4gICAgY29uZiA9IHsuLi5jb25mLCAuLi5uZXdDb25mfTtcclxuICAgIGNvbnNvbGUuaW5mbygnTk9USUZJQ0FUSU9OUyA9IGV4dGVuZHMgY29uZmlndXJhdGlvbicsIGNvbmYpO1xyXG4gICAgcmV0dXJuIGNvbmY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWcoKSB7XHJcbiAgICByZXR1cm4gY29uZjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZjtcclxuIl19