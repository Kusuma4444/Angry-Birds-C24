const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

//variables for game
var engine,world
var ball,ground
var box1,box2,box3,box4,box5
var log1,log2,log3,log4
var bird
var pig1,pig2

function setup() {
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world

  ground=new Ground(600,400,1200,20);
 
 box1=new Box(700,350,50,50)
 pig1=new Pig(800,350)
 box2=new Box(900,350,50,50)

 log1=new Log(800,310,250,PI/2)

 box3=new Box(700,270,50,50)
 pig2=new Pig(800,270)
 box4=new Box(900,270,50,50)

 log2=new Log(800,230,250,PI/2)

 box5=new Box(800,190,50,50)
 
 log3=new Log(750,170,150,PI/5)
 log4=new Log(850,170,150,-PI/5)

 bird=new Bird(15,10)

}


function draw() {
  background(0);  

  Engine.update(engine);

 ground.display();
 box1.display();
 pig1.display();
 box2.display();
 log1.display();

 box3.display();
 pig2.display();
 box4.display();
 log2.display();

 box5.display();
 log3.display();
 log4.display();
  
 bird.display();
}