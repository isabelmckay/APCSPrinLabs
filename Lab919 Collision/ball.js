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

  // calls other functions
  this.run = function(){
    this.checkEdges();
    this.render();
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
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
    ellipse(this.loc.x,this.loc.y, this.rad, this.rad)
  }
}
