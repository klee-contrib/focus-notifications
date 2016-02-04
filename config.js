'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztRQWtCZ0I7UUFNQTtBQXhCaEIsSUFBTSxlQUFlO0FBQ2pCLGFBQVMsdUJBQVQ7QUFDQSxxQkFBaUIsZUFBakI7QUFDQSxvQkFBZ0IsS0FBaEI7O0FBRUEsVUFBSztBQUNILGdCQUFRLHFCQUFSO0FBQ0Esb0JBQVksUUFBWjtBQUNBLHNCQUFjLFdBQWQ7QUFDQSx1QkFBZSxZQUFmO0FBQ0EsbUJBQVcsT0FBWDtLQUxGO0NBTEU7OztBQWVOLElBQUksb0JBQVcsYUFBWDs7QUFHRyxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDbEMsd0JBQVcsTUFBUyxRQUFwQixDQURrQztBQUVsQyxZQUFRLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCLEVBRmtDO0FBR2xDLFdBQU8sSUFBUCxDQUhrQztDQUEvQjs7QUFNQSxTQUFTLFNBQVQsR0FBcUI7QUFDeEIsV0FBTyxJQUFQLENBRHdCO0NBQXJCOztrQkFJUSIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUX0NPTkYgPSB7XG4gICAgcm9vdFVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6OTk5OScsXG4gICAgbm90aWZpY2F0aW9uVVJMOiAnbm90aWZpY2F0aW9ucycsXG4gICAgdXNlQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgIC8vVHJhbnNsYXRpb25zXG4gICAgaTE4bjp7XG4gICAgICBjZW50ZXI6ICdOb3RpZmljYXRpb24gY2VudGVyJyxcbiAgICAgICczX2JlZm9yZSc6ICdCZWZvcmUnLFxuICAgICAgJzFfbGFzdFdlZWsnOiAnTGFzdCBXZWVrJyxcbiAgICAgICcyX2xhc3RNb250aCc6ICdMYXN0IG1vbnRoJyxcbiAgICAgICcwX3RvZGF5JzogJ1RvZGF5J1xuICAgIH1cbn07XG5cbi8vRGVmYXVsdCBjb25maWcgb24gcG9ydCA5OTk5XG5sZXQgY29uZiA9IHsuLi5ERUZBVUxUX0NPTkZ9O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRDb25maWcobmV3Q29uZikge1xuICAgIGNvbmYgPSB7Li4uY29uZiwgLi4ubmV3Q29uZn07XG4gICAgY29uc29sZS5pbmZvKCduZXcgY29uZicsIGNvbmYpO1xuICAgIHJldHVybiBjb25mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiBjb25mO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25mO1xuIl19