var mic;
var scale = 1.0;

function setup() {
    createCanvas(500, 500);
    background(0);
    
    // new audio input
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
  noStroke();
    fill(0,10);
    rect(0,0, width, height);
    
    // getLevel() returns values between 0.-1.
    scale = map(mic.getLevel(), 0., 1., 10, 400);
    fill(255);
    ellipse(width/2, height/2, scale, scale);
}