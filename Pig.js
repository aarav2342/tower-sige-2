class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    //this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
  // console.log(this.body.speed);
   fill("lightgreen");
   if (this.body.speed<5){
    super.display();
     }
    else{
      World.remove(world,this.body)
    }
 }



};