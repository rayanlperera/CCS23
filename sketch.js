






let vid;
let week2;
let bg;
let cam;
let plants = [];
let xSlider, ySlider, zSlider;
let wSlider, hSlider, dSlider;
let rotXSlider, rotYSlider, rotZSlider;
let camLeftSlider, camRightSlider, camTopSlider, camBottomSlider;
let camNearSlider, camFarSlider;
let cameraRotXSlider, cameraRotYSlider, cameraRotZSlider;
let seed;
let shapePicker;
let videoPicker;
let lightColorSlider, lightXSlider, lightYSlider, lightZSlider;
let rotButton,posButton,sizeButton;
let hand1, hand2, hand3, hand4, hand5, hand6, hand7, hand8, hand9;


function preload(){ //loads in the video
  //vid = createVideo('Videos/daffyduck.mp4'); 
  //vid.hideControls();
  //week2 = createVideo('Videos/Rayan Week2.mp4');
  //week2.hideControls();
  bg = loadImage('Images/hand with galaxy in it.jpg');
  hand1 = createVideo('Videos/Hand Footage/hand 1.mp4');
  hand2 = createVideo('Videos/Hand Footage/hand 2.mp4');
  hand3 = createVideo('Videos/Hand Footage/hand 3.mp4');
  hand4 = createVideo('Videos/Hand Footage/hand 4.mp4');
  hand5 = createVideo('Videos/Hand Footage/hand 5.mp4');
  hand6 = createVideo('Videos/Hand Footage/hand 6.mp4');
  hand7 = createVideo('Videos/Hand Footage/hand 7.mp4');
  hand8 = createVideo('Videos/Hand Footage/hand 8.mp4');
  hand9 = createVideo('Videos/Hand Footage/hand 9.mp4');


  
  
  
}



function setup() {
  createCanvas(800, 600, WEBGL);
  normalMaterial();
  //debugMode();
  //creates camera
  cam = createCamera();
 



  //hides the videos and mutes them all 
  hand1.hide();
  hand1.volume(0);
  hand2.hide();
  hand2.volume(0);
  hand3.hide();
  hand3.volume(0);
  hand4.hide();
  hand4.volume(0);
  hand5.hide();
  hand5.volume(0);
  hand6.hide();
  hand6.volume(0);
  hand7.hide();
  hand7.volume(0);
  hand8.hide();
  hand8.volume(0);
  hand9.hide();
  hand9.volume(0);

  
  
  
  
  //x position
  xSlider = createSlider(-300, 300, 0);
  xSlider.position (810, 10);
  xSlider.size(200);
  
  //y position
  ySlider = createSlider(0,300, 0);
  ySlider.position (810, 50);
  ySlider.size(200);

  //z position
  zSlider = createSlider(-300,300,0);
  zSlider.position (810, 90);
  zSlider.size(200);

  //the width of the shape
  wSlider = createSlider(0,200,100);
  wSlider.position(810, 130);
  wSlider.size(200);

  //height of the shape
  hSlider = createSlider(0, 200, 100);
  hSlider.position(810,170);
  hSlider.size(200);

  //depth of the shape
  dSlider = createSlider(0, 100, 100);
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
  rotZSlider.size(200);

  
  
  
  
  //camera sliders
  /*
  camLeftSlider = createSlider(-1000, 1000, -width/2);
  camLeftSlider.position(810,500);
  camLeftSlider.size(200);

  camRightSlider = createSlider(-1000,1000, width/2);
  camRightSlider.position(810,540);
  camRightSlider.size(200);

  camTopSlider = createSlider(-1000, 1000, -height/2);
  camTopSlider.position(810, 580);
  camTopSlider.size(200);

  camBottomSlider = createSlider(-1000, 1000, height/2);
  camBottomSlider.position(810,620);
  camBottomSlider.size(200);
  
  camNearSlider = createSlider(-1000, 1000, 0);
  camNearSlider.position(810,660);
  camNearSlider.size(200);

  camFarSlider = createSlider(-1000, 2000, 1200);
  camFarSlider.position(810,700);
  camFarSlider.size(200);

  cameraRotXSlider = createSlider(-360,360,0);
  cameraRotXSlider.position(1000,500);
  cameraRotXSlider.size(200);

  cameraRotYSlider = createSlider(-360,360,0);
  cameraRotYSlider.position(1000,540);
  cameraRotYSlider.size(200);
 
  cameraRotZSlider = createSlider(-360,360,0);
  cameraRotZSlider.position(1000,580);
  cameraRotZSlider.size(200);
  */

  
  //changes the camera position along the y-axis
  cameraRotYSlider = createSlider(-360,360,0);
  cameraRotYSlider.position(810,370);
  cameraRotYSlider.size(200);
  
  //allows you to control the color of the ambient light
  //generates a window that you can choose whatever you want it to be
  lightColorSlider = createColorPicker("white")
  lightColorSlider.position(1200,10);
  
  
  /*
  lightXSlider = createSlider(-300,300,0)
  lightXSlider.position(1300,50);
  lightXSlider.size(200);

  lightYSlider = createSlider(-300, 300, 0);
  lightYSlider.position(1300,90);
  lightYSlider.size(200);

  lightZSlider = createSlider(-300, 300, 0);
  lightZSlider.position(1300, 130);
  lightZSlider.size(200);
*/

  shapePicker = createSelect();
  shapePicker.position(1020, 10);
  shapePicker.option('Cube');
  shapePicker.option('Cone');
  shapePicker.option('Plane');
  shapePicker.option('Sphere');
  shapePicker.option('Cylinder');
  shapePicker.option('Ellipsoid');
  shapePicker.option('Torus');
  
 
  


  
  //button to add a new shape
  seed = createButton("Grow a Hand");
  seed.position(810, 400);
  seed.mousePressed(Sunlight); 
 
  //creates a dropdown for all the videos to be added
  // when I put if statements in the class it doesn't allow me to change the texture
  videoPicker = createSelect();
  videoPicker.position(1100, 10);
  videoPicker.option('Hand 1');
  videoPicker.option('Hand 2');
  videoPicker.option('Hand 3');
  videoPicker.option('Hand 4');
  videoPicker.option('Hand 5');
  videoPicker.option('Hand 6');
  videoPicker.option('Hand 7');
  videoPicker.option('Hand 8');
  videoPicker.option('Hand 9');

  clip = createButton("Chop A Hand");
  clip.position(810,430);
  clip.mousePressed(Prune);

  for(let i = 0; i < 0 ; i++){
    plants[i] = new Plant();
  }
  

}

function draw() {
  background(225);
  //orbitControl();
  angleMode(DEGREES);
  texture(bg);
  
  
  rotateX(27);
  rotateY(cameraRotYSlider.value());
  rotateZ(0);
  cam.ortho(-width/2, width/2, 240, -480, 0, 1200);
  
  //generates the ambient light in the sketch
  ambientLight(lightColorSlider.value());
  
  //console.log(camBottomSlider.value()+ ',' + camTopSlider.value() + ',' + cameraRotXSlider.value() + ',' + cameraRotYSlider.value() + ',' + cameraRotZSlider.value());

 /* push();
  normalMaterial();
  translate(0,0,0);
  sphere(500);
  pop();
*/
 
  
  push();
  angleMode(DEGREES);
  rotateX(90);
  box(500,500, 50);
  pop();
  

  //based on the shape used the sliders will move off screen to be consistent
  if(shapePicker.value() == 'Cube'){
    hSlider.position(810,170);
    dSlider.position(810,210);
  }
  
  if(shapePicker.value() == 'Cone'){
    hSlider.position(810,170);
    dSlider.position(-1000, 1000);
  }
  
  if(shapePicker.value() == 'Plane'){
    hSlider.position(810,170);
    dSlider.position(-1000, 1000);
  }

  if(shapePicker.value() == 'Sphere'){
    hSlider.position(-1000,1000);
    dSlider.position(-1000, 1000);
  }
  
  if(shapePicker.value() == 'Cylinder'){
    hSlider.position(810,170)
    dSlider.position(-1000, 1000)
  }

  if(shapePicker.value() == 'Ellipsoid'){
    hSlider.position(810,170);
    dSlider.position(810,210);
  }

  if(shapePicker.value() == 'Torus'){
    hSlider.position(810,170)
    dSlider.position(-1000, 1000)
  }


  
  // renders the plants
  for(i = 0; i < plants.length; i++){
  if(plants[i].active == true){
    plants[i].update();
  }
  plants[i].render();
}






}

function Sunlight(){ // "Grow A Hand" calls from this function
  let shapeType = shapePicker.value(); // calls the different shape
  let myPetals = videoPicker.value(); // changes the different video
  for(let i= 0; i< plants.length; i++){ // checks for if the button is pressed and the "active" constructor is true
    plants[i].active = false;
  }
  plants.push(new Plant(shapeType, myPetals));

  for(let i= 0; i< plants.length; i++){
    console.log(plants[i].active);
  }
  
}

function Prune(){
  let shapeType = shapePicker.value();
  let myPetals = videoPicker.value();
  plants.splice(new Plant(shapeType, myPetals));
}


function mousePressed (){ // pressing the mouse anywhere plays the video on loop
  hand1.loop();
  hand2.loop();
  hand3.loop();
  hand4.loop();
  hand5.loop();
  hand6.loop();
  hand7.loop();
  hand8.loop();
  hand9.loop();

}

class Plant{ //class to generate a 3D shape

constructor(shapeType, myPetals){
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
  this.texture = myPetals;
  this.active = true;
}

render(){

  if (this.texture == 'Hand 1'){
    texture(hand1);
  }

  if(this.texture == 'Hand 2'){
    texture(hand2);

  }

  if(this.texture == 'Hand 3'){
    texture(hand3);

  }

  if(this.texture == 'Hand 4'){
    texture(hand4);

  }

  if(this.texture == 'Hand 5'){
    texture(hand5);

  }

  if(this.texture == 'Hand 6'){
    texture(hand6);

  }

  if(this.texture == 'Hand 7'){
    texture(hand7);

  }

  if(this.texture == 'Hand 8'){
    texture(hand8);

  }

  if(this.texture == 'Hand 9'){
    texture(hand9);

  }

  if (this.shape == 'Cube'){
  push();
  translate(this.x, this.y, this.z);
  rotateX(this.rotX);
  rotateY(this.rotY);
  rotateZ(this.rotZ);
  box(this.width, this.height, this.depth);
  pop();
  }
  
  if(this.shape == 'Cone'){
  push();
  translate(this.x, this.y, this.z);
  rotateX(this.rotX);
  rotateY(this.rotY);
  rotateZ(this.rotZ);
  cone(this.width, this.height);
  pop();

  }

  if(this.shape == 'Plane'){
  push();
  translate(this.x, this.y , this.z);
  rotateX(this.rotX);
  rotateY(this.rotY);
  rotateZ(this.rotZ);
  plane(this.width, this.height);
  pop();  
}

  if(this.shape =='Sphere'){
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotX);
    rotateY(this.rotY);
    rotateZ(this.rotZ);
    sphere(this.width);
    pop();
  }

  if(this.shape =='Cylinder'){
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotX);
    rotateY(this.rotY);
    rotateZ(this.rotZ);
    cylinder(this.width, this.height);
    pop();
  }

  if(this.shape == 'Ellipsoid'){
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotX);
    rotateY(this.rotY);
    rotateZ(this.rotZ);
    ellipsoid(this.width, this.height, this.depth);
    pop();
  }

  if(this.shape == 'Torus'){

    push();
    translate(this.x, this.y , this.z);
    rotateX(this.rotX);
    rotateY(this.rotY);
    rotateZ(this.rotZ);
    torus(this.width, this.height);
    pop();
  }
}
 update(){
  this.x = xSlider.value();
  this.y = ySlider.value();
  this.z = zSlider.value();
  this.width = wSlider.value();
  this.height = hSlider.value();
  this.depth = dSlider.value();
  this.rotX = rotXSlider.value();
  this.rotY = rotYSlider.value();
  this.rotZ = rotZSlider.value();
 }

 



}


