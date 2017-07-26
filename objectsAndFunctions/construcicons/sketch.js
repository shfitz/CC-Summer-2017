var ball1, ball2;

function setup() {
    createCanvas(800, 600);
    
    ball1 = new Ball(200, 10, 180);
    ball2 = new Ball(220, 160, 10);
}

function draw() {
    background(0);
   
    ball1.draw();
    ball2.draw();
    ball1.update();
    ball2.update();
    ball1.bounce();
    ball2.bounce();
}