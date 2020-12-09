class Tree{
    constructor(x, y,width,height){
        var options = {
            isStatic: true,
            density:0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world, this.body);
      this.image = loadImage("tree.png");
    }
  
   display(){
     //console.log(this.body.speed);
Tree.depth = tree.depth-1
      imageMode(CENTER)
      image(this.image, this.body.position.x, this.body.position.y, 500, 500);

     
   }
}