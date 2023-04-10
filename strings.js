// project file paths
const path = {
  
}
// web file url
const url = {
  box: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwnEYViomfP6D5S9o1fwwvkRmcfyebF_JoQ&usqp=CAU",
  grd: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXRGrsfLOqKcfylGRBTzwobrWwXuRJsLsGA&usqp=CAU",
  circle: "https://circle.so/wp-content/uploads/Ellipse-261.png"
}

const html = {
  rightButton: 
  `<button name="right" style="
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 70px;
    height: 70px;
    font-size: 15pt;
    margin:0px;
    user-select: none;
    border: 0px;
  ">></button>`,
  
  leftButton: 
  `<button name="left" style="
    position: fixed;
    bottom: 10px;
    right: 100px;
    width: 70px;
    height: 70px;
    font-size: 15pt;
    margin:0px;
    user-select: none;
    border: 0px;
  "><</button>`,
  upButton: 
  `<button name="up" style="
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 70px;
    height: 70px;
    transform: rotate(90deg);
    font-size: 15pt;
    margin:0px;
    user-select: none;
    border: 0px;
  "><</button>`,
  sens:
  `<div name="sens" style="
    position: fixed;
    top: ${cenY()}px;
    left: ${cenX()-10}px;
    width: 20px;
    height: 35px;
  ">
  </div>`,
  
  update: function(){
    element('sens').style.top = cenY() + 60 + 'px'
    element('sens').style.left = cenX() - 10 + 'px'
    element('background').style.width = appX()
    elenent('background').style.height = appY()
  }
}