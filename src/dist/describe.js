import Base from "./base";



export default class Describe extends Base{
  constructor(){
    super();
  }

  run(reporter,f){
    for(var d of this.container){
      var [description,func]= d;
      reporter.description = description;
      func();
      f();
    }
  }

}
