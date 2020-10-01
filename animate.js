
var a=5,b=5;

class randominatorClass{
  static staticfun(x1,x2){
    return x1+x2;
  }
  static randomizeXsize(max,min){
    return Math.random() * (max-min) + min;
  }
  static randomizeYsize(max,min){
    return Math.random() * (max-min) + min;
  }
  static randomizeXCoordinate(max,min){
    return Math.random() * max - min;
  }
  static randomizeYCoordinate(max,min){
    return Math.random() * (max-min) + min;
  }
}




function randomizeZCoordinate(){
  return Math.random() * 1;
}

var collidableMeshList = [];
var clock = new THREE.Clock();
var time = 0;
var delta = 0;
var offset= 0.1;
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000 );
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();

const loader = new THREE.TextureLoader();
loader.load('~/house.png', function(texture){
  scene.background = texture;
});


delta = clock.getDelta();
time += delta;

camera.updateMatrixWorld();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.set(0,70,300);
camera.lookAt(0,130,0);


let raindropletclass ={
  bottom: [],
  bottomClonedPos:[],
  speed: [],
  direction:[]
  };

let raindropletTop ={
  top:[],
  speed:[]
}

  var cos = (Math.floor(Math.random() * 2) > 0) ? Math.cos(Math.PI/2.5) : (-Math.cos(Math.PI/2.5));

//various patterns of raindrops:
let geometry = new THREE.PlaneGeometry(1,1,1);
let material =  new THREE.MeshBasicMaterial( {color: (0,0,139), side: THREE.DoubleSide,opacity:0.9,transparent:true} );
let plane = new THREE.Mesh(geometry,material);

let plane2 = new THREE.Mesh(geometry,material);
geometry.scale(7,7,1);
var group = new THREE.Object3D();
plane2.position.set(105,205,0);
plane.position.set(100,200,0);

group.add(plane);
group.add(plane2);
scene.add(group);


createInstances();
animate();

  function createInstances(){

    //top raindrops
    for(let i=0;i<1;i++){

      let geometry = new THREE.PlaneGeometry(1, 1, 0);
      let material = new THREE.MeshBasicMaterial( {color: (3,3,255), side: THREE.DoubleSide,opacity:0.5,transparent:true} );
      let plane = new THREE.Mesh( geometry, material);

      plane.position.set(randominatorClass.randomizeXCoordinate(390,195),randominatorClass.randomizeYCoordinate(400,300),randomizeZCoordinate());
      plane.geometry.scale(Math.random() * (8-5)+5,Math.random() * (20-7)+7, 0);
      raindropletTop.top.push(plane);
      raindropletTop.speed.push(2.5);
      scene.add( plane);
    }



    //create the instances of raindroplets that appear after hitting the ground
    for(var i=0;i<5;i++){
      let geometry = new THREE.PlaneGeometry(1, 1, 0);
      let material = new THREE.MeshBasicMaterial( {color: (1,1,162), side: THREE.DoubleSide,opacity:0.9,transparent:true} );
      let plane = new THREE.Mesh( geometry, material);

      plane.position.set(randominatorClass.randomizeXCoordinate(390,195),randominatorClass.randomizeYCoordinate(5,3),randomizeZCoordinate());
      plane.geometry.scale(Math.random() * (9-5) + 5,Math.random() * (9-6) + 6,0);
      raindropletclass.bottomClonedPos.push(plane.clone());
      raindropletclass.speed.push(2.5);
      raindropletclass.bottom.push(plane);
      raindropletclass.direction.push((Math.floor(Math.random() * 2) > 0) ? Math.cos(Math.PI/2.5) : (-Math.cos(Math.PI/2.5)));
      scene.add( plane );
    }

    //create ground for collision
    var floorMaterial = new THREE.MeshBasicMaterial( {color:0x444444, side:THREE.DoubleSide} );
    var floorGeometry = new THREE.PlaneGeometry(800, 100, 10, 10);
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -1;
    floor.rotation.x = Math.PI / 2;
    scene.add(floor);
    collidableMeshList.push(floor);

    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -1;
    floor.rotation.x = Math.PI / 2;
    scene.add(floor);
  }

  //display background image

  window.addEventListener('resize',onWindowResize,false);


  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }


 function animate() {
  requestAnimationFrame( animate );


  for(let j=0;j<raindropletTop.top.length;j++){
    raindropletTop.top[j].position.y-=3;

    var topOriginPoint = raindropletTop.top[j].position.clone();


    for(let vertexIndex=0; vertexIndex<raindropletTop.top[j].geometry.vertices.length;vertexIndex++){
      var localVertex = raindropletTop.top[j].geometry.vertices[vertexIndex].clone();
      var globalVertex = localVertex.applyMatrix4( raindropletTop.top[j].matrix );
      var directionVector = globalVertex.sub( raindropletTop.top[j].position );

      var ray = new THREE.Raycaster(topOriginPoint, directionVector.clone().normalize());
      var collisionResults = ray.intersectObjects( collidableMeshList );
      if(collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()){
        raindropletTop.top[j].position.set(randominatorClass.randomizeXCoordinate(390,195),randominatorClass.randomizeYCoordinate(400,350),randomizeZCoordinate());
        //add line to reset the size of the droplet instance;
        break;
      }
    }
  }


  for(let i=0;i<raindropletclass.bottom.length;i++){
    raindropletclass.bottom[i].position.y+= raindropletclass.speed[i] + Math.abs(Math.sin(delta * 0.001));
    raindropletclass.bottom[i].position.x+= raindropletclass.direction[i];

    //1 20
    if(raindropletclass.bottom[i].position.y>=raindropletclass.bottomClonedPos[i].position.y+Math.floor(Math.random() * (50-20)+20)) raindropletclass.speed[i] = -2.5;
    var originPoint = raindropletclass.bottom[i].position.clone();


    for(let vertexIndex=0; vertexIndex<raindropletclass.bottom[i].geometry.vertices.length;vertexIndex++){
      var localVertex = raindropletclass.bottom[i].geometry.vertices[vertexIndex].clone();
      var globalVertex = localVertex.applyMatrix4( raindropletclass.bottom[i].matrix );
      var directionVector = globalVertex.sub( raindropletclass.bottom[i].position );

      var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
      var collisionResults = ray.intersectObjects( collidableMeshList );
      if(collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()){
        raindropletclass.bottom[i].position.set(randominatorClass.randomizeXCoordinate(390,195),randominatorClass.randomizeYCoordinate(5,3),randomizeZCoordinate());
        raindropletclass.bottomClonedPos.splice(i,1);
        raindropletclass.bottomClonedPos.push(raindropletclass.bottom[i].clone());
        raindropletclass.speed[i] = 2.5;
        raindropletclass.direction[i] = (Math.floor(Math.random() * 2) > 0) ? Math.cos(Math.PI/2.5) : (-Math.cos(Math.PI/2.5));
        //add line to reset the size of the droplet instance;
        break;
      }
    }
  }

  renderer.render( scene, camera );
  };
