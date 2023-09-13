function setup() {
  createCanvas(400, 400);
  background(196,179,87);

  //TABLE
  fill(63,83,121);
  triangle(110,400,400,310,400,400);
  
  fill(195,194,203);
  beginShape();
  vertex (108,400);
  vertex (0,400);
  vertex (0,240);
  vertex (350,190);
  vertex (400,220);
  vertex (400,310);
  endShape(CLOSE);

  //APPLES
  ellipseMode(CENTER);
  fill(158,85,50);
  noStroke();
  ellipse(60,230,50,50);

  ellipseMode(CENTER);
  fill(158,85,50);
  noStroke();
  ellipse(20,330,50,50);

 // BLACK CYLINDRICAL KETTLE
 
 noFill();
 stroke(0);
 strokeWeight(10);
 bezier(175,222,163,222,169,202,154,198);
 
 ellipseMode(CENTER);
 angleMode(DEGREES);
 fill(0);
 noStroke();
 ellipse(200,222,50,60);

 rectMode(CENTER);
 fill(0);
 noStroke();
 rect(200,195,30,100);

 triangle(186,146,214,146,200,123);

 rectMode(CENTER);
 noFill();
 stroke(0);
 strokeWeight(2);
 rect(220,174,30,40);

 ellipseMode(CENTER);
 angleMode(DEGREES);
 noFill();
 stroke(0);
 strokeWeight(2);
 arc(220,226,30,30,270,90);

 
 


 
  //PLAID PITCHER

  ellipseMode(CENTER);
  angleMode(DEGREES);
  noFill();
  stroke(255);
  strokeWeight(3);
  arc(161,206,30,30,270,90);
 
  rectMode(CENTER);
  fill(255);
  rect(140,225,49,60,0,0,15,15);
 
  // squares on the pitcher (first row)
  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(115,199.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(130,199.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(145,199.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(160,199.6,5,10);

  //second row
  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(122,208.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(137,208.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(152,208.6,10,10);
  
  //third row
  
  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(115,217.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(130,217.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(145,217.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(160,217.6,5,10);
  
  //fourth row

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(122,226.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(137,226.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(152,226.6,10,10);

  //fifth row

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(115,235.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(130,235.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(145,235.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(160,235.6,5,10);

  //sixth row
  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(122,244.6,10,10,0,0,0,15);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(137,244.6,10,10);

  rectMode(CORNER);
  fill(68,98,139);
  noStroke();
  rect(152,244.6,10,10,0,0,15,0);
  
  
  
  ellipseMode(CENTER);
  fill(255);
  stroke(255);
  ellipse(140,195,50,20);
  
  triangle(115,196,115,206,105,196);

  
 
 
 
 
 
  //the right black cup
  
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  fill(5,12,100);
  arc(80,280,60,40,0,180);
 
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noFill();
  stroke(5,12,22);
  strokeWeight(3);
  arc(61.5,275,10,10,90,270);



  ellipseMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  fill(5,12,22);
  arc(80,270,40,40,0,180);

  ellipseMode(CENTER);
  fill(255);
  stroke(171,127,88);
  strokeWeight(3);
  ellipse(80,270,40,10);

  
  //BLACK CYLINDRICAL KETTLE (spout)

  noFill();
  stroke(0);
  strokeWeight(10);
  bezier(175,222,163,222,169,202,154,198);


  //THE LEMONS

  ellipseMode(CENTER);
  fill(229,196,70);
  stroke(166,131,61);
  strokeWeight(2);
  ellipse(180,250,30,30);
  ellipse(209,255,30,30);
  ellipse(186,257,30,30);

 
  //BIG PITCHER

  ellipseMode(CENTER);
  angleMode(DEGREES);
  noFill();
  stroke(92,60,34);
  strokeWeight(5);
  arc(340,173,50,50,270,90);

  ellipseMode(CENTER);
  fill(255);
  noStroke();
  ellipse(303,182,85,110);
 
  fill(5,12,18)
  ellipse(303,165,90,75);

  ellipseMode(CENTER);
  fill(255);
  stroke(167,135,94);
  strokeWeight(2);
  ellipse(302,138,60,20);

  //CUP IN GOLD PLATE

  ellipseMode(CENTER);
  angleMode(DEGREES);
  fill(172,103,62);
  arc(281,225,90,30,0,180);

  noFill();
  stroke(148,125,107);
  arc(295,215,20,20,270,90);

  fill(255);
  noStroke();
  arc(278,213,40,40,0,180);

  ellipseMode(CENTER);
  angleMode(DEGREES);
  fill(255);
  stroke(68,20,24);
  strokeWeight(5);
  ellipse(278,207,40,20);

  




}

function draw() {
}

function mousePressed(){
  console.log(mouseX,mouseY);
  console.log("penis");
}