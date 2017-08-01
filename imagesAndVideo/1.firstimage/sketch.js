var img; // Declare variable img

function setup() {
    createCanvas(500, 300);
    img = loadImage("assets/tenor.gif"); // Load the image
}

function draw() {
    // Displays the image at its actual size at point 0,0
    image(img, 0, 0);
}