class Sling_shot{
    constructor(obj1,obj2){
    var options={
        bodyA:obj1,
        pointB:obj2,
        stiffness:0.01,
        length:10
    }
    this.sling1=loadImage("sprites/sling1.png");
    this.sling2=loadImage("sprites/sling2.png");
    this.sling3=loadImage("sprites/sling3.png");
    this.chain=Matter.Constraint.create(options);
    World.add(world,this.chain);
}
display(){
    image(this.sling1,200,210);
    image(this.sling2,175,210);
    if(this.chain.bodyA){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.pointB;
    push();
    stroke(48,22,8);
    if(pointA.x<220){
        strokeWeight(7);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.sling3,pointA.x-30,pointA.y-10,15,30);

    }
    else{
        strokeWeight(4);
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.sling3,pointA.x+25,pointA.y-10,15,30);  
    }
    pop();
    }
}
detached(){
    this.chain.bodyA=null;
}
attach(body){
   this.chain.bodyA=body;
}
}

