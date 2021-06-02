const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;

var engine, world, ball, ground

function setup() {
  createCanvas(600,600);
engine = Engine.create();
world = engine.world;
var options = {
  isStatic : true
}
ground = Bodies.rectangle(200,390,400,20,options)

World.add(world, ground)

var options = {
  restitution : 2
}
ball = Bodies.circle(200, 100, 20,options)

World.add(world, ball)


}
function draw() {
  background("red");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground. position.y, 400, 20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)

  drawSprites();
}