/*
**  Square Constructor Function::
**  Bella McKay
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(location, sideLength, col){
  //  Square Properties
  this.loc = location;
  this.w = sideLength
  this.col = col
//What does a square need to know about itself??
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }
}
  //  End of Square constructor function
