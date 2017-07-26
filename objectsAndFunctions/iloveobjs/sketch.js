var ball = {
    x: 400
    , y: 300
    , diam: 100
    , xspeed: 2.3
    , yspeed: -3.5
    , draw: function () {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, this.diam, this.diam);
    }
    , update: function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    , bounce: function () {
        if (this.x > width - this.diam / 2 || this.x < this.diam / 2) {
            this.xspeed *= -1;
        }
        if (this.y > height - this.diam / 2 || this.y < this.diam / 2) {
            this.yspeed *= -1;
        }
    }
}

var ball2 = {
    x: 200
    , y: 100
    , diam: 50
    , xspeed: -5.4
    , yspeed: 4.5
    , draw: function () {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, this.diam, this.diam);
    }
    , update: function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    , bounce: function () {
        if (this.x > width - this.diam / 2 || this.x < this.diam / 2) {
            this.xspeed *= -1;
        }
        if (this.y > height - this.diam / 2 || this.y < this.diam / 2) {
            this.yspeed *= -1;
        }
    }
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
   
    ball.draw();
    ball2.draw();
    ball.update();
    ball2.update();
    ball.bounce();
    ball2.bounce();
}