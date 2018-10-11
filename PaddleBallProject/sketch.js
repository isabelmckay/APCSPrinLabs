//  Global variables
var Balls = [];
var paddle;

// setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  loadBalls(4);
  frameRate(60);

  // lerping paddle
  paddle = new Paddle(createVector(width/2, height/2), createVector(1,2), 25, color(255,0,0));
}

// run paddle
function draw() {
  background(20,20,20,22);
  paddle.run();
  for (var i = 0; i < Balls.length; i++){
    Balls[i].run();
    // calling array
  }

//  forLoop changes isDead to true
for(var i = balls.length - 1; i >= 0; i--){
  if(balls[i].isDead){

    Balls.splice (i, 1);
  }
}
}

// loading Balls
function loadBalls(numBalls){
  // ball variables
  for(var i = 0; i < numBalls; i++){
    // balls are spawned in
  var loc = createVector random(100, 600), 20);
  var vel = createVector random(-.1, .1), random(-.1,.1));
  var rad = 25
  var length = 100;
  var col = color(random(0, 255), random(0, 255), random(0,255))
  paddle = new Paddle(loc, vel, width, length, col);
}

  // splice function to get rid of boids
  for (var i = 0; i < boids.length; i++){
    var x= boids[i];
    var y = chaser.loc;
    var z = x.loc;
    // distance between 2 obj.
    var dist = y.dist(z);
    if (dist < 10)
      boids.splice(i, 1);// remove boids
    }
  }

 // creating boids
function loadBoids(numBoid){
  for (var i = 50; i < numBoid; i++){
    //varb = new Boid (loc, vel, dir, clr);
    var loc = createVector(random(width),random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var rad = random(10,10);
    var col = color(random(150,250),random(150,250),random(150,250));
    boids.push(new Boid(loc, vel, rad, col));
  }
  console.log(boids);
}
