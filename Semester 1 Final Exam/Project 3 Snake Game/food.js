/*
** Food Constructor Function
** Isabel McKay
** Nov 19, 2018
*/

// basis of food creation
// food location
function Food(xLocation, yLocation){
  this.xLocation = xLocation;
  this.yLocation = yLocation;
  this.run = function(){
    this.render(this.locX, this.locY);
  }

// render location
  this.render = function(xLocation, yLocation){
    // food color- why does it match my segment??
    fill(0, 0, 0);
    // new location
    rect(xLocation, yLocation, w, w);
  }
}
