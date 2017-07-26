var balls = [];

function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < 20; i++) {
        balls[i] = new Ball(random(127, 255), random(127, 255), random(127, 255));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].bounce();
    }
}