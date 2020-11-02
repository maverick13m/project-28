class Stone {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }; 
        this.x=x;
        this.y=y;
        this.width = 50;
        this.height = 50 
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world, this.body);
        this.image = loadImage("images/stone.png")
    };
    display() { 
        var stonepos = this.body.position;
        push();
        translate(stonepos.x, stonepos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255) ;
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}