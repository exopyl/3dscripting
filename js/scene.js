if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var clock = new THREE.Clock();
var mygeometry;
var mymaterial;
var mesh;

function SetGeometry(code)
{
        scene.remove(mesh); // Clean the scene
        // complete the code
        const final_code = "mesh = new THREE.Object3D();" + code + "scene.add( mesh );";
        eval(final_code); // Generate new mesh
        renderer.render(scene, camera); // Render
}

// renderer
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
const container = document.getElementById('container');

console.log("Orig : " + container.clientWidth + " " + container.clientHeight)
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 10000 );
camera.position.z = 5;

var cameraControls = new THREE.TrackballControls(camera, renderer.domElement);
cameraControls.target.set(0, 0, 0);

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff  );

// light on the camera
pointLight = new THREE.PointLight( 0xdddddd );
pointLight.position.set(0, 0, 0);
camera.add(pointLight);
scene.add(camera);
// mesh
/*
mesh = new THREE.Object3D();
mymaterial = new THREE.MeshPhongMaterial( {
                color: 0x156289,
                emissive: 0x072534,
                side: THREE.DoubleSide,
                flatShading: true
        } );
var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mymaterial);
mesh.add( cube );

scene.add( mesh );
*/

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(event)
{
        Width = container.clientWidth;
        Height = container.clientHeight-10;
        renderer.setSize(Width, Height);
        camera.aspect = Width / Height;
        camera.updateProjectionMatrix();
        cameraControls.handleResize();
}
 
function animate() {
        var delta = clock.getDelta();
        requestAnimationFrame(animate);
        cameraControls.update(delta);
        renderer.render(scene, camera);
}
animate();
/*
var controller = {
        grid: false,
        axis: false,
};
var gui = new dat.GUI({ autoPlace: false });
gui.add( controller, 'grid' )//.onChange( function () { animateCamera(); } );
gui.add( controller, 'axis' )//.onChange( function () { animateCamera(); } );
*/