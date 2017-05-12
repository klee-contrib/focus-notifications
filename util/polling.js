'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = poll;
//inspired by http://davidwalsh.name/javascript-polling
// just a promise instead of defer version.
// The polling function
function poll(fn) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_SAFE_INTEGER;

    var endTime = +new Date() + timeout;
    return new Promise(function p(resolve, reject) {
        if (fn()) {
            resolve();
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (+new Date() < endTime) {
                setTimeout(p, interval);
            }
            // Didn't match and too much time, reject!
            else {
                    reject(new Error('timed out for ' + fn + ': ' + arguments));
                }
    });
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsicG9sbCIsImZuIiwiaW50ZXJ2YWwiLCJ0aW1lb3V0IiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsImVuZFRpbWUiLCJEYXRlIiwiUHJvbWlzZSIsInAiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIkVycm9yIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFHd0JBLEk7QUFIeEI7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxDQUFjQyxFQUFkLEVBQXNFO0FBQUEsUUFBcERDLFFBQW9ELHVFQUF6QyxJQUF5QztBQUFBLFFBQW5DQyxPQUFtQyx1RUFBekJDLE9BQU9DLGdCQUFrQjs7QUFDakYsUUFBTUMsVUFBVSxDQUFDLElBQUlDLElBQUosRUFBRCxHQUFjSixPQUE5QjtBQUNBLFdBQU8sSUFBSUssT0FBSixDQUFZLFNBQVNDLENBQVQsQ0FBV0MsT0FBWCxFQUFvQkMsTUFBcEIsRUFBNEI7QUFDM0MsWUFBR1YsSUFBSCxFQUFTO0FBQ0xTO0FBQ0g7QUFDRDtBQUhBLGFBSUssSUFBSyxDQUFDLElBQUlILElBQUosRUFBRCxHQUFjRCxPQUFuQixFQUE0QjtBQUM3Qk0sMkJBQVdILENBQVgsRUFBY1AsUUFBZDtBQUNIO0FBQ0Q7QUFISyxpQkFJQTtBQUNEUywyQkFBTyxJQUFJRSxLQUFKLENBQVUsbUJBQW1CWixFQUFuQixHQUF3QixJQUF4QixHQUErQmEsU0FBekMsQ0FBUDtBQUNIO0FBQ0osS0FaTSxDQUFQO0FBYUgiLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5zcGlyZWQgYnkgaHR0cDovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LXBvbGxpbmdcclxuLy8ganVzdCBhIHByb21pc2UgaW5zdGVhZCBvZiBkZWZlciB2ZXJzaW9uLlxyXG4vLyBUaGUgcG9sbGluZyBmdW5jdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb2xsKGZuLCBpbnRlcnZhbCA9IDEwMDAsIHRpbWVvdXQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xyXG4gICAgY29uc3QgZW5kVGltZSA9ICtuZXcgRGF0ZSgpICsgdGltZW91dDtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBwKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGlmKGZuKCkpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGUgY29uZGl0aW9uIGlzbid0IG1ldCBidXQgdGhlIHRpbWVvdXQgaGFzbid0IGVsYXBzZWQsIGdvIGFnYWluXHJcbiAgICAgICAgZWxzZSBpZiAoICtuZXcgRGF0ZSgpIDwgZW5kVGltZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHAsIGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGlkbid0IG1hdGNoIGFuZCB0b28gbXVjaCB0aW1lLCByZWplY3QhXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3RpbWVkIG91dCBmb3IgJyArIGZuICsgJzogJyArIGFyZ3VtZW50cykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdfQ==