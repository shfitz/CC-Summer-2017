var menu, bgColor;

function setup() {
    createCanvas(200, 200);
    textAlign(CENTER);
    bgColor=127;
    menu = createSelect();
    menu.position(10, 10);
    menu.option('white');
    menu.option('grey');
    menu.option('black');
    menu.changed(colorPicker);
}

function draw() {
    background(bgColor);
}

function colorPicker() {
    var choice = menu.value();
    if (choice == 'white') {
        bgColor = 255;
    }
    else if (choice == 'grey') {
        bgColor = 127;
    }
    else if (choice == 'black') {
        bgColor = 0;
    }
    background(bgColor);
}