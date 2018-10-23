//  Global variables
var boids = [];
var chaser;

// setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  loadBoids(100);
  frameRate(60);// !!!!!!!!!! this is a function call
  chaser = new Ball(createVector(width/2, height/2), createVector(1,2), 25, color(255,0,0));
}

// run chaser
function draw() {
  background(20,20,20,80);
  chaser.run();
  for (var i = 0; i < boids.length; i++){
    boids[i].run();
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
