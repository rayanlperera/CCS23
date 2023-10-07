let myBall1, myBall2, myBall3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  myBall1 = new Ball();
  myBall2 = new Ball();
  myBall3 = new Ball();
}

function draw() {
  background(220);
  
  myBall1.render();
  myBall1.update();
  myBall1.checkWalls();

  myBall2.render();
  myBall2.update();
  myBall2.checkWalls();

  myBall3.render();
  myBall3.update();
  myBall3.checkWalls();
}

class Ball{
  constructor(){ //builds the ball
    this.color = color(random(255),random(255),random(255)); 
    this.x = random(width);
    this.y = random(height);
    this.xDir = random(-5,5);
    this.yDir = random(-5,5);
    this.size = random(20,100);
    


  }

  render(){ //makes it appear on the screen
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
  
  update(){ //makes the balls move on the screen
    this.x = this.x + this.xDir;
    this.y = this.y + this.yDir;
  }

  checkWalls(){ //makes the balls bounce off the wall
    if(this.x >= width || this.x <= 0){
      this.xDir = this.xDir * -1;
    }
    if(this.y >= height || this.y <=0){
      this.yDir = this.yDir * -1;
    }

  }
  






}