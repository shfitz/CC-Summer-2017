// adapted from "Getting Started with p5.js" Chapter 12
// Given the following CSV file called "stats.csv"
//
// formatted with : year,home runs,rbi, batting avg
var stats;
var homeruns = [];

function preload() {
    stats = loadTable("stats.csv");
    
    // the below didn't work in class, why?
    
    //    console.log("i'm ready");
    //  // cycle through the table
    //    for (var i = 0; i < stats.getRowCount(); i++) {
    //        var year = stats.get(i, 0);
    //        var homers = stats.get(i, 1);
    //        var rbi = stats.get(i, 2);
    //        var avg = stats.get(i, 3);
    //        console.log(year +" "+ homers+" "+ rbi+" "+ avg);
    //    }
}

function setup() {
    createCanvas(480, 120);
    var rowCount = stats.getRowCount();
    homeruns = [];
    for (var i = 0; i < rowCount; i++) {
        homeruns[i] = stats.get(i, 1);
        console.log(homeruns[i]);
    }
}

function draw() {
    background(102);
    // grid
    stroke(135);
    line(20, 100, 20, 20);
    line(20, 100, 460, 100);
    for (var i = 0; i < homeruns.length; i++) {
        var x = map(i, 0, homeruns.length - 1, 20, 460);
        line(x, 20, x, 100);
    }
    // plot a line based on data
    noFill();
    stroke(255);
    beginShape();
    for (var i = 0; i < homeruns.length; i++) {
        var x = map(i, 0, homeruns.length - 1, 20, 460);
        var y = map(homeruns[i], 0, 60, 100, 20);
        vertex(x, y);
    }
    endShape();
}