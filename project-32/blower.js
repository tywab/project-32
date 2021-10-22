class Blower{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,option);
        World.add(world,this.body);
    }

    display(){
        var position=this.body.position;
        push();
        translate(position.x,position.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}