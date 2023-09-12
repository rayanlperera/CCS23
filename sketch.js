function setup() {
  createCanvas(400, 400);
  background(245,95,111,255);
  
  //my head
  ellipseMode(CENTER);
  fill(140,91,63);
  noStroke()
  ellipse(190,190,220,190);

  ellipseMode(CENTER);
  fill(0);
  noStroke();
  arc(190,230,190,150,0,radians(180), PIE);

 //the beanie
  ellipseMode(CENTER);
  fill(219,16,0);
  stroke(0);
  strokeWeight(3);
  arc(190,150,200,200,PI, radians(360));

  line(97,110,281,110);
  line(100,110,100,150);
  line(120,110,120,150);
  line(140,110,140,150);
  line(160,110,160,150);
  line(180,110,180,150);
  line(200,110,200,150);
  line(220,110,220,150);
  line(240,110,240,150);
  line(260,110,260,150);
  line(280,110,280,150);

  //The glasses
  rectMode(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(4);
  rect(140,190,75,50,0,0,20,20);

  line(178,166,210,166);

  rectMode(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(4);
  rect(240,190,75,50,0,0,20,20);
  

  //The mouth
  ellipseMode(CENTER);
  fill(140,91,63);
  noStroke();
  arc(190,250,90,70,0,radians(180), PIE);

  //The Body
  rectMode(CENTER);
  fill(24,30,143);
  noStroke();
  rect(193,500,250,400,15,15,0,0);

  stroke(3);
  line(190,300,190,400);

  //Buttons
  ellipseMode(CENTER);
  fill(0);
  noStroke();
  ellipse(200,306,10,10);
 
  ellipseMode(CENTER);
  fill(0);
  noStroke();
  ellipse(200,326,10,10);

  ellipseMode(CENTER);
  fill(0);
  noStroke();
  ellipse(200,346,10,10);

  ellipseMode(CENTER);
  fill(0);
  noStroke();
  ellipse(200,366,10,10);

  ellipseMode(CENTER);
  fill(0);
  noStroke();
  ellipse(200,386,10,10);

  ellipseMode(CENTER);
  fill(0);
  noStroke();
  ellipse(200,406,10,10);


}

function draw() {
  
}


//Records the coordinates in the console
function mousePressed() {
  console.log(mouseX,mouseY);
}
