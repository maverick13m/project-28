
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var boy,boyImg;
var ground,backgroundImg;
var tree,treeImg;
var stone,launcherObj;
var randomX,randomY




function preload() {
	boyImg = loadImage("images/boy.png")
	treeImg = loadImage("images/tree.png")
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;
	
    ground = new Ground(600,590,10,1000)
	
    stone = new Stone(235,420,30);












    launcher = new Launcher(stone.body,{x:155,y:450})

	Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background("cyan");
    Engine.update(engine);
	strokeWeight(4);
	image(treeImg,600,200,200,200)
	image(boyImg,300,230,300,370)
	boyImg.scale = 0.5

	ground.display();
	stone.display();




    launcher.display()

	//detectCollision(stone,mango1)
   // detectCollision(stone,mango2)
	//detectCollision(stone,mango3)
	//detectCollision(stone,mango4)
	//detectCollision(stone,mango5)
	//detectCollision(stone,mango6)
	//detectCollision(stone,mango7)
	//detectCollision(stone,mango8)
	//detectCollision(stone,mango9)
	//detectCollision(stone,mango10)
//	detectCollision(stone,mango11);

    text(mouseX+","+ mouseY,mouseX,mouseY); 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(Lstone,Lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if (distance<=lmango.r+lstone.r) {
	    MATTER.Body.setStatic(lmango.body,false)	
	}

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:155,y:450});
		launcher.attach(stone.body);
		
	}
}