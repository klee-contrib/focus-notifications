'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _create = require('./store/create');

var _create2 = _interopRequireDefault(_create);

var _notificationCenter = require('./component/notification-center');

var _notificationCenter2 = _interopRequireDefault(_notificationCenter);

var _config = require('./config');

var _devTools = require('./container/dev-tools');

var _devTools2 = _interopRequireDefault(_devTools);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//Import sass files


var isDev = __DEV__;
var notificationStore = (0, _create2.default)();

function NotificationCenterDev(_ref) {
    var iconName = _ref.iconName,
        onSingleClick = _ref.onSingleClick,
        store = _ref.store,
        panelFooter = _ref.panelFooter,
        panelHeader = _ref.panelHeader;

    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_notificationCenter2.default, { iconName: iconName, hasAddNotif: false, onSingleClick: onSingleClick, panelHeader: panelHeader, panelFooter: panelFooter }),
            _react2.default.createElement(_devTools2.default, null)
        )
    );
}
NotificationCenterDev.displayName = 'NotificationCenterDev';

function NotificationCenterProd(_ref2) {
    var iconName = _ref2.iconName,
        onSingleClick = _ref2.onSingleClick,
        store = _ref2.store,
        panelFooter = _ref2.panelFooter,
        panelHeader = _ref2.panelHeader;

    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_notificationCenter2.default, { iconName: iconName, hasAddNotif: false, onSingleClick: onSingleClick, panelHeader: panelHeader, panelFooter: panelFooter })
    );
}
NotificationCenterProd.displayName = 'NotificationCenterProd';

var SmartNotificationCenter = function (_Component) {
    _inherits(SmartNotificationCenter, _Component);

    function SmartNotificationCenter() {
        _classCallCheck(this, SmartNotificationCenter);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    SmartNotificationCenter.prototype.componentWillMount = function componentWillMount() {
        var config = this.props.config;

        (0, _config.extendConfig)(config);

        var _getConfig = (0, _config.getConfig)(),
            translateText = _getConfig.translateText,
            translateDate = _getConfig.translateDate;

        if (!translateText) {
            console.error('please define a text translation function. ex: translateText: (text) => i18next.t(text)');
        }
        if (!translateDate) {
            console.error('please define a date formatter function. ex: translateDate: (date) => moment(date).forNow()');
        }
    };

    SmartNotificationCenter.prototype.render = function render() {
        var _props = this.props,
            iconName = _props.iconName,
            panelFooter = _props.panelFooter,
            panelHeader = _props.panelHeader;

        var NotificationCenterComponent = isDev ? NotificationCenterDev : NotificationCenterProd;
        return _react2.default.createElement(NotificationCenterComponent, { iconName: iconName, onSingleClick: this.props.onSingleClick, store: notificationStore, panelHeader: panelHeader, panelFooter: panelFooter });
    };

    return SmartNotificationCenter;
}(_react.Component);

SmartNotificationCenter.displayName = SmartNotificationCenter;
SmartNotificationCenter.propTypes = {
    config: _react.PropTypes.object,
    iconName: _react.PropTypes.string
};
exports.default = SmartNotificationCenter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiaXNEZXYiLCJfX0RFVl9fIiwibm90aWZpY2F0aW9uU3RvcmUiLCJOb3RpZmljYXRpb25DZW50ZXJEZXYiLCJpY29uTmFtZSIsIm9uU2luZ2xlQ2xpY2siLCJzdG9yZSIsInBhbmVsRm9vdGVyIiwicGFuZWxIZWFkZXIiLCJkaXNwbGF5TmFtZSIsIk5vdGlmaWNhdGlvbkNlbnRlclByb2QiLCJTbWFydE5vdGlmaWNhdGlvbkNlbnRlciIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbmZpZyIsInByb3BzIiwidHJhbnNsYXRlVGV4dCIsInRyYW5zbGF0ZURhdGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZW5kZXIiLCJOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxRQUFRQyxPQUFkO0FBQ0EsSUFBTUMsb0JBQW9CLHVCQUExQjs7QUFFQSxTQUFTQyxxQkFBVCxPQUEyRjtBQUFBLFFBQTNEQyxRQUEyRCxRQUEzREEsUUFBMkQ7QUFBQSxRQUFqREMsYUFBaUQsUUFBakRBLGFBQWlEO0FBQUEsUUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLFFBQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxRQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBQ3ZGLFdBQ0k7QUFBQTtBQUFBLFVBQVUsT0FBT0YsS0FBakI7QUFDSTtBQUFBO0FBQUE7QUFDSSwwRUFBb0IsVUFBVUYsUUFBOUIsRUFBd0MsYUFBYSxLQUFyRCxFQUE0RCxlQUFlQyxhQUEzRSxFQUEwRixhQUFhRyxXQUF2RyxFQUFvSCxhQUFhRCxXQUFqSSxHQURKO0FBRUk7QUFGSjtBQURKLEtBREo7QUFRSDtBQUNESixzQkFBc0JNLFdBQXRCLEdBQW9DLHVCQUFwQzs7QUFJQSxTQUFTQyxzQkFBVCxRQUE0RjtBQUFBLFFBQTNETixRQUEyRCxTQUEzREEsUUFBMkQ7QUFBQSxRQUFqREMsYUFBaUQsU0FBakRBLGFBQWlEO0FBQUEsUUFBbENDLEtBQWtDLFNBQWxDQSxLQUFrQztBQUFBLFFBQTNCQyxXQUEyQixTQUEzQkEsV0FBMkI7QUFBQSxRQUFkQyxXQUFjLFNBQWRBLFdBQWM7O0FBQ3hGLFdBQ0k7QUFBQTtBQUFBLFVBQVUsT0FBT0YsS0FBakI7QUFDSSxzRUFBb0IsVUFBVUYsUUFBOUIsRUFBd0MsYUFBYSxLQUFyRCxFQUE0RCxlQUFlQyxhQUEzRSxFQUEwRixhQUFhRyxXQUF2RyxFQUFvSCxhQUFhRCxXQUFqSTtBQURKLEtBREo7QUFLSDtBQUNERyx1QkFBdUJELFdBQXZCLEdBQXFDLHdCQUFyQzs7SUFJTUUsdUI7Ozs7Ozs7OztzQ0FDRkMsa0IsaUNBQXFCO0FBQUEsWUFDVkMsTUFEVSxHQUNBLEtBQUtDLEtBREwsQ0FDVkQsTUFEVTs7QUFFakIsa0NBQWFBLE1BQWI7O0FBRmlCLHlCQUdzQix3QkFIdEI7QUFBQSxZQUdWRSxhQUhVLGNBR1ZBLGFBSFU7QUFBQSxZQUdLQyxhQUhMLGNBR0tBLGFBSEw7O0FBSWpCLFlBQUcsQ0FBQ0QsYUFBSixFQUFtQjtBQUNmRSxvQkFBUUMsS0FBUixDQUFjLHlGQUFkO0FBQ0g7QUFDRCxZQUFHLENBQUNGLGFBQUosRUFBbUI7QUFDZkMsb0JBQVFDLEtBQVIsQ0FBYyw2RkFBZDtBQUNIO0FBQ0osSzs7c0NBQ0RDLE0scUJBQVM7QUFBQSxxQkFDd0MsS0FBS0wsS0FEN0M7QUFBQSxZQUNFVixRQURGLFVBQ0VBLFFBREY7QUFBQSxZQUNZRyxXQURaLFVBQ1lBLFdBRFo7QUFBQSxZQUN5QkMsV0FEekIsVUFDeUJBLFdBRHpCOztBQUVMLFlBQU1ZLDhCQUE4QnBCLFFBQVFHLHFCQUFSLEdBQWdDTyxzQkFBcEU7QUFDQSxlQUFPLDhCQUFDLDJCQUFELElBQTZCLFVBQVVOLFFBQXZDLEVBQWlELGVBQWUsS0FBS1UsS0FBTCxDQUFXVCxhQUEzRSxFQUEwRixPQUFPSCxpQkFBakcsRUFBb0gsYUFBYU0sV0FBakksRUFBOEksYUFBYUQsV0FBM0osR0FBUDtBQUNILEs7Ozs7O0FBRUxJLHdCQUF3QkYsV0FBeEIsR0FBc0NFLHVCQUF0QztBQUNBQSx3QkFBd0JVLFNBQXhCLEdBQW9DO0FBQ2hDUixZQUFRLGlCQUFVUyxNQURjO0FBRWhDbEIsY0FBVSxpQkFBVW1CO0FBRlksQ0FBcEM7a0JBSWVaLHVCIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IENvbXBvbmVudCAsIFByb3BUeXBlcyB9ZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vc3RvcmUvY3JlYXRlJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkNlbnRlciBmcm9tICcuL2NvbXBvbmVudC9ub3RpZmljYXRpb24tY2VudGVyJztcclxuaW1wb3J0IHtleHRlbmRDb25maWcsIGdldENvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnLi9jb250YWluZXIvZGV2LXRvb2xzJztcclxuXHJcbi8vSW1wb3J0IHNhc3MgZmlsZXNcclxuaW1wb3J0ICcuL3N0eWxlJztcclxuXHJcbmNvbnN0IGlzRGV2ID0gX19ERVZfXztcclxuY29uc3Qgbm90aWZpY2F0aW9uU3RvcmUgPSBjcmVhdGVTdG9yZSgpO1xyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9uQ2VudGVyRGV2KHtpY29uTmFtZSwgb25TaW5nbGVDbGljaywgc3RvcmUsIHBhbmVsRm9vdGVyLCBwYW5lbEhlYWRlcn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uQ2VudGVyIGljb25OYW1lPXtpY29uTmFtZX0gaGFzQWRkTm90aWY9e2ZhbHNlfSBvblNpbmdsZUNsaWNrPXtvblNpbmdsZUNsaWNrfSBwYW5lbEhlYWRlcj17cGFuZWxIZWFkZXJ9IHBhbmVsRm9vdGVyPXtwYW5lbEZvb3Rlcn0vPlxyXG4gICAgICAgICAgICAgICAgPERldlRvb2xzLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuTm90aWZpY2F0aW9uQ2VudGVyRGV2LmRpc3BsYXlOYW1lID0gJ05vdGlmaWNhdGlvbkNlbnRlckRldic7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbkNlbnRlclByb2Qoe2ljb25OYW1lLCBvblNpbmdsZUNsaWNrLCBzdG9yZSwgcGFuZWxGb290ZXIsIHBhbmVsSGVhZGVyfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkNlbnRlciBpY29uTmFtZT17aWNvbk5hbWV9IGhhc0FkZE5vdGlmPXtmYWxzZX0gb25TaW5nbGVDbGljaz17b25TaW5nbGVDbGlja30gcGFuZWxIZWFkZXI9e3BhbmVsSGVhZGVyfSBwYW5lbEZvb3Rlcj17cGFuZWxGb290ZXJ9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuTm90aWZpY2F0aW9uQ2VudGVyUHJvZC5kaXNwbGF5TmFtZSA9ICdOb3RpZmljYXRpb25DZW50ZXJQcm9kJztcclxuXHJcblxyXG5cclxuY2xhc3MgU21hcnROb3RpZmljYXRpb25DZW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBleHRlbmRDb25maWcoY29uZmlnKTtcclxuICAgICAgICBjb25zdCB7dHJhbnNsYXRlVGV4dCwgdHJhbnNsYXRlRGF0ZX0gPSBnZXRDb25maWcoKTtcclxuICAgICAgICBpZighdHJhbnNsYXRlVGV4dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwbGVhc2UgZGVmaW5lIGEgdGV4dCB0cmFuc2xhdGlvbiBmdW5jdGlvbi4gZXg6IHRyYW5zbGF0ZVRleHQ6ICh0ZXh0KSA9PiBpMThuZXh0LnQodGV4dCknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRyYW5zbGF0ZURhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGxlYXNlIGRlZmluZSBhIGRhdGUgZm9ybWF0dGVyIGZ1bmN0aW9uLiBleDogdHJhbnNsYXRlRGF0ZTogKGRhdGUpID0+IG1vbWVudChkYXRlKS5mb3JOb3coKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWNvbk5hbWUsIHBhbmVsRm9vdGVyLCBwYW5lbEhlYWRlcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudCA9IGlzRGV2ID8gTm90aWZpY2F0aW9uQ2VudGVyRGV2IDogTm90aWZpY2F0aW9uQ2VudGVyUHJvZDtcclxuICAgICAgICByZXR1cm4gPE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudCBpY29uTmFtZT17aWNvbk5hbWV9IG9uU2luZ2xlQ2xpY2s9e3RoaXMucHJvcHMub25TaW5nbGVDbGlja30gc3RvcmU9e25vdGlmaWNhdGlvblN0b3JlfSBwYW5lbEhlYWRlcj17cGFuZWxIZWFkZXJ9IHBhbmVsRm9vdGVyPXtwYW5lbEZvb3Rlcn0vPlxyXG4gICAgfVxyXG59XHJcblNtYXJ0Tm90aWZpY2F0aW9uQ2VudGVyLmRpc3BsYXlOYW1lID0gU21hcnROb3RpZmljYXRpb25DZW50ZXI7XHJcblNtYXJ0Tm90aWZpY2F0aW9uQ2VudGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGljb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNtYXJ0Tm90aWZpY2F0aW9uQ2VudGVyO1xyXG4iXX0=