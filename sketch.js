const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;
var bird;
var pig1,pig2;
var stick;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground();
    box1=new Box(200,200,50,50);
    box2=new Box(230,100,30,80);
    bird=new Bird(100,100,30,30);
    pig1=new Pig(200,200,20,20);
    pig2=new Pig(150,150,20,20);
    stick=new Stick(740,740,20,100,PI);
   
}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box2.body.angle)
    
    ground.display();
    bird.display();
    box1.display();
    box2.display();
    pig1.display();
    pig2.display();
    stick.display();
}