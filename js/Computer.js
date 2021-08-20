class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "lime"

    this.life2 = "lime"
    
    this.life3 = "lime"

    World.add(world, this.body);
  }

  life(){
    push()
    textSize(20)
    fill("white")
    text("Computer", 1080,40)
    
    
    fill(this.life1)
    rect(1120,50,70,30)
    fill(this.life2)
    rect(1050, 50, 70, 30)
    fill(this.life3)
    rect(980,50,70,30)
    pop()
  }
  reduceLife(){
    if(computerLife === 2){
      this.life1 = "red"
    }
    if(computerLife === 1){
      this.life2 = "red"
    }
    if(computerLife === 0)
      this.life3 = "red"
    
    }
     
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
