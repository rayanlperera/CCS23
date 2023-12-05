
let webcam;

//preload videos into sketch
//create dropdown for said videos
//add a class to hold the different 3D primitives people can use
//design a plane for the user to place the primitives
//create a way to texture wrap all of the primitives with the video on all of the primitives
//have button that generates the primitive with a video wrapped on it
//allow user to interact with shapes and arrange it however they want to



function setup(){
//creates new scene
const scene = new THREE.Scene()
webcam = createCapture(VIDEO);
//creates the actual shape
//const texture = new THREE.VideoTexture( webcam );
//texture.colorSpace = THREE.SRGBColorSpace;

const geometry = new THREE.BoxGeometry(3,3,3);
const material = new THREE.MeshStandardMaterial({
    color: '#8492DB',
    roughness: 0.2,
    //map: texture
});
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)



//adding the light

const light = new THREE.AmbientLight(0xffffff, 1, 100);
light.position.set (0, 10, 10);
scene.add(light);


//Adding the camera
let camera = new THREE.PerspectiveCamera(45, 800 / 600);
camera.position.z = 20;
scene.add(camera);



//Adding the renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800,600);
renderer.render(scene, camera);


let animate = function () {
	requestAnimationFrame( animate );

	mesh.rotation.x = mouseX/100;
 	mesh.rotation.y = mouseY/100;

	renderer.render(scene, camera)
};
animate();


}



function draw(){
}

function makeInstance()