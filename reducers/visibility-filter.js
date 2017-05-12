'use strict';

var _actions = require('../actions');

var SHOW_ALL = _actions.VisibilityFilters.SHOW_ALL;

// reducer in charge of dealing with the visibility filter.

function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_ALL;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = action.type,
        filter = action.filter;

    switch (type) {
        case _actions.SET_VISIBILITY_FILTER:
            return filter;
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiU0hPV19BTEwiLCJ2aXNpYmlsaXR5RmlsdGVyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztJQUNPQSxRLDhCQUFBQSxROztBQUVQOztBQUNBLFNBQVNDLGdCQUFULEdBQXlEO0FBQUEsUUFBL0JDLEtBQStCLHVFQUF2QkYsUUFBdUI7QUFBQSxRQUFiRyxNQUFhLHVFQUFKLEVBQUk7QUFBQSxRQUM5Q0MsSUFEOEMsR0FDOUJELE1BRDhCLENBQzlDQyxJQUQ4QztBQUFBLFFBQ3hDQyxNQUR3QyxHQUM5QkYsTUFEOEIsQ0FDeENFLE1BRHdDOztBQUVyRCxZQUFRRCxJQUFSO0FBQ0k7QUFDSSxtQkFBT0MsTUFBUDtBQUNKO0FBQ0ksbUJBQU9ILEtBQVA7QUFKUjtBQU1IIiwiZmlsZSI6InNob3J0ZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaXNpYmlsaXR5RmlsdGVycywgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmNvbnN0IHtTSE9XX0FMTH0gPSBWaXNpYmlsaXR5RmlsdGVycztcclxuXHJcbi8vIHJlZHVjZXIgaW4gY2hhcmdlIG9mIGRlYWxpbmcgd2l0aCB0aGUgdmlzaWJpbGl0eSBmaWx0ZXIuXHJcbmZ1bmN0aW9uIHZpc2liaWxpdHlGaWx0ZXIoc3RhdGUgPSBTSE9XX0FMTCwgYWN0aW9uID0ge30pIHtcclxuICAgIGNvbnN0IHt0eXBlLCBmaWx0ZXJ9ID0gYWN0aW9uO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVI6XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==