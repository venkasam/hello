const Composite=Matter.Composite;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine=Matter.Engine;
var link=[]
var par=[]
var b=200;


function preload(){


}


function setup() {
createCanvas(90,100)
engine = Engine.create();
composite = engine.Composite;
 hoop3=createSprite(600,100,100,100)


box1=new Box(random(50,1150),random(50,52),50,50)


 
}
function draw() {
  
 
box1.display()
  
if(keyCode===32){


}







  drawSprites();
}

function mouseDragged(){
  
  
  
}


