# NightFw

a framework for creating web games with javascript

how use?

first it is important to include the default callbacks
"start" and "update"

```js
// when the scene starts
function start(){

}
// is called every frame 
function update(){

}
```

by default an object is used to control the html,
to be used in interfaces

```js
html = {
    myText: `<p name="txt"> Hello </p>`,
    update: function(){
        element('txt').style.color = '#f00'
    }
}
```

at the end use the function `setView(update, start, html)`

this is a simple code example using objects and physics:

```js
const ball = new object('ball', 'b.png', 0, 0, 50, 50, 0)
const ground = new object('g', 'g.png', 0, 0, 300, 50, 0)

ball.addCircleBody()
ground.addBoxBody()

ball.center(0, 0)
ground.center(0, 500)

function start(){
    document.onmousedown = function(){
        ball.addForce(0, -0.06)
    }
}
function update(){

}

const html = {update: () => {}}

setView(update, start, html)
```
