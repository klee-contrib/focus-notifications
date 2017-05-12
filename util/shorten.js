"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = shorten;
function shorten(text, maxLength) {
    return text.length > maxLength ? text.substr(0, maxLength - 3) + " ..." : "" + text;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsic2hvcnRlbiIsInRleHQiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdHIiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsTztBQUFULFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxTQUF2QixFQUFrQztBQUM3QyxXQUFPRCxLQUFLRSxNQUFMLEdBQWNELFNBQWQsR0FBNkJELEtBQUtHLE1BQUwsQ0FBWSxDQUFaLEVBQWNGLFlBQVUsQ0FBeEIsQ0FBN0IsaUJBQW1FRCxJQUExRTtBQUNIIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9ydGVuKHRleHQsIG1heExlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoID8gYCR7dGV4dC5zdWJzdHIoMCxtYXhMZW5ndGgtMyl9IC4uLmAgOiBgJHt0ZXh0fWA7XHJcbn1cclxuIl19