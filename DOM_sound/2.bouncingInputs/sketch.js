// inspired in part by https://p5js.org/examples/dom-input-and-button.html

var button, input;
var xpos, ypos;
var xspeed, yspeed;

function setup() {
    createCanvas(800, 600);
    
    xpos = width/2;
    ypos = height/2;
    
    xspeed = random(-3., 3);
    yspeed = random(-3., 3);
    
    // creates an input box
    input = createInput();
    // move the text box around
    input.position(xpos, ypos);
    
    // creates a button
    button = createButton('press me');
    // button callback function
    button.mousePressed(renderText);
    // move the button around
    button.position(input.x + input.width, input.y);

    // some text things
    textAlign(CENTER);
    textSize(50);
    // make the canvas black
    background(0);
}

function draw(){
    
    input.position(xpos, ypos);
      button.position(input.x + input.width, input.y);
    
    xpos+= xspeed;
    ypos+= yspeed;
    
    if(xpos > width || xpos < 0){
        xspeed*=-1;
    }
    if(ypos > height || ypos < 0){
        yspeed*=-1;
    }    
}

function renderText() {
    // save the input in a variable
    var inputText = input.value();
    input.value('');
    console.log(inputText);
    for (var i = 0; i < 50; i++) {
        push();
        fill(255, 127);
        translate(random(width), random(height));
        rotate(random(2 * PI));
        text(inputText, 0, 0);
        pop();
    }
}