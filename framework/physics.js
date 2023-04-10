var worldObjectBodies = []

function addBoxCollider(name){
  el = parse(element(name+"-div"))
  col = Bodies.rectangle(el.x, el.y, el.w, el.h)
  worldObjectBodies.push(col)
  return col
}

function addCircleCollider(name){
  el = parse(element(name+"-div"))
  col = Bodies.circle(el.x, el.y, el.w/2)
  worldObjectBodies.push(col)
  return col
}

function addStaticBoxCollider(name) {
  el = parse(element(name+"-div"))
  col = Bodies.rectangle(el.x+el.w/2, el.y+el.h/2, el.w, el.h, {isStatic: true})
  worldObjectBodies.push(col)
  return col
}

function addStaticCircleCollider(name){
  el = parse(element(name+"-div"))
  col = Bodies.circle(el.x, el.y, el.w, {isStatic: true})
  worldObjectBodies.push(col)
  return col
}

function updateBody(name, col){
  el = element(name+"-div").style
  p = parse(element(name))
  el.left = col.position.x - p.w/2 - camera.x + "px"
  el.top = col.position.y - p.h/2 - camera.y + "px"
  element(name).style.transform = `rotate(${col.angle*180/Math.PI}deg)`
}
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
function setup(){
  // create an engine
  var physics = Engine.create();
  // create runner
  var runner = Runner.create();

  // add all of the bodies to the world
  Composite.add(physics.world, worldObjectBodies);
  // run the engine
  Runner.run(runner, physics);
}