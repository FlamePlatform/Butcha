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

var After = (function (_Base) {
  (0, _inherits3.default)(After, _Base);

  function After() {
    (0, _classCallCheck3.default)(this, After);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(After).call(this));
  }

  (0, _createClass3.default)(After, [{
    key: "run",
    value: function run() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.container), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var a = _step.value;

          var _a = (0, _slicedToArray3.default)(a, 1);

          var func = _a[0];

          func();
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
  return After;
})(_base2.default);

exports.default = After;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvYWZ0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQixLQUFLOzBCQUFMLEtBQUs7O0FBQ3hCLFdBRG1CLEtBQUssR0FDWDt3Q0FETSxLQUFLO3dGQUFMLEtBQUs7R0FHdkI7OzZCQUhrQixLQUFLOzswQkFLbkI7Ozs7OztBQUNILHdEQUFhLElBQUksQ0FBQyxTQUFTLDRHQUFDO2NBQXBCLENBQUM7O2dEQUNJLENBQUM7O2NBQVAsSUFBSTs7QUFDVCxjQUFJLEVBQUUsQ0FBQztTQUNSOzs7Ozs7Ozs7Ozs7Ozs7S0FDRjs7U0FWa0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiZGlzdC9hZnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZ0ZXIgZXh0ZW5kcyBCYXNle1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCl7XHJcbiAgICBmb3IodmFyIGEgb2YgdGhpcy5jb250YWluZXIpe1xyXG4gICAgICB2YXIgW2Z1bmNdPWE7XHJcbiAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
