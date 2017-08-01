// pinched from https://itp.nyu.edu/classes/cc-s16/vision/
var playing = false; // a boolean for switching between states
var fingers; // variable to hold our video (video that happens to be about fingers)

function setup() {
    fingers = createVideo('assets/fingers.mov'); // refer to your video file here
}

// plays or pauses the video depending on current state
function mousePressed() {
    if (playing) { // if you click the mouse and the video is already playing
        fingers.pause(); //then pause the video
    }
    else { // if you click the mouse and the video is not already playing
        fingers.loop(); // then play and loop the video
    }
    playing = !playing; // on each click set your playing boolean to be the opposite of what it already was. this way it will always update correctly  
}