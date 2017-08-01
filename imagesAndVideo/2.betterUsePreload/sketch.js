var img; // Declare variable img
function preload() {
    img = loadImage("assets/cat1.pinkblack.png"); // Load the image
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);
    // Displays the image at its actual size at point 0,0
    image(img, 0, 0, width, height);
}