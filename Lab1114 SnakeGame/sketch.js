/*
** sketch
** Isabel McKay
** Nov 19, 2018
*/

// global varialbles
var w = 20;
var cols, rows;
var segments = {};
var snake;
// set score = 0

// setup code here
function setup() {
var cnv= createCanvas(800, 800);
cnv.position(windowWidth-width)/(2, 30);
cols = width/w;
rows = height/w;
snake = new Snake(loc, vel);
var loc = createVector(width/2, height/2);
var vel = createVector(1, 0);
frameRate(10);
}

// draw function
function draw() {
  background(20, 20, 20, 6000);
  snake.run();
// if tangled, call NewGame()
// if snake gets food call start new round()
}

// tangled Function// function start new background

// function NewGame
// score=0

function keyPressed(){
  text(keyCode === 38);
  for(var i = 0; i < numSegment - 1; i++){
    segments[0].loc = snake.loc
    segments[i].loc = segments[i - 1].loc
snake.vel = createVector(0, -20);
snake.loc.add(snake.vel);
}

if(keyCode === 40){
  for(var i = 0; i < numSegment - 1; i++){
    segments[0].loc = snake.loc
    segments[i].loc = segments[i - 1].loc
snake.vel = createVector(0, 20);
snake.loc.add(snake.vel);
}

if(keyCode === 37){
  for(var i = 0; i < numSegment - 1; i++){
    segments[0].loc = snake.loc
    segments[i].loc = segments[i - 1].loc

snake.vel = createVector(-20, 0);
snake.loc.add(snake.vel);
}

  // determines how arrows effect loc
///if(keyCode === UP_ARROW)
///if(keyCode === DOWN_ARROW)
///if(keyCode === LEFT_ARROW)
//////if(keyCode === RIGHT_ARROW)
///snake.vel = createVector(1, 0);
////}

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
