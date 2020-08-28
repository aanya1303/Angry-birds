const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var bird;
var pig1,pig2;
var stick,stick5;
var chain;
var ground2;
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    
}
function mouseReleased(){
   chain.detached();
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,790,1200,20);
    box1=new Box(800,760,50,50);
    box2=new Box(1000,760,50,50);
    bird=new Bird(205,230,50,50);
    pig1=new Pig(900,760);
    ground2=new Ground(200,600,400,400);
    box3=new Box(800,700,50,50);
    box4=new Box(1000,700,50,50);
    pig2=new Pig(900,700);
    
    
   stick1=new Stick(900,730,400,PI/2);
   stick2=new Stick(900,670,400,PI/2);

   stick3=new Stick(800,640,130,PI/6);
   box5=new Box(900,640,50,50);
   stick4=new Stick(1000,640,130,-PI/6);
   //console.log(stick);
  // stick5=new Stick(250,100,130,-PI);
   chain=new Sling_shot(bird.body,{x:205,y:230});
}

function draw(){
    background(255);
    Engine.update(engine);

    //console.log(box2.body.angle)
    
    ground.display();
    bird.display();
    box1.display();
    box2.display();
    pig1.display();
    stick1.display();
    box3.display();
    box4.display();
    //stick5.display();
    pig2.display();
    chain.display();
    stick2.display();
    ground2.display();
    stick3.display(); 
    box5.display()
    stick4.display()
}
