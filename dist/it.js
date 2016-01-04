"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require("./base");

var _base2 = _interopRequireDefault(_base);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var It = (function (_Base) {
  (0, _inherits3.default)(It, _Base);

  function It() {
    var iteration = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];
    (0, _classCallCheck3.default)(this, It);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(It).call(this));

    _this.iteration = iteration;
    _this._start = [];
    _this._end = [];
    return _this;
  }

  (0, _createClass3.default)(It, [{
    key: "start",
    value: function start() {
      this._start.push(this.date);
    }
  }, {
    key: "end",
    value: function end() {
      this._end.push(this.date);
    }
  }, {
    key: "run",
    value: function run(reporter) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.container), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          var _i = (0, _slicedToArray3.default)(i, 3);

          var description = _i[0];
          var func = _i[1];
          var iteration = _i[2];

          iteration = iteration || this.iteration;
          for (var i in _underscore2.default.range(iteration)) {
            this.start();
            func();
            this.end();
            var length = this.end.length;
          }

          var min;
          var max;
          for (var i in (0, _underscore.range)(this.end.length)) {
            var current = this.end[i] - this.start[i];
            min = min ? current : Math.min(min, current);
            max = max ? curremt : Math.max(max, current);
          }

          reporter.it({
            max: max,
            min: min,
            description: description,
            start: this._start.length ? this._start[0] : null,
            end: this._end.length ? this._end[this._end.length - 1] : null
          });

          this._start = [];
          this._end = [];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "iteration",
    get: function get() {
      return this.__iteration;
    },
    set: function set(value) {
      this.__iteration = value;
    }
  }]);
  return It;
})(_base2.default);

exports.default = It;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJcUIsRUFBRTswQkFBRixFQUFFOztBQUNyQixXQURtQixFQUFFLEdBQ1E7UUFBakIsU0FBUyx5REFBRyxHQUFHO3dDQURSLEVBQUU7OzZGQUFGLEVBQUU7O0FBR25CLFVBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixVQUFLLE1BQU0sR0FBQyxFQUFFLENBQUM7QUFDZixVQUFLLElBQUksR0FBQyxFQUFFLENBQUM7O0dBQ2Q7OzZCQU5rQixFQUFFOzs0QkFnQmQ7QUFDTCxVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7OzswQkFFSTtBQUNILFVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjs7O3dCQUdHLFFBQVEsRUFBRTs7Ozs7O0FBQ1osd0RBQWMsSUFBSSxDQUFDLFNBQVMsNEdBQUU7Y0FBckIsQ0FBQzs7Z0RBQzRCLENBQUM7O2NBQWhDLFdBQVc7Y0FBRSxJQUFJO2NBQUMsU0FBUzs7QUFDaEMsbUJBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUN4QyxlQUFLLElBQUksQ0FBQyxJQUFJLHFCQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNoQyxnQkFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsZ0JBQUksRUFBRSxDQUFDO0FBQ1AsZ0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNYLGdCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztXQUM5Qjs7QUFFRCxjQUFJLEdBQUcsQ0FBQztBQUNSLGNBQUksR0FBRyxDQUFDO0FBQ1IsZUFBSSxJQUFJLENBQUMsSUFBSSxnQkF4Q1gsS0FBSyxFQXdDWSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDO0FBQ2xDLGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsZUFBRyxHQUFHLEdBQUcsR0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsZUFBRyxHQUFHLEdBQUcsR0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsT0FBTyxDQUFDLENBQUM7V0FDekM7O0FBRUQsa0JBQVEsQ0FBQyxFQUFFLENBQUM7QUFDVixlQUFHLEVBQUgsR0FBRztBQUNILGVBQUcsRUFBSCxHQUFHO0FBQ0gsdUJBQVcsRUFBWCxXQUFXO0FBQ1gsaUJBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUk7QUFDNUMsZUFBRyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSTtXQUN4RCxDQUFDLENBQUM7O0FBRUgsY0FBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7QUFDZixjQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztTQUNkOzs7Ozs7Ozs7Ozs7Ozs7S0FDRjs7O3dCQS9DZTtBQUNkLGFBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6QjtzQkFFYSxLQUFLLEVBQUU7QUFDbkIsVUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDMUI7O1NBZGtCLEVBQUU7OztrQkFBRixFQUFFIiwiZmlsZSI6ImRpc3QvaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IHtyYW5nZX0gZnJvbSBcInVuZGVyc2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXQgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoaXRlcmF0aW9uID0gMTAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLml0ZXJhdGlvbiA9IGl0ZXJhdGlvbjtcbiAgICB0aGlzLl9zdGFydD1bXTtcbiAgICB0aGlzLl9lbmQ9W107XG4gIH1cblxuICBnZXQgaXRlcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9faXRlcmF0aW9uO1xuICB9XG5cbiAgc2V0IGl0ZXJhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX19pdGVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHN0YXJ0KCl7XG4gICAgdGhpcy5fc3RhcnQucHVzaCh0aGlzLmRhdGUpO1xuICB9XG5cbiAgZW5kKCl7XG4gICAgdGhpcy5fZW5kLnB1c2godGhpcy5kYXRlKTtcbiAgfVxuXG5cbiAgcnVuKHJlcG9ydGVyKSB7XG4gICAgZm9yICh2YXIgaSBvZiB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdmFyIFtkZXNjcmlwdGlvbiwgZnVuYyxpdGVyYXRpb25dID0gaTtcbiAgICAgIGl0ZXJhdGlvbiA9IGl0ZXJhdGlvbiB8fCB0aGlzLml0ZXJhdGlvbjtcbiAgICAgIGZvciAodmFyIGkgaW4gXy5yYW5nZShpdGVyYXRpb24pKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgZnVuYygpO1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5lbmQubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWluO1xuICAgICAgdmFyIG1heDtcbiAgICAgIGZvcih2YXIgaSBpbiByYW5nZSh0aGlzLmVuZC5sZW5ndGgpKXtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmVuZFtpXS10aGlzLnN0YXJ0W2ldO1xuICAgICAgICBtaW4gPSBtaW4/Y3VycmVudDpNYXRoLm1pbihtaW4sY3VycmVudCk7XG4gICAgICAgIG1heCA9IG1heD9jdXJyZW10Ok1hdGgubWF4KG1heCxjdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmVwb3J0ZXIuaXQoe1xuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHN0YXJ0OnRoaXMuX3N0YXJ0Lmxlbmd0aD90aGlzLl9zdGFydFswXTpudWxsLFxuICAgICAgICBlbmQ6dGhpcy5fZW5kLmxlbmd0aD90aGlzLl9lbmRbdGhpcy5fZW5kLmxlbmd0aC0xXTpudWxsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhcnQ9W107XG4gICAgICB0aGlzLl9lbmQ9W107XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
