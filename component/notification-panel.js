'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notificationGroup = require('./notification-group');

var _notificationGroup2 = _interopRequireDefault(_notificationGroup);

var _notificationAdd = require('./notification-add');

var _notificationAdd2 = _interopRequireDefault(_notificationAdd);

var _notificationError = require('./notification-error');

var _notificationError2 = _interopRequireDefault(_notificationError);

var _actions = require('../actions');

var _fetchNotifications = require('../actions/fetch-notifications');

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function translate(key) {
    var _getConfig = (0, _config.getConfig)(),
        translateText = _getConfig.translateText;

    return translateText(key);
}

var NotificationCenterPanel = function (_PureComponent) {
    _inherits(NotificationCenterPanel, _PureComponent);

    function NotificationCenterPanel(props) {
        _classCallCheck(this, NotificationCenterPanel);

        var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

        _this._hideBodyOverflow = _this._hideBodyOverflow.bind(_this);
        _this._restoreBodyOverflow = _this._restoreBodyOverflow.bind(_this);
        _this._onClosePanel = _this._onClosePanel.bind(_this);
        return _this;
    }

    NotificationCenterPanel.prototype.componentDidMount = function componentDidMount() {
        this._hideBodyOverflow();
    };
    /**
    * Store the body overgflow property, and set it to hidden
    */


    NotificationCenterPanel.prototype._hideBodyOverflow = function _hideBodyOverflow() {
        document.body.style['overflow-y'] = 'hidden';
    };
    /**
    * Restore body overflow property
    */


    NotificationCenterPanel.prototype._restoreBodyOverflow = function _restoreBodyOverflow() {
        document.body.style['overflow-y'] = 'auto';
    };

    NotificationCenterPanel.prototype._onClosePanel = function _onClosePanel(evt) {
        var onClosePanel = this.props.onClosePanel;

        onClosePanel(evt);
        this._restoreBodyOverflow();
    };

    NotificationCenterPanel.prototype.render = function render() {
        var _props = this.props,
            hasAddNotif = _props.hasAddNotif,
            isFetching = _props.isFetching,
            unreadNotifs = _props.unreadNotifs,
            onGroupRead = _props.onGroupRead,
            onSingleRead = _props.onSingleRead,
            onSingleClick = _props.onSingleClick,
            onTitleClick = _props.onTitleClick,
            onAddClick = _props.onAddClick,
            onDismissError = _props.onDismissError,
            error = _props.error,
            zIndex = _props.zIndex,
            panelHeader = _props.panelHeader,
            panelFooter = _props.panelFooter;

        var _getConfig2 = (0, _config.getConfig)(),
            translateText = _getConfig2.translateText;

        var hasNotifications = unreadNotifs.length > 0;
        return _react2.default.createElement(
            'div',
            { style: { zIndex: zIndex, top: 0, right: 0, position: 'fixed' } },
            _react2.default.createElement('div', { 'data-focus': 'notification-center-overlay', className: 'fade-in', onClick: this._onClosePanel, style: { zIndex: 1 } }),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'notification-center-panel', className: 'bounce-in-right', 'data-fetching': isFetching, style: { zIndex: 2 } },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'button',
                        { className: 'mdl-button mdl-button--icon', 'data-focus': 'notification-center-close', onClick: this._onClosePanel },
                        _react2.default.createElement(
                            'i',
                            { className: 'material-icons' },
                            'clear'
                        )
                    ),
                    _react2.default.createElement(
                        'h1',
                        { onClick: onTitleClick },
                        translateText('focus.notifications.title')
                    ),
                    panelHeader && panelHeader
                ),
                hasAddNotif && _react2.default.createElement(_notificationAdd2.default, { onAddClick: onAddClick }),
                error && _react2.default.createElement(_notificationError2.default, _extends({ onDismiss: onDismissError }, error)),
                hasNotifications && _react2.default.createElement(_notificationGroup2.default, {
                    data: unreadNotifs,
                    onGroupRead: onGroupRead,
                    onSingleRead: onSingleRead,
                    onSingleClick: onSingleClick }),
                !hasNotifications && _react2.default.createElement(
                    'div',
                    { className: 'no-notification' },
                    translate('focus.notifications.nothing')
                ),
                panelFooter && _react2.default.createElement(
                    'footer',
                    null,
                    panelFooter
                )
            )
        );
    };

    return NotificationCenterPanel;
}(_react.PureComponent);

NotificationCenterPanel.displayName = 'NotificationCenterPanel';
NotificationCenterPanel.propTypes = {
    error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
    onDismissError: _react.PropTypes.func.isRequired,
    hasAddNotif: _react.PropTypes.bool.isRequired,
    isFetching: _react.PropTypes.bool.isRequired,
    unreadNotifs: _react.PropTypes.array.isRequired,
    onGroupRead: _react.PropTypes.func.isRequired,
    onSingleClick: _react.PropTypes.func.isRequired,
    onSingleRead: _react.PropTypes.func.isRequired,
    onClosePanel: _react.PropTypes.func.isRequired,
    onTitleClick: _react.PropTypes.func.isRequired,
    onAddClick: _react.PropTypes.func.isRequired,
    zIndex: _react.PropTypes.number.isRequired
};
exports.default = NotificationCenterPanel;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsidHJhbnNsYXRlIiwia2V5IiwidHJhbnNsYXRlVGV4dCIsIk5vdGlmaWNhdGlvbkNlbnRlclBhbmVsIiwicHJvcHMiLCJfaGlkZUJvZHlPdmVyZmxvdyIsImJpbmQiLCJfcmVzdG9yZUJvZHlPdmVyZmxvdyIsIl9vbkNsb3NlUGFuZWwiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiZXZ0Iiwib25DbG9zZVBhbmVsIiwicmVuZGVyIiwiaGFzQWRkTm90aWYiLCJpc0ZldGNoaW5nIiwidW5yZWFkTm90aWZzIiwib25Hcm91cFJlYWQiLCJvblNpbmdsZVJlYWQiLCJvblNpbmdsZUNsaWNrIiwib25UaXRsZUNsaWNrIiwib25BZGRDbGljayIsIm9uRGlzbWlzc0Vycm9yIiwiZXJyb3IiLCJ6SW5kZXgiLCJwYW5lbEhlYWRlciIsInBhbmVsRm9vdGVyIiwiaGFzTm90aWZpY2F0aW9ucyIsImxlbmd0aCIsInRvcCIsInJpZ2h0IiwicG9zaXRpb24iLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImJvb2wiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQUEscUJBQ0ksd0JBREo7QUFBQSxRQUNiQyxhQURhLGNBQ2JBLGFBRGE7O0FBRXBCLFdBQU9BLGNBQWNELEdBQWQsQ0FBUDtBQUNIOztJQUVLRSx1Qjs7O0FBQ0YscUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxREFDZiwwQkFBTUEsS0FBTixDQURlOztBQUVmLGNBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6QjtBQUNB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QUFsQnBCO0FBRkosU0FESjtBQXlCSCxLOzs7OztBQUVMekIsd0JBQXdCK0IsV0FBeEIsR0FBc0MseUJBQXRDO0FBQ0EvQix3QkFBd0JnQyxTQUF4QixHQUFvQztBQUNoQ1YsV0FBTyxpQkFBVVcsU0FBVixDQUFvQixDQUFDLGlCQUFVQyxJQUFYLEVBQWlCLGlCQUFVQyxNQUEzQixDQUFwQixDQUR5QjtBQUVoQ2Qsb0JBQWdCLGlCQUFVZSxJQUFWLENBQWVDLFVBRkM7QUFHaEN4QixpQkFBYSxpQkFBVXFCLElBQVYsQ0FBZUcsVUFISTtBQUloQ3ZCLGdCQUFZLGlCQUFVb0IsSUFBVixDQUFlRyxVQUpLO0FBS2hDdEIsa0JBQWMsaUJBQVV1QixLQUFWLENBQWdCRCxVQUxFO0FBTWhDckIsaUJBQWEsaUJBQVVvQixJQUFWLENBQWVDLFVBTkk7QUFPaENuQixtQkFBZSxpQkFBVWtCLElBQVYsQ0FBZUMsVUFQRTtBQVFoQ3BCLGtCQUFjLGlCQUFVbUIsSUFBVixDQUFlQyxVQVJHO0FBU2hDMUIsa0JBQWMsaUJBQVV5QixJQUFWLENBQWVDLFVBVEc7QUFVaENsQixrQkFBYyxpQkFBVWlCLElBQVYsQ0FBZUMsVUFWRztBQVdoQ2pCLGdCQUFZLGlCQUFVZ0IsSUFBVixDQUFlQyxVQVhLO0FBWWhDZCxZQUFRLGlCQUFVZ0IsTUFBVixDQUFpQkY7QUFaTyxDQUFwQztrQkFjZXJDLHVCIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkdyb3VwIGZyb20gJy4vbm90aWZpY2F0aW9uLWdyb3VwJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbkFkZCBmcm9tICcuL25vdGlmaWNhdGlvbi1hZGQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uRXJyb3IgZnJvbSAnLi9ub3RpZmljYXRpb24tZXJyb3InO1xyXG5cclxuaW1wb3J0IHsgYWRkTm90aWZpY2F0aW9uLCByZWFkTm90aWZpY2F0aW9uLCByZWFkTm90aWZpY2F0aW9uR3JvdXAsIGNsb3NlQ2VudGVyIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGZldGNoTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvZmV0Y2gtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKGtleSkge1xyXG4gICAgY29uc3Qge3RyYW5zbGF0ZVRleHR9ID0gZ2V0Q29uZmlnKCk7XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlVGV4dChrZXkpO1xyXG59XHJcblxyXG5jbGFzcyBOb3RpZmljYXRpb25DZW50ZXJQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5faGlkZUJvZHlPdmVyZmxvdyA9IHRoaXMuX2hpZGVCb2R5T3ZlcmZsb3cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9yZXN0b3JlQm9keU92ZXJmbG93ID0gdGhpcy5fcmVzdG9yZUJvZHlPdmVyZmxvdy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX29uQ2xvc2VQYW5lbCA9IHRoaXMuX29uQ2xvc2VQYW5lbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faGlkZUJvZHlPdmVyZmxvdygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAqIFN0b3JlIHRoZSBib2R5IG92ZXJnZmxvdyBwcm9wZXJ0eSwgYW5kIHNldCBpdCB0byBoaWRkZW5cclxuICAgICovXHJcbiAgICBfaGlkZUJvZHlPdmVyZmxvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlWydvdmVyZmxvdy15J10gPSAnaGlkZGVuJztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBSZXN0b3JlIGJvZHkgb3ZlcmZsb3cgcHJvcGVydHlcclxuICAgICovXHJcbiAgICBfcmVzdG9yZUJvZHlPdmVyZmxvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlWydvdmVyZmxvdy15J10gPSAnYXV0byc7XHJcbiAgICB9XHJcbiAgICBfb25DbG9zZVBhbmVsKGV2dCkge1xyXG4gICAgICAgIGNvbnN0IHtvbkNsb3NlUGFuZWx9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBvbkNsb3NlUGFuZWwoZXZ0KTtcclxuICAgICAgICB0aGlzLl9yZXN0b3JlQm9keU92ZXJmbG93KCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2hhc0FkZE5vdGlmLCBpc0ZldGNoaW5nLCB1bnJlYWROb3RpZnMsIG9uR3JvdXBSZWFkLCBvblNpbmdsZVJlYWQsIG9uU2luZ2xlQ2xpY2ssIG9uVGl0bGVDbGljaywgb25BZGRDbGljaywgb25EaXNtaXNzRXJyb3IsIGVycm9yLCB6SW5kZXgsIHBhbmVsSGVhZGVyLCBwYW5lbEZvb3Rlcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHt0cmFuc2xhdGVUZXh0fSA9IGdldENvbmZpZygpO1xyXG4gICAgICAgIGNvbnN0IGhhc05vdGlmaWNhdGlvbnMgPSB1bnJlYWROb3RpZnMubGVuZ3RoID4gMDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ekluZGV4LCB0b3A6IDAsIHJpZ2h0OiAwLCBwb3NpdGlvbjogJ2ZpeGVkJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY2VudGVyLW92ZXJsYXknIGNsYXNzTmFtZT0nZmFkZS1pbicgb25DbGljaz17dGhpcy5fb25DbG9zZVBhbmVsfSBzdHlsZT17e3pJbmRleDogMX19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY2VudGVyLXBhbmVsJyBjbGFzc05hbWU9J2JvdW5jZS1pbi1yaWdodCcgZGF0YS1mZXRjaGluZz17aXNGZXRjaGluZ30gc3R5bGU9e3t6SW5kZXg6IDJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWRsLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uJyBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tY2VudGVyLWNsb3NlJyBvbkNsaWNrPXt0aGlzLl9vbkNsb3NlUGFuZWx9PjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+eydjbGVhcid9PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgb25DbGljaz17b25UaXRsZUNsaWNrfT57dHJhbnNsYXRlVGV4dCgnZm9jdXMubm90aWZpY2F0aW9ucy50aXRsZScpfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYW5lbEhlYWRlciAmJiBwYW5lbEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICB7aGFzQWRkTm90aWYgJiYgPE5vdGlmaWNhdGlvbkFkZCBvbkFkZENsaWNrPXtvbkFkZENsaWNrfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPE5vdGlmaWNhdGlvbkVycm9yIG9uRGlzbWlzcz17b25EaXNtaXNzRXJyb3J9IHsuLi5lcnJvcn0vPn1cclxuICAgICAgICAgICAgICAgICAgICB7aGFzTm90aWZpY2F0aW9ucyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3VucmVhZE5vdGlmc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uR3JvdXBSZWFkPXtvbkdyb3VwUmVhZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2luZ2xlUmVhZD17b25TaW5nbGVSZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TaW5nbGVDbGljaz17b25TaW5nbGVDbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFoYXNOb3RpZmljYXRpb25zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduby1ub3RpZmljYXRpb24nPnt0cmFuc2xhdGUoJ2ZvY3VzLm5vdGlmaWNhdGlvbnMubm90aGluZycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7cGFuZWxGb290ZXIgJiYgPGZvb3Rlcj57cGFuZWxGb290ZXJ9PC9mb290ZXI+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuTm90aWZpY2F0aW9uQ2VudGVyUGFuZWwuZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uQ2VudGVyUGFuZWwnO1xyXG5Ob3RpZmljYXRpb25DZW50ZXJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIG9uRGlzbWlzc0Vycm9yOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgaGFzQWRkTm90aWY6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBpc0ZldGNoaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgdW5yZWFkTm90aWZzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIG9uR3JvdXBSZWFkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25TaW5nbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uU2luZ2xlUmVhZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2VQYW5lbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uVGl0bGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQWRkQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25DZW50ZXJQYW5lbDtcclxuIl19