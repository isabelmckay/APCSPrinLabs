// global variables
var data;

//setup code
function preload(){
  data = loadJSON("earthquake.geojson");
//  console.log(data);

}
function bubbleSort(){
  for(var i = (data.length - 1); i >= 0; i--){
    for(var j = 0; j < i; j++){
      if(data[j].high < data[j+1].high){
        var temp = data[j]
        data[j+1] = // TEMP: }
      }
    }
  }
  function setup(){
  noCanvas();
  console.log(data.earthquake);
}
 function draw(){
