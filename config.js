'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extendConfig = extendConfig;
exports.getConfig = getConfig;
var DEFAULT_CONF = {
    rootURL: 'http://localhost:9999',
    notificationURL: 'notifications'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztRQVNnQixZQUFZLEdBQVosWUFBWTtRQU1aLFNBQVMsR0FBVCxTQUFTO0FBZnpCLElBQU0sWUFBWSxHQUFHO0FBQ2pCLFdBQU8sRUFBRSx1QkFBdUI7QUFDaEMsbUJBQWUsRUFBRSxlQUFlO0NBQ25DOzs7QUFBQyxBQUdGLElBQUksSUFBSSxnQkFBTyxZQUFZLENBQUMsQ0FBQzs7QUFHdEIsU0FBUyxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQ2xDLFFBQUksZ0JBQU8sSUFBSSxFQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLFdBQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9CLFdBQU8sSUFBSSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxTQUFTLEdBQUc7QUFDeEIsV0FBTyxJQUFJLENBQUM7Q0FDZjs7a0JBRWMsSUFBSSIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUX0NPTkYgPSB7XG4gICAgcm9vdFVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6OTk5OScsXG4gICAgbm90aWZpY2F0aW9uVVJMOiAnbm90aWZpY2F0aW9ucydcbn07XG5cbi8vRGVmYXVsdCBjb25maWcgb24gcG9ydCA5OTk5XG5sZXQgY29uZiA9IHsuLi5ERUZBVUxUX0NPTkZ9O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRDb25maWcobmV3Q29uZikge1xuICAgIGNvbmYgPSB7Li4uY29uZiwgLi4ubmV3Q29uZn07XG4gICAgY29uc29sZS5pbmZvKCduZXcgY29uZicsIGNvbmYpO1xuICAgIHJldHVybiBjb25mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiBjb25mO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25mO1xuIl19