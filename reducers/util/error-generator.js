"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = generateError;
function generateError(_ref) {
    var name = _ref.name,
        action = _ref.action,
        expectedType = _ref.expectedType;
    var type = action.type,
        payload = action.payload;

    return name + " reducer : action " + type + " : the payload is not a(n) " + expectedType + " it is : " + JSON.stringify(payload);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVFcnJvciIsIm5hbWUiLCJhY3Rpb24iLCJleHBlY3RlZFR5cGUiLCJ0eXBlIiwicGF5bG9hZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsYTtBQUFULFNBQVNBLGFBQVQsT0FBcUQ7QUFBQSxRQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsUUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFFBQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUFBLFFBQ3pEQyxJQUR5RCxHQUN4Q0YsTUFEd0MsQ0FDekRFLElBRHlEO0FBQUEsUUFDbkRDLE9BRG1ELEdBQ3hDSCxNQUR3QyxDQUNuREcsT0FEbUQ7O0FBRWhFLFdBQVVKLElBQVYsMEJBQW1DRyxJQUFuQyxtQ0FBcUVELFlBQXJFLGlCQUE2RkcsS0FBS0MsU0FBTCxDQUFlRixPQUFmLENBQTdGO0FBQ0giLCJmaWxlIjoic2hvcnRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRXJyb3Ioe25hbWUsIGFjdGlvbiwgZXhwZWN0ZWRUeXBlfSkge1xyXG4gICAgY29uc3Qge3R5cGUsIHBheWxvYWR9ID0gYWN0aW9uO1xyXG4gICAgcmV0dXJuIGAke25hbWV9IHJlZHVjZXIgOiBhY3Rpb24gJHt0eXBlfSA6IHRoZSBwYXlsb2FkIGlzIG5vdCBhKG4pICR7ZXhwZWN0ZWRUeXBlfSBpdCBpcyA6ICR7SlNPTi5zdHJpbmdpZnkocGF5bG9hZCl9YDtcclxufVxyXG4iXX0=