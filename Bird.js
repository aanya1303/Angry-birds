class Bird{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:1.0,
            friction:0.3
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}