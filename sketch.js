 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, d1, d2, d3;
var dp, pp;
var d, p;

function preload()
{
	dp = loadImage("dustbin.png");
	pp = loadImage("paper.png");
}

function setup(){
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	d = createSprite(600,240);
	d.addImage(dp); 
	d.scale = 0.2;

	p = createSprite(50,50);
	p.addImage(pp);
	p.scale = 0.3;
	
	//Create the Bodies Here.

	ground = new Ground(400,340,800,20);

	d1 = new Dustbin(596,320,170,20);
	d2 = new Dustbin(555,275,20,90);
    d3 = new Dustbin(638,275,20,90);

	paper = new Paper(90,280,23);
	
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
    rectMode(CENTER);
    background("white");

	//d1.display();
	//d2.display();
	//d3.display();

    ground.display();
	paper.display();
    
    drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position, {x: 80, y: -80});
	}
}