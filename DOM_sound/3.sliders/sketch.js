// adapted from https://p5js.org/examples/dom-slider.html

var rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  createCanvas(400, 120);
  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 160);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 10);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 220);
  bSlider.position(20, 80);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red value : " + r, rSlider.x * 2 + rSlider.width, 35);
  text("green value : " + g, gSlider.x * 2 + gSlider.width, 65);
  text("blue value : " + b, bSlider.x * 2 + bSlider.width, 95);
}