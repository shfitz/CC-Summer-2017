var video;
var display;
var bgImage;
// How different must a pixel be to be a foreground pixel
var threshold = 20;

function setup() {
    createCanvas(320, 240);
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();
    // Create an empty image the same size as the video
    bgImage = createImage(width, height);
    display = createImage(width, height);
}

function draw() {
    // We are looking at the video's pixels, the memorized backgroundImage's pixels, as well as accessing the display pixels.
    // So we must loadPixels() for all!
    video.loadPixels();
    bgImage.loadPixels();
    display.loadPixels();
    // Begin loop to walk through every pixel
    for (var x = 0; x < video.width; x++) {
        for (var y = 0; y < video.height; y++) {
            var loc = (x + y * video.width) * 4; // What is the 1D pixel location
            // Store the RGB values for each pixel of the video and our background image
            var r1 = video.pixels[loc];
            var g1 = video.pixels[loc + 1];
            var b1 = video.pixels[loc + 2];
            var r2 = bgImage.pixels[loc];
            var g2 = bgImage.pixels[loc + 1];
            var b2 = bgImage.pixels[loc + 2];
            //Compare the foreground and background color
            var diff = dist(r1, g1, b1, r2, g2, b2);
            // Is the foreground color different from the background color
            if (diff > threshold) {
                // If so, display the foreground color
                display.pixels[loc] = video.pixels[loc];
                display.pixels[loc + 1] = video.pixels[loc + 1];
                display.pixels[loc + 2] = video.pixels[loc + 2];
                display.pixels[loc + 3] = video.pixels[loc + 3];
            }
            else {
                // If not, display green
                display.pixels[loc] = 0;
                display.pixels[loc + 1] = 255;
                display.pixels[loc + 2] = 0; // We could choose to replace the background pixels with something other than the color green!
                display.pixels[loc + 3] = 255;
            }
        }
    }
    //update the display image
    display.updatePixels();
    // display the updated display image
    image(display, 0, 0);
    // show our threshold in text at the bottom of the screen
    fill(0);
    rect(0, height - 20, width, height);
    fill(255);
    text("Threshold is now: " + threshold, 20, height - 5);
}

function mousePressed() {
    for (var i = 0; i < video.pixels.length; i++) {
        bgImage.pixels[i] = video.pixels[i];
    }
    bgImage.updatePixels();
    changeThreshold(); // comment this out to keep threshold constant
}
// change the threshold on the fly depending on where you click
function changeThreshold() {
    threshold = map(mouseX, 0, width, 0, 175);
    print("Threshold is now: " + threshold);
}