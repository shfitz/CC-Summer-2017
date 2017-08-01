var img; // image we will eventually display on our canvas

function setup() {
  createCanvas(320, 240);

  mirror = createCapture(VIDEO); // our video object that will just see what the camera sees
  mirror.size(320,240);

  img = createImage(320, 240); // create our image to be the same size as our canvas
  img.loadPixels(); // load our pixels into our first set of pixels into the image
    
}

function draw() {
  background(255);
  mirror.loadPixels(); // load pixel information into our mirror array

  for (var i=0; i < 4*(mirror.width*mirror.height); i+=4) { //multiply and step by 4 since each pixel has 4 color variables associated with it (r,g,b,a)

      var r = mirror.pixels[i];   // store red value
      var g = mirror.pixels[i+ 1]; // store green value
      var b = mirror.pixels[i+ 2]; // store blue value
      var a = mirror.pixels[i+ 3];// store alpha value

      img.pixels[i] = b;       // in the image swap red values for blue values
      img.pixels[i + 1] = r;  // in the image swap green values for red values
      img.pixels[i + 2] = g;  // in the image swap blue values for green values
      img.pixels[i + 3]= a;   // keep alpha the same for now

  }
  img.updatePixels();  // update all the pixels for the image after you've looped through all the pixels
  image(img,0,0);      // finally write new processed image to the canvas
}