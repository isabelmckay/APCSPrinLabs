// Bella McKay

// setting up bars
var w = 20;
var cols, rows;
var snake;
// setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
///frameRate(1);
  background(20, 20, 20);
snake = new Snake(createVector(width/2, height/2), createVector(1, 0));
}

// draw function
function draw() {
snake.run();
}

function keyPressed(){
  text(keyCode);

  if(keyCode === UP_ARROW)
  ////  snake.vel = createVector(0,-1*w);
}
