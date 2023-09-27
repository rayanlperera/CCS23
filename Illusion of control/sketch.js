
let pointAX,pointBX,pointCX,pointDX,pointEX;
let pointAY, pointBY, pointCY,pointDY,pointEY;
let amt = 0.0001;
let pistol = .001

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 
  
  //All the different points involved
  
  pointAY = (0, height/2);
  pointAX = (0, width/2);
  pointCX = (0);
  pointCY = (height/2);
  pointDX = (width);
  pointDY = (height/2);
  pointEX = (0);
  pointEY = (height/2)
  
  

  strokeWeight(25);
}

function draw() {
  
  
  background(220);
  
  
  
  //slingshot pullback
  point(pointAX, pointAY);
  pointBX = lerp(pointAX, pointCX, amt);
  pointBY = lerp(pointAY,pointCY,amt);
  if(pointBX%10 == 0){
  point(pointBX, pointBY);
  }
  point(pointBX, pointBY);
  point(pointCX, pointCY);
  point(pointDX,pointDY);
  amt*=1.01;
  if (amt >= 10) amt=0;
  
  
  

  //Second point travelling across to mimic the return
  if (pointBX <= 0){
    stroke(0,0,255);
    pointEX = lerp(pointCX, pointDX, pistol)
    pointEY = lerp(pointCY, pointDY, pistol)
    point(pointEX,pointEY);
    pistol*=1.05;
    if(pistol >= 5) pistol=0; 
    
  }

  //change in color when it passes the middle of the screen
  if(pointEX >= width/2){
    
    stroke(204,145,105);
    

  }

  
  
}
