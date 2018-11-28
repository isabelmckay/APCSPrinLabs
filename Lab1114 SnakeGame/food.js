/*
** Food Constructor Function
** Isabel McKay
** Nov 19, 2018
*/

// basis of food creation
function Food(xLocation, yLocation){
  this.xLocation = xLocation;
  this.yLocation = yLocation;
  this.run = function(){
    this.render(this.locX, this.locY);
  }
  

  this.render = function(xLocation, yLocation){
    fill(255, 0, 0);// food color
    rect(xLocation, yLocation, w, w); // new location
  }
}
