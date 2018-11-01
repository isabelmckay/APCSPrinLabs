// global variables
var data = [];

//setup code
function preload(){
  data = loadJSON("earthquake.geojson");
  console.log(data);

}
function setup(){
  noCanvas();
  console.log(data.description)
}
