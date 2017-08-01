var capture; // variable for the video

function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO); // capture the video
  capture.size(320, 240); // camera size
  capture.hide();
}

function draw() {
  background(255);
  push();
  translate(width, 0);
  scale(-1.0, 1.0);
  image(capture, 0, 0); // write to canvas
  pop();
}