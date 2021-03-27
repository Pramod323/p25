class Paper{
    constructor(x, y, radius){
        var options = {
             'isStatic':false,
             'restitution':0.3,
             'friction':0.5,
             'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius; 

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        p.x = pos.x;
        p.y = pos.y;
        
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        noStroke();
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}