function Ball(_r, _g, _b){
    this.x = random(100, width-100);
    this.y = random(100, height-100);
    this.diam = random(100, 200);
    this.xspeed = random(-3, 3);
    this.yspeed = random(-3.5,3.5);
    this.color = color(_r, _g, _b);
    
    this.draw = function () {
        stroke(255);
        fill(this.color);
        ellipse(this.x, this.y, this.diam, this.diam);
    };
    this.update = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    this.bounce = function () {
        if (this.x > width - this.diam / 2 || this.x < this.diam / 2) {
            this.xspeed *= -1;
        }
        if (this.y > height - this.diam / 2 || this.y < this.diam / 2) {
            this.yspeed *= -1;
        }
    }
}