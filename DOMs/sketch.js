let balls = []; 
let myButton;
let newButton

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  myButton = createButton("Push for more");
  
  myButton.position(width/2-myButton.width/2, height/2 - myButton.height/2);
  myButton.mousePressed(moreBalls);

  newButton = createButton("Push for less");

  newButton.position(725,400);
  newButton.mousePressed(lessBalls);
  
  for (let i = 0; i < 3; i++){
    balls[i] = new Ball();
  }

}

function draw() {
  background(220,10);
  
  
  for(let i= 0; i < balls.length; i++){
    balls[i].render();
    balls[i].update();
    balls[i].checkWalls();

  }
 
//console.log(mouseX,mouseY)

  }



function moreBalls(){
  balls.push(new Ball());
  console.log(balls);
}

function lessBalls(){
  balls.pop();
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
