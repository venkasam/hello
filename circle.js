class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          "isStatic":false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      Composite.add(composite, this.body);
    }
    fun(){
     if(this.body.position.x>200)
        Composite.remove(composite,this.body)


    }
    hello(row){
      for(i=0;i<row;i++)  {
        this.slant=this.slant-1
      }
      
      
      }
    display(){
      var pos =this.body.position;
      push()
      rectMode(CENTER);
      translate(pos.x, pos.y);
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  