// adapted from https://p5js.org/examples/dom-input-and-button.html

var button, input;

function setup() {
    createCanvas(800, 600);
    // creates an input box
    input = createInput();
    // move the text box around
    input.position(20, 65);
    
    // creates a button
    button = createButton('press me');
    // button callback function
    button.mousePressed(renderText);
    // move the button around
    button.position(input.x + input.width, 65);

    // some text things
    textAlign(CENTER);
    textSize(50);
    // make the canvas black
    background(0);
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