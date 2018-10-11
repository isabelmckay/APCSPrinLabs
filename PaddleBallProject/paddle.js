/*
** Paddle Constructor Function
** Isabel McKay
** Aug 21, 2018
*/

function Paddle(loc, vel, width, length, col){
	// instance variables
	this.loc = loc;
	this.vel = vel;
	this.w = width;
	this.l = length;
	this.col = col;

// calls other functions
this.run = function(){
	this.checkEdges();
	this.update();
	this.render();
}
// lerping
this.update = function(){
// lerping to middle of rect
paddleLength = width/2
	this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .15);
}
 //checkEdges() reverses speed when rect touches edge
this.checkEdges = function(){
	if(this.loc.x < 0) this.vel.x = -this.vel.x;
	if(this.loc.x > width) this.vel.x = -this.vel.x;
  if(this.loc.y < 0) this.vel.y = -this.vel.y;
  if(this.loc.y > height) this.vel.y = -this.vel.y;
}

// render() draws paddle at the new location
   this.render = function(){
		 fill(this.col);
rect(this.loc.x, this.loc.y, this.w, this.l);
   }
}
