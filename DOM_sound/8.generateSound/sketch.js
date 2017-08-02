var sine, squ, tri, saw;

var freq = 440;

function setup() {
    createCanvas(440, 440);
    sine = new p5.SinOsc();
    squ = new p5.SqrOsc();
    tri = new p5.TriOsc();
    saw = new p5.SawOsc();
    squ.start();
}

function draw() {
    background(0);
    var hertz = map(mouseX, 0, width, 31., 440.);
    squ.freq(hertz);
    stroke(255);
}