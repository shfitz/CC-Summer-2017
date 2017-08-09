var astros;

function preload() {
    loadJSON("http://api.open-notify.org/astros.json", printData, 'jsonp');
}

function printData(data) {
    astros = data;
    for (var i = 0; i < data.number; i++) {
        console.log(data.people[i].name);
    }
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255);
    if (astros) {
        randomSeed(12);
        for (var i = 0; i < astros.number; i++) {
            var x = random(width);
            var y = random(height);
            ellipse(x - 10, y, 20, 20);
            text(astros.people[i].name, x, y);
        }
    }
}