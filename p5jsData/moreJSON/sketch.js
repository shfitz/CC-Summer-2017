var colorVals;

function preload() {
    loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json", printData);
}

function printData(data) {
    colorVals = data;
    //console.log(data);
}

function setup() {
    createCanvas(800, 600);
    background(100);
    var x = 10;
    for (var i = 0; i < colorVals.colors.length; i++) {
        if (i != 0 && i % 50 == 0) {
            x += 150;
        }
        fill(colorVals.colors[i].hex)
        text(colorVals.colors[i].color, x, (i % 50) * 12 + 12);
        console.log(i + ' ' + x + colorVals.colors[i].color);
    }
    noLoop();
}

function draw() {}