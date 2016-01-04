'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _microtime = require("microtime");

var _microtime2 = _interopRequireDefault(_microtime);

var _util = require("util");

var _underscore = require("underscore");

var _report = require("./report");

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = 1;
// import Describe from "./describe";
// import Before from "./before";
// import It from "./it";
// import After from "./after";

var ButchaList = [];
var position = 0;

var shouldrun = false;

var Butcha = (function () {
  function Butcha() {
    (0, _classCallCheck3.default)(this, Butcha);
  }

  (0, _createClass3.default)(Butcha, [{
    key: "describe",
    value: function describe(description, func) {
      var self = this;
      this.runner = (function () {
        var reporter = _report2.default.getReporter();
        var parent = _report2.default.last;
        if (parent) {
          reporter.parent = parent;
          parent.children = parent.children || [];
          parent.children.push(reporter);
        }

        this.reporter = reporter;
        reporter.description = description;
        reporter.description_start = _microtime2.default.now() / 1000;
        func();
        reporter.description_end = _microtime2.default.now() / 1000;
        reporter.description_time = reporter.description_end - reporter.description_start;
        reporter.done();
      }).bind(this);
      if (shouldrun) {
        this.run();
      }
    }
  }, {
    key: "before",
    value: function before(beforefunc) {
      var reporter = this.reporter;

      reporter.before_start = _microtime2.default.now() / 1000;
      beforefunc();
      reporter.before_end = _microtime2.default.now() / 1000;
      reporter.before_time = reporter.before_end - reporter.before_start;
    }
  }, {
    key: "beforeEach",
    value: function beforeEach(beforeEachfunc) {
      this.before(beforeEachfunc, true);
    }
  }, {
    key: "it",
    value: function it(description, func, iteration) {
      var time = [];
      var start = _microtime2.default.now() / 1000;
      for (var i in (0, _underscore.range)(iteration)) {
        var _start = _microtime2.default.now() / 1000;
        func();
        var _end = _microtime2.default.now() / 1000;
        time.push(_end - _start);
      }
      var end = _microtime2.default.now() / 1000;
      var total = time.reduce(function (prev, next) {
        return prev + next;
      }, 0);

      this.reporter._it.push({
        start: start,
        description: description,
        end: end,
        total_calculated: total,
        total: end - start
      });
    }
  }, {
    key: "xit",
    value: function xit(itdescription, func) {
      this.it(itdescription, func, true);
    }
  }, {
    key: "afterEach",
    value: function afterEach(afterfunc) {
      this.after(beforeEachfunc, true);
    }
  }, {
    key: "after",
    value: function after() {
      debugger;
      this.last._after.push.apply(this.last._after, arguments);
    }
  }, {
    key: "run",
    value: function run() {
      shouldrun = true;
      this.runner();
      shouldrun = false;
    }
  }]);
  return Butcha;
})();

exports.default = Butcha;
//# sourceMappingURL=data:application/json;base64,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O0FBQzFCLFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzNDLGVBQU8sSUFBSSxHQUFHLElBQUksQ0FBQztPQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFBOztBQUVMLFVBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNyQixhQUFLLEVBQUwsS0FBSztBQUNMLG1CQUFXLEVBQVgsV0FBVztBQUNYLFdBQUcsRUFBSCxHQUFHO0FBQ0gsd0JBQWdCLEVBQUMsS0FBSztBQUN0QixhQUFLLEVBQUMsR0FBRyxHQUFDLEtBQUs7T0FDaEIsQ0FBQyxDQUFBO0tBQ0g7Ozt3QkFFRyxhQUFhLEVBQUUsSUFBSSxFQUFFO0FBQ3ZCLFVBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNwQzs7OzhCQUVTLFNBQVMsRUFBRTtBQUNuQixVQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNsQzs7OzRCQUdPO0FBQ04sZUFBUztBQUNULFVBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDMUQ7OzswQkFHSTtBQUNILGVBQVMsR0FBQyxJQUFJLENBQUM7QUFDZixVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZCxlQUFTLEdBQUMsS0FBSyxDQUFDO0tBQ2pCOztTQXRGa0IsTUFBTTs7O2tCQUFOLE1BQU0iLCJmaWxlIjoiZGlzdC9idXRjaGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgRGF0ZSBmcm9tIFwibWljcm90aW1lXCI7XG4vLyBpbXBvcnQgRGVzY3JpYmUgZnJvbSBcIi4vZGVzY3JpYmVcIjtcbi8vIGltcG9ydCBCZWZvcmUgZnJvbSBcIi4vYmVmb3JlXCI7XG4vLyBpbXBvcnQgSXQgZnJvbSBcIi4vaXRcIjtcbi8vIGltcG9ydCBBZnRlciBmcm9tIFwiLi9hZnRlclwiO1xuaW1wb3J0IHtcbiAgaW5zcGVjdFxufVxuZnJvbSBcInV0aWxcIjtcbmltcG9ydCB7XG4gIHJhbmdlXG59XG5mcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IFJlcG9ydGVyIGZyb20gXCIuL3JlcG9ydFwiO1xuXG5cbnZhciBpbmRleCA9IDE7XG5jb25zdCBCdXRjaGFMaXN0ID0gW107XG5sZXQgcG9zaXRpb24gPSAwO1xuXG5sZXQgc2hvdWxkcnVuPWZhbHNlO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0Y2hhIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgZGVzY3JpYmUoZGVzY3JpcHRpb24sIGZ1bmMpIHtcbiAgICB2YXIgc2VsZiA9dGhpcztcbiAgICB0aGlzLnJ1bm5lciA9IGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgcmVwb3J0ZXIgPSBSZXBvcnRlci5nZXRSZXBvcnRlcigpO1xuICAgICAgbGV0IHBhcmVudCA9IFJlcG9ydGVyLmxhc3Q7XG4gICAgICBpZihwYXJlbnQpe1xuICAgICAgICByZXBvcnRlci5wYXJlbnQ9cGFyZW50O1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW58fFtdO1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChyZXBvcnRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVwb3J0ZXIgPSByZXBvcnRlcjtcbiAgICAgIHJlcG9ydGVyLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICByZXBvcnRlci5kZXNjcmlwdGlvbl9zdGFydCA9IERhdGUubm93KCkvMTAwMDtcbiAgICAgIGZ1bmMoKTtcbiAgICAgIHJlcG9ydGVyLmRlc2NyaXB0aW9uX2VuZCA9IERhdGUubm93KCkvMTAwMDtcbiAgICAgIHJlcG9ydGVyLmRlc2NyaXB0aW9uX3RpbWUgPSByZXBvcnRlci5kZXNjcmlwdGlvbl9lbmQgLSByZXBvcnRlci5kZXNjcmlwdGlvbl9zdGFydDtcbiAgICAgIHJlcG9ydGVyLmRvbmUoKTtcbiAgICB9LmJpbmQodGhpcyk7XG4gICAgaWYoc2hvdWxkcnVuKXtcbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuICB9XG5cbiAgYmVmb3JlKGJlZm9yZWZ1bmMpIHtcbiAgICBsZXQge1xuICAgICAgcmVwb3J0ZXJcbiAgICB9ID0gdGhpcztcbiAgICByZXBvcnRlci5iZWZvcmVfc3RhcnQgPSBEYXRlLm5vdygpLzEwMDA7XG4gICAgYmVmb3JlZnVuYygpO1xuICAgIHJlcG9ydGVyLmJlZm9yZV9lbmQgPSBEYXRlLm5vdygpLzEwMDA7XG4gICAgcmVwb3J0ZXIuYmVmb3JlX3RpbWUgPSByZXBvcnRlci5iZWZvcmVfZW5kIC0gcmVwb3J0ZXIuYmVmb3JlX3N0YXJ0O1xuICB9XG5cbiAgYmVmb3JlRWFjaChiZWZvcmVFYWNoZnVuYykge1xuICAgIHRoaXMuYmVmb3JlKGJlZm9yZUVhY2hmdW5jLCB0cnVlKTtcbiAgfVxuXG4gIGl0KGRlc2NyaXB0aW9uLCBmdW5jLCBpdGVyYXRpb24pIHtcbiAgICB2YXIgdGltZSA9IFtdO1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCkvMTAwMDtcbiAgICBmb3IgKHZhciBpIGluIHJhbmdlKGl0ZXJhdGlvbikpIHtcbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCkvMTAwMDtcbiAgICAgIGZ1bmMoKTtcbiAgICAgIGxldCBlbmQgPSBEYXRlLm5vdygpLzEwMDA7XG4gICAgICB0aW1lLnB1c2goZW5kIC0gc3RhcnQpO1xuICAgIH1cbiAgICBsZXQgZW5kID0gRGF0ZS5ub3coKS8xMDAwO1xuICAgIGxldCB0b3RhbCA9IHRpbWUucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgIHJldHVybiBwcmV2ICsgbmV4dDtcbiAgICB9LCAwKVxuXG4gICAgdGhpcy5yZXBvcnRlci5faXQucHVzaCh7XG4gICAgICBzdGFydCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZW5kLFxuICAgICAgdG90YWxfY2FsY3VsYXRlZDp0b3RhbCxcbiAgICAgIHRvdGFsOmVuZC1zdGFydFxuICAgIH0pXG4gIH1cblxuICB4aXQoaXRkZXNjcmlwdGlvbiwgZnVuYykge1xuICAgIHRoaXMuaXQoaXRkZXNjcmlwdGlvbiwgZnVuYywgdHJ1ZSk7XG4gIH1cblxuICBhZnRlckVhY2goYWZ0ZXJmdW5jKSB7XG4gICAgdGhpcy5hZnRlcihiZWZvcmVFYWNoZnVuYywgdHJ1ZSk7XG4gIH1cblxuXG4gIGFmdGVyKCkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMubGFzdC5fYWZ0ZXIucHVzaC5hcHBseSh0aGlzLmxhc3QuX2FmdGVyLCBhcmd1bWVudHMpO1xuICB9XG5cblxuICBydW4oKXtcbiAgICBzaG91bGRydW49dHJ1ZTtcbiAgICB0aGlzLnJ1bm5lcigpO1xuICAgIHNob3VsZHJ1bj1mYWxzZTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
