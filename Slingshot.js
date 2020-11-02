class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Launcher = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.Launcher);
    }
    display(){
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    fly(){
        this.Launcher.bodyA = null
    }
    attach(body){
        this.Launcher.bodyA = body;
    }
}
