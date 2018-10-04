/*
** Boid Constructor Function
** Isabel McKay
** Aug 21, 2018
*/

function Boid(location, velocity, radius, col){
	// instance variables
	this.loc = location;
	this.vel = velocity;
	this.rad=radius;
	this.col = col;
	this.acc = createVector(0,.1);

// calls other functions
this.run = function(){
	this.checkEdges();
	this.update();
	this.render();
}
// changes the location of the ball
// by adding speed to x and y
this.update = function(){

	this.loc.add(this.vel);
}

 //checkEdges() reverses speed when ball touches
this.checkEdges = function(){
	if(this.loc.x < 0) this.vel.x = -this.vel.x;
	if(this.loc.x > width) this.vel.x = -this.vel.x;
  if(this.loc.y < 0) this.vel.y = -this.vel.y;
  if(this.loc.y > height) this.vel.y = -this.vel.y;

}

// render() draws ball at the new location
   this.render = function(){
		 fill(this.col); // pushing the current coord system into the stack
		 push();
		     translate(this.loc.x, this.loc.y);
		     rotate(0.4);
		     triangle(-5, 0, 5, 0, 0, -15);
     pop()  //  restoring coordianate system from the stack
   }

}
