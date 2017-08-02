var xpos, ypos;
var xspeed, yspeed;
var radius;
var ballColor;
var beep;

function preload() {
    beep = loadSound("assets/beep.mp3");
}

function setup() {
    createCanvas(600, 400);
    xspeed = random(-5.0, 5.0);
    yspeed = random(-5.0, 5.0);
    radius = random(10, 50);
    xpos = random(radius, width - radius);
    ypos = random(radius, height - radius);
    ballColor = 0;
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
        beep.play();
    }
    if (ypos > height - radius || ypos < radius) {
        yspeed *= -1;
        beep.play();
    }
}