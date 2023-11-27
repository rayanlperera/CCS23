let port; // object to hold serial port
//let c,s; // buttons
//let xpos = 0; // graph

let confettis = []; //array for the lines


function setup() {
  createCanvas(windowWidth, windowHeight);
  //colors
  colorMode(HSB);
  background(220, 100, 50);
  // create instance of the lib
  port = createSerial();

  // ports can be opened via a dialog after
  // user interaction (see myButton below)
  c = createButton('Connect to Arduino');
  c.position(10, 10);
  c.mousePressed(myButton);

  confettis.push(new Confetti(random(width), 0,));

}

function draw() {
  background(220);
  
  let str = port.readUntil("\n");
  str.trim();
  if (str.length > 0){
    let confettiStroke = str
    confettis.push(new Confetti(random(width), 0 , confettiStroke));
    for (let confetti of confettis) {
    confetti.update();
    confetti.render();

  }
}

 console.log(str);
}

function myButton() {
  if (!port.opened()) {
    port.open('Arduino', 57600);
  } else {
    port.close();
  }
}

class Confetti {
  constructor(x, y, _stroke) {
  this.x = x;
  this.y = y;
  this.speed = random(3,5);
  this.stroke = _stroke;
  
}

update() {
  this.y += this.speed;
}

render() {
  stroke(random(255), random(255), random(255));
  strokeWeight(this.stroke);
  line(this.x, this.y, this.x, this.y + 10);
}
}

  