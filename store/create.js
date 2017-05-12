'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxDevtools = require('redux-devtools');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _devTools = require('../container/dev-tools');

var _devTools2 = _interopRequireDefault(_devTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = __DEV__;

var enhancerDev = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _devTools2.default.instrument(), (0, _reduxDevtools.persistState)(window.location.href.match(/[?&]debug_session=([^&]+)\b/)));

var enhancerProd = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default));

function configureStore(initialState) {
    var storeEnhancer = isDev ? enhancerDev : enhancerProd;
    var store = (0, _redux.createStore)(_reducers2.default, initialState, storeEnhancer);
    if (module.hot) {
        module.hot.accept('../reducers', function () {
            return store.replaceReducer(require('../reducers').default);
        });
    }
    return store;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJpc0RldiIsIl9fREVWX18iLCJlbmhhbmNlckRldiIsImluc3RydW1lbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtYXRjaCIsImVuaGFuY2VyUHJvZCIsImluaXRpYWxTdGF0ZSIsInN0b3JlRW5oYW5jZXIiLCJzdG9yZSIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsInJlcGxhY2VSZWR1Y2VyIiwicmVxdWlyZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQXVCd0JBLGM7O0FBdEJ4Qjs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFFBQVFDLE9BQWQ7O0FBRUEsSUFBTUMsY0FBYyxvQkFDaEIsaURBRGdCLEVBRWhCLG1CQUFTQyxVQUFULEVBRmdCLEVBR2hCLGlDQUNJQyxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FDSSw2QkFESixDQURKLENBSGdCLENBQXBCOztBQVVBLElBQU1DLGVBQWUsb0JBQ2pCLGlEQURpQixDQUFyQjs7QUFJZSxTQUFTVCxjQUFULENBQXdCVSxZQUF4QixFQUFzQztBQUNqRCxRQUFNQyxnQkFBZ0JWLFFBQVFFLFdBQVIsR0FBc0JNLFlBQTVDO0FBQ0EsUUFBTUcsUUFBUSw0Q0FBeUJGLFlBQXpCLEVBQXVDQyxhQUF2QyxDQUFkO0FBQ0EsUUFBSUUsT0FBT0MsR0FBWCxFQUFnQjtBQUNaRCxlQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBa0IsYUFBbEIsRUFBaUM7QUFBQSxtQkFBTUgsTUFBTUksY0FBTixDQUFxQkMsUUFBUSxhQUFSLEVBQXVCQyxPQUE1QyxDQUFOO0FBQUEsU0FBakM7QUFDSDtBQUNELFdBQU9OLEtBQVA7QUFDSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHBlcnNpc3RTdGF0ZSB9IGZyb20gJ3JlZHV4LWRldnRvb2xzJztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IERldlRvb2xzIGZyb20gJy4uL2NvbnRhaW5lci9kZXYtdG9vbHMnO1xyXG5cclxuY29uc3QgaXNEZXYgPSBfX0RFVl9fO1xyXG5cclxuY29uc3QgZW5oYW5jZXJEZXYgPSBjb21wb3NlKFxyXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcclxuICAgIERldlRvb2xzLmluc3RydW1lbnQoKSxcclxuICAgIHBlcnNpc3RTdGF0ZShcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaChcclxuICAgICAgICAgICAgL1s/Jl1kZWJ1Z19zZXNzaW9uPShbXiZdKylcXGIvXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG4pO1xyXG5cclxuY29uc3QgZW5oYW5jZXJQcm9kID0gY29tcG9zZShcclxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgY29uc3Qgc3RvcmVFbmhhbmNlciA9IGlzRGV2ID8gZW5oYW5jZXJEZXYgOiBlbmhhbmNlclByb2Q7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHN0b3JlRW5oYW5jZXIpO1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiBzdG9yZS5yZXBsYWNlUmVkdWNlcihyZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHQpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG4iXX0=