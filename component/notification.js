'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //Dependencies


function translateDate(date) {
    var _getConfig = (0, _config.getConfig)(),
        translateDate = _getConfig.translateDate;

    return translateDate(date);
}

var Notification = function (_PureComponent) {
    _inherits(Notification, _PureComponent);

    function Notification() {
        _classCallCheck(this, Notification);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    Notification.prototype.render = function render() {
        var _props = this.props,
            creationDate = _props.creationDate,
            content = _props.content,
            hasDate = _props.hasDate,
            icon = _props.icon,
            _onClick = _props.onClick,
            onRead = _props.onRead,
            uuid = _props.uuid,
            sender = _props.sender,
            targetUrl = _props.targetUrl,
            title = _props.title,
            type = _props.type;

        return _react2.default.createElement(
            'li',
            { 'data-focus': 'notification', 'data-type': type, onClick: function onClick() {
                    _onClick({ targetUrl: targetUrl });
                } },
            icon && _react2.default.createElement(
                'div',
                { 'data-focus': 'notification-icon' },
                _react2.default.createElement('img', { src: icon })
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'notification-body' },
                _react2.default.createElement(
                    'h4',
                    { 'data-focus': 'notification-title' },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { 'data-focus': 'notification-content' },
                    content
                )
            ),
            hasDate && _react2.default.createElement(
                'div',
                { 'data-focus': 'notification-date' },
                _react2.default.createElement(
                    'button',
                    { className: 'mdl-button mdl-js-button mdl-button--icon', onClick: function onClick() {
                            return onRead(uuid);
                        } },
                    _react2.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'done'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    translateDate(creationDate)
                )
            )
        );
    };

    return Notification;
}(_react.PureComponent);

Notification.displayName = 'Notification';
Notification.propTypes = {
    hasDate: _react.PropTypes.bool,
    uuid: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    title: _react.PropTypes.string.isRequired,
    content: _react.PropTypes.string.isRequired,
    creationDate: _react.PropTypes.string.isRequired,
    type: _react.PropTypes.string.isRequired,
    sender: _react.PropTypes.string.isRequired,
    targetUrl: _react.PropTypes.string.isRequired,
    icon: _react.PropTypes.string.isRequired,
    onRead: _react.PropTypes.func.isRequired,
    onClick: _react.PropTypes.func.isRequired
};
Notification.defaultProps = {
    hasDate: true
};
exports.default = Notification;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsidHJhbnNsYXRlRGF0ZSIsImRhdGUiLCJOb3RpZmljYXRpb24iLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0aW9uRGF0ZSIsImNvbnRlbnQiLCJoYXNEYXRlIiwiaWNvbiIsIm9uQ2xpY2siLCJvblJlYWQiLCJ1dWlkIiwic2VuZGVyIiwidGFyZ2V0VXJsIiwidGl0bGUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBRkE7OztBQUlBLFNBQVNBLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQUEscUJBQ0Qsd0JBREM7QUFBQSxRQUNsQkQsYUFEa0IsY0FDbEJBLGFBRGtCOztBQUV6QixXQUFPQSxjQUFjQyxJQUFkLENBQVA7QUFDSDs7SUFFS0MsWTs7Ozs7Ozs7OzJCQUNGQyxNLHFCQUFTO0FBQUEscUJBQ2lHLEtBQUtDLEtBRHRHO0FBQUEsWUFDRUMsWUFERixVQUNFQSxZQURGO0FBQUEsWUFDZ0JDLE9BRGhCLFVBQ2dCQSxPQURoQjtBQUFBLFlBQ3lCQyxPQUR6QixVQUN5QkEsT0FEekI7QUFBQSxZQUNrQ0MsSUFEbEMsVUFDa0NBLElBRGxDO0FBQUEsWUFDd0NDLFFBRHhDLFVBQ3dDQSxPQUR4QztBQUFBLFlBQ2lEQyxNQURqRCxVQUNpREEsTUFEakQ7QUFBQSxZQUN5REMsSUFEekQsVUFDeURBLElBRHpEO0FBQUEsWUFDK0RDLE1BRC9ELFVBQytEQSxNQUQvRDtBQUFBLFlBQ3VFQyxTQUR2RSxVQUN1RUEsU0FEdkU7QUFBQSxZQUNrRkMsS0FEbEYsVUFDa0ZBLEtBRGxGO0FBQUEsWUFDeUZDLElBRHpGLFVBQ3lGQSxJQUR6Rjs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFJLGNBQVcsY0FBZixFQUE4QixhQUFXQSxJQUF6QyxFQUErQyxTQUFTLG1CQUFJO0FBQUVOLDZCQUFRLEVBQUNJLG9CQUFELEVBQVI7QUFBcUIsaUJBQW5GO0FBQ0tMLG9CQUFRO0FBQUE7QUFBQSxrQkFBSyxjQUFXLG1CQUFoQjtBQUFvQyx1REFBSyxLQUFLQSxJQUFWO0FBQXBDLGFBRGI7QUFFSTtBQUFBO0FBQUEsa0JBQUssY0FBVyxtQkFBaEI7QUFDSTtBQUFBO0FBQUEsc0JBQUksY0FBVyxvQkFBZjtBQUFxQ007QUFBckMsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUssY0FBVyxzQkFBaEI7QUFBd0NSO0FBQXhDO0FBRkosYUFGSjtBQU1LQyx1QkFDRztBQUFBO0FBQUEsa0JBQUssY0FBVyxtQkFBaEI7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBVSwyQ0FBbEIsRUFBOEQsU0FBUztBQUFBLG1DQUFNRyxPQUFPQyxJQUFQLENBQU47QUFBQSx5QkFBdkU7QUFDSTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQTtBQUFNWCxrQ0FBY0ssWUFBZDtBQUFOO0FBSko7QUFQUixTQURKO0FBaUJILEs7Ozs7O0FBR0xILGFBQWFjLFdBQWIsR0FBMkIsY0FBM0I7QUFDQWQsYUFBYWUsU0FBYixHQUF5QjtBQUNyQlYsYUFBUyxpQkFBVVcsSUFERTtBQUVyQlAsVUFBTSxpQkFBVVEsU0FBVixDQUFvQixDQUFDLGlCQUFVQyxNQUFYLEVBQW1CLGlCQUFVQyxNQUE3QixDQUFwQixFQUEwREMsVUFGM0M7QUFHckJSLFdBQU8saUJBQVVNLE1BQVYsQ0FBaUJFLFVBSEg7QUFJckJoQixhQUFTLGlCQUFVYyxNQUFWLENBQWlCRSxVQUpMO0FBS3JCakIsa0JBQWMsaUJBQVVlLE1BQVYsQ0FBaUJFLFVBTFY7QUFNckJQLFVBQU0saUJBQVVLLE1BQVYsQ0FBaUJFLFVBTkY7QUFPckJWLFlBQVEsaUJBQVVRLE1BQVYsQ0FBaUJFLFVBUEo7QUFRckJULGVBQVcsaUJBQVVPLE1BQVYsQ0FBaUJFLFVBUlA7QUFTckJkLFVBQU0saUJBQVVZLE1BQVYsQ0FBaUJFLFVBVEY7QUFVckJaLFlBQVEsaUJBQVVhLElBQVYsQ0FBZUQsVUFWRjtBQVdyQmIsYUFBUyxpQkFBVWMsSUFBVixDQUFlRDtBQVhILENBQXpCO0FBYUFwQixhQUFhc0IsWUFBYixHQUE0QjtBQUN4QmpCLGFBQVM7QUFEZSxDQUE1QjtrQkFHZUwsWSIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlRGF0ZShkYXRlKSB7XHJcbiAgICBjb25zdCB7dHJhbnNsYXRlRGF0ZX0gPSBnZXRDb25maWcoKTtcclxuICAgIHJldHVybiB0cmFuc2xhdGVEYXRlKGRhdGUpO1xyXG59XHJcblxyXG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y3JlYXRpb25EYXRlLCBjb250ZW50LCBoYXNEYXRlLCBpY29uLCBvbkNsaWNrLCBvblJlYWQsIHV1aWQsIHNlbmRlciwgdGFyZ2V0VXJsLCB0aXRsZSwgdHlwZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24nIGRhdGEtdHlwZT17dHlwZX0gb25DbGljaz17KCk9Pnsgb25DbGljayh7dGFyZ2V0VXJsfSl9fT5cclxuICAgICAgICAgICAgICAgIHtpY29uICYmIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWljb24nPjxpbWcgc3JjPXtpY29ufS8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tYm9keScgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBkYXRhLWZvY3VzPSdub3RpZmljYXRpb24tdGl0bGUnPnt0aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWNvbnRlbnQnPntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7aGFzRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWRhdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb24nIG9uQ2xpY2s9eygpID0+IG9uUmVhZCh1dWlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5kb25lPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dHJhbnNsYXRlRGF0ZShjcmVhdGlvbkRhdGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5Ob3RpZmljYXRpb24uZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uJztcclxuTm90aWZpY2F0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIGhhc0RhdGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdXVpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY3JlYXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBzZW5kZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRhcmdldFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgb25SZWFkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5Ob3RpZmljYXRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGFzRGF0ZTogdHJ1ZVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcclxuIl19