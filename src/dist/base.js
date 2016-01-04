export default class Base{
  constructor(){
    this.container=[];
  }

  get date(){
    return Date.now();
  }

  start(){
    this.start=this.date;
  }

  end(){
    this.end= this.date;
  }

  push(...args){
    this.container.push(args);
  }

  get(index=null){
    try {
      if(index){
        return this.container[index];
      }else{
        return this.container[this.container.length];
      }
    } catch (e) {
      return null;
    } finally {

    }
  }


  get length(){
    return this.container.length;
  }


  print(str){
    console.log(str);
  }
}
