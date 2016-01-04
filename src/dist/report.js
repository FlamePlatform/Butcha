import {
  range
}
from "underscore";
import 'colors';

var List=[];
export default class Report {

  constructor() {
    this._it = [];
    this.children=[];
  }

  add(reporter) {
    this.children.push(reporter);
  }

  get length() {
    return this.children.length;
  }

  it(data) {
    this._it.push(data);
  }

  static getReporter(){
    var r = new Report();
    List.push(r);
    return r;
  }

  done(){
     List.splice(List.indexOf(this),1);
  }


  static get last(){
    try {
      return List[List.length-2];
    } catch (e) {
      return null;
    }
  }

  get last(){
    return Report.last;
  }

  get level(){
    var parent =this;
    let _=1;
    while(parent.parent){
      _++;
      parent= parent.parent;
    }
    return _
  }

  get spacing(){
    var space="";
    for (var i of range(this.level)) {
      space += "  ";
    }
    return space;
  }


  print(){
    let str;
    str = `\n${this.spacing}${this.description} (${this.description_time} ms)`;
    console.log(str);

    for(var it of this._it){
      str=`${this.spacing}${this.spacing}${it.description} (${it.total}) ms`
      console.log(str.green);
    }

    for (let report of this.children) {
        report.print();
    }

  }


  get textPrint() {
    let space = this.spacing;
    var str = "";
    if(this._it.length)
    str = `${str}${space}${this.description} (${this.description_time} ms)\n`;
    for(var it of this._it){
      str=`${str}${space}${space}${it.description} (${it.total}) ms\n`
    }

    for (let report of this.children) {
      let result = report.textPrint.split('\n').map(x=>`${space}${x}`).join('\n')
      str=`${str}
${result}`
    }

    return str;
  }
}
