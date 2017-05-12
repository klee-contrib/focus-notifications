'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var AddNotification = function (_Component) {
    _inherits(AddNotification, _Component);

    function AddNotification() {
        _classCallCheck(this, AddNotification);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    AddNotification.prototype.handleClick = function handleClick(e) {
        var node = (0, _reactDom.findDOMNode)(this.refs.input);
        var text = node.value.trim();
        this.props.onAddClick({ content: text, author: 'joe.lopez@gmail.com', title: 'title', date: new Date().toISOString() });
        node.value = '';
    };

    AddNotification.prototype.render = function render() {
        var _this2 = this;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { ref: 'input', type: 'text' }),
            _react2.default.createElement(
                'button',
                { onClick: function onClick(e) {
                        return _this2.handleClick(e);
                    } },
                'Add'
            )
        );
    };

    return AddNotification;
}(_react.Component);

exports.default = AddNotification;

AddNotification.displayName = 'AddNotification';
AddNotification.propTypes = {
    onAddClick: _react.PropTypes.func.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiQWRkTm90aWZpY2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJlIiwibm9kZSIsInJlZnMiLCJpbnB1dCIsInRleHQiLCJ2YWx1ZSIsInRyaW0iLCJwcm9wcyIsIm9uQWRkQ2xpY2siLCJjb250ZW50IiwiYXV0aG9yIiwidGl0bGUiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicmVuZGVyIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7OzhCQUNqQkMsVyx3QkFBWUMsQyxFQUFHO0FBQ1gsWUFBTUMsT0FBTywyQkFBWSxLQUFLQyxJQUFMLENBQVVDLEtBQXRCLENBQWI7QUFDQSxZQUFNQyxPQUFPSCxLQUFLSSxLQUFMLENBQVdDLElBQVgsRUFBYjtBQUNBLGFBQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQixFQUFDQyxTQUFTTCxJQUFWLEVBQWdCTSxRQUFRLHFCQUF4QixFQUErQ0MsT0FBTyxPQUF0RCxFQUErREMsTUFBTSxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBckUsRUFBdEI7QUFDQWIsYUFBS0ksS0FBTCxHQUFhLEVBQWI7QUFDSCxLOzs4QkFDRFUsTSxxQkFBUztBQUFBOztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0kscURBQU8sS0FBSSxPQUFYLEVBQW1CLE1BQUssTUFBeEIsR0FESjtBQUVJO0FBQUE7QUFBQSxrQkFBUSxTQUFTLGlCQUFDZixDQUFEO0FBQUEsK0JBQU8sT0FBS0QsV0FBTCxDQUFpQkMsQ0FBakIsQ0FBUDtBQUFBLHFCQUFqQjtBQUFBO0FBQUE7QUFGSixTQURKO0FBTUgsSzs7Ozs7a0JBZGdCRixlOztBQWlCckJBLGdCQUFnQmtCLFdBQWhCLEdBQThCLGlCQUE5QjtBQUNBbEIsZ0JBQWdCbUIsU0FBaEIsR0FBNEI7QUFDeEJULGdCQUFZLGlCQUFVVSxJQUFWLENBQWVDO0FBREgsQ0FBNUIiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkTm90aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgICAgICBjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gbm9kZS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFkZENsaWNrKHtjb250ZW50OiB0ZXh0LCBhdXRob3I6ICdqb2UubG9wZXpAZ21haWwuY29tJywgdGl0bGU6ICd0aXRsZScsIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0pO1xyXG4gICAgICAgIG5vZGUudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj0naW5wdXQnIHR5cGU9J3RleHQnIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuQWRkTm90aWZpY2F0aW9uLmRpc3BsYXlOYW1lID0gJ0FkZE5vdGlmaWNhdGlvbic7XHJcbkFkZE5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBvbkFkZENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcbiJdfQ==