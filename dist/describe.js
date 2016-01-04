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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Describe = (function (_Base) {
  (0, _inherits3.default)(Describe, _Base);

  function Describe() {
    (0, _classCallCheck3.default)(this, Describe);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Describe).call(this));
  }

  (0, _createClass3.default)(Describe, [{
    key: "run",
    value: function run(reporter, f) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.container), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var d = _step.value;

          var _d = (0, _slicedToArray3.default)(d, 2);

          var description = _d[0];
          var func = _d[1];

          reporter.description = description;
          func();
          f();
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
  }]);
  return Describe;
})(_base2.default);

exports.default = Describe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvZGVzY3JpYmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQixRQUFROzBCQUFSLFFBQVE7O0FBQzNCLFdBRG1CLFFBQVEsR0FDZDt3Q0FETSxRQUFRO3dGQUFSLFFBQVE7R0FHMUI7OzZCQUhrQixRQUFROzt3QkFLdkIsUUFBUSxFQUFDLENBQUMsRUFBQzs7Ozs7O0FBQ2Isd0RBQWEsSUFBSSxDQUFDLFNBQVMsNEdBQUM7Y0FBcEIsQ0FBQzs7Z0RBQ2lCLENBQUM7O2NBQXBCLFdBQVc7Y0FBQyxJQUFJOztBQUNyQixrQkFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDbkMsY0FBSSxFQUFFLENBQUM7QUFDUCxXQUFDLEVBQUUsQ0FBQztTQUNMOzs7Ozs7Ozs7Ozs7Ozs7S0FDRjs7U0Faa0IsUUFBUTs7O2tCQUFSLFFBQVEiLCJmaWxlIjoiZGlzdC9kZXNjcmliZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzY3JpYmUgZXh0ZW5kcyBCYXNle1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcnVuKHJlcG9ydGVyLGYpe1xyXG4gICAgZm9yKHZhciBkIG9mIHRoaXMuY29udGFpbmVyKXtcclxuICAgICAgdmFyIFtkZXNjcmlwdGlvbixmdW5jXT0gZDtcclxuICAgICAgcmVwb3J0ZXIuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgZnVuYygpO1xyXG4gICAgICBmKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
