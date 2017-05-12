'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notificationList = require('./notification-list');

var _notificationList2 = _interopRequireDefault(_notificationList);

var _string = require('lodash/string');

var _collection = require('lodash/collection');

var _config = require('../config');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //Dependencies


function _isYoungerThanA(periodName, date) {
    return (0, _moment2.default)(date).diff((0, _moment2.default)().subtract(1, periodName)) > 0;
}

// function to group date
function groupDate(_ref) {
    var date = _ref.creationDate;

    var root = 'focus.notifications.groups';
    if (_isYoungerThanA('day', date)) {
        return root + '.0_today';
    }
    if (_isYoungerThanA('week', date)) {
        return root + '.1_lastWeek';
    }
    if (_isYoungerThanA('month', date)) {
        return root + '.2_lastMonth';
    }
    return root + '.3_before';
}

function translate(key) {
    var _getConfig = (0, _config.getConfig)(),
        translateText = _getConfig.translateText;

    return translateText(key);
}

function sortDateFn(a, b) {
    return new Date(b.creationDate) - new Date(a.creationDate);
}

function sortNameFn(a, b) {
    if (a.key < b.key) return -1;else if (a.key > b.key) return 1;else return 0;
}

//Maybe i should add a Notification Group component by date which uses a notifciation list component

var NotificationGroup = function (_PureComponent) {
    _inherits(NotificationGroup, _PureComponent);

    function NotificationGroup() {
        _classCallCheck(this, NotificationGroup);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    NotificationGroup.prototype.render = function render() {
        var _props = this.props,
            data = _props.data,
            onGroupRead = _props.onGroupRead,
            onSingleRead = _props.onSingleRead,
            onSingleClick = _props.onSingleClick;

        var groupedAndSortedNotifs = (0, _collection.reduce)((0, _collection.groupBy)(data, groupDate), function (accumulator, value, key) {
            accumulator.push({ key: key, value: value });
            return accumulator;
        }, []).sort(sortNameFn);
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'notification-group' },
            groupedAndSortedNotifs.map(function (_ref2) {
                var group = _ref2.value,
                    groupTitle = _ref2.key;

                return _react2.default.createElement(
                    'div',
                    { key: groupTitle },
                    _react2.default.createElement(
                        'div',
                        { 'data-focus': 'notification-group--title' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            translate(groupTitle) + ' (' + group.length + ')'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'mdl-button mdl-js-button mdl-button--icon', onClick: function onClick() {
                                    return onGroupRead((0, _collection.map)(group, 'uuid'));
                                } },
                            _react2.default.createElement(
                                'i',
                                { className: 'material-icons' },
                                'done_all'
                            )
                        )
                    ),
                    _react2.default.createElement(_notificationList2.default, { data: group.sort(sortDateFn), onRead: onSingleRead, onClick: onSingleClick })
                );
            })
        );
    };

    return NotificationGroup;
}(_react.PureComponent);

NotificationGroup.propTypes = {
    data: _react.PropTypes.array,
    onSingleRead: _react.PropTypes.func.isRequired,
    onGroupRead: _react.PropTypes.func.isRequired,
    onSingleClick: _react.PropTypes.func.isRequired
};
NotificationGroup.displayName = 'NotificationGroup';
exports.default = NotificationGroup;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiX2lzWW91bmdlclRoYW5BIiwicGVyaW9kTmFtZSIsImRhdGUiLCJkaWZmIiwic3VidHJhY3QiLCJncm91cERhdGUiLCJjcmVhdGlvbkRhdGUiLCJyb290IiwidHJhbnNsYXRlIiwia2V5IiwidHJhbnNsYXRlVGV4dCIsInNvcnREYXRlRm4iLCJhIiwiYiIsIkRhdGUiLCJzb3J0TmFtZUZuIiwiTm90aWZpY2F0aW9uR3JvdXAiLCJyZW5kZXIiLCJwcm9wcyIsImRhdGEiLCJvbkdyb3VwUmVhZCIsIm9uU2luZ2xlUmVhZCIsIm9uU2luZ2xlQ2xpY2siLCJncm91cGVkQW5kU29ydGVkTm90aWZzIiwiYWNjdW11bGF0b3IiLCJ2YWx1ZSIsInB1c2giLCJzb3J0IiwibWFwIiwiZ3JvdXAiLCJncm91cFRpdGxlIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OzsrZUFOQTs7O0FBU0EsU0FBU0EsZUFBVCxDQUF5QkMsVUFBekIsRUFBcUNDLElBQXJDLEVBQTJDO0FBQ3ZDLFdBQU8sc0JBQU9BLElBQVAsRUFBYUMsSUFBYixDQUFrQix3QkFBU0MsUUFBVCxDQUFrQixDQUFsQixFQUFxQkgsVUFBckIsQ0FBbEIsSUFBc0QsQ0FBN0Q7QUFDSDs7QUFHRDtBQUNBLFNBQVNJLFNBQVQsT0FBeUM7QUFBQSxRQUFQSCxJQUFPLFFBQXJCSSxZQUFxQjs7QUFDckMsUUFBTUMsT0FBTyw0QkFBYjtBQUNBLFFBQUdQLGdCQUFnQixLQUFoQixFQUF1QkUsSUFBdkIsQ0FBSCxFQUFpQztBQUM3QixlQUFVSyxJQUFWO0FBQ0g7QUFDRCxRQUFHUCxnQkFBZ0IsTUFBaEIsRUFBd0JFLElBQXhCLENBQUgsRUFBa0M7QUFDOUIsZUFBVUssSUFBVjtBQUNIO0FBQ0QsUUFBR1AsZ0JBQWdCLE9BQWhCLEVBQXlCRSxJQUF6QixDQUFILEVBQW1DO0FBQy9CLGVBQVVLLElBQVY7QUFDSDtBQUNELFdBQVVBLElBQVY7QUFDSDs7QUFFRCxTQUFTQyxTQUFULENBQW1CQyxHQUFuQixFQUF1QjtBQUFBLHFCQUNLLHdCQURMO0FBQUEsUUFDWkMsYUFEWSxjQUNaQSxhQURZOztBQUVuQixXQUFPQSxjQUFjRCxHQUFkLENBQVA7QUFDSDs7QUFFRCxTQUFTRSxVQUFULENBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBeUI7QUFDckIsV0FBTyxJQUFJQyxJQUFKLENBQVNELEVBQUVQLFlBQVgsSUFBMkIsSUFBSVEsSUFBSixDQUFTRixFQUFFTixZQUFYLENBQWxDO0FBQ0g7O0FBRUQsU0FBU1MsVUFBVCxDQUFvQkgsQ0FBcEIsRUFBc0JDLENBQXRCLEVBQXdCO0FBQ3BCLFFBQUlELEVBQUVILEdBQUYsR0FBUUksRUFBRUosR0FBZCxFQUNBLE9BQU8sQ0FBQyxDQUFSLENBREEsS0FFSyxJQUFJRyxFQUFFSCxHQUFGLEdBQVFJLEVBQUVKLEdBQWQsRUFDTCxPQUFPLENBQVAsQ0FESyxLQUdMLE9BQU8sQ0FBUDtBQUNIOztBQUVEOztJQUNNTyxpQjs7Ozs7Ozs7O2dDQUNGQyxNLHFCQUFTO0FBQUEscUJBQ29ELEtBQUtDLEtBRHpEO0FBQUEsWUFDRUMsSUFERixVQUNFQSxJQURGO0FBQUEsWUFDUUMsV0FEUixVQUNRQSxXQURSO0FBQUEsWUFDcUJDLFlBRHJCLFVBQ3FCQSxZQURyQjtBQUFBLFlBQ21DQyxhQURuQyxVQUNtQ0EsYUFEbkM7O0FBRUwsWUFBTUMseUJBQXlCLHdCQUMzQix5QkFBUUosSUFBUixFQUFjZCxTQUFkLENBRDJCLEVBRTNCLFVBQUNtQixXQUFELEVBQWNDLEtBQWQsRUFBcUJoQixHQUFyQixFQUE2QjtBQUN6QmUsd0JBQVlFLElBQVosQ0FBaUIsRUFBQ2pCLFFBQUQsRUFBTWdCLFlBQU4sRUFBakI7QUFDQSxtQkFBT0QsV0FBUDtBQUNILFNBTDBCLEVBTTNCLEVBTjJCLEVBTzdCRyxJQVA2QixDQU94QlosVUFQd0IsQ0FBL0I7QUFRQSxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsb0JBQWhCO0FBRVFRLG1DQUF1QkssR0FBdkIsQ0FDSSxpQkFBcUM7QUFBQSxvQkFBNUJDLEtBQTRCLFNBQW5DSixLQUFtQztBQUFBLG9CQUFoQkssVUFBZ0IsU0FBckJyQixHQUFxQjs7QUFDakMsdUJBQ0k7QUFBQTtBQUFBLHNCQUFLLEtBQUtxQixVQUFWO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLGNBQVcsMkJBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQVF0QixzQ0FBVXNCLFVBQVYsQ0FBUixVQUFrQ0QsTUFBTUUsTUFBeEM7QUFBQSx5QkFESjtBQUVJO0FBQUE7QUFBQSw4QkFBUSxXQUFVLDJDQUFsQixFQUE4RCxTQUFTO0FBQUEsMkNBQUtYLFlBQVkscUJBQUlTLEtBQUosRUFBVyxNQUFYLENBQVosQ0FBTDtBQUFBLGlDQUF2RTtBQUE2RztBQUFBO0FBQUEsa0NBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBN0c7QUFGSixxQkFESjtBQUtJLGdGQUFrQixNQUFNQSxNQUFNRixJQUFOLENBQVdoQixVQUFYLENBQXhCLEVBQWdELFFBQVFVLFlBQXhELEVBQXNFLFNBQVNDLGFBQS9FO0FBTEosaUJBREo7QUFTSCxhQVhMO0FBRlIsU0FESjtBQW1CSCxLOzs7OztBQUVMTixrQkFBa0JnQixTQUFsQixHQUE4QjtBQUMxQmIsVUFBTSxpQkFBVWMsS0FEVTtBQUUxQlosa0JBQWMsaUJBQVVhLElBQVYsQ0FBZUMsVUFGSDtBQUcxQmYsaUJBQWEsaUJBQVVjLElBQVYsQ0FBZUMsVUFIRjtBQUkxQmIsbUJBQWUsaUJBQVVZLElBQVYsQ0FBZUM7QUFKSixDQUE5QjtBQU1BbkIsa0JBQWtCb0IsV0FBbEIsR0FBZ0MsbUJBQWhDO2tCQUNlcEIsaUIiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzXHJcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uTGlzdCBmcm9tICcuL25vdGlmaWNhdGlvbi1saXN0JztcclxuaW1wb3J0IHtjYXBpdGFsaXplfSBmcm9tICdsb2Rhc2gvc3RyaW5nJztcclxuaW1wb3J0IHtncm91cEJ5LCBtYXAsIHJlZHVjZX0gZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQge2dldENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIF9pc1lvdW5nZXJUaGFuQShwZXJpb2ROYW1lLCBkYXRlKSB7XHJcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmRpZmYobW9tZW50KCkuc3VidHJhY3QoMSwgcGVyaW9kTmFtZSkpID4gMDtcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGdyb3VwIGRhdGVcclxuZnVuY3Rpb24gZ3JvdXBEYXRlKHtjcmVhdGlvbkRhdGU6IGRhdGV9KSB7XHJcbiAgICBjb25zdCByb290ID0gJ2ZvY3VzLm5vdGlmaWNhdGlvbnMuZ3JvdXBzJztcclxuICAgIGlmKF9pc1lvdW5nZXJUaGFuQSgnZGF5JywgZGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gYCR7cm9vdH0uMF90b2RheWA7XHJcbiAgICB9XHJcbiAgICBpZihfaXNZb3VuZ2VyVGhhbkEoJ3dlZWsnLCBkYXRlKSkge1xyXG4gICAgICAgIHJldHVybiBgJHtyb290fS4xX2xhc3RXZWVrYDtcclxuICAgIH1cclxuICAgIGlmKF9pc1lvdW5nZXJUaGFuQSgnbW9udGgnLCBkYXRlKSkge1xyXG4gICAgICAgIHJldHVybiBgJHtyb290fS4yX2xhc3RNb250aGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCR7cm9vdH0uM19iZWZvcmVgO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc2xhdGUoa2V5KXtcclxuICAgIGNvbnN0IHt0cmFuc2xhdGVUZXh0fSA9IGdldENvbmZpZygpO1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZVRleHQoa2V5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydERhdGVGbihhLCBiKXtcclxuICAgIHJldHVybiBuZXcgRGF0ZShiLmNyZWF0aW9uRGF0ZSkgLSBuZXcgRGF0ZShhLmNyZWF0aW9uRGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnROYW1lRm4oYSxiKXtcclxuICAgIGlmIChhLmtleSA8IGIua2V5KVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gICAgZWxzZSBpZiAoYS5rZXkgPiBiLmtleSlcclxuICAgIHJldHVybiAxO1xyXG4gICAgZWxzZVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8vTWF5YmUgaSBzaG91bGQgYWRkIGEgTm90aWZpY2F0aW9uIEdyb3VwIGNvbXBvbmVudCBieSBkYXRlIHdoaWNoIHVzZXMgYSBub3RpZmNpYXRpb24gbGlzdCBjb21wb25lbnRcclxuY2xhc3MgTm90aWZpY2F0aW9uR3JvdXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZGF0YSwgb25Hcm91cFJlYWQsIG9uU2luZ2xlUmVhZCwgb25TaW5nbGVDbGlja30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwZWRBbmRTb3J0ZWROb3RpZnMgPSByZWR1Y2UoXHJcbiAgICAgICAgICAgIGdyb3VwQnkoZGF0YSwgZ3JvdXBEYXRlKSxcclxuICAgICAgICAgICAgKGFjY3VtdWxhdG9yLCB2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRvci5wdXNoKHtrZXksIHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgKS5zb3J0KHNvcnROYW1lRm4pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbm90aWZpY2F0aW9uLWdyb3VwJz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cGVkQW5kU29ydGVkTm90aWZzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHt2YWx1ZTogZ3JvdXAsIGtleTogZ3JvdXBUaXRsZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2dyb3VwVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J25vdGlmaWNhdGlvbi1ncm91cC0tdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntgJHt0cmFuc2xhdGUoZ3JvdXBUaXRsZSl9ICgke2dyb3VwLmxlbmd0aH0pYH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uJyBvbkNsaWNrPXsoKT0+IG9uR3JvdXBSZWFkKG1hcChncm91cCwgJ3V1aWQnKSl9PjxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPmRvbmVfYWxsPC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkxpc3QgZGF0YT17Z3JvdXAuc29ydChzb3J0RGF0ZUZuKX0gb25SZWFkPXtvblNpbmdsZVJlYWR9IG9uQ2xpY2s9e29uU2luZ2xlQ2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG59XHJcbk5vdGlmaWNhdGlvbkdyb3VwLnByb3BUeXBlcyA9IHtcclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIG9uU2luZ2xlUmVhZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uR3JvdXBSZWFkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25TaW5nbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5Ob3RpZmljYXRpb25Hcm91cC5kaXNwbGF5TmFtZSA9ICdOb3RpZmljYXRpb25Hcm91cCc7XHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkdyb3VwO1xyXG4iXX0=