'use strict';
import Date from "microtime";
// import Describe from "./describe";
// import Before from "./before";
// import It from "./it";
// import After from "./after";
import {
  inspect
}
from "util";
import {
  range
}
from "underscore";
import Reporter from "./report";


var index = 1;
const ButchaList = [];
let position = 0;

let shouldrun=false;
export default class Butcha {

  constructor() {

  }

  describe(description, func) {
    var self =this;
    this.runner = function(){
      let reporter = Reporter.getReporter();
      let parent = Reporter.last;
      if(parent){
        reporter.parent=parent;
        parent.children = parent.children||[];
        parent.children.push(reporter);
      }

      this.reporter = reporter;
      reporter.description = description;
      reporter.description_start = Date.now()/1000;
      func();
      reporter.description_end = Date.now()/1000;
      reporter.description_time = reporter.description_end - reporter.description_start;
      reporter.done();
    }.bind(this);
    if(shouldrun){
      this.run();
    }
  }

  before(beforefunc) {
    let {
      reporter
    } = this;
    reporter.before_start = Date.now()/1000;
    beforefunc();
    reporter.before_end = Date.now()/1000;
    reporter.before_time = reporter.before_end - reporter.before_start;
  }

  beforeEach(beforeEachfunc) {
    this.before(beforeEachfunc, true);
  }

  it(description, func, iteration) {
    var time = [];
    let start = Date.now()/1000;
    for (var i in range(iteration)) {
      let start = Date.now()/1000;
      func();
      let end = Date.now()/1000;
      time.push(end - start);
    }
    let end = Date.now()/1000;
    let total = time.reduce(function(prev, next) {
      return prev + next;
    }, 0)

    this.reporter._it.push({
      start,
      description,
      end,
      total_calculated:total,
      total:end-start
    })
  }

  xit(itdescription, func) {
    this.it(itdescription, func, true);
  }

  afterEach(afterfunc) {
    this.after(beforeEachfunc, true);
  }


  after() {
    debugger;
    this.last._after.push.apply(this.last._after, arguments);
  }


  run(){
    shouldrun=true;
    this.runner();
    shouldrun=false;
  }

}
