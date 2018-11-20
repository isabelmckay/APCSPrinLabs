/*
** sketch
** Isabel McKay
** Nov 19, 2018
*/

// global varialbles
var scl = 20;
var food;
var snake;
// set score = 0

// setup code here
function setup() {
createCanvas(800, 800);
snake = new Snake();
food = new Food();
frameRate(100);
}

// draw function
function draw() {
  background(0,0,150);
snake.run();
snake.draw();
food.draw();
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
