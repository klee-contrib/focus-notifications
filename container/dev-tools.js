'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//npm i redux-devtools-dock-monitor  redux-devtools-log-monitor
exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
    _reduxDevtoolsDockMonitor2.default,
    {
        toggleVisibilityKey: 'ctrl-h',
        changePositionKey: 'ctrl-q',
        defaultIsVisible: false },
    _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
));
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtrQkFDZSxtQ0FDWDtBQUFBO0FBQUE7QUFDSSw2QkFBb0IsUUFEeEI7QUFFSSwyQkFBa0IsUUFGdEI7QUFHSSwwQkFBa0IsS0FIdEI7QUFJSTtBQUpKLENBRFcsQyIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scyc7XHJcbmltcG9ydCBMb2dNb25pdG9yIGZyb20gJ3JlZHV4LWRldnRvb2xzLWxvZy1tb25pdG9yJztcclxuaW1wb3J0IERvY2tNb25pdG9yIGZyb20gJ3JlZHV4LWRldnRvb2xzLWRvY2stbW9uaXRvcic7XHJcblxyXG4vL25wbSBpIHJlZHV4LWRldnRvb2xzLWRvY2stbW9uaXRvciAgcmVkdXgtZGV2dG9vbHMtbG9nLW1vbml0b3JcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGV2VG9vbHMoXHJcbiAgICA8RG9ja01vbml0b3JcclxuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5S2V5PSdjdHJsLWgnXHJcbiAgICAgICAgY2hhbmdlUG9zaXRpb25LZXk9J2N0cmwtcSdcclxuICAgICAgICBkZWZhdWx0SXNWaXNpYmxlPXtmYWxzZX0+XHJcbiAgICAgICAgPExvZ01vbml0b3IgLz5cclxuICAgIDwvRG9ja01vbml0b3I+XHJcbik7XHJcbiJdfQ==