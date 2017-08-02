var checkbox;
var xpos, ypos;
var xspeed, yspeed;
var radius;
var ballColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    xspeed = random(-5.0, 5.0);
    yspeed = random(-5.0, 5.0);
    radius = random(50, 150);
    xpos = random(radius, width - radius);
    ypos = random(radius, height - radius);
    checkbox = createCheckbox('toggle ball color', false);
    checkbox.position(10,10);
    checkbox.changed(changeColor);
    ballColor =0;
}

function changeColor() {
    if (this.checked()) {
        ballColor = 255;
    }
    else {
        ballColor = 0;
    }
}

function draw() {
    stroke(0);
    strokeWeight(4);
    background(255);
    fill(ballColor);
    xpos += xspeed;
    ypos += yspeed;
    ellipse(xpos, ypos, radius * 2, radius * 2);
    if (xpos > width - radius || xpos < radius) {
        xspeed *= -1;
    }
    if (ypos > height - radius || ypos < radius) {
        yspeed *= -1;
    }
}