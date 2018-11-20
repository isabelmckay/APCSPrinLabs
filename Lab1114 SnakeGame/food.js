/*
** Food Constructor Function
** Isabel McKay
** Nov 19, 2018
*/

// basis of food creation
function Food(){
  this.vec = randomVector().mult(scl);

  this.x = function(){
    return this.vec.x;
  }

  this.y = function(){
    return this.vec.y;
  }

  this.draw = function(){
    fill(255, 255, 255);// food color
    rect(this.x(), this.y(), scl, scl); // new location
}
this.eaten = function(){
  this.vec = randomVector().mult(scl);
}

}
