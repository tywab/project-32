class Ball{
    constructor(x,y,r){
        var option={
            restitution:0.5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,option);
        World.add(world,this.body);
    }

    display(){
        var position=this.body.position;
        var angle=this.body.angle;
        push()
        translate(position.x,position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}