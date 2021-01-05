class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var posy =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(posy.x, posy.y, this.width, this.height);
    }
  };