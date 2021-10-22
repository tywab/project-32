const Engine = Matter.Engine; 
const Render = Matter.Render;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball,blower,blowerMouth,cb;
var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Matter.Engine.create();
  world=engine.world

  ball=new Ball(475,180,20)
  blower=new Blower(400,230,100,20);
  blowerMouth=new BlowerMouth(475,220,50,50);

  button = createButton("Click to Blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);
  


}

function draw() {
  background(255,255,255); 
  Engine.update(engine);


  blower.display();
  blowerMouth.display();
  ball.display();

  
  
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0, y:0},{x:0,y:0.01})
}