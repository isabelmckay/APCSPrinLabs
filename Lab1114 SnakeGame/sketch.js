/*
** ketch
** Isabel McKay
** Nov 19, 2018
*/

// global varialbles
var w = 20;
var cols, rows;
var snake;
// set score = 0

// setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
frameRate(100);
  background(20, 20, 20);
snake = new Snake(createVector(width/2, height/2), createVector(1, 0));
}

// draw function
function draw() {
snake.run();
food.run();
// if tangled, call NewGame()
// if snake gets food call start new round()
}

// tangled Function// function start new background

// function NewGame
// score=0

function keyPressed(){
  text(keyCode);
  // determines how arrows effect loc
if(keyCode === UP_ARROW)
snake.vel = createVector(0,-1);
if(keyCode === DOWN_ARROW)
snake.vel = createVector(0,1);
if(keyCode === LEFT_ARROW)
snake.vel = createVector(-1, 0);
if(keyCode === RIGHT_ARROW)
snake.vel = createVector(1, 0);
}

//function run // call update and render

//gotFood functtion
//need to complete row, col of snake. loc and food.location
//return snake.row===food.row
