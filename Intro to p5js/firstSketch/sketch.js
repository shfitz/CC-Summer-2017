// these double slashes indicate the following is a comment
// the computer will ignore everything on the lines
// so you can leave yourself notes
// this is helpful so you know whet you were thinking
// when you revisit your code 6 months later

function setup() {  // setup is called once when the sketch first starts
    createCanvas(800, 600);     // create a canvas in the browser
    //    background(127);      // fill in a greyscale background color
    background(200, 10, 220);   // fill in a rgb background color
    point(100, 100);            // draw a point
    line(100, 200, 700, 500);   // draw a line
    strokeWeight(10);           // change the thickness of all following lines
    stroke(255);                // change the greyscale color of the liens, default is black
    line(700, 200, 100, 500);
    strokeWeight(1);
    stroke(0);
    ellipse(200, 200, 50, 50);  // draw an ellipse
    noStroke();                 // stop drawing outlines around shapes
    fill(220, 160, 10);         // change the rgb fill color of shapes
    ellipse(200, 400, 50, 50);
}

function draw() {} // draw happens repeatedly