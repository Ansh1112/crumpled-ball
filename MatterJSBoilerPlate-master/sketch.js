
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);
	Dustbin = new dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Dustbin.display()
  paper.display()
  ground.display()
  
  
 
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


