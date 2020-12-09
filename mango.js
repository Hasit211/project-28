class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density:1.2

      }
      this.image = loadImage("mango.png")
      this.body = Bodies.rectangle(x,y,50,20,options);
      this.width = 50;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      Mango.depth = Mango.depth+1
     push ();
      imageMode(CENTER);
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      fill("brown");
      image(this.image,0,0, this.width, this.height);
    pop ();
    }
  };