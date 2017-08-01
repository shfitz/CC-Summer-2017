var vid;
var vidScale = 16;
var slider;

function setup() {
    createCanvas(640, 480);
    background(10);
    vid = createCapture(VIDEO);
    vid.size(width/vidScale, height/vidScale);
    //vid.hide();
    slider = createSlider(0, 255, 127);
    pixelDensity(1); // fixes density issue
}

function draw() {
    background(10);
    vid.loadPixels();
    loadPixels();
    for (var y = 0; y < vid.height; y++) {
        for (var x = 0; x < vid.width; x++) {
            var index = (vid.width-x+1 + (y * vid.width)) * 4
            var r =vid.pixels[index];
            var g =vid.pixels[index+1];
            var b =vid.pixels[index+2];

            var bright = (r+g+b)/3;
            
//            pixels[index] = bright;
//            pixels[index + 1] = bright;
//            pixels[index + 2] = bright;
//            pixels[index + 3] = 255;
            var w = map(bright, 0, 255, 0, vidScale);
            
            var thresh = slider.value();
            
            if (bright>thresh){
                fill(255);
            }else{
                fill(0);
            }
            
            noStroke();
            
            //fill(bright);
            
            rectMode(CENTER);
            rect(x*vidScale, y*vidScale, vidScale, vidScale);
        }
    }
//    updatePixels();
}
// get(x, y) and set(x, y) return pixel values
// also pixels array
// long linear array 
// [_, _, _, _, _, _, ]  r,0, g0, b0, a0, 
// 0, 4, 8, 12, 16, etc is the index location
// x, y coord can be found through (x+y*width)*4
//pixels no longer accurate because of high density displays
//