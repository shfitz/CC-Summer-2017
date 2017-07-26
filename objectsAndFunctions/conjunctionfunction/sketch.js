var ball = {
    x:400,
    y:300,
    diam:50
}

var xspeed, yspeed;

function setup() {
    createCanvas(800, 600);
    xspeed = 2.3;
    yspeed = -1.5;
    
    console.log(ftoc(421));
    
}

function draw() {
    background(0);
    drawBall();
    updateBall();
    bounceBall();
}

function drawBall() {
    stroke(255);
    noFill();
    ellipse(ball.x, ball.y, ball.diam, ball.diam);
}

function ftoc(_temp){
    var cel = (_temp-32)* 5/9;
    
    return cel;
}

function updateBall() {
    ball.x += xspeed;
    ball.y += yspeed;
}

function bounceBall() {
    if (ball.x > width - ball.diam / 2 || ball.x < ball.diam / 2) {
        xspeed *= -1;
    }
    if (ball.y > height - ball.diam / 2 || ball.y < ball.diam / 2) {
        yspeed *= -1;
    }
}