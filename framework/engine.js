const camera = {
  x: 0, y: 0,
  
  followX: function(obj, offset){
    this.x = obj.body.position.x - cenX() + offset
  },
  followY: function(obj, offset){
    this.y = obj.body.position.y - cenY() + offset
  },
  follow: function(obj, offX, offY){
    this.followX(obj, offX)
    this.followY(obj, offY)
  }
}

function element(name){
  return document.getElementsByName(name)[0]
}
function cenX(){
  return screen.width/2
}
function cenY(){
  return screen.height/2
}
function appX(){
  return screen.width
}
function appY(){
  return screen.height
}

function add(text){
  document.body.innerHTML += text+"\n"
}

function newImage(name, src, x, y, w, h, a){
  document.body.innerHTML += 
  `
  <div name="${name}-div" style="
    position: fixed;
    top: ${y}px;
    left: ${x}px;
    width: ${w}px;
    height: ${h}px;
  ">
    <img name="${name}" src="${src}" style="
      width: ${w}px;
      height: ${h}px;
      border-radius: 0px;
      background-color: none;
      border: 0px solid black;
      background-position: 0px 0px;
      transform: rotate(${a}deg);
    ">
  </div>
  `
  
  return element(name)
}

function setImageStyle(name, x, y, w, h, rot, br, color, borW, borType, borColor){
  self = element(name).style
  
  self.left = x + "px"
  self.top = y + "px"
  self.width = w + "px"
  self.height = h + "px"
  self.transform = "rotate(" + rot + "deg)"
  self.borderRadius = br + "px"
  self.backgroundColor = color
  self.borderWidth = borW + "px"
  self.borderStyle = borType
  self.borderColor = borColor
  
}

function setImage(name, src){
  element(name).style.src = src
}

function parse(el){
  return {
    x: parseInt(el.style.left),
    y: parseInt(el.style.top),
    w: parseInt(el.style.width),
    h: parseInt(el.style.height)
  }
}

function setView(view, start, html){
  const htmlup = html.update
  var body = ''
  delete html.update

  Object.values(html).forEach((n)=>{
    body += n
  })
  
  add(body)
  setup()
  if(start != null)
    start()
  setInterval(()=>{
    if(view != null)
      view()
    objectList.forEach((obj)=>{
      obj.update()
    })
    htmlup()
  })
}
