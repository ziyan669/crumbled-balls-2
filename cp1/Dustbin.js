class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':1.5,
          'density':10.5
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("dustbingreen.png")
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
    var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };          