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
var gameState="onSling";
var bg = "sprites/bg1.png";
var backgroundImg;
var score = 0;
function preload(){
    getBackgroundImg();
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
    ground2=new Ground(100,600,300,400);
    box3=new Box(800,700,50,50);
    box4=new Box(1000,700,50,50);
    pig2=new Pig(900,700);
    

   stick1=new Stick(900,730,300,PI/2);
   stick2=new Stick(900,670,300,PI/2);

   stick3=new Stick(800,640,130,PI/6);
   box5=new Box(900,640,50,50);
   stick4=new Stick(1000,640,130,-PI/6);
   //console.log(stick);
  // stick5=new Stick(250,100,130,-PI);
   chain=new Sling_shot(bird.body,{x:205,y:230});
}

function draw(){

    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
    
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
    box5.display();
    stick4.display();
    pig1.score();
}
function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(bird.body,{x:200,y:220});
        chain.attach(bird.body);
        gameState="onSling";
        bird.trajectory=[];
    }
}

async function getBackgroundImg(){
    var location ="Asia/Tokyo"
    var response = await fetch("https://worldtimeapi.org/api/timezone/"+location);
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
function mouseDragged(){
    if(gameState==="onSling"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

    }
}
function mouseReleased(){
   chain.detached();
   gameState="fly";
}
