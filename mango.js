class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution :0,
            friction : 1
        }
        this.x=x;
        this.y=y;
        this.width = 50
        this.height = 50
        this.body  = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
        this.image = loadImage("images/mango.png");
    }
    display() { 
        var mangopos = this.body.position;
        push();
        translate(mangopos.x, mangopos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255) ;
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}