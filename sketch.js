const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var balls = []

function preload() {
 bgImg=loadImage("assets/background.gif");
 towerImg=loadImage("assets/tower.png");

}
function setup() {

 createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 var prop = {
   isStatic: true
 }

 tower=Bodies.rectangle(150, 350, 150, 310, prop)
 World.add(world, tower);

 cannon=new Cannon(160, 110, 130, 100, 56)
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  push()
  imageMode(CENTER)
  image(towerImg, tower.position.x, tower.position.y, 150, 310);
  pop();
  
  //rect(x,y,w,h)
  //image(name,x,y,w,h)
  cannon.display(); 
  for(var i = 0; i < balls.length; i++){
    balls[i].display()
  }
}

function keyPressed(){
  if(keyCode===32){
    ball=new Ball(cannon.x, cannon.y, 30);
    balls.push(ball)
  }
}


function keyReleased(){
  if(keyCode===32){
    balls[balls.length - 1].shoot();
  }
}