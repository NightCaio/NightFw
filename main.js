
const boxA = new object('box-a', url.box, 0, 0, 50, 50, 0)
const boxB = new object('box-b', url.box, 0, 0, 50, 50, 0)
const grnd = new object('box-c', url.grd, cenX()-250, appY()-300, 500, 300, 0)

boxA.addBoxBody()
boxB.addBoxBody()
grnd.addBoxStaticBody()

boxA.center(0, 0)
boxB.center(25, 25)

var left;
var rght;
var top;

var left_press  = 0
var right_press = 0
var jump = 0
var can_jump = 0

function start(){
  
  left = element('left')
  rght = element('right')
  top  = element('up')
  
  // for Android devices
  left.ontouchstart = () => left_press = 1
  rght.ontouchstart = () => right_press = 1
  top.ontouchstart = () => jump = 1
  left.ontouchend = () => left_press = 0
  rght.ontouchend = () => right_press = 0
  
  //keyboard events
  document.addEventListener('keydown', function(e){
    e = e || window.event
    if(e == '37')
      left_press = 1
    else if(e == '38')
      jump = 1
    else if(e == '39')
      right_press = 1
  })
  
  document.addEventListener('keyup', function(e){
    e = e || window.event
    if(e == '37')
      left_press = 0
    else if(e == '39')
      right_press = 0
  })
}


function update(){
  can_jump = grnd.area(element("sens")) ||
             boxB.area(element("sens"))
  
  boxA.setVelocity(right_press - left_press, null)
  
  if(jump && can_jump)
    // Matter.Body.applyForce(boxA.body, boxA.body.position, {x: 0, y: -0.06})
    boxA.addForce(0, -0.06)
  
  // camera.x = boxA.body.position.x - cenX()
  // camera.y = boxA.body.position.y - cenY()
  camera.follow(boxA, 0, -60)
  jump = 0
}

setView(update, start, html)