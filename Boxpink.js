class Boxpink extends Baseclass{
    constructor(x, y, width, height) {
      super(x,y,width,height);
    }
    display(){
  
      if((this.body.speed)<4){
        fill("pink");
        super.display();
        }
        else{
          World.remove(world,this.body);
        }
      
    }
  };
  