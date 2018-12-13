/*
** sketch
** Isabel McKay
** Nov 19, 2018
*/

// global varialbles
var w = 20;
var cols, rows;
var snake;
var food;
var locX;
var locY;
var score = 0;
var start = "true";
// set score = 0

// setup code here
function setup() {
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/(2, 30));
cols = width/w;
rows = height/w;
food = new Food();
snake = new Snake(createVector(width/2, height/2), createVector(0,0));
background(135, 255, 181);
fill(200, 30, 150);
frameRate(10);
textAlign(CENTER, CENTER);
}

// draw function
foodPosition();
function draw(){
  background(66, 229, 244);

  //score
  fill(255, 0, 0);
  text("your score: " + score, 380, 50);
  Score();
  snake.run();
  food.render(locX, locY);
  if(snake.loc.x === locX && snake.loc.y === locY){
    foodPosition();
  snake.segments.push(createVector(0, 0));
  score = score + 1;
// if tangled, call NewGame()
// if snake gets food call start new round()
}
deadGame();
gameStart();
}
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
function deadGame(){
  if(snake.status == "true"){
    snake = 0;
    score = 0;
    // game over
    text("wow you lost", 400, 400);
    loadSnake();
    gameStart();

  }
}
function gameStart(){
  if(start == "true"){
    textFont();
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("ARE YOU READY", 400, 300);
    textSize(25);
    text("Press up arrow to start", 400, 550);
    fill(207, 130, 255);
  }
}

function Score(){
  if (score > 3);
  fill(255, 0, 0);
///  text("DON'T LOSE", 380, 40);
}

// tangled Function// function start new background

// function NewGame
// score=0

function keyPressed(){
text(keyCode)
if(keyCode === UP_ARROW){
  start = "false"
  snake.vel = createVector(0,-20);
}


if(keyCode === DOWN_ARROW)
snake.vel = createVector(0,20);

if(keyCode === LEFT_ARROW)
snake.vel = createVector(-20, 0);

if(keyCode === RIGHT_ARROW)
snake.vel = createVector(20, 0);

}

function foodPosition(){
  var randomX = Math.random() * 800;
  locX = randomX - (randomX%20);
  var randomY = Math.random() * 800;
  locY = randomY - (randomY%20);
}

  // determines how arrows effect lo

///function cols(){
///  return floor(width/scl);
///}

///function rows(){
  //  return floor(height/scl);
//}

///function returnVector(){
  ///return createVector(floor(random(cols())), floor(random(rows()));
///}



//function run // call update and render

//gotFood functtion
//need to complete row, col of snake. loc and food.location
//return snake.row===food.row
