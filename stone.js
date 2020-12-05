class Stone {
    constructor(x,y){
      var options = {
        isStatic:true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
      this.image = loadImage("images/stone.png");
      this.body = Bodies.rectangle(x, y, 40, 40, options);
     this.r = 40
      World.add(world, this.body);
    }
  
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0 , 0, 40, 40);
        pop();
      }
      
    }
  