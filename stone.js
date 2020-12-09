class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0.05,
          friction:0.04
      }
      this.image = loadImage("stone.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 30;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };