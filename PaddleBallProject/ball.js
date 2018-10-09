/*
** Ball Constructor Function
** Isabel McKay
** Aug 21, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance Variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,.1);
// github test

  // calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function()}
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

// returns a Vector
this.vel.limit(3)
this.loc.add(this.vel);

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
    rect(this.loc.x,this.loc.y, this.w, this.l)
  }
}
// end of ball constructor function
