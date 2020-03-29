const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var ball;


var ground2, ground3;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(200,250,30);

    box1 = new Box(850,280,30,30);
    box2 = new Box(850,270,30,30);
    box3 = new Box(850,260,30,30);
    box4 = new Box2(910,250,30,30);
    box5 = new Box2(910,240,30,30);
    box6 = new Box2(910,230,30,30);
    box7 = new Box(970,230,30,30);
    box8 = new Box(970,220,30,30);
    box9 = new Box(970,210,30,30);

    

    ground1 = new Ground(200,300,70,10);  
    ground2 = new Ground(600,390,1200,10);  
    ground3 = new Ground(900,300,300,10);
    
    slingShot = new SlingShot(ball.body,{x:200,y:250});   
}
function draw(){
    background(0,0,200);    
    Engine.update(engine); 
    
    slingShot.display();
    ground1.display();
    ground2.display(); 
    ground3.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    box1.display();
    ball.display();       
}
function mouseDragged()    {
     Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY});
}
function mouseReleased()    {
    slingShot.fly();
}