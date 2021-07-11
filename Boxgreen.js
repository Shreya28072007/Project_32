class Boxgreen extends Baseclass {
    constructor(x, y, width, height) {
      super(x,y,width,height);
    }
    display(){
      if((this.body.speed)<3){
        fill("green");
        super.display();
        }
        else{
          World.remove(world,this.body);
        }
      
    }
  };
  