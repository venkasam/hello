class Trapezoid{
 constructor(x,y,slant,width,height){
var options={
    'restitution':0.8,
    'friction':0.3,
    'density':1.0,
    "isStatic":false


}

this.body=Bodies.trapezoid(x,y,slant,width,height,options)
this.x=x;
this.y=y;
this.slant=slant;
this.width=width;
this.height=height;
this.options=options;

Composite.add(composite, this.body);
}
hello(row){
  for(i=0;i<row;i++)  {
   this.slant=this.slant-.5
  }
 
  }
  fun(){
    Composite.remove(composite,this.body)
  

  }
display(){
    var pos =this.body.position;
    push()
    rectMode(CENTER);
    translate(pos.x, pos.y);
    fill("red");
    rect(0,0,this.slant, this.width, this.height);
    pop();
  }
}