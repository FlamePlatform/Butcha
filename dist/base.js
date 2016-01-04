"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = (function () {
  function Base() {
    (0, _classCallCheck3.default)(this, Base);

    this.container = [];
  }

  (0, _createClass3.default)(Base, [{
    key: "start",
    value: function start() {
      this.start = this.date;
    }
  }, {
    key: "end",
    value: function end() {
      this.end = this.date;
    }
  }, {
    key: "push",
    value: function push() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.container.push(args);
    }
  }, {
    key: "get",
    value: function get() {
      var index = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      try {
        if (index) {
          return this.container[index];
        } else {
          return this.container[this.container.length];
        }
      } catch (e) {
        return null;
      } finally {}
    }
  }, {
    key: "print",
    value: function print(str) {
      console.log(str);
    }
  }, {
    key: "date",
    get: function get() {
      return Date.now();
    }
  }, {
    key: "length",
    get: function get() {
      return this.container.length;
    }
  }]);
  return Base;
})();

exports.default = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCLElBQUk7QUFDdkIsV0FEbUIsSUFBSSxHQUNWO3dDQURNLElBQUk7O0FBRXJCLFFBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDO0dBQ25COzs2QkFIa0IsSUFBSTs7NEJBU2hCO0FBQ0wsVUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3RCOzs7MEJBRUk7QUFDSCxVQUFJLENBQUMsR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDckI7OzsyQkFFWTt3Q0FBTCxJQUFJO0FBQUosWUFBSTs7O0FBQ1YsVUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7OzswQkFFYztVQUFYLEtBQUsseURBQUMsSUFBSTs7QUFDWixVQUFJO0FBQ0YsWUFBRyxLQUFLLEVBQUM7QUFDUCxpQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCLE1BQUk7QUFDSCxpQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7T0FDRixDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1YsZUFBTyxJQUFJLENBQUM7T0FDYixTQUFTLEVBRVQ7S0FDRjs7OzBCQVFLLEdBQUcsRUFBQztBQUNSLGFBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7Ozt3QkF0Q1M7QUFDUixhQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNuQjs7O3dCQTZCVztBQUNWLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7S0FDOUI7O1NBdENrQixJQUFJOzs7a0JBQUosSUFBSSIsImZpbGUiOiJkaXN0L2Jhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmNvbnRhaW5lcj1bXTtcclxuICB9XHJcblxyXG4gIGdldCBkYXRlKCl7XHJcbiAgICByZXR1cm4gRGF0ZS5ub3coKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCl7XHJcbiAgICB0aGlzLnN0YXJ0PXRoaXMuZGF0ZTtcclxuICB9XHJcblxyXG4gIGVuZCgpe1xyXG4gICAgdGhpcy5lbmQ9IHRoaXMuZGF0ZTtcclxuICB9XHJcblxyXG4gIHB1c2goLi4uYXJncyl7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5wdXNoKGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGluZGV4PW51bGwpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYoaW5kZXgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltpbmRleF07XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lclt0aGlzLmNvbnRhaW5lci5sZW5ndGhdO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0IGxlbmd0aCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmxlbmd0aDtcclxuICB9XHJcblxyXG5cclxuICBwcmludChzdHIpe1xyXG4gICAgY29uc29sZS5sb2coc3RyKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
