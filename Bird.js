class Bird extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image=loadImage("sprites/bird.png")
    }
    display(){
        super.display();
       // var pos=this.body.position;
       // pos.x=mouseX;
        //pos.y=mouseY;
        
    }
}