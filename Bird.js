class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
   // this.image = loadImage("sprites/bird.png");
    //this.smoke=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
   fill("yellow")
    super.display();
  }
}
