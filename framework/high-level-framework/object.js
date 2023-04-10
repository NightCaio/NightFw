var objectList = []

class object {
    constructor(name, image, x, y, width, height, angle){
      this.name = name
      this.image = image
      this.x = x 
      this.y = y
      this.width = width
      this.height = height 
      this.angle = angle
      this.body = null
      this.html = newImage(name, image, x, y, width, height, angle)
      this.style = this.html.style
      this.div = element(name+'-div')
      objectList.push(this)
    }
  
    update(){
     if(this.body != null)
        updateBody(this.name, this.body)
     else {
        Matter.Body.setPosition(this.body, {x: this.x-camera.x, y: this.y - camera.y})
     }
      
      this.style.width = this.width + "px"
      this.style.height = this.height + "px"

      this.x = this.body.position.x
      this.y = this.body.position.y
      this.div = element(this.name+'-div')
    }
  
    addBoxBody(){
      this.body = addBoxCollider(this.name)
    }
    
    addBoxStaticBody(){
      this.body = addStaticBoxCollider(this.name)
    }
    
    addCircleBody(){
      this.body = addCircleCollider(this.name)
    }
    
    addCircleStaticBody(){
      this.body = addStaticCircleCollider(this.name)
    }
    
    centerX(off){
      Matter.Body.setPosition(this.body, {x: screen.width/2 + off, y: this.body.position.y})
    }
    
    centerY(off){
      Matter.Body.setPosition(this.body, {x: this.body.position.x, y: screen.height/2 + off})
    }
    
    center(offx, offy) {
      Matter.Body.setPosition(this.body, { x: screen.width / 2 + offx, y: screen.height/2 + offy })
    }

    backX(off){
      Matter.Body.setPosition(this.body, {x: screen.width + off, y: this.body.position.y})
    }
    
    backY(off){
      Matter.Body.setPosition(this.body, {x: this.body.position.x, y: screen.height + off})
    }
    
    back(offx, offy) {
      Matter.Body.setPosition(this.body, { x: screen.width + offx, y: screen.height + offy })
    }
    
    area(el){
      const th = parse(element(this.name+'-div'))
      el = parse(el)
      return th.x <= el.x+el.w && el.x <= th.x+th.w &&
             th.y <= el.y+el.h && el.y <= th.y+th.h
    }
    
    setVelocity (x, y){
      x = x == null ? this.body.velocity.x : x
      y = y == null ? this.body.velocity.y : y
      Matter.Body.setVelocity(this.body, {x: x, y: y})
    }
    
    addForce(x, y){
      Matter.Body.applyForce(this.body, this.body.position, {x: x, y: y})
    }

    setPosition(x, y){
      x = x == null ? this.body.position.x : x
      y = y == null ? this.body.position.y : y
      Matter.Body.setPosition(this.body, {x: x, y: y})
    }
    
    setX(x){
      this.setPosition(x, null)
    }
    
    setY(y){
      this.setPosition(null, y)
    }
    
    move(x, y){
      this.setPosition(
        this.body.position.x + x,
        this.body.position.y + y
      )
    }
    
}
