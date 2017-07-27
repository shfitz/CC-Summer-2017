var serial;
var portName = '/dev/cu.usbmodem1411'; // your serial port goes here
var mpos = 0;
var inByte;

function setup() {
    createCanvas(600, 400);
    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.on('list', printList); // set a callback function for the serialport list event
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen); // callback for the port opening
    serial.on('data', serialEvent); // callback for when new data arrives
    serial.on('error', serialError); // callback for errors
    serial.on('close', portClose); // callback for the port closing
    serial.open(portName); // open a serial port
}

function draw() {
    background(0);
    fill(255);
    ellipse(mouseX, height / 2, 20, 20);
    textSize(36);
    text("Outgoing number: " + mpos, 20, height - 60);
}

function mouseDragged() {
    mpos = ceil(map(mouseX, 0, width, 0, 255));
    mpos = constrain(mpos, 0, 255);
    serial.write(mpos);
    console.log(mpos);
}

function serialError(err) {
    console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
    console.log('The serial port closed.');
}

function printList(portList) {
    for (var i = 0; i < portList.length; i++) {
        console.log(i + " " + portList[i]);
    }
}

function serialEvent() {
    inByte = Number(serial.read()); // stores the data from the Arduino
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.')
}