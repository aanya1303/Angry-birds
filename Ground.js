class Ground{
    constructor(){
        var ground_options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(600,790,1200,20,ground_options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,400,20);
    }
}