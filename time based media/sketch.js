//building an hourglass

let sandball;
let hourglass;
let x;
let y;
let sandblockheight1;
let sandblockheight2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 750;
  y = 200;
  sandblockheight1 = 105;
  sandblockheight2 = 190;
  setInterval(movingSand, 1000); //pushes the moving sand function every one second

}

function draw() {
  background(226,72,247);
  sandblock1();
  sandblock2();
  myHourglass();
  
  noStroke(); // sand drop
  fill(255,231,41)
  ellipse(x,y,30);
  
  if(y == 270){ //after one second
    rectMode(CORNERS);
    noStroke();
    fill(226,72,247,200);
    rect(605,105,895,143);

    rectMode(CORNERS);
    noStroke();
    fill(255,231,41,200);
    rect(605,557,895,595);

  }

  if(y == 340){ // after two seconds
    rectMode(CORNERS);
    noStroke();
    fill(226,72,247,200);
    rect(605,105,895,181);

    rectMode(CORNERS);
    noStroke();
    fill(255,231,41,200);
    rect(605,519,895,595);


  }

  if (y == 410){ // after three seconds
    rectMode(CORNERS);
    noStroke();
    fill(226,72,247,200);
    rect(605,105,895,219);

    rectMode(CORNERS);
    noStroke();
    fill(255,231,41,200);
    rect(605,481,895,595);

  }

  if (y == 480){ // after four seconds
    rectMode(CORNERS);
    noStroke();
    fill(226,72,247,200);
    rect(605,105,895,257);

    rectMode(CORNERS);
    noStroke();
    fill(255,231,41,200);
    rect(605,443,895,595);
  }

  if (y == 550){ // after 5 seconds
    rectMode(CORNERS);
    noStroke();
    fill(226,72,247,200);
    rect(605,105,895,295);

    rectMode(CORNERS);
    noStroke();
    fill(255,231,41,200);
    rect(605,405,895,595);
  }


}

console.log(sandblockheight1);
  


function mousePressed(){
  console.log(mouseX, mouseY);
}




function myHourglass(){ // creating the frame for the hourglass
  noFill();
  stroke(71,62,214);
  strokeWeight(10);
  beginShape();
  vertex (600,100);
  vertex (900,100);
  vertex (900,300);
  vertex (800,300);
  vertex (800,400);
  vertex (900,400);
  vertex (900,600);
  vertex (600,600);
  vertex (600,400);
  vertex (700,400);
  vertex (700,300);
  vertex (600,300);
  vertex (600,100);
  endShape();
}




function sandblock1(){ //top sandblock
  rectMode(CORNERS);
  noStroke();
  fill(255,231,41,200);
  rect(605,sandblockheight1,895,295);

 

  
}

function sandblock2(){ //bottom sandblock
    rectMode(CORNERS);
    noStroke();
    fill(226,72,247,200);
    rect(605,405,895,557);

}

function movingSand(){ //triggers the motion of the sand drop
  //noStroke();
  //fill(255,231,41)
  //ellipse(x,y,30);
  y = y + 70;

  if(y >= 600){ //brings the sand drop back to the top after 5 seconds
    y=200;
  }
  
  }

  /*class Sand{  //this was me experimenting to see if a class could work with setInterval()

    constructor(){
      this.x = 750;
      this.y = 200;
      this.r = 255;
      this.g = 231;
      this.b = 41;
      this.yDir = 4;
      this.size = 10;
      
    }
  
    render(){
      noStroke();
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.size);
      console.log(this.x);
    }
    
    
    update(){
      this.y = this.y + this.yDir;
    }
  
    checkBorders(){
      if(this.y >= 890){
        this.y = 200;
      }
  
    }*/
  
  
function sandblockreduce(){ //tried to use a for loop mixed with an if statement to make it reduce
  for(i=105; i<12; i-16){
    if(y>= 600){
      rectMode(CORNERS);
      noStroke();
      fill(255,231,41,200);
      rect(605,i,895,295);
    
    
    }
  }
}

