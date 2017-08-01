var img; // Declare variable img
var xPos, yPos;
var xDir, yDir;

function preload() {
    img = loadImage("assets/cat1.pinkblack.png"); // Load the image
}

function setup() {
    createCanvas(600, 600);
    yPos = random(height - 10);
    xPos = random(width - 10);
    xDir = random(-5, 5);
    yDir = random(-5, 5);
}

function draw() {
    background(255);
    // Displays the image and bounce it around at 5% it's original size
    image(img, xPos, yPos, img.width / 20, img.height / 20);
    xPos += xDir;
    yPos += yDir;
    if (xPos > width || xPos < 0) {
        xDir *= -1;
    }
    if (yPos > height || yPos < 0) {
        yDir *= -1;
    }
}