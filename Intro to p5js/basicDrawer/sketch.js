function setup() {
    createCanvas(800, 600);
    background(0);
    stroke(255);
}

function draw() {
    ellipse(width / 2, height / 2, 300, 300);
    line(pmouseX, pmouseY, mouseX, mouseY);
    //  background(0);  
    //  rectMode(CENTER);
    //  rect(mouseX, mouseY, 100, 100);
    if (mouseIsPressed) {
        background(0);
        strokeWeight(random(15));
        stroke(random(255), random(255), random(255));
    }
}