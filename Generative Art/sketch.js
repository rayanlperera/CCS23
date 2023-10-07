
let r,g,b;
let s;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  r = 0;
  g = 0;
  b = 0;
  s = 3;


}

function draw() {
  
  fill(r,g,b);
  strokeWeight(s);
  ellipseMode(CENTER);
  ellipse(mouseX,mouseY,40);

}
  
//Press the mouse to clear background
function mousePressed(){
  background(220);  
}

function keyPressed(){
  if(keyCode === 0){
    s = s + 1;
  }

  //Press R to change to red
  if(keyCode === 82){
  if(r === 255){
  r = 0;
  }
  else{
  r = 255;
  }

}  
//Press G to change to green
  if(keyCode === 71){
    if(g === 255){
      g = 0;
    }
    else{
      g = 255;
    }

  }
//Press B to turn it to blue
  if(keyCode === 66){
    if(b === 255){
      b = 0;
    }
    else{
      b = 255;
    }
  }

//Press I to increase stroke weight
  if(keyCode === 73)
    s = s + 1;
  }


  
  






