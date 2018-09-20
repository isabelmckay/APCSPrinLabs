/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
var balls = [];

// put setup code here
function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20,20,20);
	LoadBalls(5);
// method call ^^
}

function draw() {
	for(var i = 0; i < balls.length; i = i + 1){
		balls[i].run();
	}
}

function LoadBalls(numballs){
	for(var i = 0; i < numballs; i = i + 1){
		var locX = random(width);
		var locY = random(height);
		var rad = 20;
		var col = (250,20,100);
		var ball = new Ball(locX, locY, rad, col);
		balls.push(ball);
	}

}
