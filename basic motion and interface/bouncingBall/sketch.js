var xpos, ypos;
var xspeed, yspeed;

var radius;

function setup() {
createCanvas(windowWidth, windowHeight);
    
    xspeed = random(-5.0, 5.0);
    yspeed = random(-5.0, 5.0);
    
    radius = random(50, 150);
    
        
    xpos = random(radius, width-radius);
    ypos = random(radius, height-radius);
    
}

function draw() {
    background(0);
    
    xpos += xspeed;
    ypos += yspeed;
    
    ellipse(xpos, ypos, radius*2, radius*2);
    
    if(xpos > width-radius || xpos < radius){
        xspeed *= -1;
    }

    if(ypos > height-radius || ypos < radius){
        yspeed *= -1;
    }
}

function mouseClicked(){
    if(mouseButton == LEFT){
    
    xspeed = random(-5.0, 5.0);
    yspeed = random(-5.0, 5.0);
    
    radius = random(50, 150);
            xpos = random(radius, width-radius);
    ypos = random(radius, height-radius);
    }
    
}