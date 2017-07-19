var dx =0;
var dy =0;
var xpos=0;
var ypos =0;
var easing;

function setup() {
    createCanvas(800, 600);
    easing = .05; // percentage the ball will move every frame
       
}

function draw() {
    background(0);
  
    dx = mouseX - xpos;
    xpos += dx*easing;
    
    dy = mouseY - ypos;
    ypos += dy*easing;   
    
    ellipse(xpos, ypos, 100, 100);
    
}