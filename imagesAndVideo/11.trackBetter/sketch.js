
//Here is is a little smoother by taking the average of all the pixels under a certain threshold:

var threshold = 20; //255 is white, 0 is black
var aveX, aveY; //this is what we are trying to find
var objectR =255;
var objectG = 0;
var objectB = 0;
var debug = true;

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function draw(){

    video.loadPixels();

    var totalFoundPixels= 0;  //we are going to find the average location of change pixes so
    var sumX = 0;  //we will need the sum of all the x find, the sum of all the y find and the total finds
    var sumY = 0;

    //enter into the classic nested for statements of computer vision
    for (var row = 0; row < video.height; row++) {
      for (var col = 0; col < video.width; col++) {
        //the pixels file into the room long line you use this simple formula to find what row and column the sit in 

        var offset = (row * video.width + col)*4;
        //pull out the same pixel from the current frame 
        var thisColor = video.pixels[offset];

        //pull out the individual colors for both pixels
        var r = video.pixels[offset];
        var g = video.pixels[offset + 1];
        var b = video.pixels[offset + 2];

        //in a color "space" you find the distance between color the same whay you would in a cartesian space, phythag or dist in processing
        var diff = dist(r, g, b, objectR, objectG, objectB);

        if (diff < threshold) {  //if it is close enough in size, add it to the average
          sumX = sumX + col;
          sumY= sumY + row;
          totalFoundPixels++;
         // if (debug) video.pixels[offset] = 0xff000000;//debugging
        }
      }
    }
    video.updatePixels();

    image(video,0,0);

    if (totalFoundPixels > 0){
      aveX = sumX/totalFoundPixels;
      aveY = sumY/totalFoundPixels;
      ellipse(aveX-10,(aveY-10),20,20);
    }

}
function mousePressed(){
  //if they click, use that picture for the new thing to follow
 // var offset = mouseY * video.width + mouseX;

  //pull out the same pixel from the current frame 
  var thisColor = video.get(mouseX,mouseY);

  //pull out the individual colors for both pixels
   objectR = thisColor[0];
   objectG = thisColor[1];
   objectB = thisColor[2];
  println("Chasing new color  " + objectR + " " + objectG + " " + objectB);
}
function keyPressed() {
  //for adjusting things on the fly
  if (key == '-') {
    threshold--;
    println("Threshold " + threshold);
  } 
  else if (key == '=') {
    threshold++;
    println("Threshold " + threshold);
  }
  else if (key == 'd') {
    background(255);
    debug = !debug;
    println("Debug " + debug);
  }
  else if (key == 't') {
    println("Time Between Frames " + ellapsedTime);
  }
}
