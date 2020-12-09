
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	boyImage = loadImage("boy.png")

}

function setup() {
	createCanvas(2000, 800);


	engine = Engine.create();
	world = engine.world;
ground = new Ground(width/2,790,800,20)

mango1 = new Mango(920,250)
mango2 = new Mango(1000,150)
mango3 = new Mango(900,150)
mango4 = new Mango(1060,230)
stone = new Stone(68,350)
sling = new SlingShot(stone.body,{x:85,y:445})
	//Create the Bodies Here.

   tree = new Tree (1000,340)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  stone.display();
  sling.display();
image(boyImage,100,400,200,300)
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();

}

function keyPressed(){
    if(keyCode === 32 ){
       slingshot.attach(stone .body);
       Matter.Body.setPosition(stone .body, {x: 200 , y: 50});
       //bird.trajectory =[];
       //gameState =" onSling " 
    }
}
function detectcollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition=lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
 Matter.Body.setStatic(lmango.body,false)
}
}

