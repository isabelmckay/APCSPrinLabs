//Global variables
var Balls = [];
var paddle;
var score = 0;
// setting up background
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  // telling how many balls
  numBalls = 10;
  loadBalls(numBalls);

  //lerping

  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 250;
  var length = 20;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length, col);
}

//loading balls

function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    // telling the balls where to go
    var loc = createVector(random(100, 600), 20);
    var vel = createVector(random(-5, 5), random(-5, 5));
    var rad = 25
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 3
    var b = new Ball(loc, vel, rad, col, sp);
    //pushing balls
    Balls.push(b);
  }
}


//drawing balls and running paddle
function draw(){
  background(20, 20, 20, 6000);
  //making score
  textSize(32);
  fill(255, 255, 255);
  text(score, 400, 400)
  // removing the outline
  noStroke();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
    var aBalls = Balls[i];
    //splicing the balls
    if(aBalls.sp == 1){
      Balls.splice(i,1);
      // making the score acrtually work
      score = score + 1;
    }
    // resetting balls
    if(aBalls.sp == 2){
      //amount of balls in the next reset
      var numBalls = Balls.length + 5;
      Balls = []
      loadBalls(numBalls)
      for(var i = 0; i < Balls.length; i++){
        Balls[i].run;
      }
    }
  }
}
