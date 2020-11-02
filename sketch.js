
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
	
    ground = new Ground(600,590,1200,30)
	
    stone = new Stone(235,400,50);

	
	mango1 = new Mango(610,320)
	mango2 = new Mango(620,290)
	mango3 = new Mango(620,340)
	mango4 = new Mango(640,280)
	mango5 = new Mango(600,330)
	mango6 = new Mango(640,430)
	mango7 = new Mango(620,330)
	mango8 = new Mango(620,330)
	mango9 = new Mango(620,330)
	mango10 = new Mango(620,330)
	mango11 = new Mango(620,330)
	mango12 = new Mango(620,330)
	mango13 = new Mango(620,330)
	mango14 = new Mango(620,330)
	mango15 = new Mango(620,330)
	mango16 = new Mango(620,330)
	mango17 = new Mango(620,330)
	mango18 = new Mango(620,330)
	mango19 = new Mango(620,330)
	mango20 = new Mango(620,330)
	mango21 = new Mango(620,330)

	
	







    launcher = new Launcher(stone.body,{x:155,y:430})

	Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background("cyan");
    Engine.update(engine);
	strokeWeight(4);

	image(treeImg,600,150,450,450)
	
	image(boyImg,100,380,200,240)
	

	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();
	mango17.display();
	mango18.display();
	mango19.display();
	mango20.display();
	mango21.display();





    launcher.display()

	detectCollision(stone,mango1)
    detectCollision(stone,mango2)
	detectCollision(stone,mango3)
	detectCollision(stone,mango4)
	detectCollision(stone,mango5)
	detectCollision(stone,mango6)
	detectCollision(stone,mango7)
	detectCollision(stone,mango8)
	detectCollision(stone,mango9)
	detectCollision(stone,mango10)
	detectCollision(stone,mango11)
	detectCollision(stone,mango12)
	detectCollision(stone,mango13)
	detectCollision(stone,mango14)
	detectCollision(stone,mango15)
	detectCollision(stone,mango16)
	detectCollision(stone,mango17)
	detectCollision(stone,mango18)
	detectCollision(stone,mango19)
	detectCollision(stone,mango20)
	detectCollision(stone,mango21)


    text(mouseX+","+ mouseY,mouseX,mouseY); 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}
function detectCollision(objStone,objMango) {
	var pointA = objStone.body.position
	var pointB = objMango.body.position

	var distance = dist(pointA.x,pointA.y, pointB.x,pointB.y)
    if (distance<=objMango.width/2+objStone.width/2) {
	    Matter.Body.setStatic(objMango.body,false)	
	}

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:155,y:450});
		launcher.attach(stone.body);
		
	}
}