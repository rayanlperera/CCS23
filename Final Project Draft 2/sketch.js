

let vid;
let bg;
//let cam;
let plants = [];
let xSlider, ySlider, zSlider;
let wSlider, hSlider, dSlider;
let rotXSlider, rotYSlider, rotZSlider;
let seed;
let shapePicker;

function  preload(){ //loads in the video
  vid = createVideo('Videos/daffyduck.mp4'); 
  vid.hideControls();
  bg = loadImage('Images/garden image.jpg');

}



function setup() {
  createCanvas(800, 600, WEBGL);
  normalMaterial();
  debugMode();
  //creates camera
  
  //make it orthographic
  
     
  
  //hides the video
  vid.hide();
  
  //x position
  xSlider = createSlider(-100, 100, 0);
  xSlider.position (810, 10);
  xSlider.size(200);
  
  //y position
  ySlider = createSlider(0,100, 0);
  ySlider.position (810, 50);
  ySlider.size(200);

  //z position
  zSlider = createSlider(-100,100,0);
  zSlider.position (810, 90);
  zSlider.size(200);

  //the width of the shape
  wSlider = createSlider(0,200,10);
  wSlider.position(810, 130);
  wSlider.size(200);

  //height of the shape
  hSlider = createSlider(0, 200, 10);
  hSlider.position(810,170);
  hSlider.size(200);

  //depth of the shape
  dSlider = createSlider(0, 100, 10);
  dSlider.position(810,210);
  dSlider.size(200);

  //rotation on the x- axis
  rotXSlider = createSlider(0,360, 0);
  rotXSlider.position(810,250);
  rotXSlider.size(200);

  //rotation on the y-axis  
  rotYSlider = createSlider(0, 360, 0);
  rotYSlider.position(810,290);
  rotYSlider.size(200);

  //rotation on the z-axis
  rotZSlider = createSlider(0,360,0);
  rotZSlider.position(810,330);
  rotYSlider.size(200);
 
  shapePicker = createSelect();
  shapePicker.position(1100, 10);
  shapePicker.option('Cube');
  shapePicker.option('Cone');
  shapePicker.option('Plane');
  shapePicker.option('Sphere');
  shapePicker.option('Cylinder');
  shapePicker.option('Ellipsoid');
  shapePicker.option('Torus');
  

  //console.log(cam.position);
  
  //button to add a new shape
  seed = createButton("Grow a Plant");
  seed.position(1000, 10);
  seed.mouseClicked(Sunlight); 
  
  for(let i = 0; i < 0 ; i++){
    plants[i] = new Plant();
  }
  

}

function draw() {
  background(220);
  
  //Do Orbit Controls still work with a camera in a fixed position?
  //answer is yes they do work, question is... is it necessary?
  orbitControl();
  angleMode(DEGREES);
 
  texture(bg);
  push();
  angleMode(DEGREES);

  rotateX(90);
  plane(500,500);
  pop();
  
  
  // plant render, the class works!, time to make a for loop
  for(i = 0; i < plants.length; i++){
  plants[i].render();
 
}

  

//Test code to see if it works
  /* 
  push();
  translate(0, 0 , 0)
  box(200);
  pop();
*/



}

function Sunlight(){ // "Grow A Plant" calls from this function
  let shapeType = shapePicker.value();
  plants.push(new Plant(shapeType));

}



function mousePressed (){ // pressing the mouse anywhere plays the video on loop
  vid.loop();

}

class Plant{ //class to generate a cube

constructor(shapeType){
  this.x = xSlider.value();
  this.y = ySlider.value();
  this.z = zSlider.value();
  this.width = wSlider.value();
  this.height = hSlider.value(); 
  this.depth = dSlider.value();
  this.rotX = rotXSlider.value();
  this.rotY = rotXSlider.value();
  this.rotZ = rotZSlider.value();
  this.shape = shapeType;
  this.texture = vid;

}

render(){
  push();
  
  if (this.shape == 'Cube'){
  texture(this.texture);
  translate(xSlider.value(), ySlider.value(),zSlider.value());
  rotateX(rotXSlider.value());
  rotateY(rotYSlider.value());
  rotateZ(rotZSlider.value());
  box(wSlider.value(), hSlider.value(), dSlider.value());
  
  }
  
  if(this.shape == 'Cone'){
  texture(this.texture);
  translate(xSlider.value(), ySlider.value(),zSlider.value());
  rotateX(rotXSlider.value());
  rotateY(rotYSlider.value());
  rotateZ(rotZSlider.value());
  cone(wSlider.value(), hSlider.value());

  }

  if(this.shape == 'Plane'){
  texture(this.texture);
  translate(xSlider.value(), ySlider.value(),zSlider.value());
  rotateX(rotXSlider.value());
  rotateY(rotYSlider.value());
  rotateZ(rotZSlider.value());
  plane(wSlider.value(), hSlider.value());
  }

  if(this.shape =='Sphere'){
    texture(this.texture);
    translate(xSlider.value(), ySlider.value(),zSlider.value());
    rotateX(rotXSlider.value());
    rotateY(rotYSlider.value());
    rotateZ(rotZSlider.value());
    sphere(wSlider.value());
  }

  if(this.shape =='Cylinder'){
    texture(this.texture);
    translate(xSlider.value(), ySlider.value(),zSlider.value());
    rotateX(rotXSlider.value());
    rotateY(rotYSlider.value());
    rotateZ(rotZSlider.value());
    cylinder(wSlider.value(),hSlider.value());
  }

  if(this.shape == 'Ellipsoid'){
    texture(this.texture);
    translate(xSlider.value(), ySlider.value(),zSlider.value());
    rotateX(rotXSlider.value());
    rotateY(rotYSlider.value());
    rotateZ(rotZSlider.value());
    ellipsoid(wSlider.value(),hSlider.value(), dSlider.value());

  }

  if(this.shape == 'Torus'){
    texture(this.texture);
    translate(xSlider.value(), ySlider.value(),zSlider.value());
    rotateX(rotXSlider.value());
    rotateY(rotYSlider.value());
    rotateZ(rotZSlider.value());
    torus(wSlider.value(),hSlider.value());
  }
  pop();
}


}


