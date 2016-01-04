"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _underscore = require("underscore");

require("colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = [];

var Report = (function () {
  function Report() {
    (0, _classCallCheck3.default)(this, Report);

    this._it = [];
    this.children = [];
  }

  (0, _createClass3.default)(Report, [{
    key: "add",
    value: function add(reporter) {
      this.children.push(reporter);
    }
  }, {
    key: "it",
    value: function it(data) {
      this._it.push(data);
    }
  }, {
    key: "done",
    value: function done() {
      List.splice(List.indexOf(this), 1);
    }
  }, {
    key: "print",
    value: function print() {
      var str = undefined;
      str = "\n" + this.spacing + this.description + " (" + this.description_time + " ms)";
      console.log(str);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this._it), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var it = _step.value;

          str = "" + this.spacing + this.spacing + it.description + " (" + it.total + ") ms";
          console.log(str.green);
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

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this.children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var report = _step2.value;

          report.print();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "length",
    get: function get() {
      return this.children.length;
    }
  }, {
    key: "last",
    get: function get() {
      return Report.last;
    }
  }, {
    key: "level",
    get: function get() {
      var parent = this;
      var _ = 1;
      while (parent.parent) {
        _++;
        parent = parent.parent;
      }
      return _;
    }
  }, {
    key: "spacing",
    get: function get() {
      var space = "";
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)((0, _underscore.range)(this.level)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var i = _step3.value;

          space += "  ";
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return space;
    }
  }, {
    key: "textPrint",
    get: function get() {
      var space = this.spacing;
      var str = "";
      if (this._it.length) str = "" + str + space + this.description + " (" + this.description_time + " ms)\n";
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(this._it), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var it = _step4.value;

          str = "" + str + space + space + it.description + " (" + it.total + ") ms\n";
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = (0, _getIterator3.default)(this.children), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var report = _step5.value;

          var result = report.textPrint.split('\n').map(function (x) {
            return "" + space + x;
          }).join('\n');
          str = str + "\n" + result;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return str;
    }
  }], [{
    key: "getReporter",
    value: function getReporter() {
      var r = new Report();
      List.push(r);
      return r;
    }
  }, {
    key: "last",
    get: function get() {
      try {
        return List[List.length - 2];
      } catch (e) {
        return null;
      }
    }
  }]);
  return Report;
})();

exports.default = Report;
//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7OztBQUVELHlEQUFtQixJQUFJLENBQUMsUUFBUSxpSEFBRTtjQUF6QixNQUFNOztBQUNiLGNBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7d0JBQUssS0FBSyxHQUFHLENBQUM7V0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzNFLGFBQUcsR0FBSSxHQUFHLFVBQ2QsTUFBTSxBQUFFLENBQUE7U0FDTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7OztrQ0EzRW1CO0FBQ2xCLFVBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDckIsVUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNiLGFBQU8sQ0FBQyxDQUFDO0tBQ1Y7Ozt3QkFPZ0I7QUFDZixVQUFJO0FBQ0YsZUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztPQUM1QixDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1YsZUFBTyxJQUFJLENBQUM7T0FDYjtLQUNGOztTQXBDa0IsTUFBTTs7O2tCQUFOLE1BQU0iLCJmaWxlIjoiZGlzdC9yZXBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICByYW5nZVxufVxuZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCAnY29sb3JzJztcblxudmFyIExpc3Q9W107XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2l0ID0gW107XG4gICAgdGhpcy5jaGlsZHJlbj1bXTtcbiAgfVxuXG4gIGFkZChyZXBvcnRlcikge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChyZXBvcnRlcik7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxuXG4gIGl0KGRhdGEpIHtcbiAgICB0aGlzLl9pdC5wdXNoKGRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGdldFJlcG9ydGVyKCl7XG4gICAgdmFyIHIgPSBuZXcgUmVwb3J0KCk7XG4gICAgTGlzdC5wdXNoKHIpO1xuICAgIHJldHVybiByO1xuICB9XG5cbiAgZG9uZSgpe1xuICAgICBMaXN0LnNwbGljZShMaXN0LmluZGV4T2YodGhpcyksMSk7XG4gIH1cblxuXG4gIHN0YXRpYyBnZXQgbGFzdCgpe1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gTGlzdFtMaXN0Lmxlbmd0aC0yXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXQgbGFzdCgpe1xuICAgIHJldHVybiBSZXBvcnQubGFzdDtcbiAgfVxuXG4gIGdldCBsZXZlbCgpe1xuICAgIHZhciBwYXJlbnQgPXRoaXM7XG4gICAgbGV0IF89MTtcbiAgICB3aGlsZShwYXJlbnQucGFyZW50KXtcbiAgICAgIF8rKztcbiAgICAgIHBhcmVudD0gcGFyZW50LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIF9cbiAgfVxuXG4gIGdldCBzcGFjaW5nKCl7XG4gICAgdmFyIHNwYWNlPVwiXCI7XG4gICAgZm9yICh2YXIgaSBvZiByYW5nZSh0aGlzLmxldmVsKSkge1xuICAgICAgc3BhY2UgKz0gXCIgIFwiO1xuICAgIH1cbiAgICByZXR1cm4gc3BhY2U7XG4gIH1cblxuXG4gIHByaW50KCl7XG4gICAgbGV0IHN0cjtcbiAgICBzdHIgPSBgXFxuJHt0aGlzLnNwYWNpbmd9JHt0aGlzLmRlc2NyaXB0aW9ufSAoJHt0aGlzLmRlc2NyaXB0aW9uX3RpbWV9IG1zKWA7XG4gICAgY29uc29sZS5sb2coc3RyKTtcblxuICAgIGZvcih2YXIgaXQgb2YgdGhpcy5faXQpe1xuICAgICAgc3RyPWAke3RoaXMuc3BhY2luZ30ke3RoaXMuc3BhY2luZ30ke2l0LmRlc2NyaXB0aW9ufSAoJHtpdC50b3RhbH0pIG1zYFxuICAgICAgY29uc29sZS5sb2coc3RyLmdyZWVuKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCByZXBvcnQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICByZXBvcnQucHJpbnQoKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgZ2V0IHRleHRQcmludCgpIHtcbiAgICBsZXQgc3BhY2UgPSB0aGlzLnNwYWNpbmc7XG4gICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgaWYodGhpcy5faXQubGVuZ3RoKVxuICAgIHN0ciA9IGAke3N0cn0ke3NwYWNlfSR7dGhpcy5kZXNjcmlwdGlvbn0gKCR7dGhpcy5kZXNjcmlwdGlvbl90aW1lfSBtcylcXG5gO1xuICAgIGZvcih2YXIgaXQgb2YgdGhpcy5faXQpe1xuICAgICAgc3RyPWAke3N0cn0ke3NwYWNlfSR7c3BhY2V9JHtpdC5kZXNjcmlwdGlvbn0gKCR7aXQudG90YWx9KSBtc1xcbmBcbiAgICB9XG5cbiAgICBmb3IgKGxldCByZXBvcnQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgbGV0IHJlc3VsdCA9IHJlcG9ydC50ZXh0UHJpbnQuc3BsaXQoJ1xcbicpLm1hcCh4PT5gJHtzcGFjZX0ke3h9YCkuam9pbignXFxuJylcbiAgICAgIHN0cj1gJHtzdHJ9XG4ke3Jlc3VsdH1gXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
