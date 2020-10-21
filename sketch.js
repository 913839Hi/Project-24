
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1;
var bin2;
var bin3;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,620,10);
	
	bin1= new Bin(650,620,100,20,PI/2);
	bin2=new Bin(600,620,20,100,PI/2);
  bin3=new Bin(700,620,20,100,PI/2);
  ground=new Ground(400,660,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body,paper.body.position,{x:3.7,y:-4});
     
   }
 }



