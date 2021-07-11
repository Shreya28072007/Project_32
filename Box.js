class Box extends Baseclass {
  constructor(x, y, width, height) {

    super(x,y,width,height);
    this.Visiblity=225;
  }
  display(){
   
    fill("blue");
    super.display();
    }
};
