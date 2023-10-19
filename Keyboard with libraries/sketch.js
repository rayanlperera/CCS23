let bamboo;
let kill;
let mariofall;
let rizz;
let running;
let x;
let y;

let bambooDisplay;
let killDisplay;
let fallDisplay;
let rizzDisplay;
let runningDisplay;

function preload(){
bambooDisplay = loadImage("Images/bamboo.jpg");
killDisplay = loadImage("Images/imposter.png");
fallDisplay = loadImage("Images/kirby-falling-small.gif");
rizzDisplay = loadImage("Images/rizz-face.gif");
runningDisplay = loadImage("Images/running.gif");

}


function setup() {  
createCanvas(windowWidth, windowHeight);
	bamboo = loadSound("Sounds/Bamboo.mp3", keyPressed);
	kill = loadSound("Sounds/kill.mp3",keyPressed);
	mariofall = loadSound("Sounds/mario fall.mp3",keyPressed);
	rizz = loadSound("Sounds/rizz.mp3",keyPressed);
	running = loadSound("Sounds/Running.mp3", keyPressed)
	background(235,28,23,200);	
	//x = random(width);
  	//y = random(height);


 
	bamboo.addCue(0.5, bambooImage); //add cues for the functions below to trigger when played
	kill.addCue(0.5, killImage);
	mariofall.addCue(0.5,fallImage);
	rizz.addCue(0.5,rizzImage);
	running.addCue(0.5,runningImage);
}


function bambooImage(){
	image(bambooDisplay,pmouseX,pmouseY,random(100,500),random(100,500));
}

function killImage(){
	image(killDisplay,mouseX,mouseY,random(100,500),random(100,500));
}

function fallImage(){
	image(fallDisplay,mouseX,mouseY,random(100,500), random(100,500));
}

function rizzImage(){
	image(rizzDisplay,mouseX,mouseY,random(100,500),random(100,500));
}

function runningImage(){
	image(runningDisplay,mouseX,mouseY,random(100,500),random(100,500));
}

function draw() {
  
  
}



function mousePressed(){
  console.log(mouseX,mouseY);
}

function keyPressed(){

	if(keyCode == 81){ //press Q to trigger bamboo sound
	bamboo.play();
    }
	
	if(keyCode == 87){ // press W to trigger kill sound
	kill.play();
	}

	if(keyCode == 69){ // press E to trigger mariofall
	mariofall.play();
	}

	if (keyCode == 82){ //press R to trigger rizz
	rizz.play();
	}

	if (keyCode == 84){ // press T to trigger running
	running.play();
	
	}	

	if (keyCode == 32){//press space to clear
		background(235,28,23);
	}

}





