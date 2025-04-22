let mask;

//this runs once page loads
function setup() {
createCanvas(windowWidth, windowHeight);
mask = createGraphics (windowWidth, windowHeight, 0);
mask.background (0);
circle (windowWidth/2,windowHeight/2, 50);
}

//this runs when mouse moves
function draw() {
  if (mouseIsPressed) {
  mask.fill (255);
  mask.stroke (255);
  mask.line (windowWidth/2, windowHeight/2, mouseX, mouseY);
  mask.ellipse (mouseX, mouseY, 0)
  }

image (mask,0,0);

fill (255,0,255);
ellipse (mouseX, mouseY, 0);
 

  
}
