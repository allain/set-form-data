(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _setFormData = require('set-form-data');

var _setFormData2 = _interopRequireDefault(_setFormData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearButton = document.getElementById('clear-sample-form');
clearButton.addEventListener('click', function () {
    var form = document.getElementById('sample-form');
    (0, _setFormData2.default)(form, { 'field1': 'YOLO' });
});

},{"set-form-data":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var TYPE_FILTER = ['text', 'email', 'password', 'select'];

function setFormData(form, data) {
    if (!form) {
        throw new Error('A form is required by getFormData, was given form=' + form);
    }

    for (var i = 0, l = form.elements.length; i < l; i++) {
        var elem = form.elements[i];
        if (TYPE_FILTER.indexOf(elem.type) < 0 || elem.disabled) {
            continue;
        }

        var elemId = elem.name || elem.id;
        console.log(elemId);
        if (data.hasOwnProperty(elemId)) {
            elem.value = data[elemId];
        }
    }
}

exports.default = setFormData;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2FwcC5qcyIsInNyYy9zZXQtZm9ybS1kYXRhL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsSUFBSSxjQUFjLFNBQVMsY0FBVCxDQUF3QixtQkFBeEIsQ0FBbEI7QUFDQSxZQUFZLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQVk7QUFDOUMsUUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFYO0FBQ0EsK0JBQVksSUFBWixFQUFrQixFQUFDLFVBQVUsTUFBWCxFQUFsQjtBQUNILENBSEQ7Ozs7Ozs7O0FDSEEsSUFBSSxjQUFjLENBQ2QsTUFEYyxFQUVkLE9BRmMsRUFHZCxVQUhjLEVBSWQsUUFKYyxDQUFsQjs7QUFPQSxTQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDL0IsUUFBSSxDQUFDLElBQUwsRUFBVztBQUNULGNBQU0sSUFBSSxLQUFKLHdEQUErRCxJQUEvRCxDQUFOO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJLElBQUksQ0FBUixFQUFXLElBQUksS0FBSyxRQUFMLENBQWMsTUFBbEMsRUFBMEMsSUFBSSxDQUE5QyxFQUFpRCxHQUFqRCxFQUFzRDtBQUNsRCxZQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFYO0FBQ0EsWUFBSSxZQUFZLE9BQVosQ0FBb0IsS0FBSyxJQUF6QixJQUFpQyxDQUFqQyxJQUFzQyxLQUFLLFFBQS9DLEVBQXlEO0FBQ3JEO0FBQ0g7O0FBRUQsWUFBSSxTQUFTLEtBQUssSUFBTCxJQUFhLEtBQUssRUFBL0I7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWjtBQUNBLFlBQUksS0FBSyxjQUFMLENBQW9CLE1BQXBCLENBQUosRUFBaUM7QUFDN0IsaUJBQUssS0FBTCxHQUFhLEtBQUssTUFBTCxDQUFiO0FBQ0g7QUFDSjtBQUNGOztrQkFFYyxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBzZXRGb3JtRGF0YSBmcm9tICdzZXQtZm9ybS1kYXRhJztcblxubGV0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLXNhbXBsZS1mb3JtJyk7XG5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtZm9ybScpO1xuICAgIHNldEZvcm1EYXRhKGZvcm0sIHsnZmllbGQxJzogJ1lPTE8nfSk7XG59KTtcbiIsInZhciBUWVBFX0ZJTFRFUiA9IFtcbiAgICAndGV4dCcsXG4gICAgJ2VtYWlsJyxcbiAgICAncGFzc3dvcmQnLFxuICAgICdzZWxlY3QnXG5dO1xuXG5mdW5jdGlvbiBzZXRGb3JtRGF0YShmb3JtLCBkYXRhKSB7XG4gIGlmICghZm9ybSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQSBmb3JtIGlzIHJlcXVpcmVkIGJ5IGdldEZvcm1EYXRhLCB3YXMgZ2l2ZW4gZm9ybT0ke2Zvcm19YClcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZm9ybS5lbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbGVtID0gZm9ybS5lbGVtZW50c1tpXVxuICAgICAgaWYgKFRZUEVfRklMVEVSLmluZGV4T2YoZWxlbS50eXBlKSA8IDAgfHwgZWxlbS5kaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGxldCBlbGVtSWQgPSBlbGVtLm5hbWUgfHwgZWxlbS5pZFxuICAgICAgY29uc29sZS5sb2coZWxlbUlkKVxuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoZWxlbUlkKSkge1xuICAgICAgICAgIGVsZW0udmFsdWUgPSBkYXRhW2VsZW1JZF1cbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRGb3JtRGF0YVxuIl19
