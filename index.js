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

SmartNotificationCenter.displayName = 'SmartNotificationCenter';
SmartNotificationCenter.propTypes = {
    config: _react.PropTypes.object,
    iconName: _react.PropTypes.string
};
exports.default = SmartNotificationCenter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiaXNEZXYiLCJfX0RFVl9fIiwibm90aWZpY2F0aW9uU3RvcmUiLCJOb3RpZmljYXRpb25DZW50ZXJEZXYiLCJpY29uTmFtZSIsIm9uU2luZ2xlQ2xpY2siLCJzdG9yZSIsInBhbmVsRm9vdGVyIiwicGFuZWxIZWFkZXIiLCJkaXNwbGF5TmFtZSIsIk5vdGlmaWNhdGlvbkNlbnRlclByb2QiLCJTbWFydE5vdGlmaWNhdGlvbkNlbnRlciIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbmZpZyIsInByb3BzIiwidHJhbnNsYXRlVGV4dCIsInRyYW5zbGF0ZURhdGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZW5kZXIiLCJOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxRQUFRQyxPQUFkO0FBQ0EsSUFBTUMsb0JBQW9CLHVCQUExQjs7QUFFQSxTQUFTQyxxQkFBVCxPQUEyRjtBQUFBLFFBQTNEQyxRQUEyRCxRQUEzREEsUUFBMkQ7QUFBQSxRQUFqREMsYUFBaUQsUUFBakRBLGFBQWlEO0FBQUEsUUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLFFBQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxRQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBQ3ZGLFdBQ0k7QUFBQTtBQUFBLFVBQVUsT0FBT0YsS0FBakI7QUFDSTtBQUFBO0FBQUE7QUFDSSwwRUFBb0IsVUFBVUYsUUFBOUIsRUFBd0MsYUFBYSxLQUFyRCxFQUE0RCxlQUFlQyxhQUEzRSxFQUEwRixhQUFhRyxXQUF2RyxFQUFvSCxhQUFhRCxXQUFqSSxHQURKO0FBRUk7QUFGSjtBQURKLEtBREo7QUFRSDtBQUNESixzQkFBc0JNLFdBQXRCLEdBQW9DLHVCQUFwQzs7QUFJQSxTQUFTQyxzQkFBVCxRQUE0RjtBQUFBLFFBQTNETixRQUEyRCxTQUEzREEsUUFBMkQ7QUFBQSxRQUFqREMsYUFBaUQsU0FBakRBLGFBQWlEO0FBQUEsUUFBbENDLEtBQWtDLFNBQWxDQSxLQUFrQztBQUFBLFFBQTNCQyxXQUEyQixTQUEzQkEsV0FBMkI7QUFBQSxRQUFkQyxXQUFjLFNBQWRBLFdBQWM7O0FBQ3hGLFdBQ0k7QUFBQTtBQUFBLFVBQVUsT0FBT0YsS0FBakI7QUFDSSxzRUFBb0IsVUFBVUYsUUFBOUIsRUFBd0MsYUFBYSxLQUFyRCxFQUE0RCxlQUFlQyxhQUEzRSxFQUEwRixhQUFhRyxXQUF2RyxFQUFvSCxhQUFhRCxXQUFqSTtBQURKLEtBREo7QUFLSDtBQUNERyx1QkFBdUJELFdBQXZCLEdBQXFDLHdCQUFyQzs7SUFJTUUsdUI7Ozs7Ozs7OztzQ0FDRkMsa0IsaUNBQXFCO0FBQUEsWUFDVkMsTUFEVSxHQUNBLEtBQUtDLEtBREwsQ0FDVkQsTUFEVTs7QUFFakIsa0NBQWFBLE1BQWI7O0FBRmlCLHlCQUdzQix3QkFIdEI7QUFBQSxZQUdWRSxhQUhVLGNBR1ZBLGFBSFU7QUFBQSxZQUdLQyxhQUhMLGNBR0tBLGFBSEw7O0FBSWpCLFlBQUcsQ0FBQ0QsYUFBSixFQUFtQjtBQUNmRSxvQkFBUUMsS0FBUixDQUFjLHlGQUFkO0FBQ0g7QUFDRCxZQUFHLENBQUNGLGFBQUosRUFBbUI7QUFDZkMsb0JBQVFDLEtBQVIsQ0FBYyw2RkFBZDtBQUNIO0FBQ0osSzs7c0NBQ0RDLE0scUJBQVM7QUFBQSxxQkFDd0MsS0FBS0wsS0FEN0M7QUFBQSxZQUNFVixRQURGLFVBQ0VBLFFBREY7QUFBQSxZQUNZRyxXQURaLFVBQ1lBLFdBRFo7QUFBQSxZQUN5QkMsV0FEekIsVUFDeUJBLFdBRHpCOztBQUVMLFlBQU1ZLDhCQUE4QnBCLFFBQVFHLHFCQUFSLEdBQWdDTyxzQkFBcEU7QUFDQSxlQUFPLDhCQUFDLDJCQUFELElBQTZCLFVBQVVOLFFBQXZDLEVBQWlELGVBQWUsS0FBS1UsS0FBTCxDQUFXVCxhQUEzRSxFQUEwRixPQUFPSCxpQkFBakcsRUFBb0gsYUFBYU0sV0FBakksRUFBOEksYUFBYUQsV0FBM0osR0FBUDtBQUNILEs7Ozs7O0FBRUxJLHdCQUF3QkYsV0FBeEIsR0FBc0MseUJBQXRDO0FBQ0FFLHdCQUF3QlUsU0FBeEIsR0FBb0M7QUFDaENSLFlBQVEsaUJBQVVTLE1BRGM7QUFFaENsQixjQUFVLGlCQUFVbUI7QUFGWSxDQUFwQztrQkFJZVosdUIiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50ICwgUHJvcFR5cGVzIH1mcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9zdG9yZS9jcmVhdGUnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uQ2VudGVyIGZyb20gJy4vY29tcG9uZW50L25vdGlmaWNhdGlvbi1jZW50ZXInO1xyXG5pbXBvcnQge2V4dGVuZENvbmZpZywgZ2V0Q29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCBEZXZUb29scyBmcm9tICcuL2NvbnRhaW5lci9kZXYtdG9vbHMnO1xyXG5cclxuLy9JbXBvcnQgc2FzcyBmaWxlc1xyXG5pbXBvcnQgJy4vc3R5bGUnO1xyXG5cclxuY29uc3QgaXNEZXYgPSBfX0RFVl9fO1xyXG5jb25zdCBub3RpZmljYXRpb25TdG9yZSA9IGNyZWF0ZVN0b3JlKCk7XHJcblxyXG5mdW5jdGlvbiBOb3RpZmljYXRpb25DZW50ZXJEZXYoe2ljb25OYW1lLCBvblNpbmdsZUNsaWNrLCBzdG9yZSwgcGFuZWxGb290ZXIsIHBhbmVsSGVhZGVyfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25DZW50ZXIgaWNvbk5hbWU9e2ljb25OYW1lfSBoYXNBZGROb3RpZj17ZmFsc2V9IG9uU2luZ2xlQ2xpY2s9e29uU2luZ2xlQ2xpY2t9IHBhbmVsSGVhZGVyPXtwYW5lbEhlYWRlcn0gcGFuZWxGb290ZXI9e3BhbmVsRm9vdGVyfS8+XHJcbiAgICAgICAgICAgICAgICA8RGV2VG9vbHMvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5Ob3RpZmljYXRpb25DZW50ZXJEZXYuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uQ2VudGVyRGV2JztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTm90aWZpY2F0aW9uQ2VudGVyUHJvZCh7aWNvbk5hbWUsIG9uU2luZ2xlQ2xpY2ssIHN0b3JlLCBwYW5lbEZvb3RlciwgcGFuZWxIZWFkZXJ9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uQ2VudGVyIGljb25OYW1lPXtpY29uTmFtZX0gaGFzQWRkTm90aWY9e2ZhbHNlfSBvblNpbmdsZUNsaWNrPXtvblNpbmdsZUNsaWNrfSBwYW5lbEhlYWRlcj17cGFuZWxIZWFkZXJ9IHBhbmVsRm9vdGVyPXtwYW5lbEZvb3Rlcn0gLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5Ob3RpZmljYXRpb25DZW50ZXJQcm9kLmRpc3BsYXlOYW1lID0gJ05vdGlmaWNhdGlvbkNlbnRlclByb2QnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBTbWFydE5vdGlmaWNhdGlvbkNlbnRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NvbmZpZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGV4dGVuZENvbmZpZyhjb25maWcpO1xyXG4gICAgICAgIGNvbnN0IHt0cmFuc2xhdGVUZXh0LCB0cmFuc2xhdGVEYXRlfSA9IGdldENvbmZpZygpO1xyXG4gICAgICAgIGlmKCF0cmFuc2xhdGVUZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BsZWFzZSBkZWZpbmUgYSB0ZXh0IHRyYW5zbGF0aW9uIGZ1bmN0aW9uLiBleDogdHJhbnNsYXRlVGV4dDogKHRleHQpID0+IGkxOG5leHQudCh0ZXh0KScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdHJhbnNsYXRlRGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwbGVhc2UgZGVmaW5lIGEgZGF0ZSBmb3JtYXR0ZXIgZnVuY3Rpb24uIGV4OiB0cmFuc2xhdGVEYXRlOiAoZGF0ZSkgPT4gbW9tZW50KGRhdGUpLmZvck5vdygpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpY29uTmFtZSwgcGFuZWxGb290ZXIsIHBhbmVsSGVhZGVyfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgTm90aWZpY2F0aW9uQ2VudGVyQ29tcG9uZW50ID0gaXNEZXYgPyBOb3RpZmljYXRpb25DZW50ZXJEZXYgOiBOb3RpZmljYXRpb25DZW50ZXJQcm9kO1xyXG4gICAgICAgIHJldHVybiA8Tm90aWZpY2F0aW9uQ2VudGVyQ29tcG9uZW50IGljb25OYW1lPXtpY29uTmFtZX0gb25TaW5nbGVDbGljaz17dGhpcy5wcm9wcy5vblNpbmdsZUNsaWNrfSBzdG9yZT17bm90aWZpY2F0aW9uU3RvcmV9IHBhbmVsSGVhZGVyPXtwYW5lbEhlYWRlcn0gcGFuZWxGb290ZXI9e3BhbmVsRm9vdGVyfS8+XHJcbiAgICB9XHJcbn1cclxuU21hcnROb3RpZmljYXRpb25DZW50ZXIuZGlzcGxheU5hbWUgPSAnU21hcnROb3RpZmljYXRpb25DZW50ZXInO1xyXG5TbWFydE5vdGlmaWNhdGlvbkNlbnRlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpY29uTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTbWFydE5vdGlmaWNhdGlvbkNlbnRlcjtcclxuIl19