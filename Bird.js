class Bird{
  constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':3
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("sprites/ball.png");
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x,this.body.position.y , 2*this.radius, 2*this.radius);
    }
}