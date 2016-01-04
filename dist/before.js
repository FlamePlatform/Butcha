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

var Before = (function (_Base) {
  (0, _inherits3.default)(Before, _Base);

  function Before() {
    (0, _classCallCheck3.default)(this, Before);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Before).call(this));
  }

  (0, _createClass3.default)(Before, [{
    key: "run",
    value: function run() {
      this.start();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.container), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var b = _step.value;

          var _b = (0, _slicedToArray3.default)(b, 1);

          var func = _b[0];

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

      this.end();
    }
  }]);
  return Before;
})(_base2.default);

exports.default = Before;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvYmVmb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJcUIsTUFBTTswQkFBTixNQUFNOztBQUN6QixXQURtQixNQUFNLEdBQ1o7d0NBRE0sTUFBTTt3RkFBTixNQUFNO0dBR3hCOzs2QkFIa0IsTUFBTTs7MEJBS3BCO0FBQ0gsVUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7QUFDYix3REFBYSxJQUFJLENBQUMsU0FBUyw0R0FBQztjQUFwQixDQUFDOztnREFDSyxDQUFDOztjQUFSLElBQUk7O0FBQ1QsY0FBSSxFQUFFLENBQUM7U0FDUjs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFVBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNaOztTQVprQixNQUFNOzs7a0JBQU4sTUFBTSIsImZpbGUiOiJkaXN0L2JlZm9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVmb3JlIGV4dGVuZHMgQmFzZXtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJ1bigpe1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gICAgZm9yKHZhciBiIG9mIHRoaXMuY29udGFpbmVyKXtcclxuICAgICAgdmFyIFtmdW5jXT0gYjtcclxuICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbmQoKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
