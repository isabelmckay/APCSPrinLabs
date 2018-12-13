/*
** Snake Constructor Function
** Isabel McKay
** Nov 19, 2018
*/

// i have to make the snake grow
function Snake(loc, vel){
  // instance variables
  this.loc = loc; // vector = location of head
  this.vel = vel; // vector = direction of movement
  this.segments = [];
  this.segments.push(createVector(0, 0));
  this.status = "false";

  // body = array of segments

  this.run = function(){
    // update and render(draw)
    this.update();
    this.render();
    this.tangled();
  }

  this.update = function(){
    // velocity, headerheight?
    ///this.vel.mult(w);
    //segments
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    //snake head
this.loc.add(this.vel);
this.loc.x = constrain(this.loc.x, 0, width-w);
this.loc.y = constrain(this.loc.y, 0, height-w);
//adding segments
    for(var i = this.segments.length-1; i>0; i--){
    this.segments[i].x = this.segments[i-1].x;
   this.segments[i].y = this.segments[i-1].y;
    }

  ///  this.segments.push(createVector(this.segments[i].x, this.segments[i].y));

    ///  this.loc.y = constrain(this.loc.y, 0, height-w);
  }


  this.render = function(){
    // global var w and header height(for loop)
  fill(120, 16, 345);// snake color
    for(var i = 0; i < this.segments.length; i++){
      rect(this.segments[i].x, this.segments[i].y, w, w);
      fill(120, 16, 345);
    }

    rect(this.loc.x, this.loc.y, w, w);//shape of snake
  }

  //dying
  this.tangled = function(){
    for(var i = 0; i < this.segments.length; i++){
      var distX = this.loc.x - this.segments[i].x;
      var distY = this.loc.y - this.segments[i].y;
      if((distX == 0) && (distY == 0)){
        this.status = "true";
        console.log(this.status);
        deadGame();
      }
    }
  }
}
// tangles Function
//call AFTER update
// test whethrt snake becomes tangled, return True if so

// end of snake constructor
