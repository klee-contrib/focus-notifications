'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.extendConfig = extendConfig;
exports.getConfig = getConfig;
var DEFAULT_CONF = {
    rootURL: 'http://localhost:9999',
    notificationURL: 'notifications',
    useCredentials: false,
    //Translations
    i18n: {
        center: 'Notification center',
        '3_before': 'Before',
        '1_lastWeek': 'Last Week',
        '2_lastMonth': 'Last month',
        '0_today': 'Today'
    }
};

//Default config on port 9999
var conf = _extends({}, DEFAULT_CONF);

function extendConfig(newConf) {
    conf = _extends({}, conf, newConf);
    console.info('new conf', conf);
    return conf;
}

function getConfig() {
    return conf;
}

exports.default = conf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZXh0ZW5kQ29uZmlnIiwiZ2V0Q29uZmlnIiwiREVGQVVMVF9DT05GIiwicm9vdFVSTCIsIm5vdGlmaWNhdGlvblVSTCIsInVzZUNyZWRlbnRpYWxzIiwiaTE4biIsImNlbnRlciIsImNvbmYiLCJuZXdDb25mIiwiY29uc29sZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBa0JnQkEsWSxHQUFBQSxZO1FBTUFDLFMsR0FBQUEsUztBQXhCaEIsSUFBTUMsZUFBZTtBQUNqQkMsYUFBUyx1QkFEUTtBQUVqQkMscUJBQWlCLGVBRkE7QUFHakJDLG9CQUFnQixLQUhDO0FBSWpCO0FBQ0FDLFVBQUs7QUFDSEMsZ0JBQVEscUJBREw7QUFFSCxvQkFBWSxRQUZUO0FBR0gsc0JBQWMsV0FIWDtBQUlILHVCQUFlLFlBSlo7QUFLSCxtQkFBVztBQUxSO0FBTFksQ0FBckI7O0FBY0E7QUFDQSxJQUFJQyxvQkFBV04sWUFBWCxDQUFKOztBQUdPLFNBQVNGLFlBQVQsQ0FBc0JTLE9BQXRCLEVBQStCO0FBQ2xDRCx3QkFBV0EsSUFBWCxFQUFvQkMsT0FBcEI7QUFDQUMsWUFBUUMsSUFBUixDQUFhLFVBQWIsRUFBeUJILElBQXpCO0FBQ0EsV0FBT0EsSUFBUDtBQUNIOztBQUVNLFNBQVNQLFNBQVQsR0FBcUI7QUFDeEIsV0FBT08sSUFBUDtBQUNIOztrQkFFY0EsSSIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9DT05GID0ge1xyXG4gICAgcm9vdFVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6OTk5OScsXHJcbiAgICBub3RpZmljYXRpb25VUkw6ICdub3RpZmljYXRpb25zJyxcclxuICAgIHVzZUNyZWRlbnRpYWxzOiBmYWxzZSxcclxuICAgIC8vVHJhbnNsYXRpb25zXHJcbiAgICBpMThuOntcclxuICAgICAgY2VudGVyOiAnTm90aWZpY2F0aW9uIGNlbnRlcicsXHJcbiAgICAgICczX2JlZm9yZSc6ICdCZWZvcmUnLFxyXG4gICAgICAnMV9sYXN0V2Vlayc6ICdMYXN0IFdlZWsnLFxyXG4gICAgICAnMl9sYXN0TW9udGgnOiAnTGFzdCBtb250aCcsXHJcbiAgICAgICcwX3RvZGF5JzogJ1RvZGF5J1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy9EZWZhdWx0IGNvbmZpZyBvbiBwb3J0IDk5OTlcclxubGV0IGNvbmYgPSB7Li4uREVGQVVMVF9DT05GfTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kQ29uZmlnKG5ld0NvbmYpIHtcclxuICAgIGNvbmYgPSB7Li4uY29uZiwgLi4ubmV3Q29uZn07XHJcbiAgICBjb25zb2xlLmluZm8oJ25ldyBjb25mJywgY29uZik7XHJcbiAgICByZXR1cm4gY29uZjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZygpIHtcclxuICAgIHJldHVybiBjb25mO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25mO1xyXG4iXX0=