
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var TREE,tree	

function preload() {
	TREE = loadImage("stone.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	tree = createSprite(200,200,20,20)
	tree = addImage(TREE)

	//Create the Bodies Here.
    stoneObj = new stonee(235,420,30);

	Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    background(backgroundImg);
    Engine.update(engine);
	strokeWeight(4);
	
	stoneObj.display();


 drawSprites();
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly()
}
