/*
** Snake Constructor Function
** Isabel McKay
** Nov 19, 2018
*/

function Snake(){
  this.x = cols()/2*scl;
  this.y = rows()/2*scl;
  this.loc = loc; // vector = location of head
  this.vel = vel; // vector = direction of movement
// body = array of segments

this.run = function(){
  // update and render(draw)
  this.update();
  this.render();
}

this.update = function(){
  // velocity, headerheight?
///this.vel.mult(w);
  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-variables[0]);
    this.loc.y = constrain(this.loc.y, 0, height-variables[0]);
///  this.loc.y = constrain(this.loc.y, 0, height-w);
}

this.render = function(){
  // global var w and header height(for loop)
  fill(0, 255, 0); // snake color
  rect(this.loc.x, this.loc.y, variables[0], variables[0]);//shape of snake
}
}
// tangles Function
//call AFTER update
// test whethrt snake becomes tangled, return True if so

// end of snake constructor
}
