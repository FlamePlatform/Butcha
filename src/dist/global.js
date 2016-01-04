import Butcha from "./butcha";
var _last = [];
var _global = {

  describe(str, func) {
    var butcha = new Butch();
    _last.push(butcha);
    global.before = butcha.before.bind(this);
    global.it = butcha.it.bind(this);
    global.after = butcha.it.bind(this);
    butcher.describe(str,func);
    _last.run();
  },
}
