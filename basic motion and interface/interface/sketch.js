var ellipsevalue = 0;
var rectvalue = 0;
var fillColor = 255;

function setup() {
    createCanvas(800, 600);
    
}

function draw() {
    background(map(mouseX, 0, 799, 0, 255));
    stroke(255);
    fill(fillColor);
    text("ellipse Value is " + ellipsevalue, 20, 20);
    ellipse(width/2, 100, 100, 100);
    
    rectMode(CENTER);
    rect(width/2, height/2, 100, 100);
    
    
    if(dist(width/2, 100, mouseX, mouseY) < 100){
        ellipsevalue = 1;
    }else{
        ellipsevalue =0;
    }
    
     text("rect Value is " + rectvalue, 20, 50);
    if(mouseX>width/2-50 && mouseX<width/2+50 && mouseY>height/2-50 && mouseY<height/2+50){
        rectvalue = 1;
    }else{
        rectvalue =0;
    }
}


function keyPressed(){
//    if(key === 'o' || key === 'O'){
//        fillColor = 45;
//    }
    if(keyCode == UP_ARROW){
        fillColor += 10;
    }
     if(keyCode == DOWN_ARROW){
        fillColor -= 10;
    }   
}

























