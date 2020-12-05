class Meteorite  {
    constructor(x, y){
    
      var options = {
       // isStatic:true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.r = 50
    World.add(world, this.body);
      this.image = loadImage("images/meteorite.png");
    }
    display(){
      var angle = this.body.angle;
      Matter.Body.setVelocity(this.body,{x:random(-40,-20),y:random(2,20)})
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      pop();
    }
  };