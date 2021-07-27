const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
 
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	// ball is created below for you which is circular body and x and y positions are given along with radius 
	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);

	// create the ground object below along with leftside which is given in hints
	// rightside is created below 
	leftSide = new ground(1100,642,20,120)
	rightSide = new ground(1350,642,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  // this is to display the ball
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
  rightSide.display();
  leftSide.display();
  groundObj.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		Body.applyForce(ball,ball.position,{x:85,y:-85});
  	}
}
