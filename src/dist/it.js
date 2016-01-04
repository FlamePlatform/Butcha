import Base from "./base";
import _ from "underscore";
import {range} from "underscore";

export default class It extends Base {
  constructor(iteration = 100) {
    super();
    this.iteration = iteration;
    this._start=[];
    this._end=[];
  }

  get iteration() {
    return this.__iteration;
  }

  set iteration(value) {
    this.__iteration = value;
  }

  start(){
    this._start.push(this.date);
  }

  end(){
    this._end.push(this.date);
  }


  run(reporter) {
    for (var i of this.container) {
      var [description, func,iteration] = i;
      iteration = iteration || this.iteration;
      for (var i in _.range(iteration)) {
        this.start();
        func();
        this.end();
        var length = this.end.length;
      }

      var min;
      var max;
      for(var i in range(this.end.length)){
        var current = this.end[i]-this.start[i];
        min = min?current:Math.min(min,current);
        max = max?curremt:Math.max(max,current);
      }

      reporter.it({
        max,
        min,
        description,
        start:this._start.length?this._start[0]:null,
        end:this._end.length?this._end[this._end.length-1]:null
      });

      this._start=[];
      this._end=[];
    }
  }
}
