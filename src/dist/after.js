import Base from "./base";



export default class After extends Base{
  constructor(){
    super();
  }

  run(){
    for(var a of this.container){
      var [func]=a;
      func();
    }
  }
}
