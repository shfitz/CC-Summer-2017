function setup() {
  createCanvas(640, 480);
  mirror = createCapture(VIDEO);
  mirror.size(640,480);
  //mirror.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  mirror.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32)); // based on mouseX limit the size of our ellipses' diameter to be between 6 and 32 px. 

  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {

      var i = y * width + x;

      var darkness = (255 - mirror.pixels[i*4]) / 255; // alpha is always 255
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}