const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var options={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,options);
  World.add(world,ball);
   var option1={
     isStatic:true

   }
   ground=Bodies.rectangle(200,390,200,20,option1);
   World.add(world,ground);

  
}

function draw() {
  background('black') ;
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,400,20);
  rect(ball.position.x,ball.position.y,20,20);
  drawSprites();
}