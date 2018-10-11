/*
** Ball Constructor Function
** Isabel McKay
** Aug 21, 2018
*/

function Ball(loc, vel, rad, col){
  // Instance Variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  this.acc = createVector(0,.1);
// github test

  // calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

// changing location of the ball
  this.update = function()}
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.loc.mag();
}

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x
    if(this.loc.x > width) this.vel.x = -this.vel.x
    if(this.loc.y < 0) this.vel.y = -this.vel.y
    if(this.loc.y > height) this.vel.y = -this.vel.y
  }
  // render () draws ball at the new location
  this.render = function (){
    fill(this.col);
    ellipse(this.loc.x,this.loc.y, rad, rad)
  }
}
// end of ball constructor function
