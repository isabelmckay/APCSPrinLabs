/*
** Food Constructor Function
** Isabel McKay
** Nov 19, 2018
*/

// basis of food creation
function gotFood(loc, w, h, clr){
  // Instance Variables
  this.loc = loc;
  this.w = w;
  this.h = h; // is this header height?
  this.clr = clr;

this.run = function(){
  // render and update (draws food)
  this.render();
  this.update();// does this need extra stuff?
}

this.render = function(){
  fill(this.clr);// food color
  rect(this.loc.x, this. loc.y, this.w, this.h); // new location
}

}
