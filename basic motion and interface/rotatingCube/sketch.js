var xpos, ypos;
var xspeed, yspeed;

var length;

var rot, rotinc;

function setup() {
createCanvas(windowWidth, windowHeight);
    
    xspeed = random(-5.0, 5.0);
    yspeed = random(-5.0, 5.0);
    
    length = random(50, 150);
    
    xpos = random(length/2, width-length/2);
    ypos = random(length/2, height-length/2);
    
    rot = random(TWO_PI);
    rotinc = random(-.1, .1);
}

function draw() {
    background(0);
    
    xpos += xspeed;
    ypos += yspeed;
        
    if(xpos > width-length/2 || xpos < length/2){
        xspeed *= -1;
    }

    if(ypos > height-length/2 || ypos < length/2){
        yspeed *= -1;
    }
    
    
    rectMode(CENTER);
//    push();
    translate(xpos, ypos);
    rotate(rot); 
    rect(0, 0, length, length);
    translate(length/2, length/2);
//    pop();
    rotate(rot);
    rect(0, 0, 20, 20);

    rot += rotinc;
}




















