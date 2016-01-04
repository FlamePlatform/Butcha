import Base from "./base";



export default class Before extends Base{
  constructor(){
    super();
  }

  run(){
    this.start();
    for(var b of this.container){
      var [func]= b;
      func();
    }
    this.end();
  }
}
