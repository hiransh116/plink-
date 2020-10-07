const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division;
var divisionHeight=300;
var particle=[];
var divisions=[];
var plinko=[];

function setup() {
  createCanvas(490,800);
  engine = Engine.create();
  world = engine.world;
  
  //making things
  ground=new Ground(245,790,490,20);
 // division=new Ground(10,655,10,250);
  for (var k=0;k<=width;k=k+80){
    divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
  }
  for (var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for (var a=15;a<=width-10;a=a+50){
    plinko.push(new Plinko(j,175));
  }
 
  

}


function draw() {
  background(0);  
  ground.display();
  //division.display();
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for (var j=40;k<plinko.length;j++){
    plinko[j].display();
  }
 
  for(var a=15;a<plinko.length;a++){
    plinko[a].display();
  }
  drawSprites();
}

